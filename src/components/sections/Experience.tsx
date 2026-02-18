import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Étudiant',
    company: 'HETIC',
    period: '2023 - Présent',
    description: 'Formation supérieure aux métiers du web. Apprentissage théorique et pratique des technologies numériques, du design et du marketing digital.',
    achievements: [
      'Acquisition de compétences techniques solides',
      'Réalisation de projets académiques concrets',
      'Veille technologique et innovation'
    ],
    skills: ['Web Dev', 'Design', 'Marketing', 'Project Mgmt'],
    link: null
  },
  {
    id: 2,
    role: 'Développeur Freelance',
    company: 'Indépendant',
    period: '2024 - Présent',
    description: 'Réalisation de missions variées pour différents clients. Développement de sites web, maintenance et conseil technique.',
    achievements: [
      'Gestion autonome de projets clients',
      'Développement de solutions sur-mesure',
      'Accompagnement technique et conseil'
    ],
    skills: ['Freelance', 'Full Stack', 'Client Relation', 'Consulting'],
    link: null
  },
  {
    id: 3,
    role: 'Participant Hackathon',
    company: 'Hackathon Europe 2025',
    period: 'Mars 2025',
    description: 'Participation au Hackathon Europe 2025 sur le thème de l\'engagement citoyen. Développement en 48h d\'un prototype fonctionnel.',
    achievements: [
      'Prototypage rapide d\'une solution MVP',
      'Travail collaboratif sous contrainte de temps',
      'Pitch final devant un jury d\'experts'
    ],
    skills: ['Hackathon', 'Agile', 'Prototyping', 'Teamwork'],
    link: null
  },
  {
    id: 4,
    role: 'Développeur Web',
    company: 'Label Maison 310',
    period: 'Mai 2025',
    description: 'Réalisation du site web pour le label Maison 310. Traduction de l\'identité visuelle de la marque en une expérience numérique fluide et esthétique.',
    achievements: [
      'Site vitrine immersif et minimaliste',
      'Respect strict de la direction artistique',
      'Score Lighthouse 98/100'
    ],
    skills: ['Frontend', 'Web Design', 'GSAP', 'SEO'],
    link: 'https://maison310.netlify.app'
  },
  {
    id: 5,
    role: 'Lead Developer Mobile',
    company: 'Projet Personnel',
    period: 'Depuis Juin 2025',
    description: 'Conception et développement en solo d\'une application mobile innovante dédiée à la communauté Street Workout. Gestion de l\'intégralité du projet, de l\'architecture technique au design UI/UX.',
    achievements: [
      'App cross-platform (React Native/Expo)',
      'Géolocalisation & Fonctionnalités sociales',
      'Architecture scalable et performante'
    ],
    skills: ['React Native', 'Mobile', 'UI/UX', 'Firebase'],
    link: null
  },
  {
    id: 6,
    role: 'Développeur Full Stack',
    company: 'SYC75',
    period: 'Déc. 2025 - Présent',
    description: 'Création complète du site web de l\'entreprise SYC75. Développement d\'une solution sur-mesure intégrant des fonctionnalités complexes pour un mandataire automobile de luxe.',
    achievements: [
      'Architecture Full Stack (Auth, DB, Paiement)',
      'Système de réservation temps réel & Gestion de flotte',
      'Expérience utilisateur premium et responsive'
    ],
    skills: ['Full Stack', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://syc-75.com'
  },
  {
    id: 7,
    role: 'Maintenance & Évolution',
    company: 'SYC75',
    period: 'Depuis Déc. 2025',
    description: 'Mission de maintenance continue pour assurer la stabilité et la sécurité de la plateforme SYC75. Utilisation d\'outils de monitoring avancés comme Sentry pour une réactivité maximale.',
    achievements: [
      'Monitoring proactif avec Sentry & Alerting',
      'Optimisation des performances (Core Web Vitals)',
      'Déploiement continu et patchs de sécurité'
    ],
    skills: ['Sentry', 'CI/CD', 'Security', 'Performance'],
    link: 'https://syc-75.com'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white border-t border-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-black uppercase tracking-tight">
            Expérience Professionnelle
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg font-light">
            Un parcours évolutif, de la formation académique aux projets complexes en freelance et en équipe.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-[50%]"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 bg-black border-2 border-white transform md:-translate-x-1/2 mt-1.5 z-10 hover:scale-125 transition-transform duration-300"></div>
                
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 text-right'}`}>
                  <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold mb-1 uppercase tracking-wide">{exp.role}</h3>
                  <div className="text-gray-500 font-bold mb-4 uppercase tracking-wide text-xs">
                    {exp.company}
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-black hover:underline underline-offset-2">
                        ↗
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 font-light leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  <ul className={`mb-4 space-y-1 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs font-medium text-gray-800 flex items-center gap-2">
                        <span className={`w-1 h-1 bg-black rounded-full ${index % 2 === 0 ? '' : 'md:order-2'}`}></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-[10px] border border-gray-300 px-2 py-1 text-gray-500 font-mono uppercase">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
