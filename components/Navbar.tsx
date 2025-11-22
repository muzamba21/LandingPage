
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Projetos', href: '#projects' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Altura aproximada do menu
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled || isOpen ? 'bg-dark-950/95 backdrop-blur-md border-slate-800 shadow-lg' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Creative Animated Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#')}
              className="group flex items-center gap-3 select-none"
            >
              {/* Icon Container */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-dark-900 border border-slate-800 group-hover:border-primary-500/50 transition-all duration-500 overflow-hidden shadow-[0_0_0_rgba(14,165,233,0)] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                {/* Internal Glow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Scan Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-400/50 -translate-x-full group-hover:animate-[scan_2s_linear_infinite]"></div>

                {/* Icon */}
                <Cpu size={20} className="text-slate-400 group-hover:text-primary-400 transform group-hover:scale-110 transition-all duration-300 relative z-10" />
                
                {/* Tech Corners */}
                <div className="absolute top-0.5 left-0.5 w-1 h-1 border-t border-l border-slate-600 group-hover:border-primary-500 transition-colors"></div>
                <div className="absolute bottom-0.5 right-0.5 w-1 h-1 border-b border-r border-slate-600 group-hover:border-primary-500 transition-colors"></div>
              </div>

              {/* Text Block */}
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-xl leading-none tracking-tight text-white group-hover:text-slate-100 transition-colors">
                  IGOR<span className="text-primary-500 inline-block animate-pulse">.</span>RABELO
                </span>
                <div className="flex items-center gap-2 overflow-hidden h-3 mt-1">
                  <div className="h-[1px] w-2 bg-slate-700 group-hover:bg-primary-500/50 transition-colors"></div>
                  <span className="text-[0.6rem] font-mono font-medium text-slate-500 tracking-[0.25em] group-hover:text-primary-400 transition-colors uppercase transform translate-y-0 group-hover:-translate-y-[1px] duration-300">
                    AUTOMATION
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative group ${
                    scrolled ? 'text-white' : 'text-slate-300'
                  } hover:text-primary-400 cursor-pointer`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none transition-colors ${
                scrolled ? 'text-white' : 'text-slate-300'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-4 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
