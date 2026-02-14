
import React from 'react';
import { COMPANY_TAGLINE, SERVICE_REGION } from '../constants';

const Hero: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de um orçamento para redes de proteção.', '_blank');
  };

  return (
    <div id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Mesh Background Overlay */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      
      {/* Gradient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center reveal">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-10 border border-blue-500/20 bg-blue-500/5 backdrop-blur-md rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.3em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Atendendo {SERVICE_REGION}
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
          SEGURANÇA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">INVISÍVEL</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-400 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
          {COMPANY_TAGLINE} Tecnologia em polímeros de alta resistência para proteção absoluta de quem você mais ama.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <button 
            onClick={openWhatsApp}
            className="px-14 py-7 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xl transition-all transform hover:scale-105 hover:-translate-y-1 shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-center gap-4 group"
          >
            SOLICITAR ORÇAMENTO
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
          
          <a 
            href="#dashboard"
            className="px-14 py-7 border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800 text-white rounded-2xl font-bold text-xl transition-all"
          >
            VER SERVIÇOS
          </a>
        </div>

        {/* Floating Trust Badge */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2">
             <span className="text-2xl font-black italic">ABNT</span>
             <span className="text-[10px] font-bold uppercase tracking-widest">Normas Técnicas</span>
           </div>
           <div className="flex items-center gap-2">
             <span className="text-2xl font-black italic">UV+</span>
             <span className="text-[10px] font-bold uppercase tracking-widest">Proteção Solar</span>
           </div>
           <div className="flex items-center gap-2">
             <span className="text-2xl font-black italic">500KG</span>
             <span className="text-[10px] font-bold uppercase tracking-widest">Carga Máxima</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
