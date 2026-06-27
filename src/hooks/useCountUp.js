import { useState, useEffect, useRef, useCallback } from 'react'

export function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)
  const animationRef = useRef(null)

  const startCounting = useCallback(() => {
    if (hasStarted) return
    setHasStarted(true)

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth easing
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  useEffect(() => {
    if (!startOnView) {
      startCounting()
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting()
          observer.unobserve(element)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [startCounting, startOnView])

  return [ref, count]
}
