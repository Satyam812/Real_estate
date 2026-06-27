import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function MagneticButton({ children, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    x.set(middleX * 0.2)
    y.set(middleY * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
    >
      <button className={className}>
        {children}
      </button>
    </motion.div>
  )
}

export default function PropertiesCTA() {
  return (
    <section className="relative py-32 overflow-hidden" aria-label="Call to Action">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2800&auto=format&fit=crop" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover opacity-20"
        loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-deep-black/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Take the Next Step
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-warm-white tracking-tight mb-12">
            Find Your <span className="italic text-gradient-gold">Dream Property</span> Today.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton className="btn-primary w-full sm:w-auto justify-center">
              <span>Browse Properties</span>
            </MagneticButton>
            <MagneticButton className="btn-outline w-full sm:w-auto justify-center">
              <span>Schedule Consultation</span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
