
import React, { useState, useRef, useEffect } from 'react';
import { editImage, generateVeoVideo } from '../services/gemini';

const PROMPT_PRESETS = [
  { label: 'Rede Branca', prompt: 'Add a high-tension white safety net to this window/balcony, high quality, professional installation look', mode: 'edit' },
  { label: 'Rede Preta', prompt: 'Add a high-tension black safety net to this window/balcony, discreet look, high quality', mode: 'edit' },
  { label: 'Vídeo Instalação', prompt: 'A professional cinematic video showing a technician quickly and safely installing a high-tension polyethylene safety net on this balcony. Focus on the secure hooks and the perfect tension. Add text overlay "SafeView - Proteção Máxima" and "WhatsApp: (11) 98285-2451".', mode: 'video' },
  { label: 'Demonstração Pet', prompt: 'A video showing a cat safely observing through the protected balcony, demonstrating absolute safety and peace of mind.', mode: 'video' },
];

const LOADING_MESSAGES = [
  "Analisando dimensões da sua varanda...",
  "Preparando ganchos e cordas virtuais...",
  "Renderizando instalação com tecnologia Veo...",
  "Simulando carga de 500kg de resistência...",
  "Processando narração e elementos de marca...",
  "Finalizando vídeo de alta definição...",
];

