import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    frontend: [
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    backend: [
      'Node.js',
      'Java',
      'Spring Boot',
      'Python',
      'PHP',
      'Laravel',
    ],
    database: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'MariaDB',
    ],
    devops: [
      'Docker',
      'Docker Compose',
    ],
  };

  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">À propos de moi</h2>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card bg-gradient-to-br from-tertiary to-primary/50 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 text-textPrimary">Qui suis-je ?</h3>
                <p className="text-textSecondary text-lg leading-relaxed mb-6">
                  Je suis un développeur passionné par la création d'applications web modernes et performantes.
                  Avec une solide expérience en développement full-stack, je m'efforce de créer des solutions
                  élégantes et efficaces pour résoudre des problèmes complexes.
                </p>
                <p className="text-textSecondary text-lg leading-relaxed">
                  Mon parcours dans le développement web m'a permis d'acquérir une expertise dans
                  diverses technologies et frameworks modernes. Je suis constamment à la recherche
                  de nouvelles opportunités d'apprentissage et de défis stimulants.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {Object.entries(skills).map(([category, technologies], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="card hover:shadow-glow transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-3 mb-6 w-full">
                    <div className="flex-1 h-px bg-gradient-to-r from-secondary/60 to-transparent" />
                    <h3 className="text-xl font-semibold text-textPrimary capitalize px-2 whitespace-nowrap">
                      {category}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-l from-secondary/60 to-transparent" />
                  </div>
                  <div className="flex flex-col gap-3">
                    {technologies.map((tech) => (
                      <div
                        key={tech}
                        className="skill-tag text-sm hover:scale-105 transition-transform"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 