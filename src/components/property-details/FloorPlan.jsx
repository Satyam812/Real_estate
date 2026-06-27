import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rooms = [
  { id: 'living', name: 'Living Room', size: '850 sq ft', path: 'M10 10 h 200 v 150 h -200 z', desc: 'Expansive open-plan living area with double-height ceilings and panoramic ocean views.', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop' },
  { id: 'kitchen', name: 'Gourmet Kitchen', size: '400 sq ft', path: 'M210 10 h 120 v 100 h -120 z', desc: 'State-of-the-art chef\'s kitchen featuring Italian marble islands and Gaggenau appliances.', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&auto=format&fit=crop' },
  { id: 'dining', name: 'Dining Area', size: '300 sq ft', path: 'M210 110 h 120 v 50 h -120 z', desc: 'Elegant formal dining space comfortably seating 14 guests with temperature-controlled wine walls.', img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd0b?q=80&w=400&auto=format&fit=crop' },
  { id: 'master', name: 'Master Suite', size: '900 sq ft', path: 'M330 10 h 160 v 150 h -160 z', desc: 'Private sanctuary with dual walk-in wardrobes, private terrace, and spa-inspired ensuite.', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=400&auto=format&fit=crop' },
  { id: 'pool', name: 'Infinity Pool', size: '1,200 sq ft', path: 'M10 160 h 320 v 80 h -320 z', desc: 'Ozone-filtered heated infinity pool seamlessly blending with the horizon.', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop' },
  { id: 'garage', name: 'Garage Gallery', size: '1,500 sq ft', path: 'M330 160 h 160 v 80 h -160 z', desc: 'Climate-controlled 6-car gallery with dedicated electric vehicle charging stations.', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=400&auto=format&fit=crop' },
]

export default function FloorPlan() {
  const [activeRoom, setActiveRoom] = useState(rooms[0])

  return (
    <section className="section-padding bg-dark-grey/20" aria-label="Interactive Floor Plan">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Interactive SVG Floor Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-3/5"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-px bg-champagne/40" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Layout
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight mb-12">
              Architectural <span className="italic text-gradient-gold">Flow</span>
            </h2>

            <div className="relative w-full aspect-[2/1] bg-rich-black rounded-3xl border border-glass-border p-8 shadow-2xl flex items-center justify-center">
              {/* Minimalist stylized SVG floor plan */}
              <svg viewBox="0 0 500 250" className="w-full h-full max-h-[400px]">
                {/* Grid Background */}
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                </pattern>
                <rect width="500" height="250" fill="url(#grid)" />

                {/* Rooms */}
                {rooms.map((room) => {
                  const isActive = activeRoom.id === room.id
                  return (
                    <g 
                      key={room.id}
                      onClick={() => setActiveRoom(room)}
                      onMouseEnter={() => setActiveRoom(room)}
                      className="cursor-pointer transition-all duration-300"
                    >
                      <path 
                        d={room.path}
                        fill={isActive ? 'rgba(201,169,110,0.15)' : 'rgba(255,255,255,0.02)'}
                        stroke={isActive ? '#c9a96e' : 'rgba(255,255,255,0.1)'}
                        strokeWidth={isActive ? "2" : "1"}
                        className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      {isActive && (
                        <circle 
                          cx={room.path.split(' ')[1]} 
                          cy={room.path.split(' ')[2]} 
                          r="4" 
                          fill="#c9a96e"
                          className="animate-pulse"
                          transform={`translate(${room.path.includes('200') ? 100 : 60}, ${room.path.includes('150') ? 75 : 40})`} // Rough center approximation
                        />
                      )}
                    </g>
                  )
                })}
              </svg>
            </div>
          </motion.div>

          {/* Room Details Panel */}
          <div className="w-full lg:w-2/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-8 md:p-12 rounded-3xl"
              >
                <div className="h-48 md:h-64 w-full rounded-2xl overflow-hidden mb-8 relative">
                  <img 
                    src={activeRoom.img} 
                    alt={activeRoom.name}
                    className="w-full h-full object-cover"
                  loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className="text-champagne font-heading text-xl">{activeRoom.size}</p>
                  </div>
                </div>

                <h3 className="text-warm-white font-heading text-3xl mb-4 tracking-wide">
                  {activeRoom.name}
                </h3>
                
                <p className="text-soft-grey text-sm leading-relaxed font-light mb-8">
                  {activeRoom.desc}
                </p>

                <ul className="space-y-3">
                  {[1, 2, 3].map((_, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-champagne shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-warm-white/60 text-xs tracking-widest uppercase">Premium Feature {i + 1}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
