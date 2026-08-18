import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profile from "../assets/profile.jpeg";

const roles = [
  'Full Stack Developer',
  'Generative AI Developer',
  'Software Developer'
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
        }, 90)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        }, 55)
      } else {
        setDeleting(false)
        setRoleIdx((r) => (r + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between gap-10 px-6 md:px-16 pt-28 pb-16 max-w-6xl mx-auto"
    >
      {/* Left */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
          Hi, I'm{' '}
          <span className="text-accent">Anisha Kumari</span>
        </h1>

        <div className="text-xl md:text-2xl font-semibold mb-4 h-8">
          {displayed}
          <span className="inline-block w-0.5 h-6 bg-accent ml-1 align-middle animate-pulse" />
        </div>

        <p className="text-muted text-sm md:text-base max-w-md mb-8 leading-relaxed">
         MCA student and Full Stack Developer with hands-on experience in building web applications and Generative AI solutions.
        Strong foundation in Data Structures and Algorithms, 
        with a passion for solving complex problems and developing scalable, user-focused software.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="/cv.pdf"
            download
            className="bg-accent hover:bg-accent2 hover:text-[#1a1528] text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 text-sm"
          >
            ⬇ Download CV
          </a>
          <a
            href="#contact"
            className="border border-white/25 hover:border-accent hover:text-accent text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 text-sm"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right – Avatar */}
      <motion.div
        className="hidden md:flex flex-shrink-0 justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        {/*
          TO ADD YOUR PHOTO:
          Replace the div below with:
          <img src="/your-photo.jpg" alt="Anisha" className="w-64 h-64 rounded-full object-cover gradient-border shadow-[0_0_60px_rgba(139,92,246,0.35)]" />
        */}
       <img
  src={profile}
  alt="Anisha Kumari"
  className="w-64 h-64 rounded-full object-cover shadow-[0_0_0_4px_#8b5cf6,0_0_60px_rgba(139,92,246,0.35)]"
/>
      </motion.div>
    </section>
  )
}
