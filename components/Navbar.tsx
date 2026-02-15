
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-4 group">
              <Logo className="h-14 w-auto transition-transform group-hover:scale-110 duration-300" />
              <div className="hidden lg:flex flex-col">
                <span className="text-2xl font-black text-white leading-none tracking-tighter">SAFEVIEW</span>
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">Telas de Proteção</span>
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#home" className="hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-widest text-slate-300">Home</a>
              <a href="#features" className="hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-widest text-slate-300">Qualidade</a>
              <a href="#ai-lab" className="hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-widest text-slate-300">Simulador IA</a>
              <a href="#gallery" className="hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-widest text-slate-300">Galeria</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-widest text-slate-300">Contato</a>
            </div>
          </div>
          <div>
            <a 
              href="https://wa.me/5511982852451" 
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-900/40"
            >
              Orçamento Grátis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
