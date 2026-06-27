import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SharedPropertyCard({ property, index }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg'])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer perspective-1000"
      role="article"
      aria-label={`${property.name} - ${property.location}`}
    >
      <div className="relative rounded-2xl overflow-hidden bg-rich-black border border-glass-border hover:border-champagne/20 transition-all duration-700 shadow-xl shadow-black/20">
        {/* Image container */}
        <div className="relative h-[320px] md:h-[400px] lg:h-[460px] overflow-hidden">
          <motion.img
            src={property.image}
            alt={`${property.name} - Luxury property in ${property.location}`}
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            loading="lazy"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

          {/* Tag */}
          {property.tag && (
            <div className="absolute top-5 left-5">
              <span className="px-4 py-1.5 bg-[rgba(201,169,110,0.15)] backdrop-blur-md border border-champagne/20 text-champagne text-[0.65rem] tracking-[0.2em] uppercase font-light rounded-full">
                {property.tag}
              </span>
            </div>
          )}

          {/* Price overlay */}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="font-heading text-3xl md:text-4xl text-warm-white font-light tracking-tight">
              {property.price}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Name & Location */}
          <h3 className="font-heading text-2xl md:text-3xl text-warm-white font-light mb-2 tracking-tight group-hover:text-champagne-light transition-colors duration-500">
            {property.name}
          </h3>
          <div className="flex items-center gap-2 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-champagne/60" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-soft-grey text-sm font-light">{property.location}</span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-glass-border mb-6" aria-hidden="true" />

          {/* Features */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-champagne/50" aria-hidden="true">
                <path d="M2 4v16" />
                <path d="M2 8h18a2 2 0 012 2v10" />
                <path d="M2 17h20" />
                <path d="M6 8v9" />
              </svg>
              <span className="text-warm-white/80 text-sm font-light">{property.bedrooms} <span className="text-soft-grey">Beds</span></span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-champagne/50" aria-hidden="true">
                <path d="M4 12h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                <path d="M6 12V5a1 1 0 011-1h2a1 1 0 011 1v7" />
                <path d="M4 17v2" />
                <path d="M20 17v2" />
              </svg>
              <span className="text-warm-white/80 text-sm font-light">{property.bathrooms} <span className="text-soft-grey">Baths</span></span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-champagne/50" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              <span className="text-warm-white/80 text-sm font-light">{property.sqft} <span className="text-soft-grey">Sq Ft</span></span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <Link
              to={`/properties/${property.id}`}
              className="flex items-center gap-2 text-champagne text-sm tracking-[0.1em] uppercase font-light group/btn hover:gap-3 transition-all duration-500"
              aria-label={`View details of ${property.name}`}
            >
              <span>View Details</span>
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <button
              className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center hover:border-champagne/30 hover:bg-champagne/5 transition-all duration-500 z-10"
              aria-label={`Save ${property.name} to favorites`}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-soft-grey hover:text-champagne transition-colors duration-300" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
