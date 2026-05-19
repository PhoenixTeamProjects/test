import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import { newsItems } from '@/data/news'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft } from 'lucide-react'

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = newsItems.find(n => n.slug === params.slug)
  if (!item) notFound()

  const related = newsItems.filter(n => n.id !== item.id && n.category === item.category).slice(0, 2)

  return (
    <>
      <Header />
      <section className="bg-[#1e3a5f] text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/news" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <span className="text-xs bg-[#f97316]/20 text-[#f97316] px-3 py-1 rounded-full font-medium">{item.category}</span>
          <h1 className="text-2xl md:text-4xl font-bold mt-3 leading-tight">{item.title}</h1>
          <h2 className="text-lg text-slate-300 mt-2">{item.titleZh}</h2>
          <div className="flex items-center gap-4 mt-4 text-sm text-slate-300">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{item.date}</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{item.author}</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero image placeholder */}
          <div className="bg-[#1e3a5f]/10 rounded-xl h-64 md:h-80 flex items-center justify-center mb-10">
            <span className="text-[#1e3a5f]/30 text-8xl font-bold">{item.title.slice(0, 2)}</span>
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-xl p-6 border-l-4 border-[#f97316] mb-8">
            <p className="text-slate-500 italic">{item.excerpt}</p>
            <p className="text-slate-400 mt-2 text-sm">{item.excerptZh}</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm">
            <div className="prose max-w-none">
              {item.content.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return <h3 key={i} className="text-xl font-bold text-[#1e3a5f] mt-8 mb-4">{para.replace(/\*\*/g, '')}</h3>
                }
                if (para.startsWith('**')) {
                  return <p key={i} className="text-slate-700 leading-relaxed mb-4"><strong>{para}</strong></p>
                }
                if (para.match(/^\d+\./)) {
                  return <p key={i} className="text-slate-700 leading-relaxed mb-2 pl-4">{para}</p>
                }
                return <p key={i} className="text-slate-700 leading-relaxed mb-4">{para}</p>
              })}
            </div>

            {/* Chinese content */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">中文内容</h3>
              <div className="prose max-w-none">
                {item.contentZh.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <h4 key={i} className="text-base font-semibold text-[#1e3a5f] mt-6 mb-3">{para.replace(/\*\*/g, '')}</h4>
                  }
                  if (para.match(/^\d+\./)) {
                    return <p key={i} className="text-slate-600 text-sm leading-relaxed mb-2 pl-4">{para}</p>
                  }
                  return <p key={i} className="text-slate-600 text-sm leading-relaxed mb-3">{para}</p>
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center bg-[#1e3a5f] rounded-xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-3">Interested in Our Products?</h3>
            <p className="text-slate-300 mb-6">Contact us for product catalogs, pricing, and shipping information.</p>
            <Link href="/contact" className="inline-block bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
