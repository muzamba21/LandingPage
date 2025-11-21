
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../constants';

export const Hero: React.FC = () => {
  // WhatsApp URL com o número fornecido
  const whatsappUrl = "https://wa.me/5585991603686"; 

  return (
    <section id="about" className="relative min-h-[90vh] flex items-center pt-20 bg-dark-950 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-950 to-dark-950"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.05]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="text-left order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
              {PROFILE.name}
              <span className="block text-2xl md:text-3xl mt-4 font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 leading-normal">
                <span className="block">Cientista da Computação</span>
                <span className="block mt-1 md:mt-2">Téc. Em Automação Industrial</span>
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
              {PROFILE.shortBio}
            </p>
            
            <div>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary-900/20"
              >
                Entre em Contato <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Photo */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
             {/* Decorative Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-500/20 blur-[100px] rounded-full"></div>

             <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt={PROFILE.name}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                {/* Gradient Overlay for better text integration if needed, or just style */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
