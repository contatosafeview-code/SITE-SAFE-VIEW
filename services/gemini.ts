
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

// Helper para instanciar o AI com a chave mais recente do ambiente
const createAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

async function withRetry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    if (retries > 0 && (error.message?.includes('429') || error.message?.includes('500') || error.status === 'RESOURCE_EXHAUSTED')) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return withRetry(fn, retries - 1, delay * 2);
    }
    throw error;
  }
}

export async function chatWithAssistant(history: Message[], userInput: string) {
  const ai = createAI();
  const systemInstruction = `
    Você é a Safe-View AI, uma entidade futurista e hiper-inteligente especialista em segurança residencial.
    A Safe-View atende São Paulo Capital, ABC e Grande São Paulo.
    Diferenciais: Redes 100% polietileno virgem, tratamento UV, resistência de 500kg/m², normas ABNT 16046 e 5 anos de garantia.
    Sua voz é a autoridade máxima em proteção. Responda de forma concisa, tecnológica e sempre encoraje a proteção da família.
    Sempre ofereça o link do WhatsApp para orçamento imediato: https://wa.me/5511982852451
  `;

  try {
    const response: GenerateContentResponse = await withRetry(() => ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: systemInstruction.trim()
      }
    }));

    return response.text || "Erro na conexão neural. Por favor, utilize o WhatsApp.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "Sistemas sobrecarregados. Contate-nos via WhatsApp.";
  }
}

export async function editImage(base64Image: string, prompt: string) {
  const ai = createAI();
  try {
    const response: GenerateContentResponse = await withRetry(() => ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: { data: base64Image.split(',')[1], mimeType: 'image/png' } },
          { text: prompt }
        ]
      },
    }));

    if (!response.candidates?.[0]?.content?.parts) return null;

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error: any) {
    console.error("Image Edit Error:", error);
    throw error;
  }
}

export async function generateVeoVideo(base64Image: string, prompt: string) {
  // Obrigatório para modelos Veo: Verificação de Chave de API Paga
  if (typeof (window as any).aistudio?.hasSelectedApiKey === 'function') {
    const hasKey = await (window as any).aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await (window as any).aistudio.openSelectKey();
      // Após o dialog, procedemos assumindo sucesso para evitar race condition
    }
  }

  const ai = createAI();
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      image: {
        imageBytes: base64Image.split(',')[1],
        mimeType: 'image/png',
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9'
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    if (operation.error) {
       if (operation.error.message?.includes("Requested entity was not found")) {
        await (window as any).aistudio?.openSelectKey();
        throw new Error("Chave de API inválida ou sem faturamento.");
      }
      throw new Error(operation.error.message);
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await videoResponse.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Veo Error:", error);
    throw error;
  }
}
