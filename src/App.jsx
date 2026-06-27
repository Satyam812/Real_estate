import { useEffect, useState, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { Helmet } from 'react-helmet-async'

// Lazy Load Pages for Performance
const Home = lazy(() => import('./pages/Home'))
const Properties = lazy(() => import('./pages/Properties'))
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'))
const VirtualTour = lazy(() => import('./pages/VirtualTour'))
const About = lazy(() => import('./pages/About'))
const Agents = lazy(() => import('./pages/Agents'))
const Contact = lazy(() => import('./pages/Contact'))
const Consultation = lazy(() => import('./pages/Consultation'))

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2200
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(Math.floor(eased * 100))

      if (p < 1) {
        requestAnimationFrame(animate)
      } else {
        setTimeout(onComplete, 400)
      }
    }

    requestAnimationFrame(animate)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-deep-black flex flex-col items-center justify-center"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <svg width="56" height="56" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18 2L32 10V26L18 34L4 26V10L18 2Z" stroke="url(#loadGrad)" strokeWidth="1.5" fill="none" />
          <path d="M18 8L26 12.5V23.5L18 28L10 23.5V12.5L18 8Z" stroke="url(#loadGrad)" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M18 14L22 16.5V21.5L18 24L14 21.5V16.5L18 14Z" fill="url(#loadGrad)" opacity="0.3" />
          <defs>
            <linearGradient id="loadGrad" x1="4" y1="2" x2="32" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4b97a" />
              <stop offset="1" stopColor="#b8944f" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Brand text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h1 className="font-heading text-3xl tracking-[0.3em] text-warm-white font-light mb-1">
          AETHER
        </h1>
        <span className="text-[0.6rem] tracking-[0.5em] text-champagne font-body font-light uppercase">
          ESTATES
        </span>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-48 flex flex-col items-center gap-4"
      >
        <div className="w-full h-px bg-[rgba(255,255,255,0.1)] relative overflow-hidden rounded-full">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-champagne to-champagne-dark rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <span className="text-soft-grey text-[0.65rem] tracking-[0.3em] uppercase font-light">
          {progress}%
        </span>
      </motion.div>
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  useLenis()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="noise-overlay">
          <CustomCursor />
          <Navbar />
          <Suspense fallback={<div className="min-h-screen bg-deep-black flex items-center justify-center"><div className="text-champagne tracking-[0.2em] uppercase text-sm animate-pulse">Loading...</div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="/virtual-tour" element={<VirtualTour />} />
              <Route path="/about" element={<About />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consultation" element={<Consultation />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      )}
    </>
  )
}
