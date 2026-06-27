import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import ClientTestimonials from '../components/ClientTestimonials'
import { Helmet } from 'react-helmet-async'

const timeline = [
  { year: '2010', title: 'Foundation', desc: 'Aether Estates is founded with a vision to redefine luxury real estate in Europe.' },
  { year: '2015', title: 'Global Growth', desc: 'Expansion into the Middle East and Asian markets, curating exclusive off-market portfolios.' },
  { year: '2020', title: 'Architectural Division', desc: 'Launch of our in-house bespoke architectural and interior design consultancy.' },
  { year: '2026', title: 'Future Vision', desc: 'Setting the standard for ultra-luxury acquisitions with integrated smart-home and green technologies.' }
]

const values = [
  { title: 'Luxury Living', icon: 'M3 21v-4a4 4 0 014-4h10a4 4 0 014 4v4M16 3.13a4 4 0 010 7.75M5.12 2.1a4 4 0 015.76 1M12 14a4 4 0 100-8 4 4 0 000 8z' },
  { title: 'Integrity', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: 'Innovation', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Personal Service', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' },
  { title: 'Sustainability', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
]

function AnimatedCounter({ value, prefix = '', suffix = '', label }) {
  const [ref, count] = useCountUp(value, 2000)
  return (
    <div ref={ref} className="text-center p-6 border-r last:border-0 border-glass-border">
      <div className="font-heading text-4xl md:text-5xl text-warm-white mb-2">
        {prefix}{value === 2.4 ? (count === 2 ? '2.4' : count) : count}{suffix}
      </div>
      <div className="text-soft-grey text-xs tracking-[0.2em] uppercase font-light">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <main className="bg-deep-black min-h-screen">
      <Helmet>
        <title>Our Heritage | Aether Estates</title>
        <meta name="description" content="Discover the legacy of Aether Estates. We represent a seamless blend of architectural mastery, uncompromising luxury, and absolute discretion." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0 scale-105">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2800&auto=format&fit=crop" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover opacity-50"
          fetchpriority="high" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-champagne/40" />
              <span className="text-champagne text-[0.65rem] tracking-[0.3em] uppercase font-light">
                Our Heritage
              </span>
              <span className="w-12 h-px bg-champagne/40" />
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-warm-white tracking-tight mb-8">
              Crafting Extraordinary <span className="italic text-gradient-gold">Living Experiences</span>
            </h1>
            <p className="text-soft-grey font-light text-lg max-w-2xl mx-auto leading-relaxed">
              We are the curators of the world's most exceptional properties. Aether Estates represents a seamless blend of architectural mastery, uncompromising luxury, and absolute discretion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="border-y border-glass-border bg-glass-strong backdrop-blur-md relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-glass-border">
            <AnimatedCounter value={2.4} prefix="$" suffix="B+" label="Properties Sold" />
            <AnimatedCounter value={150} suffix="+" label="Luxury Projects" />
            <AnimatedCounter value={45} label="Countries" />
            <AnimatedCounter value={15} suffix="+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
              Our <span className="italic text-gradient-gold">Evolution</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-glass-border -translate-x-1/2" />
            
            <div className="space-y-20">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-deep-black border-2 border-champagne -translate-x-1/2 mt-1.5 md:mt-0 z-10" />
                  
                  {/* Content */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <span className="text-champagne font-heading text-xl mb-2 block">{item.year}</span>
                    <h3 className="text-warm-white text-2xl font-light mb-4">{item.title}</h3>
                    <p className="text-soft-grey font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-dark-grey/20">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-light text-warm-white tracking-tight">
              Core <span className="italic text-gradient-gold">Principles</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-glass-border flex-1 min-w-[250px] max-w-[300px] group hover:border-champagne/50 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-glass-strong border border-glass-border flex items-center justify-center mb-6 group-hover:bg-champagne/10 transition-colors duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-champagne">
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-warm-white font-medium mb-3">{value.title}</h3>
                <p className="text-soft-grey text-sm font-light">Committed to excellence in every aspect of the client journey.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientTestimonials />
    </main>
  )
}
