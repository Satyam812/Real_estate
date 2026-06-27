import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', meetingType: 'In-Person', propertyPreference: '',
    budget: '', date: '', time: '', notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2500)
  }

  return (
    <main className="bg-deep-black min-h-screen pt-32 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Schedule a Private Consultation | Aether Estates</title>
        <meta name="description" content="Reserve a confidential appointment with our senior advisors to discuss your real estate aspirations." />
      </Helmet>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-champagne/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Private Advisory
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-warm-white tracking-tight mb-6">
            Schedule a <span className="italic text-gradient-gold">Consultation</span>
          </h1>
          <p className="text-soft-grey font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Reserve a confidential appointment with our senior advisors to discuss your real estate aspirations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 md:p-14 rounded-3xl relative overflow-hidden border border-glass-border shadow-2xl"
        >
          <AnimatePresence>
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-rich-black/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-8 md:p-16"
              >
                <div className="w-24 h-24 rounded-full border border-champagne flex items-center justify-center mb-8 text-champagne relative">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-champagne"
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <h3 className="font-heading text-4xl text-warm-white mb-4">Reservation Confirmed</h3>
                <p className="text-soft-grey font-light max-w-md mx-auto text-lg leading-relaxed">
                  Your private consultation has been requested for {formData.date ? new Date(formData.date).toLocaleDateString() : 'the selected date'} at {formData.time || 'your preferred time'}. A dedicated advisor will contact you shortly to finalize the details.
                </p>
                <button onClick={() => window.location.href = '/'} className="mt-10 btn-outline">Return to Home</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                {/* Personal Information */}
                <div>
                  <h4 className="text-champagne font-medium text-sm tracking-[0.1em] uppercase mb-6 flex items-center gap-4">
                    <span>1. Personal Information</span>
                    <span className="flex-1 h-px bg-glass-border" />
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 relative group">
                      <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Full Name</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light" />
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Phone Number</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light" />
                    </div>
                    <div className="space-y-2 relative group md:col-span-2">
                      <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Email Address</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light" />
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="text-champagne font-medium text-sm tracking-[0.1em] uppercase mb-6 flex items-center gap-4">
                    <span>2. Preferences</span>
                    <span className="flex-1 h-px bg-glass-border" />
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 relative group">
                      <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Property Type</label>
                      <select required name="propertyPreference" value={formData.propertyPreference} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light appearance-none rounded-none [&>option]:bg-deep-black">
                        <option value="" disabled>Select Preference</option>
                        <option value="Modern Villa">Modern Villa</option>
                        <option value="Historical Estate">Historical Estate</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Private Island">Private Island</option>
                      </select>
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Estimated Budget</label>
                      <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light appearance-none rounded-none [&>option]:bg-deep-black">
                        <option value="" disabled>Select Budget Range</option>
                        <option value="$5M - $10M">$5M - $10M</option>
                        <option value="$10M - $25M">$10M - $25M</option>
                        <option value="$25M - $50M">$25M - $50M</option>
                        <option value="$50M+">$50M+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div>
                  <h4 className="text-champagne font-medium text-sm tracking-[0.1em] uppercase mb-6 flex items-center gap-4">
                    <span>3. Scheduling</span>
                    <span className="flex-1 h-px bg-glass-border" />
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2 relative group md:col-span-2">
                      <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors block mb-3">Meeting Type</label>
                      <div className="flex gap-4">
                        {['In-Person', 'Virtual (Zoom)', 'Phone Call'].map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, meetingType: type })}
                            className={`flex-1 py-3 px-4 border rounded-lg text-sm transition-all duration-300 ${formData.meetingType === type ? 'border-champagne bg-champagne/10 text-champagne' : 'border-glass-border text-soft-grey hover:border-soft-grey'}`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Preferred Date</label>
                      <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light [&::-webkit-calendar-picker-indicator]:filter-[invert(1)] opacity-80" />
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Preferred Time</label>
                      <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light [&::-webkit-calendar-picker-indicator]:filter-[invert(1)] opacity-80" />
                    </div>
                  </div>

                  <div className="space-y-2 relative group">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Additional Notes</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light resize-none" placeholder="Any specific requirements or questions..." />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center h-16 mt-6 text-[0.8rem] tracking-[0.2em]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-deep-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Request
                    </span>
                  ) : (
                    'Confirm Reservation'
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  )
}
