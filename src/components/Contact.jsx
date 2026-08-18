import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const contactInfo = [
  { icon: '📍', label: 'Location', value: 'New Delhi, India' },
  { icon: '✉️', label: 'Email', value: 'anishakumari12180@gmail.com', href: 'mailto:anishakumari12180@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 7541860990', href: 'tel:+917541860990' },
]

const socials = [
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: '🐦', label: 'Twitter', href: 'https://twitter.com/' },
  { icon: '📧', label: 'Email', href: 'mailto:anishakumari12180@gmail.com' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up to your backend / EmailJS / Formspree here
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-6xl mx-auto" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-2"
      >
        Get In <span className="text-accent">Touch</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-muted text-sm mb-14"
      >
        Have a project in mind or want to collaborate? Let's talk!
      </motion.p>

      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block text-muted text-xs mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-[#1a1528] border border-purple-500/20 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-accent transition-colors placeholder:text-muted/50"
            />
          </div>
          <div>
            <label className="block text-muted text-xs mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-[#1a1528] border border-purple-500/20 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-accent transition-colors placeholder:text-muted/50"
            />
          </div>
          <div>
            <label className="block text-muted text-xs mb-2">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              required
              className="w-full bg-[#1a1528] border border-purple-500/20 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-accent transition-colors resize-y placeholder:text-muted/50"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent hover:bg-accent2 hover:text-[#1a1528] text-white font-semibold py-3 rounded-lg text-sm transition-all duration-300"
          >
            {sent ? '✅ Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Info */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-6"
        >
          {contactInfo.map((info, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-xl flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5">{info.label}</div>
                {info.href ? (
                  <a href={info.href} className="text-muted text-xs hover:text-accent2 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <div className="text-muted text-xs">{info.value}</div>
                )}
              </div>
            </div>
          ))}

          {/* Socials */}
          <div>
            <div className="font-semibold text-sm mb-4">Follow Me</div>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  whileHover={{ y: -3, borderColor: 'rgba(139,92,246,0.8)' }}
                  className="w-11 h-11 rounded-full bg-[#1a1528] border border-purple-500/20 flex items-center justify-center text-lg transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