const AILab: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<'edit' | 'video'>('edit');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let interval: any;
    if (isProcessing) {
      interval = setInterval(() => {
        setLoadingMsgIdx((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 7000);
    } else {
      setLoadingMsgIdx(0);
    }
    return () => clearInterval(interval);
  }, [isProcessing]);

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

  const handleProcess = async (customPrompt?: string, mode?: 'edit' | 'video') => {
    const currentPrompt = customPrompt || prompt;
    const currentMode = mode || activeMode;
    if (!image || !currentPrompt) return;
    
    setIsProcessing(true);
    setErrorStatus(null);
    setProcessedImage(null);
    setVideoUrl(null);
    
    try {
      if (currentMode === 'edit') {
        const result = await editImage(image, currentPrompt);
        setProcessedImage(result);
      } else {
        const result = await generateVeoVideo(image, currentPrompt);
        setVideoUrl(result);
      }
    } catch (error: any) {
      console.error(error);
      if (error.message?.includes('429')) setErrorStatus("QUOTA");
      else if (error.message?.includes('Chave')) setErrorStatus("KEY");
      else setErrorStatus("GENERIC");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="ai-lab" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black tracking-[0.4em] uppercase text-[10px] mb-4">Tecnologia Visual</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">ESTÚDIO <span className="text-blue-600">SAFEVIEW</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Visualize sua proteção em foto ou gere um vídeo de demonstração profissional usando Inteligência Artificial Veo.
          </p>
        </div>

        <div className="glass rounded-[4rem] p-6 md:p-12 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Esquerda: Controles */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex bg-slate-900/50 p-1 rounded-2xl border border-slate-800">
                <button 
                  onClick={() => setActiveMode('edit')}
                  className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeMode === 'edit' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Simular Foto
                </button>
                <button 
                  onClick={() => setActiveMode('video')}
                  className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeMode === 'video' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Gerar Vídeo (Veo)
                </button>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block">1. Cenário</span>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`aspect-video rounded-[2rem] border-2 border-dashed transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center bg-slate-900/50 ${image ? 'border-blue-500/50' : 'border-slate-800 hover:border-blue-500/30'}`}
                >
                  {image ? (
                    <img src={image} className="w-full h-full object-cover" alt="Original" />
                  ) : (
                    <div className="text-center opacity-40">
                      <div className="text-4xl mb-2">📸</div>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">Subir foto da varanda</span>
                    </div>
                  )}
                </div>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block">2. Atalhos Rápidos</span>
                <div className="grid grid-cols-2 gap-3">
                  {PROMPT_PRESETS.filter(p => p.mode === activeMode).map((preset) => (
                    <button
                      key={preset.label}
                      disabled={!image || isProcessing}
                      onClick={() => {
                        setPrompt(preset.prompt);
                        handleProcess(preset.prompt, preset.mode as any);
                      }}
                      className="px-4 py-3 bg-slate-900 hover:bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl border border-slate-800 transition-all disabled:opacity-30"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block">3. Personalizar</span>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={activeMode === 'edit' ? "Ex: Adicione rede branca..." : "Ex: Mostre a instalação rápida..."}
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-blue-500 h-24 resize-none"
                />
                <button 
                  onClick={() => handleProcess()}
                  disabled={!image || !prompt || isProcessing}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white rounded-2xl font-black text-sm tracking-widest transition-all shadow-xl shadow-blue-900/20"
                >
                  {isProcessing ? 'GERANDO...' : activeMode === 'edit' ? 'SIMULAR AGORA' : 'GERAR VÍDEO VEO'}
                </button>
                {activeMode === 'video' && (
                  <p className="text-[9px] text-slate-500 text-center uppercase tracking-widest leading-tight">
                    *Geração de vídeo leva ~2 minutos e requer chave paga do Google Cloud.
                  </p>
                )}
              </div>
            </div>

            {/* Direita: Resultado */}
            <div className="lg:col-span-7 bg-slate-950/50 rounded-[3rem] border border-white/5 relative min-h-[500px] overflow-hidden group">
              {isProcessing && (
                <div className="absolute inset-0 z-20 bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 mb-8 relative">
                    <div className="absolute inset-0 border-4 border-blue-500/10 rounded-full scale-125"></div>
                    <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse">✨</div>
                  </div>
                  <p className="text-white font-black text-2xl italic mb-4 tracking-tighter">PROCESSANDO IA {activeMode.toUpperCase()}</p>
                  <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] mb-2 animate-bounce">
                    {LOADING_MESSAGES[loadingMsgIdx]}
                  </p>
                  <p className="text-slate-600 text-[10px] max-w-xs uppercase tracking-widest">Aguarde, nossa infraestrutura está gerando sua simulação.</p>
                </div>
              )}

              {errorStatus === 'QUOTA' ? (
                <div className="absolute inset-0 z-30 bg-slate-950/95 flex flex-col items-center justify-center text-center p-12">
                  <div className="text-6xl mb-6">⚡</div>
                  <h4 className="text-2xl font-black text-white mb-4">ALTA DEMANDA!</h4>
                  <p className="text-slate-400 mb-8 max-w-md">Nossa IA está sob alta carga. Envie sua foto para nosso WhatsApp para um orçamento imediato com um técnico.</p>
                  <button onClick={() => window.open('https://wa.me/5511982852451')} className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs">WhatsApp Agora</button>
                </div>
              ) : errorStatus === 'KEY' ? (
                 <div className="absolute inset-0 z-30 bg-slate-950/95 flex flex-col items-center justify-center text-center p-12">
                  <div className="text-6xl mb-6">🔑</div>
                  <h4 className="text-2xl font-black text-white mb-4">CHAVE PAGA NECESSÁRIA</h4>
                  <p className="text-slate-400 mb-8 max-w-md">Para gerar vídeos com Veo, você deve selecionar uma API Key com faturamento habilitado.</p>
                  <button onClick={() => (window as any).aistudio?.openSelectKey()} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs">Selecionar Chave Paga</button>
                </div>
              ) : videoUrl ? (
                <div className="w-full h-full flex flex-col">
                  <video src={videoUrl} controls autoPlay loop className="w-full h-full object-cover" />
                  <div className="absolute bottom-6 left-6 bg-green-600 text-white px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-2xl animate-reveal">VÍDEO VEO GERADO</div>
                </div>
              ) : processedImage ? (
                <div className="relative w-full h-full">
                  <img src={processedImage} className="w-full h-full object-cover" alt="Resultado" />
                  <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-2xl">SIMULAÇÃO IA</div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center opacity-20 p-12 text-center">
                  <div className="text-9xl mb-8">{activeMode === 'edit' ? '🏠' : '📹'}</div>
                  <p className="font-black text-xs uppercase tracking-[0.5em] text-white">Preview da {activeMode === 'edit' ? 'Foto' : 'Vídeo'} Gerado</p>
                </div>
              )}

              {(processedImage || videoUrl) && !isProcessing && (
                <div className="absolute top-6 right-6">
                   <button onClick={() => { setProcessedImage(null); setVideoUrl(null); }} className="bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-[10px] font-bold border border-white/10 hover:bg-slate-800 transition-colors uppercase">Limpar</button>
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
