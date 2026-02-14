
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { Message } from "../types";

// Note: API key is handled by the environment or injected via dialog for Veo
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function chatWithAssistant(history: Message[], userInput: string) {
  const ai = getAI();
  const systemInstruction = `
    Você é o Assistente Virtual da Safe-View, especialista em Redes de Proteção de alto padrão.
    A Safe-View atende São Paulo Capital, ABC e Grande São Paulo.
    Seus diferenciais são: Redes 100% polietileno virgem, tratamento UV, resistência de 500kg/m², instalação dentro das normas ABNT e garantia de 5 anos.
    Nossa equipe técnica altamente qualificada acompanha as instalações para garantir limpeza, rapidez e o mais alto padrão de segurança.
    Seu objetivo é tirar dúvidas técnicas e encaminhar o cliente para o orçamento via WhatsApp.
    Você agora usa o modelo Gemini 3 Pro para análises complexas.
    Seja educado, profissional e transmita segurança.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
    });

    return response.text || "Desculpe, tive um problema. Por favor, chame no WhatsApp para um orçamento imediato!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estou com instabilidade, mas você pode falar diretamente com nossa equipe técnica pelo WhatsApp!";
  }
}

export async function editImage(base64Image: string, prompt: string) {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: { data: base64Image.split(',')[1], mimeType: 'image/png' } },
          { text: prompt }
        ]
      },
    });

    if (!response.candidates?.[0]?.content?.parts) return null;

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error: any) {
    console.error("Image Edit Error:", error);
    // Propaga o erro para ser tratado na UI (Ex: Quota Exceeded)
    throw error;
  }
}

export async function generateProductImage(prompt: string) {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
}

export async function generateVeoVideo(base64Image: string, prompt: string, aspectRatio: '16:9' | '9:16' = '16:9') {
  const ai = getAI();
  
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
        aspectRatio: aspectRatio
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
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
