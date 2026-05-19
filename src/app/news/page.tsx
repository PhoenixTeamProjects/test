import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import { newsItems } from '@/data/news'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function NewsPage() {
  const featured = newsItems.filter(n => n.featured)
  const regular = newsItems.filter(n => !n.featured)

  return (
    <>
      <Header />
      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Industry News & Insights</h1>
          <p className="text-slate-300">Stay updated with truck parts industry trends, technical guides, and export news.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured */}
          {featured.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#f97316] rounded-full"></span>
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featured.map(item => (
                  <Link key={item.id} href={`/news/${item.slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 card-hover group">
                    <div className="bg-[#1e3a5f]/10 h-48 flex items-center justify-center">
                      <span className="text-[#1e3a5f]/40 text-6xl font-bold">{item.title.slice(0, 2)}</span>
                    </div>
                    <div className="p-6">
                      <span className="text-xs bg-[#f97316]/10 text-[#f97316] px-2 py-0.5 rounded-full font-medium">{item.category}</span>
                      <h3 className="font-bold text-[#1e3a5f] text-lg mt-3 mb-2 group-hover:text-[#f97316] transition-colors leading-snug">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">{item.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{item.date}</span>
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{item.author}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Regular */}
          <div>
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#1e3a5f] rounded-full"></span>
              All Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map(item => (
                <Link key={item.id} href={`/news/${item.slug}`} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 card-hover group">
                  <span className="text-xs bg-[#1e3a5f]/10 text-[#1e3a5f] px-2 py-0.5 rounded-full font-medium">{item.category}</span>
                  <h3 className="font-semibold text-[#1e3a5f] mt-3 mb-2 group-hover:text-[#f97316] transition-colors leading-snug">{item.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-slate-400"><Calendar className="w-3.5 h-3.5" />{item.date}</span>
                    <span className="text-[#f97316] text-sm font-medium flex items-center gap-1">Read <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
