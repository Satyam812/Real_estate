import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    category: 'Buying',
    question: 'How do I initiate the property acquisition process?',
    answer: 'The journey begins with a private consultation with one of our senior advisors. We discuss your exact requirements, aesthetic preferences, and lifestyle goals. Following this, we curate a bespoke portfolio of on- and off-market properties for your consideration.'
  },
  {
    category: 'International Buyers',
    question: 'Do you assist with international real estate transactions and legalities?',
    answer: 'Yes, our global concierge team manages the entire process for international clients, including coordinating with elite legal counsel, tax advisors, and structuring cross-border transactions to ensure a seamless acquisition.'
  },
  {
    category: 'Property Visits',
    question: 'How are private property viewings arranged?',
    answer: 'We organize exclusive, discreet viewings tailored to your schedule. For international clients, we also offer high-fidelity virtual walkthroughs or can arrange private aviation and luxury transfers for in-person tours.'
  },
  {
    category: 'Selling',
    question: 'What is your approach to marketing a luxury property?',
    answer: 'We deploy a highly targeted, discreet marketing strategy. This includes cinematic production, editorial-grade photography, and direct outreach to our private network of Ultra-High-Net-Worth Individuals (UHNWIs) globally.'
  },
  {
    category: 'Investment',
    question: 'Can you advise on property portfolios and yields?',
    answer: 'Our specialized investment division provides comprehensive analytics on emerging luxury markets, projected capital appreciation, and yield optimization strategies for legacy wealth preservation.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-deep-black relative overflow-hidden" aria-label="Frequently Asked Questions">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
              Knowledge Base
            </span>
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-warm-white tracking-tight">
            Client <span className="italic text-gradient-gold">Inquiries</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-panel border ${openIndex === index ? 'border-champagne/50' : 'border-glass-border'} rounded-2xl overflow-hidden transition-colors duration-500`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="hidden md:block text-champagne/50 text-xs tracking-[0.2em] uppercase font-light w-24">
                    {faq.category}
                  </span>
                  <span className={`font-heading text-lg md:text-xl transition-colors duration-300 ${openIndex === index ? 'text-champagne' : 'text-warm-white group-hover:text-champagne'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ${openIndex === index ? 'border-champagne bg-champagne text-deep-black rotate-180' : 'border-glass-border text-champagne group-hover:border-champagne/50'}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 md:pl-[8.5rem]">
                      <p className="text-soft-grey font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
