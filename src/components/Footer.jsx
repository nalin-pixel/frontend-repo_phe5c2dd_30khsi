export default function Footer(){
  return (
    <footer className="mt-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-stone-600 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} petnews — AI-powered pet care, made simple and personal.</div>
        <nav className="flex gap-4">
          <a href="#about" className="hover:text-stone-900">About</a>
          <a href="#contact" className="hover:text-stone-900">Contact</a>
          <a href="#privacy" className="hover:text-stone-900">Privacy</a>
          <a href="#terms" className="hover:text-stone-900">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
