import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SYC-75',
    description: 'Site vitrine pour un mandataire automobile haut de gamme. Design minimaliste et élégant reflétant le luxe.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://syc-75.com',
    github: null
  },
  {
    id: 2,
    title: 'Maison 310',
    description: 'Projet immobilier avec une interface épurée et une expérience utilisateur fluide.',
    image: 'https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Vite', 'Responsive Design'],
    link: 'https://maison310.netlify.app',
    github: null
  },
  {
    id: 3,
    title: 'Portfolio Personnel',
    description: 'Mon portfolio professionnel présentant mes projets et compétences. Intégration de Three.js pour la 3D.',
    image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Three.js', 'Tailwind CSS'],
    link: '/',
    github: 'https://github.com/mikaellahlou/portfolio'
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">Mes Projets</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Une sélection de mes réalisations récentes, alliant design moderne et performance technique.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-none overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group"
          >
            <div className="h-56 overflow-hidden relative border-b border-black">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3 text-black group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 bg-white text-black font-medium border border-black rounded-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-white bg-black px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visiter
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
