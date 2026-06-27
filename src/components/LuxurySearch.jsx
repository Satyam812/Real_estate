import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const locations = [
  'All Locations', 'Beverly Hills', 'Monaco', 'Dubai', 'Maldives', 'Ibiza', 'Saint-Tropez', 'Aspen', 'Lake Como'
]

const propertyTypes = [
  'All Types', 'Villa', 'Penthouse', 'Estate', 'Mansion', 'Chateau', 'Island Retreat'
]

const budgetRanges = [
  'Any Budget', '$1M – $5M', '$5M – $10M', '$10M – $25M', '$25M – $50M', '$50M+'
]

const bedroomOptions = [
  'Any', '2+', '3+', '4+', '5+', '6+', '8+', '10+'
]

export default function LuxurySearch() {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const [activeField, setActiveField] = useState(null)
  const [values, setValues] = useState({
    location: 'All Locations',
    type: 'All Types',
    budget: 'Any Budget',
    bedrooms: 'Any',
  })

  const handleSelect = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }))
    setActiveField(null)
  }

  const fields = [
    {
      key: 'location',
      label: 'Location',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      options: locations,
    },
    {
      key: 'type',
      label: 'Property Type',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      options: propertyTypes,
    },
    {
      key: 'budget',
      label: 'Budget',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      options: budgetRanges,
    },
    {
      key: 'bedrooms',
      label: 'Bedrooms',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 4v16" />
          <path d="M2 8h18a2 2 0 012 2v10" />
          <path d="M2 17h20" />
          <path d="M6 8v9" />
        </svg>
      ),
      options: bedroomOptions,
    },
  ]

  return (
    <section className="relative z-30 -mt-16 md:-mt-20 px-4 md:px-8" aria-label="Property search">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto"
      >
        <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {fields.map((field) => (
              <div key={field.key} className="relative">
                <label className="text-[0.65rem] text-soft-grey tracking-[0.2em] uppercase mb-2 block font-light">
                  {field.label}
                </label>
                <button
                  onClick={() => setActiveField(activeField === field.key ? null : field.key)}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-[rgba(255,255,255,0.04)] border border-glass-border rounded-lg text-warm-white text-sm font-light hover:border-champagne/30 transition-all duration-300 focus:outline-none focus:border-champagne/50"
                  aria-haspopup="listbox"
                  aria-expanded={activeField === field.key}
                  aria-label={`Select ${field.label}`}
                >
                  <span className="text-champagne/70">{field.icon}</span>
                  <span className="flex-1 text-left truncate">{values[field.key]}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-soft-grey transition-transform duration-300 ${activeField === field.key ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Dropdown */}
                {activeField === field.key && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[rgba(20,20,20,0.97)] backdrop-blur-xl border border-glass-border rounded-lg overflow-hidden z-50 shadow-xl shadow-black/40"
                    role="listbox"
                    aria-label={`${field.label} options`}
                  >
                    {field.options.map((option) => (
                      <button
                        key={option}
                        role="option"
                        aria-selected={values[field.key] === option}
                        onClick={() => handleSelect(field.key, option)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-light transition-all duration-200 ${
                          values[field.key] === option
                            ? 'bg-champagne/10 text-champagne'
                            : 'text-warm-white/70 hover:bg-white/5 hover:text-warm-white'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* Search button */}
            <div className="flex items-end">
              <button
                className="w-full px-6 py-3 bg-gradient-to-r from-champagne to-champagne-dark text-deep-black font-medium text-sm tracking-[0.12em] uppercase rounded-lg hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] hover:-translate-y-0.5 transition-all duration-500 flex items-center justify-center gap-2"
                aria-label="Search properties"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
