import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function ArticleList(){
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load(){
      try{
        const res = await fetch(`${API_URL}/api/articles`)
        const data = await res.json()
        setArticles(data)
      } catch(e){
        console.error(e)
      } finally{
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="news" className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-stone-900">Today’s curated news</h2>
        <button
          onClick={async()=>{
            setLoading(true)
            try{
              await fetch(`${API_URL}/api/refresh`, {method:'POST'})
              const res = await fetch(`${API_URL}/api/articles`)
              const data = await res.json()
              setArticles(data)
            }catch(e){console.error(e)}finally{setLoading(false)}
          }}
          className="text-sm rounded-lg bg-stone-900 text-white px-3 py-1.5 hover:bg-stone-800"
        >Refresh</button>
      </div>

      {loading && <p className="text-stone-500">Loading…</p>}
      {!loading && articles.length === 0 && (
        <p className="text-stone-500">No articles yet. Tap Refresh to fetch from sources.</p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {articles.map(a => (
          <a key={a.slug} href={`/#/article/${a.slug}`} className="block rounded-xl border border-stone-200 p-4 hover:shadow-sm">
            <div className="text-sm text-stone-500">{a.categories?.[0] || 'General'}</div>
            <h3 className="mt-1 font-medium text-stone-900 line-clamp-2">{a.title}</h3>
            {a.summary && <p className="mt-2 text-sm text-stone-600 line-clamp-3">{a.summary.replace(/<[^>]+>/g,'')}</p>}
          </a>
        ))}
      </div>
    </section>
  )
}
