import { motion } from 'framer-motion';
import { FAQ } from '../../lib/faq';

const etapes = [
  {
    numero: '01',
    titre: 'On échange',
    texte: 'Un appel ou un message pour comprendre votre activité, vos objectifs et ce dont vous avez vraiment besoin. Gratuit et sans engagement.',
  },
  {
    numero: '02',
    titre: 'Devis et maquette',
    texte: 'Je vous envoie un devis clair et détaillé, puis une maquette de votre site ou de votre application à valider avant de coder.',
  },
  {
    numero: '03',
    titre: 'Développement',
    texte: 'Je développe par étapes, avec des points réguliers : vous voyez le projet avancer et vous pouvez ajuster en cours de route.',
  },
  {
    numero: '04',
    titre: 'Mise en ligne et suivi',
    texte: 'Je mets en ligne, je vous forme si besoin, et je reste disponible pour la maintenance, la sécurité et les évolutions.',
  },
];

const Methode = () => (
  <section id="methode" className="py-24 bg-white border-t border-black">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-black uppercase tracking-tight">
          Comment je travaille
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg font-light">
          Un process simple et transparent, de la première discussion à la mise en ligne.
        </p>
      </motion.div>

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black mb-24">
        {etapes.map((etape) => (
          <motion.li
            key={etape.numero}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-8 flex flex-col"
          >
            <span className="font-mono text-sm text-gray-400 mb-6">{etape.numero}</span>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{etape.titre}</h3>
            <p className="text-gray-600 font-light leading-relaxed text-sm">{etape.texte}</p>
          </motion.li>
        ))}
      </ol>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <h2 id="faq" className="text-4xl md:text-5xl font-bold font-heading mb-6 text-black uppercase tracking-tight">
            Questions fréquentes
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Une autre question ?{' '}
            <a href="#contact" className="text-black underline underline-offset-4 decoration-1 hover:decoration-2">
              Écrivez-moi
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-2 border-t border-black">
          {FAQ.map((item) => (
            <details key={item.question} className="group border-b border-black py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-2xl font-light transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 font-light leading-relaxed max-w-2xl">{item.reponse}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Methode;
