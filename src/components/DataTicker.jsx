import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  'Currently accepting 3 clients this quarter',
  '127% average conversion lift',
  '50+ brands transformed',
]

export default function DataTicker() {
  const [index, setIndex] = useState(0)
  const current = useMemo(() => messages[index % messages.length], [index])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div aria-live="polite" className="h-6 select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="text-[14px] tracking-wide"
          style={{ fontFamily: 'Space Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', color: '#2C5F4D' }}
        >
          {current}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
