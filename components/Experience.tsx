
import React from 'react';
import { Building2 } from 'lucide-react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Experiência Profissional</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="group relative bg-dark-950 border border-slate-800 hover:border-primary-500/30 rounded-xl p-8 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 mt-1">
                    <Building2 size={16} />
                    <span className="font-medium">{job.company}</span>
                  </div>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-slate-900 border border-slate-800 rounded-full">
                  <span className="text-sm font-mono text-slate-300">{job.period}</span>
                </div>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium text-primary-300 bg-primary-900/10 border border-primary-500/10 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
