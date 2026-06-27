import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 5000)
      setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' })
    }, 2000)
  }

  return (
    <section className="section-padding bg-deep-black relative overflow-hidden" aria-label="Book a Visit">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-champagne/40" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Private Viewing
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-warm-white tracking-tight mb-8">
              Experience <span className="italic text-gradient-gold">Perfection</span>
            </h2>
            <p className="text-soft-grey font-light leading-relaxed mb-12 max-w-md">
              Schedule a private, curated tour of this exceptional property. Our dedicated advisors will walk you through every exquisite detail at your convenience.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center group-hover:border-champagne/50 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-champagne">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-soft-grey text-xs tracking-widest uppercase font-light">Direct Line</p>
                  <p className="text-warm-white font-light">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center group-hover:border-champagne/50 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-champagne">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-soft-grey text-xs tracking-widest uppercase font-light">Email Inquiries</p>
                  <p className="text-warm-white font-light">estates@aether.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-rich-black/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 rounded-full border border-champagne flex items-center justify-center mb-6 text-champagne">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-3xl text-warm-white mb-4">Request Received</h3>
                    <p className="text-soft-grey font-light">An advisor will contact you shortly to confirm your private viewing.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors placeholder:text-warm-white/20 font-light" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors placeholder:text-warm-white/20 font-light" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors placeholder:text-warm-white/20 font-light" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light">Preferred Date</label>
                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light [color-scheme:dark]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light">Preferred Time</label>
                    <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light [color-scheme:dark]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light">Additional Requirements</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors placeholder:text-warm-white/20 font-light resize-none" placeholder="Any specific details we should know?" />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center mt-4 h-14"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-deep-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing
                    </span>
                  ) : (
                    'Request Private Viewing'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
