
import React from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-display font-bold text-white mb-6">Vamos Conversar?</h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto">
          Estou disponível para discutir novos desafios em automação industrial e projetos de modernização fabril.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a 
              href="https://www.linkedin.com/in/igor-rabelo-952353180" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors px-6 py-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-primary-500/50"
            >
                <Linkedin size={20} /> <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:i.rabelo1995@gmail.com" 
              className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors px-6 py-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-primary-500/50"
            >
                <Mail size={20} /> <span className="font-medium">Email</span>
            </a>

            <a 
              href="https://wa.me/5585991603686" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors px-6 py-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-primary-500/50"
            >
                <MessageCircle size={20} /> <span className="font-medium">WhatsApp</span>
            </a>
        </div>
        
        <div className="border-t border-slate-900 pt-8">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Igor Rabelo. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
};
