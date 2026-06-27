import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PropertiesHero() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Subtle parallax effect for the background
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20"
      aria-label="Properties Hero"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-deep-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2800&auto=format&fit=crop" 
          alt="Luxury architectural exterior"
          className="w-full h-full object-cover object-center"
        fetchpriority="high" loading="eager" decoding="async" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-px bg-champagne/40" />
          <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
            Curated Collection
          </span>
          <span className="w-12 h-px bg-champagne/40" />
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-warm-white tracking-tight mb-8">
          Luxury <span className="italic text-gradient-gold">Properties</span>
        </h1>
        
        <p className="text-soft-grey text-sm md:text-base tracking-wide max-w-2xl mx-auto font-light leading-relaxed">
          Discover our exclusive portfolio of extraordinary residences. 
          From visionary modern architecture to timeless estates, each property 
          represents the pinnacle of luxury living.
        </p>
      </motion.div>
    </section>
  )
}
