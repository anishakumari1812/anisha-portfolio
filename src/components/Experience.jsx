import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    icon: '💼',
    title: 'Full Stack Developer',
    company: 'Aztech Engineer Pvt. Limited',
    duration: 'Dec 2024 – Feb 2025',
    desc: 'Worked on developing and maintaining full-stack web applications using modern technologies. Contributed to both frontend and backend development, built RESTful APIs, and ensured responsive and user-friendly interfaces. Gained hands-on experience in real-world project development and improved code quality by following best practices.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6 md:px-16 max-w-6xl mx-auto" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-2"
      >
        Work <span className="text-accent">Experience</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted text-sm mb-14"
      >
        My professional journey so far
      </motion.p>

      <div className="relative pl-9">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent2" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative mb-6"
          >
            {/* Dot */}
            <div className="absolute -left-6 top-5 w-3.5 h-3.5 rounded-full bg-accent shadow-[0_0_12px_rgba(139,92,246,0.7)]" />

            <motion.div
              whileHover={{ x: 4, borderColor: 'rgba(139,92,246,0.8)' }}
              className="bg-[#1a1528] border border-purple-500/20 rounded-xl p-6 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <span className="font-bold text-base">{exp.icon} {exp.title}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/15 text-accent2 border border-purple-500/25">
                  {exp.duration}
                </span>
              </div>
              <p className="text-accent2 text-sm font-medium mb-3">{exp.company}</p>
              <p className="text-muted text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
