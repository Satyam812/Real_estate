import { motion, AnimatePresence } from 'framer-motion'

export default function TourHero({ onStart }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black overflow-hidden"
      >
        {/* Background Video Mock (Using high quality image since we don't have a local video file) */}
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2800&auto=format&fit=crop" 
            alt="Virtual Tour Intro" 
            className="w-full h-full object-cover opacity-60"
          fetchpriority="high" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent" />
          <div className="absolute inset-0 bg-deep-black/30 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-16 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.4em] uppercase font-light">
              Interactive Experience
            </span>
            <span className="w-16 h-px bg-champagne/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-warm-white tracking-tight mb-8"
          >
            The <span className="italic text-gradient-gold">Belvedere</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-soft-grey font-light max-w-lg mb-12"
          >
            Explore every detail of this masterwork of architecture. A seamless blend of indoor and outdoor luxury living, fully realized in real-time 3D.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={onStart}
            className="btn-primary group relative overflow-hidden px-10 py-5 bg-champagne text-deep-black rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,169,110,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3 font-medium">
              Start Virtual Tour
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
