import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-black uppercase tracking-tight">
              Qui Je Suis
            </h2>
            <div className="space-y-6 text-lg text-gray-800 font-light leading-relaxed">
              <p>
                Je m'appelle <strong className="font-bold text-black">Mikaël Lahlou</strong>, un développeur web passionné basé à <span className="underline decoration-1 underline-offset-4">Montreuil</span>. Après mon Bachelor Développement Web à <strong className="font-bold text-black">HETIC</strong>, j'intègre le <strong className="font-bold text-black">Mastère CTO</strong> en novembre 2026 et je recherche une alternance de 2 ans.
              </p>
              <p>
                Je réalise des produits <strong className="font-bold text-black">full‑stack</strong> de A à Z : de la conception à la mise en production. J'ai développé seul la plateforme <strong className="font-bold text-black">SYC75</strong> (plus de 600 véhicules vendus) et je travaille sur l'application mobile <strong className="font-bold text-black">MATS</strong> (plus de 1 000 comptes) au sein d'une équipe internationale, en anglais.
              </p>
              <p>
                Je crée des interfaces graphiques sobres, intuitives et accessibles, au service de l’expérience utilisateur. Mon exigence : un code propre, une architecture solide et des performances mesurables — sans superflu.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black text-white p-8 md:p-12 relative"
          >
            <div className="absolute top-0 right-0 w-4 h-4 bg-white border-l border-b border-black"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-white border-r border-t border-black"></div>
            
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider border-b border-white/20 pb-4">
              Ma Philosophie
            </h3>
            <ul className="space-y-4 font-light">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">01.</span>
                <span>Minimalisme fonctionnel : Chaque élément doit avoir une raison d'être.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">02.</span>
                <span>Performance avant tout : La vitesse est une fonctionnalité essentielle.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">03.</span>
                <span>Accessibilité : Le web doit être ouvert et utilisable par tous.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">04.</span>
                <span>Apprentissage continu : La technologie évolue, moi aussi.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
