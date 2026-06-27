import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TourUI({ 
  activeRoom, 
  setActiveRoom, 
  timeOfDay, 
  setTimeOfDay, 
  smartControls, 
  setSmartControls,
  onShowGallery,
  onShowBooking
}) {
  const [showSmartControls, setShowSmartControls] = useState(false)
  const [showInfo, setShowInfo] = useState(true)

  const toggleControl = (key) => {
    setSmartControls(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      
      {/* Top Bar - Property Info & Time Controls */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto"
        >
          <h1 className="font-heading text-2xl md:text-3xl text-warm-white tracking-wide drop-shadow-lg">
            The Belvedere
          </h1>
          <p className="text-champagne text-xs tracking-widest uppercase mt-1 drop-shadow-md">Amalfi Coast, Italy</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto flex bg-glass-strong backdrop-blur-xl rounded-full p-1 border border-glass-border shadow-2xl"
        >
          {['day', 'sunset', 'night'].map((time) => (
            <button 
              key={time}
              onClick={() => setTimeOfDay(time)}
              className={`px-4 py-2 rounded-full text-[0.65rem] tracking-widest uppercase transition-all duration-300 ${
                timeOfDay === time ? 'bg-champagne text-deep-black shadow-lg' : 'text-soft-grey hover:text-warm-white'
              }`}
            >
              {time}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Floating Info Panel (Left) */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="absolute top-1/2 -translate-y-1/2 left-6 md:left-8 pointer-events-auto w-72"
          >
            <div className="glass-panel p-6 rounded-2xl border border-glass-border shadow-2xl backdrop-blur-2xl bg-rich-black/60">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading text-xl text-warm-white">Specifications</h3>
                <button onClick={() => setShowInfo(false)} className="text-soft-grey hover:text-champagne" aria-label="Close Specifications">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between border-b border-glass-border pb-2"><span className="text-soft-grey text-xs">Price</span><span className="text-champagne text-sm font-medium">$45,500,000</span></li>
                <li className="flex justify-between border-b border-glass-border pb-2"><span className="text-soft-grey text-xs">Area</span><span className="text-warm-white text-sm">15,000 Sq Ft</span></li>
                <li className="flex justify-between border-b border-glass-border pb-2"><span className="text-soft-grey text-xs">Bed/Bath</span><span className="text-warm-white text-sm">9 / 12</span></li>
                <li className="flex justify-between border-b border-glass-border pb-2"><span className="text-soft-grey text-xs">Energy Rating</span><span className="text-warm-white text-sm">A+ Net Zero</span></li>
              </ul>
              <div className="flex flex-col gap-3">
                <button onClick={onShowGallery} className="btn-outline w-full text-xs justify-center py-2" aria-label="View Gallery">View Gallery</button>
                <button onClick={onShowBooking} className="btn-primary w-full text-xs justify-center py-2" aria-label="Book Private Tour">Book Private Tour</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!showInfo && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowInfo(true)}
          className="absolute top-1/2 -translate-y-1/2 left-6 pointer-events-auto w-12 h-12 rounded-full glass-panel flex items-center justify-center text-champagne hover:bg-champagne/10 transition-colors"
          aria-label="Show Specifications"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 5H19V11M19 5L5 19"/></svg>
        </motion.button>
      )}

      {/* Smart Home Controls (Right) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-8 pointer-events-auto flex flex-col items-end">
        <button 
          onClick={() => setShowSmartControls(!showSmartControls)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${showSmartControls ? 'bg-champagne text-deep-black' : 'bg-glass-strong border border-glass-border text-champagne hover:bg-glass-frost backdrop-blur-xl'}`}
          aria-label="Smart Home Controls"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
        </button>

        <AnimatePresence>
          {showSmartControls && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="glass-panel p-4 rounded-2xl border border-glass-border shadow-2xl backdrop-blur-2xl bg-rich-black/80 mt-4 w-56"
            >
              <h4 className="text-warm-white font-heading mb-4 text-center">Home Systems</h4>
              <div className="space-y-3">
                {[
                  { id: 'interiorLights', label: 'Interior Lights' },
                  { id: 'curtains', label: 'Curtains' },
                  { id: 'fireplace', label: 'Fireplace' },
                  { id: 'poolLights', label: 'Pool Lights' },
                  { id: 'gardenLights', label: 'Garden Lights' }
                ].map(control => (
                  <div key={control.id} className="flex justify-between items-center">
                    <span className="text-soft-grey text-xs uppercase tracking-widest">{control.label}</span>
                    <button 
                      onClick={() => toggleControl(control.id)}
                      className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${smartControls[control.id] ? 'bg-champagne' : 'bg-glass-border'}`}
                      aria-label={`Toggle ${control.label}`}
                    >
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-warm-white transition-transform duration-300 ${smartControls[control.id] ? 'left-5' : 'left-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Room Navigation (Bottom Center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto w-full max-w-4xl px-4 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-max max-w-full bg-glass-strong/50 backdrop-blur-md p-2 rounded-full border border-glass-border"
        >
          {[
            { id: 'overview', name: 'Overview' },
            { id: 'entrance', name: 'Entrance' },
            { id: 'living', name: 'Living Room' },
            { id: 'master', name: 'Master Suite' },
            { id: 'pool', name: 'Pool' },
            { id: 'garage', name: 'Garage' }
          ].map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`px-5 py-2 rounded-full text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap ${
                activeRoom === room.id 
                  ? 'bg-champagne/20 border border-champagne/50 text-champagne' 
                  : 'text-warm-white/70 hover:text-warm-white hover:bg-glass-frost'
              }`}
            >
              {room.name}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
