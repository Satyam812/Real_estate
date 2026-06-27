import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Eleanor Vance',
    title: 'Acquired Villa Azure',
    text: 'Aether Estates completely redefined my expectations of luxury real estate. The level of detail in their curation and the discretion of their advisors is simply unmatched in the industry.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'James Cavendish',
    title: 'Acquired The Pinnacle',
    text: 'From the initial private viewing to the final handover, the experience was flawless. They don\'t just sell properties; they orchestrate a seamless transition into a new lifestyle.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  }
]

export default function ClientReviews() {
  return (
    <section className="section-padding bg-dark-grey/20 relative overflow-hidden" aria-label="Client Testimonials">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Client Perspectives
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
            Verified <span className="italic text-gradient-gold">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 md:p-12 rounded-3xl border border-glass-border relative group hover:border-champagne/30 transition-colors duration-500"
            >
              {/* Quote Mark */}
              <div className="absolute top-8 right-8 opacity-10 text-champagne">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-champagne">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-warm-white font-light text-lg md:text-xl leading-relaxed mb-10 italic relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-glass-border group-hover:border-champagne/50 transition-colors duration-500">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-warm-white font-medium">{review.name}</p>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-champagne">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-soft-grey text-xs tracking-widest uppercase mt-1">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
