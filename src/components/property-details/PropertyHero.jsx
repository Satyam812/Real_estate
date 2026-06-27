import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PropertyHero({ property }) {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-end pb-24 overflow-hidden"
      aria-label="Property Hero"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover object-center"
        fetchpriority="high" loading="eager" decoding="async" />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-deep-black/20" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div 
          style={{ opacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
        >
          {/* Main Info */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              {property.status && (
                <span className="px-4 py-1.5 bg-champagne/20 backdrop-blur-md border border-champagne/40 text-champagne text-[0.65rem] tracking-[0.2em] uppercase font-light rounded-full">
                  {property.status}
                </span>
              )}
              {property.badge && (
                <span className="px-4 py-1.5 bg-glass-strong backdrop-blur-md border border-glass-border text-warm-white text-[0.65rem] tracking-[0.2em] uppercase font-light rounded-full">
                  {property.badge}
                </span>
              )}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-warm-white tracking-tight mb-4"
            >
              {property.name}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 text-soft-grey text-sm md:text-base font-light mb-8 lg:mb-0"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-champagne/80">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{property.location}</span>
            </motion.div>
          </div>

          {/* Pricing & Actions */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <p className="text-soft-grey text-[0.7rem] tracking-[0.2em] uppercase font-light text-left lg:text-right mb-2">Starting Price</p>
              <p className="font-heading text-4xl md:text-5xl text-champagne font-light">{property.price}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 w-full justify-start lg:justify-end"
            >
              <button className="btn-primary flex-1 lg:flex-none justify-center whitespace-nowrap">
                Schedule Visit
              </button>
              <button className="btn-outline flex-1 lg:flex-none justify-center whitespace-nowrap">
                Contact Advisor
              </button>
              <div className="flex gap-4">
                <button 
                  className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center hover:border-champagne/50 hover:bg-champagne/10 transition-all duration-500 group bg-deep-black/30 backdrop-blur-sm"
                  aria-label="Save Property"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-soft-grey group-hover:text-champagne transition-colors duration-300">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
                <button 
                  className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center hover:border-champagne/50 hover:bg-champagne/10 transition-all duration-500 group bg-deep-black/30 backdrop-blur-sm"
                  aria-label="Share Property"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-soft-grey group-hover:text-champagne transition-colors duration-300">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
