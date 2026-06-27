import { motion } from 'framer-motion'

export default function PropertyAdvisor() {
  return (
    <section className="section-padding bg-dark-grey/20" aria-label="Property Advisor">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="glass-panel p-8 md:p-16 rounded-3xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center relative z-10">
            {/* Advisor Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/3 max-w-[400px]"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-glass-border relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Alexander Sterling - Property Advisor" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-champagne font-heading text-2xl">Alexander Sterling</p>
                  <p className="text-soft-grey text-xs tracking-widest uppercase mt-1">Senior Partner</p>
                </div>
              </div>
            </motion.div>

            {/* Advisor Details */}
            <div className="w-full lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-px bg-champagne/40" />
                  <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                    Expert Guidance
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-warm-white tracking-tight mb-6">
                  Your Personal <span className="italic text-gradient-gold">Property Advisor</span>
                </h2>
                <p className="text-soft-grey font-light leading-relaxed mb-10 max-w-2xl">
                  With over 15 years of experience in the ultra-luxury market, Alexander brings unparalleled expertise and discretion to your property acquisition journey. Specializing in off-market trophy assets across Europe and the Middle East.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="text-soft-grey text-[0.65rem] tracking-widest uppercase font-light mb-2">Languages Spoken</p>
                    <p className="text-warm-white font-light">English, Italian, French, Arabic</p>
                  </div>
                  <div>
                    <p className="text-soft-grey text-[0.65rem] tracking-widest uppercase font-light mb-2">Total Sales Volume</p>
                    <p className="text-warm-white font-light">$2.4 Billion+</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    Call Now
                  </button>
                  <button className="btn-outline">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    WhatsApp
                  </button>
                  <button className="btn-outline">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Schedule Meeting
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
