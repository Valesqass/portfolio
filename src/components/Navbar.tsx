import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'services', 'experience', 'projects', 'skills', 'contact'];
      // Add offset to account for navbar height
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Accueil', id: 'home' },
    { name: 'À propos', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Expérience', id: 'experience' },
    { name: 'Projets', id: 'projects' },
    { name: 'Compétences', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out',
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' : 'bg-transparent py-4'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-[101]">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center space-x-2 text-black font-heading font-bold text-lg hover:text-gray-600 transition-colors z-[101]"
            aria-label="Mikaël Lahlou - Retour à l'accueil"
          >
            <Code2 className="w-6 h-6 text-black" aria-hidden="true" />
            <span>Mikaël Lahlou</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-black relative group uppercase tracking-wider py-2',
                  activeSection === link.id ? 'text-black font-bold' : 'text-gray-500'
                )}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full",
                  activeSection === link.id ? "w-full" : ""
                )} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[101] relative"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span 
              className={cn(
                "block w-5 h-0.5 bg-black transition-transform duration-300 ease-in-out",
                isOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span 
              className={cn(
                "block w-5 h-0.5 bg-black transition-opacity duration-300 ease-in-out",
                isOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "block w-5 h-0.5 bg-black transition-transform duration-300 ease-in-out",
                isOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] transition-opacity duration-300 lg:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-y-0 right-0 z-[100] w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          aria-hidden={!isOpen}
        >
          <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={cn(
                  'text-xl font-heading font-bold transition-all duration-200 uppercase tracking-widest border-b border-gray-100 pb-4',
                  activeSection === link.id ? 'text-black pl-2 border-black' : 'text-gray-400 hover:text-gray-800 hover:pl-2'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-gray-100">
             <p className="text-xs text-gray-400 text-center uppercase tracking-widest">
               © {new Date().getFullYear()} Mikaël Lahlou
             </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
