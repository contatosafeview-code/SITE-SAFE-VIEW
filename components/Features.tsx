
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">Recursos</h2>
          <h3 className="text-4xl font-bold">Inovação em cada pixel</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                {/* Simplified dynamic icon representation */}
                <div className="w-6 h-6 border-2 border-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
