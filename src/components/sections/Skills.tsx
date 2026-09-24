import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend & UI',
    description: 'Expertise',
    skills: [
      { name: 'React.js', description: 'Architecture de composants, Hooks, Context API' },
      { name: 'Next.js', description: 'SSR, SSG, Routing avancé, API Routes' },
      { name: 'React Native / Expo', description: 'Mobile cross-platform, EAS, Native Modules' },
      { name: 'TypeScript', description: 'Typage strict, Interfaces, Generics' },
      { name: 'Tailwind CSS', description: 'Design System, Responsive, Dark Mode' },
      { name: 'GSAP / Framer', description: 'Animations complexes, Gestures, Timelines' },
      { name: 'CSS3', description: 'Sémantique, Flexbox, Grid, SEO' }
    ]
  },
  {
    title: 'Backend & Data',
    description: 'Architecture',
    skills: [
      { name: 'Node.js', description: 'REST APIs, Middleware, Express, NestJS' },
      { name: 'Supabase', description: 'Auth, Realtime, Edge Functions' },
      { name: 'PostgreSQL / Prisma', description: 'Modélisation relationnelle, ORM, Optimisation' },
      { name: 'Firebase', description: 'Firestore, Cloud Functions, Auth' },
      { name: 'Stripe', description: 'Paiements, Abonnements, Webhooks' },
      { name: 'API REST / GraphQL', description: 'Design d\'API, Apollo, TanStack Query' },
      { name: 'CMS Headless', description: 'Strapi, Contentful, Sanity' }
    ]
  },
  {
    title: 'DevOps & Tools',
    description: 'Workflow',
    skills: [
      { name: 'Git / GitHub', description: 'Versionning, CI/CD Actions, PR Review' },
      { name: 'Docker', description: 'Conteneurisation, Docker Compose' },
      { name: 'Railway / Netlify', description: 'Déploiement, Infrastructure as Code' },
      { name: 'Sentry', description: 'Monitoring, Error Tracking, Performance' },
      { name: 'Vite / Webpack', description: 'Build tools, Configuration, Plugins' },
      { name: 'Figma', description: 'Prototypage, Design System, Hand-off' },
      { name: 'Jest / Testing', description: 'Unit Testing, Integration, E2E' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white border-t border-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-black uppercase tracking-tight">
            Compétences Techniques
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg font-light">
            Ma stack technique détaillée et maîtrisée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b-2 border-black pb-4 mb-8"
              >
                <h3 className="text-2xl font-bold text-black uppercase tracking-wide">
                  {category.title}
                </h3>
              </motion.div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="group border border-gray-100 hover:border-black p-4 transition-all duration-300 hover:bg-gray-50"
                  >
                    <h4 className="font-bold text-lg text-black mb-1 group-hover:translate-x-1 transition-transform">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
