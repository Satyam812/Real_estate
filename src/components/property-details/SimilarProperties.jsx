import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SharedPropertyCard from '../SharedPropertyCard'

const properties = [
  { id: 2, title: 'Villa Azure', location: 'French Riviera', price: '$38,000,000', size: '12,500 Sq Ft', beds: 7, baths: 9, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'The Pinnacle', location: 'Monaco', price: '$65,000,000', size: '18,000 Sq Ft', beds: 5, baths: 7, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Oasis Estate', location: 'Dubai, UAE', price: '$22,500,000', size: '9,000 Sq Ft', beds: 6, baths: 8, image: 'https://images.unsplash.com/photo-1613490908578-8326a0c78a05?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Alpine Retreat', location: 'Swiss Alps', price: '$41,000,000', size: '14,000 Sq Ft', beds: 8, baths: 10, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop' },
]

export default function SimilarProperties() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Horizontal scroll effect based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <section ref={containerRef} className="section-padding bg-deep-black overflow-hidden" aria-label="Similar Properties">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-champagne/40" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Curated Collection
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
              Similar <span className="italic text-gradient-gold">Residences</span>
            </h2>
          </div>
          <button className="btn-outline">View All Properties</button>
        </motion.div>
      </div>

      <div className="px-6 md:px-10">
        <motion.div 
          style={{ x }}
          className="flex gap-6 md:gap-10 w-max"
        >
          {properties.map((property) => (
            <div key={property.id} className="w-[85vw] md:w-[600px] lg:w-[700px]">
              <SharedPropertyCard {...property} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
