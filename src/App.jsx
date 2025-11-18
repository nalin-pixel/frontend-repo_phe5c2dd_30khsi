import Hero from './components/Hero'
import CategoryTiles from './components/CategoryTiles'
import ArticleList from './components/ArticleList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-10 bg-stone-50/80 backdrop-blur supports-[backdrop-filter]:bg-stone-50/60 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">petnews <span className="text-stone-400">🐾</span></a>
          <nav className="flex items-center gap-6 text-sm text-stone-700">
            <a href="/#news" className="hover:text-stone-900">News</a>
            <a href="/#categories" className="hover:text-stone-900">Categories</a>
            <a href="/#about" className="hover:text-stone-900">About</a>
            <a href="/#contact" className="hover:text-stone-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <CategoryTiles />
        <ArticleList />

        <section id="about" className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 text-stone-700">Our mission is simple: deliver warm, trustworthy pet care content that fits busy lives. We aggregate from trusted sources, use AI to rewrite for clarity, and present it in a calm, ad-ready reading experience.</p>
        </section>

        <section id="contact" className="max-w-3xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-stone-700">Questions, partnerships, or feedback? Email hello@petnews.ai</p>
          <form className="mt-4 grid gap-3 max-w-md">
            <input placeholder="Your email" className="border border-stone-300 rounded-lg px-3 py-2 bg-white" />
            <textarea placeholder="Message" rows="4" className="border border-stone-300 rounded-lg px-3 py-2 bg-white" />
            <button className="rounded-lg bg-stone-900 text-white px-4 py-2 w-max">Send</button>
          </form>
        </section>

        <section id="privacy" className="max-w-3xl mx-auto px-6 py-8 text-sm text-stone-600">
          <h3 className="font-medium text-stone-800">Privacy</h3>
          <p className="mt-2">We only collect what we need to deliver the service. No selling personal data. Unsubscribe anytime.</p>
        </section>

        <section id="terms" className="max-w-3xl mx-auto px-6 py-8 text-sm text-stone-600">
          <h3 className="font-medium text-stone-800">Terms</h3>
          <p className="mt-2">All rewritten content is for informational purposes. Always consult your vet for medical advice.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
