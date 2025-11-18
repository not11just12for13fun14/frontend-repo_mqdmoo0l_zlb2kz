import Hero from './components/Hero'
import ScrollIndicator from './components/ScrollIndicator'

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Hero />
      <ScrollIndicator />
      {/* Spacer content to allow scroll testing */}
      <section id="framework" className="min-h-[120vh] flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, #151515 100%)' }}>
        <div className="max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif' }}>The Psychology Framework</h2>
          <p className="text-[#B3B3B3] leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
            Below the fold we reveal the core heuristics we engineer into every interaction: attention capture, emotional resonance, and conversion mechanics. Scroll for a living breakdown.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
