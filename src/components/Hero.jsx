import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import DataTicker from './DataTicker'

const headlineLines = [
  'We Engineer',
  'Attention,',
  'Emotion,',
  'Action.'
]

export default function Hero() {
  const containerRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollRatio = Math.min(scrollY / window.innerHeight, 1)
  const heroScale = 1 - 0.3 * scrollRatio
  const heroTranslateY = -150 * scrollRatio
  const headlineScale = 1 - 0.15 * scrollRatio
  const headlineOpacity = 1 - 0.7 * scrollRatio

  return (
    <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
      {/* Fluid gradient mesh background */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ filter: 'url(#grain)' }}
        animate={{ opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="1" stitchTiles="stitch"/>
              <feColorMatrix type="saturate" values="0"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
              </feComponentTransfer>
            </filter>
            <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.05"/></feComponentTransfer><feBlend in="SourceGraphic" in2="noise" mode="overlay"/></filter>
            <radialGradient id="rg" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#2C5F4D" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#1A1A1A" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1A1A1A" />
            </radialGradient>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#rg)"
            animate={{ rx: [0, 40, 0], ry: [0, 40, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'easeInOut' }}
          />
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </motion.div>

      {/* Spline 3D cover background right side emphasis */}
      <motion.div
        className="absolute right-0 top-0 h-full"
        style={{ width: '60vw', transformOrigin: 'center' }}
        animate={{ scale: heroScale, y: heroTranslateY }}
        transition={{ type: 'tween', ease: [0.4, 0, 0.2, 1] }}
      >
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Content left aligned */}
      <div className="relative z-10 h-[100svh] flex items-center" style={{ paddingLeft: '6vw', paddingRight: '6vw' }}>
        <div className="max-w-[45vw]">
          <div className="mb-6">
            {headlineLines.map((line, i) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ delay: 0.4 + i * 0.8, duration: 1.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                className="text-[8vw] sm:text-[64px] leading-tight text-[#FAFAFA]"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + headlineLines.length * 0.8 + 1.2, duration: 0.8 }}
            className="text-[18px] text-[#999999] max-w-[60ch]"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif', lineHeight: 1.6 }}
          >
            Psychology-driven design for brands that demand measurable results.
          </motion.p>

          <div className="mt-10">
            <DataTicker />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + headlineLines.length * 0.8 + 1.2 + 0.6, duration: 0.6 }}
            className="mt-14"
          >
            <a
              href="#framework"
              className="inline-block"
            >
              <span
                className="inline-block text-[16px] font-medium text-white"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif', backgroundColor: '#2C5F4D', padding: '18px 36px', borderRadius: 4, boxShadow: '0 8px 24px rgba(44,95,77,0.3)', transition: 'transform 350ms cubic-bezier(0.4,0,0.2,1), box-shadow 350ms cubic-bezier(0.4,0,0.2,1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(44,95,77,0.35)'}}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(44,95,77,0.3)'}}
              >
                Explore The Framework →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll transforms */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ transformOrigin: 'left center' }}
        animate={{}}
        transition={{}}
      />
    </section>
  )
}
