import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3000)
    const onScroll = () => setHidden(true)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 bottom-10 transition-opacity duration-500 ${hidden ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-3 select-none">
        <span className="text-xs tracking-wide" style={{ color: '#2C5F4D' }}>Scroll to see psychology in action</span>
        <div className="relative h-16">
          <div className="w-px h-16" style={{ backgroundColor: '#2C5F4D' }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#2C5F4D' }} />
        </div>
      </div>
      <style>{`
        @keyframes pulseDot { 0%,100%{ transform: translateX(-50%) scale(1);} 50%{ transform: translateX(-50%) scale(1.35);} }
        div[aria-hidden] .rounded-full { animation: pulseDot 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
