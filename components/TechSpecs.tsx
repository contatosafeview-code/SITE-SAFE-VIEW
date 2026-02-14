
import React from 'react';

const TechSpecs: React.FC = () => {
  const specs = [
    {
      label: "Material",
      detail: "Polietileno de Alta Densidade (PEAD): 100% virgem, não absorve água e possui alta resistência ao sol (Proteção UV)."
    },
    {
      label: "Resistência",
      detail: "Testada para suportar até 500kg por m², garantindo a máxima segurança contra impactos."
    },
    {
      label: "Malha 5x5cm",
      detail: "Padrão ABNT (Crianças e Cães): Proporciona a melhor ventilação e visibilidade sem comprometer a segurança."
    },
    {
      label: "Malha 3x3cm",
      detail: "Especial (Gatos e Pássaros): Malha mais fechada para evitar a passagem de animais menores."
    },
    {
      label: "Ganchos",
      detail: "Instalação com ganchos reforçados e buchas profundas para fixação extrema na alvenaria."
    }
  ];

  const checklist = [
    { title: "Ancoragem", desc: "Ganchos instalados a cada 30cm (no máximo) para evitar qualquer vão perigoso." },
    { title: "Tensão", desc: "Corda esticada com precisão técnica, firme como uma corda de violão." },
    { title: "Segurança", desc: "Uso obrigatório de Cinto Tipo Paraquedista em todas as instalações em altura." },
    { title: "Acabamento", desc: "Pontas de cordas devidamente queimadas e seladas para um visual limpo e sem fiapos." }
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">Guia Rápido</h2>
          <h3 className="text-4xl font-bold">Especificações e Padrão de Qualidade</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Specs Table */}
          <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="bg-blue-600/10 p-6 border-b border-slate-800">
              <h4 className="text-xl font-bold flex items-center gap-3">
                <span className="text-2xl">🛠️</span> Especificações Técnicas
              </h4>
            </div>
            <div className="divide-y divide-slate-800">
              {specs.map((spec, i) => (
                <div key={i} className="p-6 flex flex-col md:flex-row gap-4 hover:bg-slate-900/50 transition-colors">
                  <div className="md:w-1/3 font-bold text-blue-400 uppercase text-xs tracking-wider">{spec.label}</div>
                  <div className="md:w-2/3 text-slate-300 text-sm leading-relaxed">{spec.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist & Quote */}
          <div className="flex flex-col gap-8">
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 shadow-2xl">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="text-2xl">📋</span> Checklist de Instalação
              </h4>
              <div className="space-y-6">
                {checklist.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">{item.title}</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Quote */}
            <div className="bg-blue-600 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-blue-400 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform">
                <svg className="w-24 h-24 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.23858 12.2556 4 15.017 4H19.017C20.1216 4 21.017 4.89543 21.017 6V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535279 13 -1.017 12.5523 -1.017 12V9C-1.017 6.23858 1.22142 4 4.017 4H8.017C9.12157 4 10.017 4.89543 10.017 6V15C10.017 18.3137 7.33072 21 4.017 21H3.017Z" /></svg>
              </div>
              <p className="text-white text-lg italic leading-relaxed font-medium relative z-10">
                "Nossas redes possuem tratamento antioxidante. Elas não são apenas barreiras, são proteções que suportam o clima de São Paulo por anos sem perder a resistência."
              </p>
              <div className="mt-4 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-white">SV</div>
                <div className="text-blue-100 text-sm font-bold uppercase tracking-wider">Compromisso SafeView</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
