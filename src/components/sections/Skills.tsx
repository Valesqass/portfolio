import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Three.js / R3F', level: 65 },
    ]
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Supabase', level: 75 },
      { name: 'Sentry', level: 70 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Vite', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'VS Code', level: 95 },
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
            Ma boîte à outils technologique, constamment mise à jour pour répondre aux standards modernes du développement web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-black border-b-2 border-black pb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-black">{skill.name}</span>
                      <span className="text-gray-500 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="h-full bg-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
