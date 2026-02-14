
import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="dashboard" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">Engenharia de Proteção</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Nossas telas são fabricadas com polímeros de alta densidade e nó termofixado, garantindo que as malhas não se desloquem sob pressão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 transition-all hover:border-blue-500/40 flex flex-col shadow-2xl">
              {/* Image Header */}
              <div className="h-56 relative overflow-hidden border-b border-slate-800/50">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`}></div>
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-sm">{service.description}</p>
                <button 
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  className="w-full py-4 bg-blue-600/5 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 rounded-xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg"
                >
                  Ver Detalhes Técnicos
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mesh Technical Data - Clean Version */}
        <div className="mt-20 p-1 bg-gradient-to-r from-blue-600/20 via-slate-800 to-blue-600/20 rounded-[3rem]">
          <div className="bg-slate-950 p-10 rounded-[2.9rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group p-12 border border-slate-800 rounded-2xl bg-slate-900/30 flex flex-col items-center justify-center text-center">
                <div className="text-blue-500 text-6xl mb-6">⚙️</div>
                <h4 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">Ficha Técnica Certificada</h4>
                <p className="text-slate-500 text-sm mb-6">Polímero virgem com 21 monofilamentos de polietileno.</p>
                <div className="px-6 py-2 bg-blue-600/20 rounded-full border border-blue-500/30 text-blue-400 font-bold text-xs">
                  CONTROLE DE QUALIDADE ABNT
                </div>
            </div>
            
            <div>
              <h4 className="text-3xl font-bold mb-6 text-white">Diferenciais Estruturais</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Nó termofixado</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Isolante elétrico</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Tratamento Anti-UV</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Resistência Térmica</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex-1">
                    <div className="text-blue-500 font-bold text-xs uppercase mb-1">Carga de Ruptura</div>
                    <div className="text-2xl font-black text-white">500 kg/m²</div>
                 </div>
                 <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex-1">
                    <div className="text-blue-500 font-bold text-xs uppercase mb-1">Garantia</div>
                    <div className="text-2xl font-black text-white">5 Anos</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
