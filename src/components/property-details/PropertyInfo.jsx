import { motion } from 'framer-motion'

const specs = [
  { label: 'Property Type', value: 'Luxury Villa' },
  { label: 'Total Area', value: '15,000 Sq Ft' },
  { label: 'Year Built', value: '2025' },
  { label: 'Bedrooms', value: '9' },
  { label: 'Bathrooms', value: '12' },
  { label: 'Garage', value: '6 Cars' },
  { label: 'Architecture', value: 'Modern Coastal' },
  { label: 'Construction', value: 'Premium Grade A' },
  { label: 'Energy Rating', value: 'A+ (Net Zero)' },
]

export default function PropertyInfo() {
  return (
    <section className="section-padding" aria-label="Property Overview">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Overview Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-champagne/40" />
                <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                  The Vision
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight mb-8">
                Uncompromising <span className="italic text-gradient-gold">Excellence</span>
              </h2>
              
              <div className="space-y-6 text-soft-grey font-light leading-relaxed">
                <p>
                  Perched atop the dramatic cliffs of the Amalfi Coast, The Belvedere represents a once-in-a-generation opportunity to acquire a property of such distinction. Conceived by award-winning architects, the residence effortlessly erases the boundaries between indoor and outdoor living.
                </p>
                <p>
                  Every material has been meticulously sourced globally—from hand-cut Italian travertine floors to custom Japanese woodwork. The property is designed not just as a home, but as a living piece of art that responds to its breathtaking natural environment.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Specifications Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="absolute -inset-4 bg-glass-frost rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <p className="text-soft-grey text-[0.65rem] tracking-[0.2em] uppercase font-light mb-2">{spec.label}</p>
                  <p className="text-warm-white font-heading text-xl md:text-2xl font-light">{spec.value}</p>
                  <div className="h-px w-0 bg-champagne mt-4 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
