import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SYC-75',
    category: 'Full Stack',
    description: 'Plateforme complète pour mandataire automobile de luxe, conçue et développée seul : plus de 600 véhicules vendus. Intègre un système de réservation, paiements Stripe, messagerie instantanée et un tableau de bord administrateur pour la gestion de flotte.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: 'https://syc-75.com',
    github: null
  },
  {
    id: 5,
    title: 'MATS',
    category: 'Mobile',
    description: 'Application mobile publiée sur le Google Play Store, plus de 1 000 comptes créés. Design UI/UX des écrans, parcours de création de compte et nombreuses fonctionnalités, au sein d\'une équipe internationale (Dubaï, Hanoï).',
    tags: ['React Native', 'Expo', 'TypeScript', 'UI/UX'],
    link: 'https://matsformembers.com',
    github: null
  },
  {
    id: 2,
    title: 'Maison 310',
    category: 'Musique & Culture',
    description: 'Site officiel du label musical Maison 310. Une expérience visuelle immersive reflétant l\'identité artistique du collectif, avec présentation des artistes et des dernières sorties.',
    tags: ['React', 'Vite', 'Design System'],
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
    github: 'https://github.com/Valesqass/portfolio'
  },
  {
    id: 4,
    title: 'VStreet',
    category: 'Mobile',
    description: 'Application mobile dédiée au street workout, parkour et calisthénics. Plateforme communautaire permettant de trouver des spots, partager des entraînements et suivre sa progression.',
    tags: ['React Native', 'Expo', 'Supabase', 'Geolocalisation'],
    link: 'https://vstreets.fr',
    github: null
  },
  {
    id: 6,
    title: 'Flipper connecté',
    category: 'Projet HETIC',
    description: 'Flipper connecté réalisé en équipe : firmware, bridge de communication entre le matériel et le logiciel, et logique de jeu en programmation orientée objet (Game Object Pattern).',
    tags: ['POO', 'Firmware', 'IoT', 'Travail d\'équipe'],
    link: null,
    github: null
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
                {project.link?.startsWith('http') && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visiter
                  </a>
                )}
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
