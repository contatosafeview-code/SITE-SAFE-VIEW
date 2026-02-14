
import React from 'react';
import { PROJECTS_LOG } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">Presença Log</h2>
          <h3 className="text-4xl font-bold text-white">Instalações Recentes</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Segurança em tempo real. Confira os últimos locais onde a Safe-View elevou o padrão de proteção.
          </p>
        </div>

        <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/50 border-b border-slate-800">
                  <th className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Região / Localização</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Tipo de Serviço</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Conclusão</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {PROJECTS_LOG.map((project, idx) => (
                  <tr key={idx} className="hover:bg-blue-600/5 transition-colors group">
                    <td className="px-8 py-6 font-bold text-white">{project.location}</td>
                    <td className="px-8 py-6 text-slate-400 text-sm">{project.type}</td>
                    <td className="px-8 py-6 text-slate-500 text-xs">{project.date}</td>
                    <td className="px-8 py-6 text-right">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        Certificado
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-sm text-slate-400">
                <span className="text-blue-500 text-xl">🛡️</span>
                Mais de <strong>2.500 famílias</strong> protegidas em toda a grande São Paulo.
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
