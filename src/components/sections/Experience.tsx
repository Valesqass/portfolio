import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Bachelor Développement Web',
    company: 'HETIC',
    period: '2023 - 2026',
    description: 'Bachelor Développement Web (titre RNCP niveau 6) à HETIC, Montreuil. Formation théorique et pratique aux technologies web, au design et à la gestion de projet.',
    achievements: [
      'Acquisition de compétences techniques solides',
      'Réalisation de projets académiques concrets',
      'Veille technologique et innovation'
    ],
    skills: ['Web Dev', 'Design', 'Marketing', 'Project Mgmt'],
    link: null
  },
  {
    id: 8,
    role: 'Développeur Front-End & Designer UI/UX (Alternance)',
    company: 'Nade Corp',
    period: 'Oct. 2024 - 2026',
    description: 'Alternance en tant que développeur front-end et designer UI/UX : conception des maquettes de sites et d\'applications web, puis développement des interfaces à partir de ces maquettes.',
    achievements: [
      'Maquettes et design UI/UX sur Figma',
      'Intégration et développement des interfaces front-end',
      'Du design au code, sur des projets web variés'
    ],
    skills: ['Front-End', 'UI/UX', 'Figma', 'React'],
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
    description: 'Conception et développement, seul et de bout en bout, de la plateforme Next.js de SYC75, mandataire automobile de luxe : front-end, back-end, base de données et back-office d\'administration.',
    achievements: [
      'Plus de 600 véhicules vendus via la plateforme',
      'Architecture Full Stack (Auth, DB, Paiement Stripe)',
      'Système de réservation temps réel & Gestion de flotte',
      'Back-office d\'administration sur-mesure'
    ],
    skills: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
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
  },
  {
    id: 9,
    role: 'Développeur Mobile Freelance',
    company: 'MATS (Mats-For-Members)',
    period: 'Déc. 2025 - Présent',
    description: 'Développement de l\'application mobile MATS au sein d\'une équipe internationale (Dubaï, Hanoï), en anglais : design UI/UX des écrans, parcours de création de compte et nombreuses fonctionnalités.',
    achievements: [
      'Application publiée sur le Google Play Store',
      'Plus de 1 000 comptes utilisateurs créés',
      'Process complet : design doc, staging, pull request, code review'
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'UI/UX'],
    link: 'https://matsformembers.com'
  },
  {
    id: 10,
    role: 'Développeur - Projet d\'équipe',
    company: 'flipper-hetic (HETIC)',
    period: 'Févr. - Juil. 2026',
    description: 'Conception d\'un flipper connecté en équipe : firmware, bridge de communication entre le matériel et le logiciel, et logique de jeu.',
    achievements: [
      'Firmware et bridge de communication',
      'Logique de jeu en programmation orientée objet',
      'Architecture Game Object Pattern'
    ],
    skills: ['POO', 'Firmware', 'IoT', 'Teamwork'],
    link: null
  },
  {
    id: 11,
    role: 'Mastère CTO (Alternance)',
    company: 'HETIC',
    period: 'Dès Nov. 2026',
    description: 'Mastère CTO (Bac+5) à HETIC, en alternance sur 2 ans au rythme de 3 semaines en entreprise et 1 semaine à l\'école.',
    achievements: [
      'Architecture logicielle et leadership technique',
      'Rythme 3 semaines entreprise / 1 semaine école',
      'Recherche d\'une alternance de développeur full-stack'
    ],
    skills: ['CTO', 'Architecture', 'Leadership', 'Alternance'],
    link: null
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
            Du plus récent au plus ancien : des produits en production, en freelance et en équipe.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {[...experiences].reverse().map((exp, index) => (
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
