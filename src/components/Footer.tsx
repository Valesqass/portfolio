import { Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-8 border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Mikaël Lahlou. Tous droits réservés.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/Valesqass"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:m_lahlou4@hetic.eu"
            className="text-gray-400 hover:text-black transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
