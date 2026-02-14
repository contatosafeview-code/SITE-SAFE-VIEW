
import React, { useState, useRef } from 'react';
import { editImage, generateVeoVideo } from '../services/gemini';

const PROMPT_PRESETS = [
  { label: 'Rede Branca', prompt: 'Add a high-tension white safety net to this window/balcony, high quality, professional installation look' },
  { label: 'Rede Preta', prompt: 'Add a high-tension black safety net to this window/balcony, discreet look, high quality' },
  { label: 'Filtro Retrô', prompt: 'Apply a professional retro architectural photography filter to this image' },
  { label: 'Limpar Fundo', prompt: 'Remove distracting people or objects from the background of this architectural photo' },
];

const AILab: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [mode, setMode] = useState<'edit' | 'video'>('edit');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setProcessedImage(null);
        setVideoUrl(null);
        setErrorStatus(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async (customPrompt?: string) => {
    const activePrompt = customPrompt || prompt;
    if (!image || !activePrompt) return;
    
    setIsProcessing(true);
    setErrorStatus(null);
    
    try {
      if (mode === 'edit') {
        const result = await editImage(image, activePrompt);
        if (result) {
          setProcessedImage(result);
        } else {
          throw new Error("Não foi possível gerar a imagem.");
        }
      } else {
        if (!(window as any).aistudio?.hasSelectedApiKey()) {
          await (window as any).aistudio?.openSelectKey();
        }
        const result = await generateVeoVideo(image, activePrompt);
        setVideoUrl(result);
      }
    } catch (error: any) {
      console.error(error);
      if (error.message?.includes('429') || error.message?.includes('quota')) {
        setErrorStatus("QUOTA_EXCEEDED");
      } else {
        setErrorStatus("GENERIC_ERROR");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="ai-lab" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black tracking-[0.4em] uppercase text-[10px] mb-4">Nano Banana Powered</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">ESTÚDIO DE IA <span className="text-blue-600">SAFEVIEW</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Use tecnologia de ponta para simular proteção ou editar fotos do seu imóvel instantaneamente.
          </p>
        </div>

        <div className="glass rounded-[4rem] p-6 md:p-12 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Esquerda: Controles */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block">1. Carregue seu cenário</span>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`aspect-video rounded-[2rem] border-2 border-dashed transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center bg-slate-900/50 ${image ? 'border-blue-500/50' : 'border-slate-800 hover:border-blue-500/30'}`}
                >
                  {image ? (
                    <img src={image} className="w-full h-full object-cover" alt="Original" />
                  ) : (
                    <div className="text-center opacity-40">
                      <div className="text-4xl mb-2">📸</div>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">Clique para subir foto</span>
                    </div>
                  )}
                </div>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block">2. Escolha uma ação rápida</span>
                <div className="grid grid-cols-2 gap-3">
                  {PROMPT_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      disabled={!image || isProcessing}
                      onClick={() => {
                        setPrompt(preset.prompt);
                        handleProcess(preset.prompt);
                      }}
                      className="px-4 py-3 bg-slate-900 hover:bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl border border-slate-800 transition-all disabled:opacity-30"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block">3. Ou descreva o que deseja</span>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ex: 'Adicione uma rede de proteção transparente e remova o vaso de flores'..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-blue-500 h-24 resize-none"
                />
                <button 
                  onClick={() => handleProcess()}
                  disabled={!image || !prompt || isProcessing}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white rounded-2xl font-black text-sm tracking-widest transition-all shadow-xl shadow-blue-900/20"
                >
                  {isProcessing ? 'GERANDO MAGIA...' : 'EXECUTAR PROMPT IA'}
                </button>
              </div>
            </div>

            {/* Direita: Resultado */}
            <div className="lg:col-span-7 bg-slate-950/50 rounded-[3rem] border border-white/5 relative min-h-[400px] overflow-hidden group">
              {isProcessing && (
                <div className="absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 mb-6 relative">
                    <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                  <p className="text-white font-black text-xl italic mb-2 tracking-tighter">PROCESSANDO IA</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">Ajustando cada pixel com Gemini 2.5</p>
                </div>
              )}

              {errorStatus === 'QUOTA_EXCEEDED' ? (
                <div className="absolute inset-0 z-30 bg-slate-950/95 flex flex-col items-center justify-center text-center p-12">
                  <div className="text-6xl mb-6">⚡</div>
                  <h4 className="text-2xl font-black text-white mb-4">DEMANDA ALTÍSSIMA!</h4>
                  <p className="text-slate-400 mb-8 max-w-md">Nossa IA está recebendo muitos pedidos agora. Que tal enviar sua foto para um técnico humano fazer o orçamento?</p>
                  <button 
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                    className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs"
                  >
                    Falar com Especialista no WhatsApp
                  </button>
                  <button onClick={() => setErrorStatus(null)} className="mt-4 text-slate-600 text-[10px] font-bold uppercase hover:text-white">Tentar novamente</button>
                </div>
              ) : videoUrl ? (
                <video src={videoUrl} controls className="w-full h-full object-cover" />
              ) : processedImage ? (
                <div className="relative w-full h-full">
                  <img src={processedImage} className="w-full h-full object-cover" alt="Resultado" />
                  <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-2xl">RESULTADO IA</div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center opacity-20 p-12 text-center">
                  <div className="text-9xl mb-8">✨</div>
                  <p className="font-black text-xs uppercase tracking-[0.5em] text-white">Preview em Tempo Real</p>
                </div>
              )}

              {/* Comparativo Badge */}
              {processedImage && !isProcessing && (
                <div className="absolute top-6 right-6 flex gap-2">
                   <button onClick={() => setProcessedImage(null)} className="bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-[10px] font-bold border border-white/10 hover:bg-slate-800 transition-colors">LIMPAR</button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AILab;
