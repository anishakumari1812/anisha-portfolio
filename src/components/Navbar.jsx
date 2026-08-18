import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0d0f]/90 backdrop-blur-xl border-b border-purple-500/20'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div>
        <span className="text-xl font-extrabold tracking-tight">
          Anisha<span className="text-accent">Kumari</span>
        </span>
        <div className="w-2 h-2 rounded-full bg-accent mt-0.5" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-muted text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#1a1528] border-b border-purple-500/20 flex flex-col items-center gap-4 py-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-muted text-sm font-medium hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
