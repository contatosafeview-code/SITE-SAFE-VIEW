
import React from 'react';
import { SERVICES } from '../constants';

const ServiceIcon = ({ type }: { type: string }) => {
  // SVGs otimizados para reproduzir os desenhos circulares brancos dos banners
  switch (type) {
    case 'residential':
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 fill-[#121c32]">
           <path d="M50 20L20 45V80H80V45L50 20Z" fill="none" stroke="#121c32" strokeWidth="3"/>
           <circle cx="35" cy="65" r="8" />
           <circle cx="50" cy="65" r="6" />
           <circle cx="65" cy="65" r="8" />
           <path d="M30 75h40" stroke="#121c32" strokeWidth="2" />
        </svg>
      );
    case 'pets':
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 fill-[#121c32]">
           <path d="M30 30H70V70H30V30Z" fill="none" stroke="#121c32" strokeWidth="2"/>
           <path d="M30 40H70M30 50H70M30 60H70M40 30V70M50 30V70M60 30V70" stroke="#121c32" strokeWidth="1" opacity="0.5"/>
           <path d="M42 58c0-5 8-5 8 0v8h-8v-8z" />
           <circle cx="58" cy="55" r="4" />
        </svg>
      );
    case 'commercial':
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 fill-[#121c32]">
           <path d="M20 70V30H50V70H20Z" fill="none" stroke="#121c32" strokeWidth="3"/>
           <path d="M45 25L60 15L75 25" fill="none" stroke="#121c32" strokeWidth="3" />
           <circle cx="75" cy="65" r="12" fill="none" stroke="#121c32" strokeWidth="3" />
           <path d="M75 58v14M68 65h14" stroke="#121c32" strokeWidth="2" />
        </svg>
      );
    case 'sport':
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 fill-[#121c32]">
           <circle cx="50" cy="50" r="30" fill="none" stroke="#121c32" strokeWidth="3"/>
           <path d="M35 35L65 65M35 65L65 35" stroke="#121c32" strokeWidth="2" />
           <path d="M50 20L50 80M20 50L80 50" stroke="#121c32" strokeWidth="1" />
           <path d="M65 25c5 0 10 5 10 10" fill="none" stroke="#121c32" strokeWidth="2" />
        </svg>
      );
    default:
      return <span>🛡️</span>;
  }
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">Segmentos de Atuação</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">SEGURANÇA ESPECIALIZADA</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Sistemas de proteção configurados para cada tipo de ambiente e necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-[#121c32] transition-all hover:scale-[1.02] duration-500 shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex flex-col cursor-pointer border border-white/5 rounded-[2.5rem]"
              onClick={() => window.open('https://wa.me/5511982852451', '_blank')}
            >
              {/* Top Image Section */}
              <div className="h-80 lg:h-[450px] relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 shadow-inner"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* The Iconic White Circle Logo Overlay */}
                <div className="absolute top-12 left-12 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#121c32] transform -rotate-3 group-hover:rotate-0 transition-transform z-10">
                  <ServiceIcon type={service.type} />
                </div>
              </div>

              {/* Bottom Info Banner (Identical to your provided images) */}
              <div className="p-12 lg:p-16 flex flex-col relative bg-[#121c32]">
                {/* Safe-View Watermark on bottom right */}
                <div className="absolute bottom-12 right-12 opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 border-2 border-white rounded-lg rotate-45 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                     </div>
                     <span className="text-[12px] font-black text-white tracking-[0.25em] uppercase">Safe-View</span>
                   </div>
                </div>

                <h4 className="text-6xl md:text-7xl font-black mb-4 text-white tracking-tighter transition-colors group-hover:text-blue-400 uppercase">
                  {service.title}
                </h4>
                
                {/* The distinct horizontal line from the banners */}
                <div className="w-20 h-2 bg-slate-400 mb-8 group-hover:w-32 transition-all duration-500"></div>

                <p className="text-slate-100 text-lg font-bold uppercase tracking-[0.25em] mb-8">
                  {service.spec}
                </p>

                <p className="text-slate-400 leading-relaxed mb-10 text-lg font-light max-w-sm">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 text-white/30 group-hover:text-white transition-colors">
                  <span className="text-[11px] font-black uppercase tracking-[0.5em]">Consulte Condições Técnicas</span>
                  <div className="w-12 h-px bg-white/20 group-hover:w-20 transition-all"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Data - Reinforcement */}
        <div className="mt-24 bg-[#121c32] p-16 md:p-24 rounded-[4rem] border border-white/5 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 text-blue-500/5 pointer-events-none select-none">
              <span className="text-[180px] font-black italic leading-none tracking-tighter">SAFETY</span>
            </div>
            <h4 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">Compromisso com Normas ABNT</h4>
            <p className="text-slate-400 max-w-4xl mx-auto text-xl font-light mb-12">
              Não instalamos apenas redes. Entregamos um sistema de engenharia testado em laboratório, com ganchos temperados e buchas de nylon com anel de vedação, garantindo que a resistência de 500kg/m² seja mantida por anos.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
               <div className="flex flex-col items-center gap-2">
                 <div className="px-8 py-5 bg-white/5 rounded-2xl border border-white/10 text-blue-400 font-black text-sm tracking-widest uppercase">ANTI-UV+</div>
                 <span className="text-[10px] text-slate-500 font-bold">SOL & CHUVA</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="px-8 py-5 bg-white/5 rounded-2xl border border-white/10 text-blue-400 font-black text-sm tracking-widest uppercase">ABNT 16046</div>
                 <span className="text-[10px] text-slate-500 font-bold">CERTIFICADO</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="px-8 py-5 bg-white/5 rounded-2xl border border-white/10 text-blue-400 font-black text-sm tracking-widest uppercase">21 FILAMENTOS</div>
                 <span className="text-[10px] text-slate-500 font-bold">ALTA DENSIDADE</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
