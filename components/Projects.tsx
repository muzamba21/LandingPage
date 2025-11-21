
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-6">
            <div>
                <h2 className="text-3xl font-display font-bold text-white">Projetos em Destaque</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-dark-950 rounded-xl overflow-hidden border border-slate-800 hover:border-primary-500/30 transition-all duration-300 flex flex-col">
              
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white font-display">{project.title}</h3>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-900 text-slate-400 rounded">
                          #{tag}
                        </span>
                    ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
