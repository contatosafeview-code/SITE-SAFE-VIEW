
import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS_LOG } from '../constants';

interface AnimatedRowProps {
  project: {
    location: string;
    type: string;
    date: string;
  };
  index: number;
  onClick: () => void;
}

const AnimatedRow: React.FC<AnimatedRowProps> = ({ project, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current);
      }
    };
  }, []);

  return (
    <tr
      ref={rowRef}
      onClick={onClick}
      style={{ transitionDelay: `${index * 50}ms` }}
      className={`hover:bg-blue-600/10 cursor-pointer transition-all duration-700 transform group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <td className="px-8 py-6 font-bold text-white group-hover:text-blue-400 transition-colors">{project.location}</td>
      <td className="px-8 py-6 text-slate-400 text-sm">{project.type}</td>
      <td className="px-8 py-6 text-slate-500 text-xs">{project.date}</td>
      <td className="px-8 py-6 text-right">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
          Ver Detalhes
        </span>
      </td>
    </tr>
  );
};

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % PROJECTS_LOG.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + PROJECTS_LOG.length) % PROJECTS_LOG.length);
  };

  const closeModal = () => setSelectedIndex(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">Presença Log</h2>
          <h3 className="text-4xl font-bold text-white">Galeria de Instalações</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Segurança em tempo real. Clique em um projeto para ver os detalhes da proteção instalada pela Safe-View.
          </p>
        </div>

        <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/50 border-b border-slate-800">
                  <th className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Localização</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Tipo</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Data</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {PROJECTS_LOG.map((project, idx) => (
                  <AnimatedRow 
                    key={idx} 
                    project={project} 
                    index={idx} 
                    onClick={() => setSelectedIndex(idx)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-sm text-slate-400">
                <span className="text-blue-500 text-xl">🛡️</span>
                Mais de <strong>2.500 famílias</strong> protegidas com o selo de qualidade Safe-View.
            </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5 animate-in zoom-in-95 duration-500 flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="relative lg:w-2/3 h-[300px] lg:h-[600px] bg-slate-800 overflow-hidden">
              <img 
                src={PROJECTS_LOG[selectedIndex].image} 
                className="w-full h-full object-cover animate-in fade-in zoom-in-110 duration-1000" 
                alt={PROJECTS_LOG[selectedIndex].location} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Navigation Controls */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 pointer-events-none">
                <button 
                  onClick={handlePrev}
                  className="p-4 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all pointer-events-auto active:scale-90"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="p-4 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all pointer-events-auto active:scale-90"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/3 p-10 md:p-14 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-500/20">
                  Relatório Técnico
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-none">
                  {PROJECTS_LOG[selectedIndex].location}
                </h4>
                <div className="space-y-6 mt-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Tipo de Proteção</span>
                    <span className="text-xl font-medium text-slate-200">{PROJECTS_LOG[selectedIndex].type}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Data da Instalação</span>
                    <span className="text-xl font-medium text-slate-200">{PROJECTS_LOG[selectedIndex].date}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Padrão SafeView</span>
                    <div className="flex items-center gap-2 mt-2">
                       <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[8px] font-black rounded border border-green-500/20 uppercase">ABNT 16046</span>
                       <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-[8px] font-black rounded border border-blue-500/20 uppercase">TRATAMENTO UV</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => window.open(`https://wa.me/5511982852451?text=Olá! Gostaria de uma instalação similar à de ${PROJECTS_LOG[selectedIndex].location}.`, '_blank')}
                  className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm tracking-widest transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center gap-3 uppercase"
                >
                  Orçamento Similar
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
