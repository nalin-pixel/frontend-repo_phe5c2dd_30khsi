const categories = [
  { name: 'Dogs', emoji: '🐶', color: 'bg-emerald-50 text-emerald-900', href: '#dogs' },
  { name: 'Cats', emoji: '🐱', color: 'bg-amber-50 text-amber-900', href: '#cats' },
  { name: 'Wellness', emoji: '🐾', color: 'bg-lime-50 text-lime-900', href: '#wellness' },
  { name: 'Tips', emoji: '✨', color: 'bg-stone-50 text-stone-900', href: '#tips' },
]

export default function CategoryTiles(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-8" id="categories">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((c) => (
          <a key={c.name} href={c.href} className={`rounded-xl p-4 ${c.color} hover:opacity-90 transition`}> 
            <div className="text-2xl">{c.emoji}</div>
            <div className="mt-2 font-medium">{c.name}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
