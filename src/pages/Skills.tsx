import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
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
      { name: 'Vite', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code', level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">Compétences</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Un aperçu de mon bagage technique et des outils que j'utilise au quotidien pour créer des expériences digitales performantes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: catIndex % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-8 text-black border-b-2 border-black pb-4">
              {category.title}
            </h2>
            
            <div className="space-y-6">
              {category.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-black">{skill.name}</span>
                    <span className="text-gray-500 text-sm font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-none overflow-hidden border border-gray-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      className="h-full bg-black rounded-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
