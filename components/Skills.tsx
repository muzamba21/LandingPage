
import React from 'react';
import { Cpu, Database, Wifi } from 'lucide-react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  const getIcon = (index: number) => {
      switch(index) {
          case 0: return <Cpu size={24} />;
          case 1: return <Database size={24} />;
          case 2: return <Wifi size={24} />;
          default: return <Cpu size={24} />;
      }
  }

  return (
    <section id="skills" className="py-24 bg-dark-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Competências Técnicas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Domínio de tecnologias essenciais para o ecossistema industrial moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={category.title} className="bg-dark-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-primary-500 mb-6">
                {getIcon(idx)}
              </div>
              
              <h3 className="text-xl font-bold font-display text-white mb-6">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
