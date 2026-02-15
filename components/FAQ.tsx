
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-500' : 'text-slate-200 group-hover:text-blue-400'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center transition-all ${isOpen ? 'rotate-180 bg-blue-600 border-blue-600' : ''}`}>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "Qual a durabilidade real da rede de proteção SafeView?",
      answer: "Nossas redes de polietileno 100% virgem possuem tratamento UV e antioxidante, garantindo uma vida útil média de 7 a 10 anos. Oferecemos 5 anos de garantia total contra defeitos de fabricação e degradação solar, conforme as normas vigentes."
    },
    {
      question: "Existe uma malha específica para gatos?",
      answer: "Sim! Para gatos e animais pequenos, utilizamos a malha 3x3cm. Ela impede que o felino passe a cabeça ou consiga morder os nós da rede, proporcionando segurança máxima para pets agitados. Para crianças e cães, a malha padrão 5x5cm é a mais indicada."
    },
    {
      question: "A rede é segura para crianças que costumam se apoiar nela?",
      answer: "Totalmente. Nossas redes suportam impactos de até 500kg/m². Elas são projetadas para suportar a pressão de uma criança se apoiando ou até mesmo uma queda acidental. No entanto, recomendamos que a rede seja tratada como um item de segurança e não um brinquedo de escalada."
    },
    {
      question: "Como saber se a minha rede precisa de troca?",
      answer: "Recomendamos uma inspeção visual a cada 6 meses. Sinais de alerta incluem: fios desfiados, perda excessiva de cor (aspecto esbranquiçado/ressecado), ganchos frouxos ou ferrugem em ancoragens antigas. Se a rede sofreu um impacto forte, deve ser avaliada imediatamente."
    },
    {
      question: "A instalação em casas é diferente de apartamentos?",
      answer: "Sim. Em apartamentos, focamos em janelas e sacadas. Em casas, protegemos frequentemente vãos de escada, mezaninos e áreas de piscina. A técnica de fixação é adaptada para cada superfície (alvenaria, madeira ou estruturas metálicas), garantindo sempre a ancoragem máxima."
    },
    {
      question: "Tenho janelas basculantes (tilting), é possível instalar?",
      answer: "Com certeza. Para janelas basculantes ou de abrir para fora, utilizamos limitadores de abertura ou estruturas em alumínio que permitem a ventilação total enquanto mantêm o vão protegido contra a passagem de crianças ou pets."
    },
    {
      question: "Como deve ser feita a manutenção e limpeza?",
      answer: "A limpeza deve ser feita apenas com água e sabão neutro usando um pano úmido. Nunca utilize produtos químicos, abrasivos, alvejantes ou jatos de alta pressão, pois eles degradam o tratamento UV e a resistência molecular das fibras."
    },
    {
      question: "As telas mosquiteiras também protegem contra quedas?",
      answer: "Não. As telas mosquiteiras são finas e feitas para barrar insetos. Elas não possuem a resistência necessária para suportar o peso de uma pessoa ou pet. Para segurança contra quedas, você deve instalar a rede de polietileno SafeView."
    },
    {
      question: "Quanto tempo demora a instalação?",
      answer: "Uma instalação padrão em um apartamento costuma levar entre 1 a 3 horas, dependendo do número de janelas e sacadas. Trabalhamos com agendamentos ágeis para atender em até 24h em São Paulo e região do ABC."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-4">Central de Dúvidas</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">DÚVIDAS FREQUENTES</h3>
          <p className="mt-4 text-slate-500 font-light">
            Informações técnicas essenciais para garantir a máxima proteção da sua família e patrimônio.
          </p>
        </div>

        <div className="glass rounded-[2rem] p-8 md:p-12 border border-white/5">
          <div className="divide-y divide-slate-800">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
          <p className="text-slate-300 mb-6 font-medium">Sua dúvida não está na lista ou seu projeto é especial?</p>
          <button 
            onClick={() => window.open('https://wa.me/5511982852451', '_blank')}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-blue-900/40"
          >
            <span>Consultar Técnico via WhatsApp</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
