import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  {
    value: 2840,
    suffix: '+',
    label: 'Properties Sold',
    description: 'Prestigious residences across the globe',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    value: 560,
    suffix: '+',
    label: 'Luxury Villas',
    description: 'Exclusive estate collections worldwide',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    value: 42,
    suffix: '',
    label: 'Countries',
    description: 'Spanning premium markets globally',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    value: 1200,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Trust placed in our expertise',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
]

function StatCard({ stat, index }) {
  const [countRef, count] = useCountUp(stat.value, 2500)

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      <div className="relative p-8 md:p-10 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-glass-border hover:border-champagne/20 transition-all duration-700 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" aria-hidden="true" />

        {/* Icon */}
        <div className="text-champagne/40 mb-6 group-hover:text-champagne/70 transition-colors duration-500" aria-hidden="true">
          {stat.icon}
        </div>

        {/* Number */}
        <div className="font-heading text-5xl md:text-6xl font-light text-warm-white mb-2 tracking-tight">
          {count.toLocaleString()}
          <span className="text-champagne">{stat.suffix}</span>
        </div>

        {/* Label */}
        <h3 className="text-warm-white text-sm tracking-[0.12em] uppercase font-medium mb-2">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-soft-grey text-xs font-light leading-relaxed">
          {stat.description}
        </p>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-champagne/30 to-transparent" />
          <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-champagne/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="section-padding relative overflow-hidden"
      aria-label="Our achievements"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(201,169,110,0.02)] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" aria-hidden="true" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Our Legacy
            </span>
            <span className="w-12 h-px bg-champagne/40" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-warm-white tracking-tight">
            Numbers That <span className="italic text-gradient-gold">Speak</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
