
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechSpecs from './components/TechSpecs';
import AILab from './components/AILab';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const WhatsAppFloat = () => (
  <a 
    href="https://wa.me/5511982852451" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-24 right-6 z-[60] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group overflow-hidden animate-bounce"
  >
    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
    <svg className="w-8 h-8 relative z-10 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>
);

const InstagramFloat = () => (
  <a 
    href="https://www.instagram.com/safe_vieew/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[60] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group overflow-hidden animate-bounce [animation-delay:0.5s]"
  >
    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
    <svg className="w-8 h-8 relative z-10 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  </a>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600/50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="bg-slate-900/50 border-y border-white/5 py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-x-16 gap-y-12 text-center">
             <div className="flex flex-col items-center md:items-start group animate-reveal [animation-delay:0.2s]">
               <span className="text-blue-500 font-black uppercase text-[10px] tracking-widest mb-1 group-hover:text-white transition-colors">Know-how</span>
               <span className="text-3xl font-black text-white italic">INSTALAÇÃO VIP</span>
             </div>
             <div className="hidden md:block h-12 w-px bg-white/10"></div>
             <div className="flex flex-col items-center md:items-start group animate-reveal [animation-delay:0.4s]">
               <span className="text-blue-500 font-black uppercase text-[10px] tracking-widest mb-1 group-hover:text-white transition-colors">Engine</span>
               <span className="text-3xl font-black text-white italic">ABNT 16046</span>
             </div>
             <div className="hidden md:block h-12 w-px bg-white/10"></div>
             <div className="flex flex-col items-center md:items-start group animate-reveal [animation-delay:0.6s]">
               <span className="text-blue-500 font-black uppercase text-[10px] tracking-widest mb-1 group-hover:text-white transition-colors">Garantia</span>
               <span className="text-3xl font-black text-white italic">5 ANOS FULL</span>
             </div>
          </div>
        </div>

        <div className="bg-slate-950">
          <Features />
          <AILab />
          <TechSpecs />
          <Gallery />
          <FAQ />
          <Testimonials />
        </div>
        
        <section className="py-32 bg-slate-950 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="glass p-12 md:p-24 rounded-[4rem] flex flex-col items-center text-center">
               <div className="mb-12">
                 <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center text-5xl mb-8 mx-auto shadow-2xl rotate-3">
                   🛡️
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">SUA FAMÍLIA EM <br/><span className="text-blue-500">PRIMEIRO LUGAR</span></h2>
                 <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                   O padrão Safe-View de instalação é o único que combina limpeza cirúrgica, pontualidade britânica e a maior carga de ruptura do mercado.
                 </p>
               </div>
               
               <button 
                onClick={() => window.open('https://wa.me/5511982852451', '_blank')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-16 py-8 rounded-[2rem] text-2xl font-black transition-all shadow-[0_30px_60px_rgba(37,99,235,0.4)] hover:-translate-y-2 active:scale-95"
              >
                 OBTER ORÇAMENTO AGORA
               </button>
               
               <p className="mt-8 text-slate-500 text-sm font-bold uppercase tracking-widest">Resposta em menos de 10 minutos</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      <InstagramFloat />
      <AIChat />
    </div>
  );
};

export default App;
