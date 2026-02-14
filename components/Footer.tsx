
import React from 'react';
import { COMPANY_NAME, SERVICE_REGION } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 flex items-center gap-4">
              <Logo className="h-20 w-auto" />
              <div>
                <span className="text-3xl font-extrabold text-blue-500 block leading-tight">
                  {COMPANY_NAME.toUpperCase()}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Telas de Proteção</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Especialistas em segurança residencial com telas de alta resistência. Protegendo famílias em {SERVICE_REGION} com o máximo rigor técnico e profissionalismo.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/5511999999999" target="_blank" className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors shadow-lg">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                 <span className="text-white font-bold text-[10px] uppercase">Social</span>
              </div>
            </div>
          </div>
          
          <div>
            <h6 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Nossas Malhas</h6>
            <ul className="space-y-4 text-slate-400">
              <li><span className="hover:text-blue-400 cursor-default transition-colors">Rede 5x5 Polietileno</span></li>
              <li><span className="hover:text-blue-400 cursor-default transition-colors">Rede 3x3 para Gatos</span></li>
              <li><span className="hover:text-blue-400 cursor-default transition-colors">Tratamento Anti-UV</span></li>
              <li><span className="hover:text-blue-400 cursor-default transition-colors">Cores: Cristal, Areia, Preto</span></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Região de Atendimento</h6>
            <ul className="space-y-4 text-slate-400">
              <li>São Paulo Capital</li>
              <li>Santo André, SBC, SCS</li>
              <li>Guarulhos e Osasco</li>
              <li>Alphaville e Granja Viana</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {COMPANY_NAME} Telas de Proteção. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
