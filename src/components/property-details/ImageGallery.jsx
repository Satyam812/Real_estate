import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd0b?q=80&w=1200&auto=format&fit=crop',
]

export default function ImageGallery() {
  const [selectedImg, setSelectedImg] = useState(null)
  
  useEffect(() => {
    if (selectedImg !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedImg])

  return (
    <section className="section-padding bg-dark-grey/20" aria-label="Property Gallery">
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
              Visual Journey
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
            Curated <span className="italic text-gradient-gold">Gallery</span>
          </h2>
        </motion.div>

        {/* Masonry Layout - pure CSS based */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-xl overflow-hidden group cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(index)}
            >
              <img 
                src={src} 
                alt={`Property view ${index + 1}`} 
                className="w-full h-auto block transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/30 transition-colors duration-500 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-warm-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99999] bg-deep-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-glass-panel border border-glass-border flex items-center justify-center text-soft-grey hover:text-warm-white hover:border-champagne/50 transition-all duration-300 z-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Navigation */}
            <button 
              onClick={() => setSelectedImg((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-8 w-14 h-14 rounded-full bg-glass-panel border border-glass-border hidden md:flex items-center justify-center text-soft-grey hover:text-champagne transition-all duration-300 z-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button 
              onClick={() => setSelectedImg((prev) => (prev + 1) % images.length)}
              className="absolute right-8 w-14 h-14 rounded-full bg-glass-panel border border-glass-border hidden md:flex items-center justify-center text-soft-grey hover:text-champagne transition-all duration-300 z-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedImg}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-7xl max-h-[90vh] px-4"
            >
              <img 
                src={images[selectedImg]} 
                alt="Fullscreen view" 
                className="w-full h-full object-contain max-h-[85vh]"
              loading="lazy" decoding="async" />
              <div className="absolute bottom-[-40px] left-0 w-full text-center text-soft-grey text-sm tracking-widest font-light">
                {selectedImg + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
