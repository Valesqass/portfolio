import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Sections
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

// Heavy Three.js scene is code-split so it never blocks first paint.
const HeroScene = lazy(() => import('../components/hero/HeroScene'));

const scrollToId = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (!element) return;
  window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
};

const Home = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center bg-white text-black"
      >
        {/* 3D Background (lazy-loaded, motion-aware) */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-white" />}>
            <HeroScene reducedMotion={prefersReducedMotion} />
          </Suspense>
        </div>

        <div className="container mx-auto px-6 z-10 relative pointer-events-none">
          <div className="max-w-4xl pointer-events-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-black font-medium text-lg mb-4 tracking-widest uppercase border-b border-black inline-block pb-1"
            >
              Développeur web full-stack
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold font-heading mb-6 leading-tight text-black mix-blend-exclusion"
            >
              MIKAËL LAHLOU
              <span className="block text-3xl md:text-5xl mt-4 font-light text-gray-800">
                Je crée des sites qui transforment
                <br className="hidden sm:block" /> vos visiteurs en clients.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light"
            >
              Sites vitrines, applications web et mobiles — conçus de A à Z,
              rapides, sur-mesure et pensés pour votre activité. Du design au
              déploiement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a
                href="#projects"
                onClick={scrollToId('projects')}
                className="px-8 py-4 bg-black text-white font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-black border-2 border-black transition-all flex items-center justify-center gap-2 group"
              >
                Voir les projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={scrollToId('contact')}
                className="px-8 py-4 bg-transparent text-black font-bold text-sm tracking-wider uppercase border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center"
              >
                Discuter de votre projet
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent text-black font-bold text-sm tracking-wider uppercase border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center"
              >
                Mon CV
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-sm text-gray-600 font-medium uppercase tracking-wider"
            >
              Recherche une alternance de 2 ans · Mastère CTO HETIC · Nov. 2026
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <About />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
