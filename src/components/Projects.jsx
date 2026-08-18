import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'AI SiteBuilder (SaaS)',
    desc: 'Built an AI-powered SaaS platform that generates frontend website templates from user prompts. Implemented user authentication, credit-based usage, and Razorpay integration for purchasing credits.',
    tags: ['React.js', 'Node.js', 'Express.js', 'Razorpay'],
    demo: 'https://ai-sitebuilder-zeta.vercel.app/',
    code: '#',
  },
  {
    title: 'FlashMind AI',
    desc: 'Developed a Generative AI application that generates quizzes and flashcards from uploaded PDFs and text, helping users learn and revise content efficiently.',
    tags: ['Python', 'Streamlit', 'LangChain', 'LLM'],
    demo: 'https://ai-flashmind-aeigxqczactwzpbobmgq3b.streamlit.app/',
    code: '#',
  },
]
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6 md:px-16 max-w-6xl mx-auto" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-2"
      >
        My <span className="text-accent">Projects</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted text-sm mb-14"
      >
        A selection of my recent work
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(139,92,246,0.25)' }}
            className="bg-[#1a1528] border border-purple-500/20 rounded-2xl overflow-hidden transition-colors hover:border-accent"
          >
            {/* Banner */}
            <div className="h-44 bg-gradient-to-br from-[#1a1522] to-[#2a1040] flex items-center justify-center text-6xl border-b border-purple-500/20">
              {p.emoji}
            </div>

            {/* Body */}
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-accent2 border border-purple-500/25"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={p.demo}
                  className="bg-accent hover:bg-accent2 hover:text-[#1a1528] text-white font-semibold px-5 py-2 rounded-lg text-xs transition-all duration-200"
                >
                  View Demo
                </a>
                <a
                  href={p.code}
                  className="border border-white/20 hover:border-accent hover:text-accent text-white font-semibold px-5 py-2 rounded-lg text-xs transition-all duration-200"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
