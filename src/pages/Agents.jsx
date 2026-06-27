import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const agents = [
  {
    id: 1,
    name: 'Alexander Sterling',
    position: 'Senior Partner, Europe',
    experience: '15 Years',
    languages: 'English, Italian, French',
    specialization: 'Historical Estates & Vineyards',
    email: 'alexander@aether.com',
    phone: '+44 20 7123 4567',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: 'With over 15 years in the ultra-luxury European market, Alexander has discreetly brokered some of the most significant historical estates in Italy and France. His deep architectural knowledge and vast network of private banking connections make him the premier choice for heritage acquisitions.',
    recentSales: '$450M in 2025'
  },
  {
    id: 2,
    name: 'Isabella Chen',
    position: 'Director, Asia Pacific',
    experience: '12 Years',
    languages: 'English, Mandarin, Cantonese',
    specialization: 'Penthouses & Modern Villas',
    email: 'isabella@aether.com',
    phone: '+852 2123 4567',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Isabella leads our expansion into the Asian ultra-luxury sector, specializing in off-market modern penthouses in Singapore and Hong Kong. She is known for her unparalleled negotiation skills and understanding of Feng Shui principles in modern architecture.',
    recentSales: '$380M in 2025'
  },
  {
    id: 3,
    name: 'Marcus Al-Fayed',
    position: 'Managing Partner, MENA',
    experience: '20 Years',
    languages: 'English, Arabic, French',
    specialization: 'Trophy Assets & Private Islands',
    email: 'marcus@aether.com',
    phone: '+971 4 123 4567',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    bio: 'Marcus represents royalty and ultra-high-net-worth individuals across the Middle East. His portfolio includes private islands, massive compounds, and the most exclusive trophy assets in Dubai and Abu Dhabi.',
    recentSales: '$620M in 2025'
  }
]

export default function Agents() {
  const [selectedAgent, setSelectedAgent] = useState(null)

  return (
    <main className="bg-deep-black min-h-screen pt-32 pb-20">
      <Helmet>
        <title>Our Global Advisors | Aether Estates</title>
        <meta name="description" content="Connect with our world-class team of luxury real estate professionals. Selected for their discretion, expertise, and unparalleled global network." />
      </Helmet>
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Global Expertise
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-warm-white tracking-tight mb-8">
            Our <span className="italic text-gradient-gold">Advisors</span>
          </h1>
          <p className="text-soft-grey font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with our world-class team of luxury real estate professionals. Selected for their discretion, expertise, and unparalleled global network.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedAgent(agent)}
              className="glass-panel rounded-3xl border border-glass-border overflow-hidden cursor-pointer group hover:border-champagne/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-80 relative overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent opacity-80" />
                
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-glass-strong backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 border border-champagne/30">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-champagne">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-[0.55rem] tracking-widest uppercase text-champagne font-medium">Verified Partner</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-8 relative -mt-10 bg-gradient-to-t from-deep-black via-deep-black to-transparent">
                <h3 className="font-heading text-2xl text-warm-white mb-1">{agent.name}</h3>
                <p className="text-champagne text-xs tracking-widest uppercase mb-6">{agent.position}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between border-b border-glass-border pb-2">
                    <span className="text-soft-grey text-xs">Experience</span>
                    <span className="text-warm-white text-sm">{agent.experience}</span>
                  </div>
                  <div className="flex justify-between border-b border-glass-border pb-2">
                    <span className="text-soft-grey text-xs">Specialty</span>
                    <span className="text-warm-white text-sm text-right max-w-[150px] truncate">{agent.specialization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 btn-outline text-xs justify-center py-2" onClick={(e) => { e.stopPropagation(); setSelectedAgent(agent); }}>
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Profile Modal */}
      <AnimatePresence>
        {selectedAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-deep-black/95 backdrop-blur-xl"
              onClick={() => setSelectedAgent(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-glass-border scrollbar-hide bg-rich-black/90"
            >
              <button 
                onClick={() => setSelectedAgent(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-glass-strong border border-glass-border flex items-center justify-center text-soft-grey hover:text-warm-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Left: Image & Quick Stats */}
                <div className="w-full md:w-2/5 relative">
                  <div className="h-64 md:h-full md:absolute md:inset-0">
                    <img src={selectedAgent.image} alt={selectedAgent.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent md:bg-gradient-to-r" />
                  </div>
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-3/5 p-8 md:p-12 relative z-10">
                  <span className="text-champagne text-xs tracking-[0.2em] uppercase font-medium">{selectedAgent.position}</span>
                  <h2 className="font-heading text-4xl text-warm-white mt-2 mb-6">{selectedAgent.name}</h2>
                  
                  <p className="text-soft-grey font-light leading-relaxed mb-8">
                    {selectedAgent.bio}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div>
                      <p className="text-soft-grey text-[0.65rem] tracking-widest uppercase mb-1">Languages</p>
                      <p className="text-warm-white text-sm">{selectedAgent.languages}</p>
                    </div>
                    <div>
                      <p className="text-soft-grey text-[0.65rem] tracking-widest uppercase mb-1">Recent Performance</p>
                      <p className="text-warm-white text-sm">{selectedAgent.recentSales}</p>
                    </div>
                    <div>
                      <p className="text-soft-grey text-[0.65rem] tracking-widest uppercase mb-1">Direct Line</p>
                      <p className="text-warm-white text-sm">{selectedAgent.phone}</p>
                    </div>
                    <div>
                      <p className="text-soft-grey text-[0.65rem] tracking-widest uppercase mb-1">Email</p>
                      <p className="text-warm-white text-sm">{selectedAgent.email}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-glass-border">
                    <button className="btn-primary">Schedule Meeting</button>
                    <button className="btn-outline">WhatsApp</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
