import { motion } from 'framer-motion';

type Temoignage = {
  citation: string;
  auteur: string;
  role: string;
  lien?: string;
};

// Avis validés par leurs auteurs avant publication.
const temoignages: Temoignage[] = [
  {
    citation:
      "Mikaël a conçu et développé toute la plateforme SYC75. Il a été très réactif, à l'écoute de nos retours et toujours compréhensif quand nos besoins évoluaient. Le site a été livré dans les temps, et il continue de le faire évoluer avec nous. Je le recommande sans hésiter.",
    auteur: 'Kevin',
    role: 'CEO de SYC75',
    lien: 'https://syc-75.com',
  },
  {
    citation:
      "Mikaël a travaillé avec nous sur l'application MATS. Il est efficace, livre ses tâches en temps et en heure et fait exactement ce qu'on lui demande, avec une qualité irréprochable. Il est aussi très créatif et apporte de vraies idées sur le design et l'expérience utilisateur. Un vrai atout pour une équipe.",
    auteur: 'Elias',
    role: 'Co-fondateur de MATS',
    lien: 'https://matsformembers.com',
  },
];

const Temoignages = () => (
  <section id="temoignages" className="py-24 bg-black text-white border-t border-black">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold font-heading mb-16 uppercase tracking-tight"
      >
        Ils m'ont fait confiance
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {temoignages.map((t) => (
          <motion.figure
            key={t.auteur}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border-l-2 border-white pl-8"
          >
            <span aria-hidden="true" className="block text-7xl leading-none font-heading text-gray-600 mb-2">
              “
            </span>
            <blockquote className="text-xl md:text-2xl font-light leading-snug mb-8">
              {t.citation}
            </blockquote>
            <figcaption className="text-sm uppercase tracking-widest">
              <span className="font-bold">{t.auteur}</span>
              <span className="text-gray-400"> · </span>
              {t.lien ? (
                <a
                  href={t.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white underline underline-offset-4 decoration-1"
                >
                  {t.role}
                </a>
              ) : (
                <span className="text-gray-400">{t.role}</span>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default Temoignages;
