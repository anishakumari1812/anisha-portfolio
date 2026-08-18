import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    title: 'Masters in Computer Applications (MCA)',
    institution: 'Indira Gandhi Delhi Technical University for Women',
    duration: '2025 – Present',
    desc: 'Pursuing MCA with focus on full-stack development, generative AI, data structures, and algorithms. Actively working on real-world projects to apply academic knowledge.',
  },
  {
    title: 'B.Sc in Computer Applications',
    institution: 'Patna Women\'s College',
    duration: '2022 – 2025',
    desc: "Completed Bachelor's in Computer Applications with a strong foundation in programming, database management, web development, and software engineering principles.",
  },
  {
    title: 'Intermediate (12th)',
    institution: 'Anugrah Narayan College',
    duration: '2020 – 2022',
    desc: 'Completed Intermediate with Science stream, building analytical and logical thinking skills that formed the base for a career in technology.',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-24 px-6 md:px-16 max-w-6xl mx-auto" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-2"
      >
        My <span className="text-accent">Education</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted text-sm mb-14"
      >
        Academic qualifications and background
      </motion.p>

      <div className="relative pl-9">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent2" />

        {education.map((edu, i) => (
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
                <span className="font-bold text-base">{edu.icon} {edu.title}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/15 text-accent2 border border-purple-500/25 whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              <p className="text-accent2 text-sm font-medium mb-3">{edu.institution}</p>
              <p className="text-muted text-sm leading-relaxed">{edu.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
