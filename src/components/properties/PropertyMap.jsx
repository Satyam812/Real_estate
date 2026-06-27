import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const locations = [
  { id: 1, name: 'Villa Serenità', top: '35%', left: '42%', type: 'property' },
  { id: 2, name: 'International Airport', top: '20%', left: '75%', type: 'airport' },
  { id: 3, name: 'Premium Shopping', top: '55%', left: '30%', type: 'shopping' },
  { id: 4, name: 'Marina & Yacht Club', top: '65%', left: '55%', type: 'marina' },
  { id: 5, name: 'Private Clinic', top: '45%', left: '65%', type: 'hospital' },
]

export default function PropertyMap() {
  const [activeMarker, setActiveMarker] = useState(null)

  return (
    <section className="section-padding bg-dark-grey/20" aria-label="Interactive Map">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-champagne/40" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Location & Lifestyle
              </span>
              <span className="w-12 h-px bg-champagne/40" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
              Discover the <span className="italic text-gradient-gold">Neighborhood</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-rich-black rounded-3xl overflow-hidden border border-glass-border shadow-2xl"
        >
          {/* Mock Map Background - A stylized grid/topography for premium feel */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at center, var(--color-champagne) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/50" />
          
          {/* Map Image (Stylized) */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop&grayscale=1" 
            alt="Stylized map area" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          loading="lazy" decoding="async" />

          {/* Markers */}
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className="absolute" 
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => setActiveMarker(loc.id)}
              onMouseLeave={() => setActiveMarker(null)}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20">
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  loc.type === 'property' 
                    ? 'bg-champagne border-champagne shadow-[0_0_15px_rgba(201,169,110,0.5)]' 
                    : 'bg-warm-white border-warm-white/50 group-hover:bg-champagne group-hover:border-champagne'
                }`} />
                
                {/* Ping effect for property */}
                {loc.type === 'property' && (
                  <div className="absolute inset-0 rounded-full border border-champagne animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                )}

                {/* Tooltip */}
                <AnimatePresence>
                  {activeMarker === loc.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap"
                    >
                      <div className="glass-panel px-4 py-2 rounded-lg text-sm font-light text-warm-white flex items-center gap-2">
                        {loc.type === 'property' && <span className="w-2 h-2 rounded-full bg-champagne" />}
                        {loc.name}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 glass-panel p-4 rounded-xl flex flex-col gap-3">
            <h4 className="text-warm-white text-xs tracking-[0.1em] uppercase font-medium mb-1">Legend</h4>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-champagne shadow-[0_0_8px_rgba(201,169,110,0.6)]" />
              <span className="text-soft-grey text-xs font-light">Featured Property</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-warm-white" />
              <span className="text-soft-grey text-xs font-light">Nearby Amenities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
