import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border" role="contentinfo" aria-label="Site footer">
      {/* Pre-footer CTA */}
      <div className="section-padding pb-0">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-champagne/40" aria-hidden="true" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Begin Your Journey
              </span>
              <span className="w-8 h-px bg-champagne/40" aria-hidden="true" />
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-warm-white tracking-tight mb-6">
              Your Dream Residence
              <br />
              <span className="italic text-gradient-gold">Awaits</span>
            </h2>

            <p className="text-soft-grey text-base font-light max-w-md mx-auto mb-10">
              Connect with our concierge team for a personalized consultation on the world's finest properties.
            </p>

            <Link
              to="/consultation"
              className="btn-primary inline-flex"
              aria-label="Schedule a consultation"
            >
              <span>Schedule Consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer content */}
      <div className="px-6 md:px-10 py-16 md:py-20 mt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M18 2L32 10V26L18 34L4 26V10L18 2Z" stroke="url(#footerGrad)" strokeWidth="1.5" fill="none" />
                  <path d="M18 8L26 12.5V23.5L18 28L10 23.5V12.5L18 8Z" stroke="url(#footerGrad)" strokeWidth="0.8" fill="none" opacity="0.5" />
                  <defs>
                    <linearGradient id="footerGrad" x1="4" y1="2" x2="32" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#d4b97a" />
                      <stop offset="1" stopColor="#b8944f" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col">
                  <span className="font-heading text-lg tracking-[0.2em] text-warm-white font-medium leading-none">
                    AETHER
                  </span>
                  <span className="text-[0.55rem] tracking-[0.35em] text-champagne font-body font-light uppercase leading-none mt-0.5">
                    ESTATES
                  </span>
                </div>
              </Link>
              <p className="text-soft-grey text-sm font-light leading-relaxed max-w-xs">
                Curating the world's most exceptional residences for discerning buyers who demand nothing less than extraordinary.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-warm-white text-xs tracking-[0.2em] uppercase font-medium mb-6">
                Explore
              </h4>
              <nav aria-label="Footer navigation - Explore">
                <ul className="space-y-3">
                  {[
                    { name: 'Properties', href: '/properties' },
                    { name: 'Virtual Tours', href: '/virtual-tour' },
                    { name: 'Agents', href: '/agents' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Contact', href: '/contact' }
                  ].map(link => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-soft-grey text-sm font-light hover:text-champagne transition-colors duration-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-warm-white text-xs tracking-[0.2em] uppercase font-medium mb-6">
                Services
              </h4>
              <nav aria-label="Footer navigation - Services">
                <ul className="space-y-3">
                  {['Buying', 'Selling', 'Concierge', 'Investment Advisory', 'Property Management'].map(link => (
                    <li key={link}>
                      <Link to="/contact" className="text-soft-grey text-sm font-light hover:text-champagne transition-colors duration-300">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-warm-white text-xs tracking-[0.2em] uppercase font-medium mb-6">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="text-soft-grey text-sm font-light">
                  421 Park Avenue South
                  <br />
                  New York, NY 10016
                </li>
                <li>
                  <a href="tel:+12125551234" className="text-soft-grey text-sm font-light hover:text-champagne transition-colors duration-300">
                    +1 (212) 555-1234
                  </a>
                </li>
                <li>
                  <a href="mailto:concierge@aetherestates.com" className="text-soft-grey text-sm font-light hover:text-champagne transition-colors duration-300">
                    concierge@aetherestates.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-soft-grey/50 text-xs font-light tracking-wide">
              © 2026 Aether Estates. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                <a key={link} href="#" className="text-soft-grey/50 text-xs font-light hover:text-soft-grey transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
