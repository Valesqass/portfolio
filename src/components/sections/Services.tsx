import { motion } from 'framer-motion';

const services = [
  {
    title: 'Backend & Base de Données',
    description: 'Conception d\'architectures scalables et robustes. Je développe des APIs performantes et sécurisées, en maîtrisant les technologies SQL et NoSQL pour garantir l\'intégrité et la disponibilité de vos données critiques.',
    details: [
      'Architecture microservices & Transactions',
      'Optimisation SQL/NoSQL & Caching',
      'APIs RESTful & GraphQL sécurisées'
    ],
    tags: ['PostgreSQL', 'Node.js', 'Redis', 'Docker']
  },
  {
    title: 'Frontend & Web Design',
    description: 'Création d\'interfaces premium, interactives et centrées sur l\'utilisateur. J\'allie esthétique moderne et technologies de pointe pour offrir des expériences fluides, avec une attention méticuleuse aux micro-interactions et au responsive design.',
    details: [
      'Design System & UI/UX Mobile-First',
      'Animations fluides (Framer Motion/GSAP)',
      'Intégration Pixel-Perfect'
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Solutions Full Stack',
    description: 'Développement d\'applications web complexes de bout en bout. De la gestion utilisateur avancée aux systèmes de paiement sécurisés, je crée des plateformes robustes adaptées à vos besoins métiers spécifiques.',
    details: [
      'Tableaux de bord & Back-office',
      'Intégration de paiements (Stripe)',
      'Gestion de données temps réel'
    ],
    tags: ['Next.js', 'Supabase', 'Stripe', 'Real-time']
  },
  {
    title: 'Systèmes de Réservation',
    description: 'Expertise dans la création de moteurs de réservation et de gestion de stocks performants. Je conçois des systèmes de filtrage avancés et des calendriers de disponibilité synchronisés pour tous types de services.',
    details: [
      'Moteurs de recherche multicritères',
      'Gestion de disponibilité & Stocks',
      'Workflows de réservation automatisés'
    ],
    tags: ['Booking Engine', 'Algolia', 'Calendar API', 'Automation']
  },
  {
    title: 'Applications Mobiles',
    description: 'Conception d\'applications natives et cross-platform performantes. Je transforme vos idées en applications mobiles intuitives, intégrant géolocalisation, paiements et fonctionnalités offline, comme réalisé pour l\'application VStreet.',
    details: [
      'Développement React Native / Expo',
      'Géolocalisation & Maps',
      'Mode Offline & Sync'
    ],
    tags: ['React Native', 'iOS/Android', 'Expo', 'Mobile UX']
  },
  {
    title: 'SEO & Performance',
    description: 'Maximisation de votre visibilité et de vos performances techniques. J\'optimise chaque aspect de votre site, du code à la sémantique, pour garantir un classement optimal et une expérience utilisateur ultra-rapide.',
    details: [
      'Audit Core Web Vitals & Loading Speed',
      'Stratégie SEO Technique & Sémantique',
      'Analytics & Suivi de conversion'
    ],
    tags: ['Google Lighthouse', 'Schema.org', 'Analytics', 'NextSEO']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 border-t border-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-black uppercase tracking-tight">
            Services & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg font-light">
            Une approche technique complète et sur-mesure, de la conception d'architectures complexes au développement d'interfaces utilisateurs premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-4 group-hover:underline decoration-2 underline-offset-4 uppercase tracking-wide min-h-[3.5rem] flex items-end">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm flex-grow">
                {service.description}
              </p>

              <ul className="mb-6 space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-sm font-medium text-black flex items-start gap-2">
                    <span className="text-gray-400 mt-1">›</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-black text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
