import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cercle lumineux centré, plus petit */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-3xl opacity-80 pointer-events-none"></div>

      <div className="w-full text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <motion.h2
            className="text-secondary text-xl md:text-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bonjour, je suis
          </motion.h2>
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent relative">
              Yanis LANNABI
            </h1>
          </motion.div>
          <motion.h3
            className="text-2xl md:text-3xl text-textSecondary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Développeur Full Stack
          </motion.h3>
          <motion.p
            className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Je crée des applications web modernes et performantes avec les dernières technologies.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#projects" className="btn">
              Voir mes projets
            </a>
            <a href="#contact" className="btn">
              Me contacter
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 