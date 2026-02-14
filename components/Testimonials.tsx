
import React from 'react';

const testimonials = [
  {
    name: "Maria Eduarda Silveira",
    location: "Morumbi, SP",
    text: "Fiquei impressionada com a organização. O Marcelo e o André foram extremamente pontuais e, o que mais me surpreendeu, foi a limpeza após o serviço. Não ficou um resquício de poeira na sacada. Recomendo de olhos fechados!",
    rating: 5
  },
  {
    name: "Ricardo Mendes",
    location: "Santo André, ABC",
    text: "O atendimento do André na explicação técnica e a precisão do Marcelo na instalação são diferenciais que não encontrei em outras empresas. Passam muita segurança, algo essencial quando falamos de proteção para nossos filhos.",
    rating: 5
  },
  {
    name: "Ana Paula Gouveia",
    location: "Alphaville, Santana de Parnaíba",
    text: "Excelente trabalho! Equipe muito educada e profissional. O Marcelo e o André chegaram exatamente no horário combinado e a rede ficou praticamente invisível, preservando a vista do meu apartamento.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">Depoimentos</h2>
          <h3 className="text-4xl font-bold">O que nossos clientes dizem</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative group hover:border-blue-500/30 transition-all duration-500">
              <div className="text-blue-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.23858 12.2556 4 15.017 4H19.017C20.1216 4 21.017 4.89543 21.017 6V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535279 13 -1.017 12.5523 -1.017 12V9C-1.017 6.23858 1.22142 4 4.017 4H8.017C9.12157 4 10.017 4.89543 10.017 6V15C10.017 18.3137 7.33072 21 4.017 21H3.017Z" />
                </svg>
              </div>
              
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white leading-tight">{t.name}</h5>
                  <p className="text-slate-500 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
