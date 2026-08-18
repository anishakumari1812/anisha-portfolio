import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive and interactive user interfaces using modern web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    desc: 'Developing scalable server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database Management',
    desc: 'Designing and managing databases for efficient data storage and retrieval.',
    tags: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Generative AI',
    desc: 'Exploring Generative AI and building AI-powered applications using modern AI technologies.',
    tags: ['Python', 'LangChain', 'LLMs', 'Generative AI'],
  },
  {
    title: 'Tools & Technologies',
    desc: 'Tools I use to develop, test, and manage applications.',
    tags: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Core Concepts',
    desc: 'Strong foundation in problem-solving and computer science fundamentals.',
    tags: ['DSA', 'Algorithms', 'OOPs', 'DBMS'],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6 md:px-16 max-w-6xl mx-auto" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-2"
      >
        My <span className="text-accent">Skills</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted text-sm mb-14"
      >
        Technologies I work with to bring ideas to life
      </motion.p>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skills.map((s) => (
          <motion.div
            key={s.title}
            variants={card}
            whileHover={{ y: -6, boxShadow: '0 8px 30px rgba(139,92,246,0.22)' }}
            className="bg-[#1a1528] border border-purple-500/20 rounded-2xl p-6 transition-colors hover:border-accent cursor-default"
          >
            <div className="text-3xl mb-4">{s.icon}</div>
            <h3 className="font-bold text-sm mb-2">{s.title}</h3>
            <p className="text-muted text-xs mb-4 leading-relaxed">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-accent2 border border-purple-500/25"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
