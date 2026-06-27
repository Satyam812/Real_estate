import { motion } from 'framer-motion'

export default function SignatureProperty() {
  return (
    <section className="relative py-32 overflow-hidden bg-deep-black" aria-label="Signature Property">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1613490908578-8326a0c78a05?q=80&w=2800&auto=format&fit=crop" 
            alt="Signature Property Exterior" 
            className="w-full h-full object-cover opacity-40"
          loading="lazy" decoding="async" />
        </motion.div>
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/30" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-champagne/40" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Signature Estate
              </span>
            </div>
            
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-warm-white tracking-tight mb-6">
              The <span className="italic text-gradient-gold">Belvedere</span>
            </h2>
            
            <p className="text-soft-grey text-lg font-light leading-relaxed mb-10 max-w-xl">
              An architectural masterpiece suspended between sea and sky. This exclusive residence redefines luxury with panoramic ocean views, bespoke Italian finishes, and unparalleled privacy.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-warm-white font-heading text-3xl font-light mb-1">$45.5M</p>
                <p className="text-soft-grey text-[0.65rem] tracking-[0.2em] uppercase font-light">Listing Price</p>
              </div>
              <div>
                <p className="text-warm-white font-heading text-3xl font-light mb-1">15,000</p>
                <p className="text-soft-grey text-[0.65rem] tracking-[0.2em] uppercase font-light">Square Feet</p>
              </div>
              <div>
                <p className="text-warm-white font-heading text-3xl font-light mb-1">9</p>
                <p className="text-soft-grey text-[0.65rem] tracking-[0.2em] uppercase font-light">Bedrooms</p>
              </div>
              <div>
                <p className="text-warm-white font-heading text-3xl font-light mb-1">12</p>
                <p className="text-soft-grey text-[0.65rem] tracking-[0.2em] uppercase font-light">Bathrooms</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="btn-primary">
                <span>Explore Property</span>
              </button>
              <button className="btn-outline">
                <span>Schedule Visit</span>
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Floating glass card detailing features */}
            <div className="glass-panel p-8 rounded-2xl max-w-sm ml-auto mr-auto lg:mr-0 mt-8 lg:mt-0 relative z-20 shadow-2xl">
              <h3 className="text-warm-white font-heading text-2xl mb-6 tracking-wide">Premium Features</h3>
              <ul className="space-y-4">
                {[
                  'Infinity edge pool with ocean views',
                  'Private helipad and 6-car gallery',
                  'State-of-the-art wellness spa',
                  'Temperature-controlled wine cellar',
                  'Smart home automation system'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-champagne shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-soft-grey text-sm font-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-champagne/10 blur-3xl rounded-full z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
