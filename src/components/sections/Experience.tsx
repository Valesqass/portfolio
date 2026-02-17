import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Étudiant Développeur Web',
    company: 'HETIC',
    period: '2023 - Présent',
    description: 'Formation intensive en développement web, design et gestion de projet. Réalisation de nombreux projets académiques et personnels.',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'PHP', 'SQL']
  },
  {
    id: 2,
    role: 'Développeur Freelance',
    company: 'Indépendant',
    period: '2024 - Présent',
    description: 'Réalisation de sites vitrines et d\'applications web pour des clients divers. Gestion complète du cycle de vie des projets, de la conception au déploiement.',
    skills: ['Client Relations', 'Project Management', 'Fullstack Dev']
  },
  // Ajoutez d'autres expériences ici si nécessaire
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
            Expérience
          </h2>
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
                <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 bg-black border-2 border-white transform md:-translate-x-1/2 mt-1.5 z-10"></div>
                
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 text-right'}`}>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-wider mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <div className="text-gray-500 font-medium mb-4 uppercase tracking-wide text-sm">{exp.company}</div>
                  <p className="text-gray-600 mb-4 font-light leading-relaxed">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-xs border border-gray-300 px-2 py-1 text-gray-500">
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
