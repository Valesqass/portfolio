import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SYC-75',
    category: 'Automobile',
    description: 'Site vitrine haut de gamme pour un mandataire automobile. Conception minimaliste mettant en valeur les véhicules de prestige avec une navigation fluide et intuitive.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://syc-75.com',
    github: null
  },
  {
    id: 2,
    title: 'Maison 310',
    category: 'Immobilier',
    description: 'Plateforme immobilière moderne offrant une expérience utilisateur optimisée pour la recherche de biens. Interface épurée et responsive.',
    tags: ['React', 'Vite', 'Responsive Design'],
    link: 'https://maison310.netlify.app',
    github: null
  },
  {
    id: 3,
    title: 'Portfolio V1',
    category: 'Personnel',
    description: 'Première version de mon portfolio personnel. Exploration des technologies 3D web et du design interactif.',
    tags: ['React', 'Three.js', 'Tailwind CSS'],
    link: '/',
    github: 'https://github.com/mikaellahlou/portfolio'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 border-t border-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-black uppercase tracking-tight">
            Projets Sélectionnés
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg font-light">
            Une collection de travaux récents démontrant mon expertise en développement web et design d'interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-black hover:bg-black hover:text-white transition-colors duration-300 group flex flex-col h-full"
            >
              <div className="mb-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-400 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white">{project.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 mb-6 font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 border border-gray-200 group-hover:border-gray-700 text-gray-500 group-hover:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-6 border-t border-gray-100 group-hover:border-gray-800 mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visiter
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
