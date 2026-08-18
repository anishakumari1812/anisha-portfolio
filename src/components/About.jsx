import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import aboutPhoto from '../assets/about.jpeg'

const cards = [
  {
    title: 'Full Stack Development',
    desc: 'Building responsive and scalable web applications using modern full-stack technologies.'
  },
  {
    title: 'Generative AI',
    desc: 'Exploring Generative AI and integrating intelligent AI-powered features into practical applications.'
  },
  {
    title: 'Problem Solving',
    desc: 'Strengthening problem-solving skills through Data Structures and Algorithms and consistent coding practice.'
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6 md:px-16 max-w-6xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-start">
      {/* Image */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
  className="aspect-[3/4] rounded-2xl border border-purple-500/20 overflow-hidden"
>
  <img
    src={aboutPhoto}
    alt="Anisha Kumari"
    className="w-full h-full object-cover"
  />
</motion.div>
        {/* Text */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-3xl font-bold text-accent2 mb-5"
          >
            My Journey
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-muted text-sm leading-relaxed mb-5"
          >
            My journey into technology began with a curiosity to understand how websites and applications work behind the scenes. During my MCA, I developed a strong interest in full-stack development and Generative AI. I started with the fundamentals of HTML, CSS, and JavaScript and gradually progressed to building dynamic web applications using the MERN stack. Along the way, I explored Generative AI and worked on projects that helped me understand how AI can be integrated into practical applications.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-muted text-sm leading-relaxed mb-8"
          >
            Along with development, I enjoy solving Data Structures and Algorithms problems and continuously improving my problem-solving skills. I believe in learning through hands-on projects, writing clean and efficient code, and building solutions that are practical and user-friendly. With every project and problem I solve, I aim to strengthen my technical skills and grow into a well-rounded software developer.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i + 3}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4, borderColor: 'rgba(139,92,246,0.8)' }}
                className={`bg-[#1a1528] border border-purple-500/20 rounded-xl p-5 transition-colors ${
                  i === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <h4 className="font-bold text-sm mb-2 text-white">{card.title}</h4>
                <p className="text-muted text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
