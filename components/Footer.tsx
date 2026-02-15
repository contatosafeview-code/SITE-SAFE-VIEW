
import React from 'react';
import { COMPANY_NAME } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 flex items-center gap-4">
              <Logo className="h-16 w-auto" />
              <div>
                <span className="text-2xl font-extrabold text-blue-500 block leading-tight">
                  {COMPANY_NAME.toUpperCase()}
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Protegendo Vidas desde 2011</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed text-sm">
              Especialistas em Redes de Proteção para Gatos, Janelas, Sacadas e Segurança Industrial. Atendimento em SP, Grande SP, Litoral e Interior.
            </p>
            <div className="space-y-2 text-xs text-slate-500">
              <p>Whatsapp: (11) 98285-2451</p>
              <p>Email: contato@safeview.com.br</p>
            </div>
          </div>
          
          <div>
            <h6 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Áreas de Atendimento</h6>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] text-slate-400 uppercase tracking-tighter overflow-y-auto max-h-40 custom-scrollbar pr-2">
              <span>Santana</span> <span>Vila Mariana</span>
              <span>Mooca</span> <span>Pinheiros</span>
              <span>Ipiranga</span> <span>Tatuapé</span>
              <span>Santo André</span> <span>S. Bernardo</span>
              <span>Diadema</span> <span>Barueri</span>
              <span>Alphaville</span> <span>Guarulhos</span>
              <span>Osasco</span> <span>Higienópolis</span>
              <span>Morumbi</span> <span>Butantã</span>
              <span>Anália Franco</span> <span>Perdizes</span>
              <span>Moema</span> <span>Brooklin</span>
            </div>
          </div>

          <div>
            <h6 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Pagamento</h6>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] text-blue-400 font-bold">PIX</div>
                <span className="text-[10px] text-slate-500">Desconto à vista</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] text-blue-400 font-bold">VISA/MC</div>
                <span className="text-[10px] text-slate-500">Até 3x sem juros</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] text-blue-400 font-bold">BOLETO</div>
                <span className="text-[10px] text-slate-500">Para empresas</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-[10px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} {COMPANY_NAME} Telas de Proteção.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
