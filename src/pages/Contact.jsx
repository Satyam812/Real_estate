import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FAQ from '../components/FAQ'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', interest: 'Buying', budget: '', message: ''
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
      setTimeout(() => setIsSuccess(false), 5000)
      setFormData({ name: '', email: '', phone: '', interest: 'Buying', budget: '', message: '' })
    }, 2000)
  }

  return (
    <main className="bg-deep-black min-h-screen pt-32 pb-20">
      <Helmet>
        <title>Contact Us | Aether Estates</title>
        <meta name="description" content="Connect with our concierge team. Discretion and privacy are our utmost priority. Reach out to discuss your luxury real estate needs." />
      </Helmet>
      <div className="max-w-[1400px] mx-auto px-6 mb-24">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Global Presence
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-warm-white tracking-tight mb-8">
            Connect <span className="italic text-gradient-gold">With Us</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h3 className="text-warm-white font-heading text-2xl mb-6">Headquarters</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-champagne shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p className="text-warm-white text-sm">421 Park Avenue South</p>
                    <p className="text-soft-grey text-sm font-light">New York, NY 10016<br/>United States</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-champagne shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  </div>
                  <p className="text-warm-white text-sm">+1 (212) 555-1234</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-champagne shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <p className="text-warm-white text-sm">concierge@aetherestates.com</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-warm-white font-heading text-2xl mb-6">Business Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-glass-border pb-2"><span className="text-soft-grey text-sm font-light">Monday - Friday</span><span className="text-warm-white text-sm">9:00 AM - 6:00 PM EST</span></li>
                <li className="flex justify-between border-b border-glass-border pb-2"><span className="text-soft-grey text-sm font-light">Saturday</span><span className="text-warm-white text-sm">10:00 AM - 4:00 PM EST</span></li>
                <li className="flex justify-between border-b border-glass-border pb-2"><span className="text-soft-grey text-sm font-light">Sunday</span><span className="text-champagne text-sm font-medium">By Appointment Only</span></li>
              </ul>
            </div>

            {/* Styled Map Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden relative border border-glass-border group">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map Location" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-700" loading="lazy" decoding="async" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-champagne/20 flex items-center justify-center backdrop-blur-sm animate-pulse">
                  <div className="w-4 h-4 bg-champagne rounded-full shadow-[0_0_20px_#c9a96e]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden h-full">
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
                    <h3 className="font-heading text-3xl text-warm-white mb-4">Message Sent</h3>
                    <p className="text-soft-grey font-light max-w-sm">Our concierge team has received your inquiry and will contact you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-warm-white font-heading text-2xl mb-2">Send an Inquiry</h3>
              <p className="text-soft-grey text-sm font-light mb-8">Discretion and privacy are our utmost priority.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 relative group">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light" />
                  </div>
                  <div className="space-y-2 relative group">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light" />
                  </div>
                </div>
                
                <div className="space-y-2 relative group">
                  <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 relative group">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">I am interested in</label>
                    <select name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light appearance-none rounded-none [&>option]:bg-deep-black">
                      <option value="Buying">Buying a Property</option>
                      <option value="Selling">Selling a Property</option>
                      <option value="Investment">Investment Portfolio</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2 relative group">
                    <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Estimated Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light appearance-none rounded-none [&>option]:bg-deep-black">
                      <option value="" disabled>Select Budget Range</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $15M">$5M - $15M</option>
                      <option value="$15M - $50M">$15M - $50M</option>
                      <option value="$50M+">$50M+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 relative group">
                  <label className="text-[0.65rem] tracking-widest uppercase text-soft-grey font-light group-focus-within:text-champagne transition-colors">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-transparent border-b border-glass-border pb-2 text-warm-white focus:outline-none focus:border-champagne transition-colors font-light resize-none" placeholder="Please share any specific requirements..." />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center h-14 mt-4"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-deep-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <FAQ />
    </main>
  )
}
