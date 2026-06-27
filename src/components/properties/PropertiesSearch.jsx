import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PropertiesSearch() {
  const [focusedField, setFocusedField] = useState(null)

  const fields = [
    { id: 'location', label: 'Location', placeholder: 'City, Neighborhood' },
    { id: 'type', label: 'Property Type', placeholder: 'Villa, Penthouse...' },
    { id: 'budget', label: 'Budget', placeholder: '$5M - $20M' },
    { id: 'beds', label: 'Bedrooms', placeholder: 'Any' },
    { id: 'baths', label: 'Bathrooms', placeholder: 'Any' },
    { id: 'size', label: 'Property Size', placeholder: 'Sq Ft' },
  ]

  return (
    <section className="relative -mt-24 z-30 px-6 max-w-[1400px] mx-auto" aria-label="Property Search">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-2xl p-6 md:p-10 shadow-2xl shadow-black/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {fields.map((field) => (
            <div key={field.id} className="relative group">
              <label 
                htmlFor={field.id} 
                className="block text-[0.65rem] tracking-[0.2em] uppercase text-soft-grey mb-2 transition-colors duration-300 group-hover:text-champagne-light"
              >
                {field.label}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id={field.id}
                  placeholder={field.placeholder}
                  onFocus={() => setFocusedField(field.id)}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-glass-border py-2 text-warm-white text-sm md:text-base focus:outline-none focus:border-transparent transition-colors placeholder:text-warm-white/20"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-champagne to-champagne-dark"
                  initial={{ width: '0%' }}
                  animate={{ width: focusedField === field.id ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="btn-primary w-full md:w-auto md:min-w-[280px] justify-center">
            <span>Premium Search</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  )
}
