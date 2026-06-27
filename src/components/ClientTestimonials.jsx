import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Global Investor',
    text: 'Aether Estates completely redefined my expectations of luxury real estate. The level of detail in their curation and the discretion of their advisors is simply unmatched in the industry. Finding my Amalfi coast villa was a seamless, exquisite journey.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'James Cavendish',
    role: 'CEO, Horizon Capital',
    text: 'From the initial private viewing to the final handover, the experience was flawless. They don\'t just sell properties; they orchestrate a seamless transition into a new lifestyle. Their knowledge of off-market trophy assets is unparalleled.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sofia Rossi',
    role: 'Architectural Designer',
    text: 'As someone deeply embedded in design, I appreciate partners who understand the nuance of true architectural pedigree. Aether Estates curates a portfolio that appeals to the most discerning aesthetic sensibilities.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
  }
]

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-padding bg-dark-grey/20 relative overflow-hidden" aria-label="Client Testimonials">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-champagne/40" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Verified Experiences
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-warm-white tracking-tight">
              Client <span className="italic text-gradient-gold">Perspectives</span>
            </h2>
          </motion.div>

          <div className="flex gap-4 pb-2">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-glass-border flex items-center justify-center text-soft-grey hover:text-champagne hover:border-champagne/50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-glass-border flex items-center justify-center text-soft-grey hover:text-champagne hover:border-champagne/50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 glass-panel p-8 md:p-12 lg:p-16 rounded-3xl border border-glass-border flex flex-col md:flex-row gap-8 md:gap-16 items-center"
            >
              {/* Image */}
              <div className="w-24 h-24 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-2 border-champagne/30 relative">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy" decoding="async" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left relative">
                <div className="absolute -top-10 -left-6 opacity-10 text-champagne hidden md:block">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-warm-white font-light text-lg md:text-2xl leading-relaxed mb-8 italic relative z-10">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <p className="text-warm-white font-medium text-lg">{testimonials[currentIndex].name}</p>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-champagne">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <p className="text-soft-grey text-xs tracking-widest uppercase">{testimonials[currentIndex].role}</p>
                  </div>
                  
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-champagne">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentIndex === idx ? 'w-8 bg-champagne' : 'w-2 bg-glass-border hover:bg-soft-grey'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
