import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Alexander Sterling',
    role: 'CEO, Sterling Holdings',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    text: 'Aether Estates provided an unparalleled experience. Their curation of properties is unmatched, and they found us a residence that perfectly balances privacy with breathtaking architectural design.'
  },
  {
    id: 2,
    name: 'Eleanor Vance',
    role: 'Philanthropist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    text: 'From the initial consultation to the final closing, the level of discretion and professionalism was extraordinary. They truly understand the nuances of the ultra-luxury market.'
  },
  {
    id: 3,
    name: 'Jameson Locke',
    role: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    text: 'Acquiring my beachfront villa through Aether was seamless. Their portfolio features properties that aren\'t just homes, but generational assets of exceptional quality.'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-deep-black relative overflow-hidden" aria-label="Client Testimonials">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Client Perspectives
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
            Words of <span className="italic text-gradient-gold">Distinction</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <div className="glass-panel p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center items-center text-center relative">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 text-champagne/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-warm-white leading-relaxed mb-8 px-4 md:px-12">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border border-champagne/30"
                  loading="lazy" decoding="async" />
                  <div>
                    <h4 className="text-warm-white text-sm tracking-widest uppercase mb-1">{testimonials[currentIndex].name}</h4>
                    <p className="text-soft-grey text-xs font-light">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-soft-grey hover:text-champagne transition-colors duration-300 z-20"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2">
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-soft-grey hover:text-champagne transition-colors duration-300 z-20"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
