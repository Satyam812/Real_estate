import { motion } from 'framer-motion'

const amenities = [
  'Infinity Pool',
  'Private Cinema',
  'Smart Home Automation',
  'Wine Cellar',
  'Gym & Wellness',
  'Spa & Sauna',
  'Home Theatre',
  'Private Garden',
  'Rooftop Lounge',
  'Electric Vehicle Charging',
  'Solar Energy System',
  'High-Speed Internet',
  'Advanced Security System',
  'Concierge Service',
]

// Simple SVG icon mapping based on index or name just for visual variation
const getIcon = (index) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne/80 group-hover:text-champagne transition-colors duration-300">
    {index % 4 === 0 && <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />}
    {index % 4 === 1 && <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />}
    {index % 4 === 2 && <path d="M12 2v20M2 12h20" />}
    {index % 4 === 3 && <circle cx="12" cy="12" r="10" />}
  </svg>
)

export default function LuxuryAmenities() {
  return (
    <section className="section-padding bg-deep-black relative overflow-hidden" aria-label="Luxury Amenities">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              World Class Facilities
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
            Curated <span className="italic text-gradient-gold">Amenities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 group hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,169,110,0.1)] border border-glass-border hover:border-champagne/30"
            >
              <div className="w-12 h-12 rounded-full bg-glass-strong flex items-center justify-center group-hover:bg-champagne/10 transition-colors duration-500">
                {getIcon(index)}
              </div>
              <span className="text-warm-white text-sm font-light tracking-wide">{amenity}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
