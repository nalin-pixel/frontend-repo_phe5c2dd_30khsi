import { PawPrint, Newspaper } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(244,165,96,0.08),transparent_40%)]"/>
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 text-sm">
          <PawPrint className="w-4 h-4" />
          <span>petnews • AI-curated daily</span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-stone-900">
          Warm, daily pet care reads — rewritten by AI
        </h1>
        <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
          Friendly stories and practical tips for dogs 🐶, cats 🐱, and more. Gathered from trusted sources, rewritten for clarity, and optimized for search.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#news" className="inline-flex items-center gap-2 rounded-lg bg-stone-900 text-white px-4 py-2 hover:bg-stone-800 transition">
            <Newspaper className="w-4 h-4" /> Read today’s picks
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-lg bg-stone-100 text-stone-900 px-4 py-2 hover:bg-stone-200 transition">
            About petnews
          </a>
        </div>
      </div>
    </section>
  )
}
