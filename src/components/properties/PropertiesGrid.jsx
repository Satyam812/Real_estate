import { motion } from 'framer-motion'
import SharedPropertyCard from '../SharedPropertyCard'

// Generate 12 premium properties
const properties = [
  {
    id: 1,
    name: 'Villa Serenità',
    location: 'Amalfi Coast, Italy',
    price: '$12,500,000',
    bedrooms: 6,
    bathrooms: 8,
    sqft: '12,400',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    tag: 'Featured',
  },
  {
    id: 2,
    name: 'The Apex Penthouse',
    location: 'Manhattan, New York',
    price: '$28,900,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,200',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    tag: 'Exclusive',
  },
  {
    id: 3,
    name: 'Azure Bay Estate',
    location: 'Turks & Caicos',
    price: '$18,750,000',
    bedrooms: 8,
    bathrooms: 10,
    sqft: '15,800',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
    tag: 'New Listing',
  },
  {
    id: 4,
    name: 'Lumière Residence',
    location: 'Beverly Hills, CA',
    price: '$35,000,000',
    bedrooms: 7,
    bathrooms: 9,
    sqft: '18,500',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Casa del Sol',
    location: 'Ibiza, Spain',
    price: '$14,200,000',
    bedrooms: 5,
    bathrooms: 5,
    sqft: '9,800',
    image: 'https://images.unsplash.com/photo-1613490908578-8326a0c78a05?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'The Glass House',
    location: 'Aspen, Colorado',
    price: '$22,500,000',
    bedrooms: 6,
    bathrooms: 7,
    sqft: '11,200',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop',
    tag: 'Sold',
  },
  {
    id: 7,
    name: 'Monaco Bay Villa',
    location: 'Monaco',
    price: '$45,000,000',
    bedrooms: 8,
    bathrooms: 12,
    sqft: '22,000',
    image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1200&auto=format&fit=crop',
    tag: 'Featured',
  },
  {
    id: 8,
    name: 'Oasis Retreat',
    location: 'Dubai, UAE',
    price: '$19,800,000',
    bedrooms: 6,
    bathrooms: 8,
    sqft: '14,500',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Alpine Chalet',
    location: 'Gstaad, Switzerland',
    price: '$16,500,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,900',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'The Crown Estate',
    location: 'London, UK',
    price: '$52,000,000',
    bedrooms: 10,
    bathrooms: 14,
    sqft: '28,000',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop',
    tag: 'Exclusive',
  },
  {
    id: 11,
    name: 'Oceanic Manor',
    location: 'Miami, FL',
    price: '$24,900,000',
    bedrooms: 7,
    bathrooms: 9,
    sqft: '16,200',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd0b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 12,
    name: 'Zen Garden House',
    location: 'Kyoto, Japan',
    price: '$11,200,000',
    bedrooms: 4,
    bathrooms: 4,
    sqft: '6,500',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop',
  }
]

export default function PropertiesGrid() {
  return (
    <section className="section-padding bg-dark-grey/30" aria-label="Available Properties">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-champagne/40" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
              Exceptional <span className="italic text-gradient-gold">Residences</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4"
          >
            <button className="text-soft-grey text-sm tracking-widest uppercase hover:text-champagne transition-colors duration-300">
              Sort By
            </button>
            <span className="text-glass-border">|</span>
            <button className="text-soft-grey text-sm tracking-widest uppercase hover:text-champagne transition-colors duration-300">
              Filter
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property, index) => (
            <SharedPropertyCard key={property.id} property={property} index={index % 6} />
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="btn-outline"
          >
            Load More Properties
          </motion.button>
        </div>
      </div>
    </section>
  )
}
