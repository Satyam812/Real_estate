import { motion } from 'framer-motion'

const categories = [
  { name: 'Luxury Villas', count: '42' },
  { name: 'Modern Homes', count: '28' },
  { name: 'Beachfront Villas', count: '15' },
  { name: 'Penthouses', count: '34' },
  { name: 'Mountain Retreats', count: '12' },
  { name: 'Smart Homes', count: '18' },
  { name: 'Commercial Spaces', count: '8' },
  { name: 'Vacation Homes', count: '24' }
]

export default function PropertyCategories() {
  return (
    <section className="section-padding" aria-label="Property Categories">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Explore Collections
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
            Curated by <span className="italic text-gradient-gold">Lifestyle</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-32 md:h-40 glass-panel-light rounded-xl overflow-hidden flex flex-col justify-end p-5 md:p-6 transition-all duration-500 hover:border-champagne/30"
            >
              {/* Background hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-champagne/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-warm-white font-heading text-xl md:text-2xl font-light group-hover:text-champagne transition-colors duration-300">
                  {category.name}
                </span>
                <div className="flex items-center gap-2 text-soft-grey text-[0.7rem] uppercase tracking-widest font-light">
                  <span className="w-4 h-px bg-champagne/50 transition-all duration-300 group-hover:w-8 group-hover:bg-champagne" />
                  {category.count} Properties
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
