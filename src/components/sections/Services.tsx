import { motion } from 'framer-motion';

const services = [
  {
    title: 'Développement Frontend',
    description: 'Création d\'interfaces utilisateur réactives et interactives avec React, Next.js et TypeScript. Intégration pixel-perfect et animations fluides.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Expériences 3D Web',
    description: 'Conception d\'éléments 3D immersifs et légers pour le web en utilisant Three.js et React Three Fiber. Ajoutez une dimension unique à votre site.',
    tags: ['Three.js', 'WebGL', 'R3F', 'GLSL']
  },
  {
    title: 'Développement Fullstack',
    description: 'Architecture et développement de solutions complètes, de la base de données à l\'interface utilisateur, en utilisant des technologies modernes comme Node.js et Supabase.',
    tags: ['Node.js', 'Supabase', 'PostgreSQL', 'API REST']
  },
  {
    title: 'Optimisation & Performance',
    description: 'Audit et amélioration des performances web, optimisation SEO technique et accessibilité pour garantir une expérience utilisateur optimale.',
    tags: ['Lighthouse', 'SEO', 'W3C', 'Performance']
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
            Services
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg font-light">
            Je propose une gamme complète de services pour donner vie à vos projets numériques, avec une attention particulière portée à la qualité du code et à l'expérience utilisateur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:underline decoration-2 underline-offset-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-black text-white">
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
