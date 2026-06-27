import { motion } from 'framer-motion'

const amenities = [
  { name: 'International Airport', time: '25 min', type: 'Drive' },
  { name: 'Pevero Golf Club', time: '10 min', type: 'Drive' },
  { name: 'Private Beach Access', time: '5 min', type: 'Walk' },
  { name: 'Luxury Shopping District', time: '15 min', type: 'Drive' },
  { name: 'International School', time: '20 min', type: 'Drive' },
  { name: 'Michelin Star Restaurants', time: '10 min', type: 'Drive' },
  { name: 'Marina & Yacht Club', time: '12 min', type: 'Drive' },
  { name: 'Premium Healthcare', time: '18 min', type: 'Drive' },
]

export default function PropertyLocation() {
  return (
    <section className="section-padding bg-rich-black relative" aria-label="Property Location">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Map Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-glass-border shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop&grayscale=1" 
                alt="Location Map" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
              loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/30" />
              
              {/* Central Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 rounded-full bg-champagne border-4 border-deep-black shadow-[0_0_20px_rgba(201,169,110,0.8)] relative z-10" />
                <div className="absolute inset-0 rounded-full border border-champagne animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-panel px-4 py-2 rounded-lg text-warm-white text-xs whitespace-nowrap backdrop-blur-xl">
                  The Belvedere
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-champagne/40" />
                <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                  Prime Location
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight mb-6">
                Connected to <span className="italic text-gradient-gold">Excellence</span>
              </h2>
              <p className="text-soft-grey font-light leading-relaxed">
                Situated in one of the most exclusive enclaves in the world, ensuring supreme privacy while remaining seamlessly connected to essential luxury amenities and international travel hubs.
              </p>
            </motion.div>

            {/* Distances Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {amenities.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between border-b border-glass-border pb-4 group"
                >
                  <span className="text-warm-white text-sm font-light group-hover:text-champagne transition-colors duration-300">
                    {item.name}
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-champagne font-heading text-lg leading-none">{item.time}</span>
                    <span className="text-soft-grey text-[0.6rem] tracking-widest uppercase">{item.type}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
