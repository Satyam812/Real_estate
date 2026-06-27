import { useRef, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import HeroScene from './HeroScene'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

function SceneLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border border-champagne/30 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 border-t border-champagne rounded-full animate-spin" />
        </div>
        <p className="text-soft-grey text-xs tracking-[0.2em] uppercase">Loading Experience</p>
      </div>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the decorative lines
      gsap.to('.hero-line', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -100,
        opacity: 0,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      aria-label="Hero section"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/40 z-10 pointer-events-none" />

      {/* 3D Scene - Right side */}
      <div className="absolute right-0 top-0 w-full lg:w-[65%] h-full z-0">
        <Suspense fallback={<SceneLoader />}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Content - Left side */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-10 w-full pt-32 pb-20 lg:pt-0 lg:pb-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-champagne" />
            <span className="text-champagne text-[0.7rem] tracking-[0.3em] uppercase font-light">
              Luxury Real Estate
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            ref={headingRef}
            variants={itemVariants}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] tracking-tight text-warm-white mb-8"
          >
            Where
            <br />
            <span className="italic font-light text-gradient-gold">Extraordinary</span>
            <br />
            Living Begins
            <span className="text-champagne">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-soft-grey text-base md:text-lg font-light leading-relaxed max-w-md mb-12 font-body"
          >
            Discover curated residences that redefine luxury. 
            Architectural masterpieces in the world's most coveted destinations.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#properties"
              className="btn-primary group"
              aria-label="Explore our properties"
            >
              <span>Explore Properties</span>
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#"
              className="btn-outline group"
              aria-label="Schedule a property visit"
            >
              <span>Schedule Visit</span>
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center gap-4 mt-20"
          >
            <div className="w-5 h-8 rounded-full border border-soft-grey/30 flex items-start justify-center p-1.5">
              <motion.div
                className="w-1 h-1.5 rounded-full bg-champagne"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="text-soft-grey text-[0.65rem] tracking-[0.2em] uppercase font-light">
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="hero-line absolute right-10 top-1/4 w-px h-40 bg-gradient-to-b from-transparent via-champagne/20 to-transparent z-20 hidden lg:block" aria-hidden="true" />
      <div className="hero-line absolute right-20 bottom-1/4 w-px h-32 bg-gradient-to-b from-transparent via-champagne/10 to-transparent z-20 hidden lg:block" aria-hidden="true" />
    </section>
  )
}
