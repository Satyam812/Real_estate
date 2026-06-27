import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'About', href: '/about' },
  { name: 'Agents', href: '/agents' },
  { name: 'Virtual Tours', href: '/virtual-tour' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'py-3 bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)]'
            : 'py-6 bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="AETHER ESTATES Home">
            <div className="relative">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18 2L32 10V26L18 34L4 26V10L18 2Z" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
                <path d="M18 8L26 12.5V23.5L18 28L10 23.5V12.5L18 8Z" stroke="url(#logoGrad)" strokeWidth="0.8" fill="none" opacity="0.5" />
                <path d="M18 14L22 16.5V21.5L18 24L14 21.5V16.5L18 14Z" fill="url(#logoGrad)" opacity="0.3" />
                <defs>
                  <linearGradient id="logoGrad" x1="4" y1="2" x2="32" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d4b97a" />
                    <stop offset="1" stopColor="#b8944f" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl tracking-[0.2em] text-warm-white font-medium leading-none">
                AETHER
              </span>
              <span className="text-[0.6rem] tracking-[0.35em] text-champagne font-body font-light uppercase leading-none mt-0.5">
                ESTATES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                role="menuitem"
                className="relative text-[0.78rem] tracking-[0.14em] uppercase text-soft-grey hover:text-warm-white transition-colors duration-500 font-light group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-5">
            <Link
              to="/consultation"
              className="hidden md:inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-champagne to-champagne-dark text-deep-black text-[0.75rem] font-medium tracking-[0.14em] uppercase transition-all duration-500 hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] hover:-translate-y-0.5"
              aria-label="Schedule a visit"
            >
              <span>Schedule Visit</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-6 h-px bg-warm-white transition-all duration-500 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block w-4 h-px bg-warm-white transition-all duration-500 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block w-6 h-px bg-warm-white transition-all duration-500 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[rgba(10,10,10,0.97)] backdrop-blur-2xl flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Link
                    to={link.href}
                    className="font-heading text-3xl tracking-[0.15em] text-warm-white hover:text-champagne transition-colors duration-500"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.08 }}
                onClick={() => setMobileOpen(false)}
              >
                <Link
                  to="/consultation"
                  className="mt-6 px-10 py-4 bg-gradient-to-r from-champagne to-champagne-dark text-deep-black text-sm font-medium tracking-[0.14em] uppercase inline-block"
                >
                  Schedule Visit
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
