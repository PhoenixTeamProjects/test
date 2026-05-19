import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import { CheckCircle, ArrowLeft } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) notFound()

  return (
    <>
      <Header />
      <section className="bg-[#1e3a5f] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/products" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-slate-300 mt-1">{product.nameZh}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative bg-white rounded-xl h-80 lg:h-[450px] shadow-sm border border-slate-100 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                unoptimized
              />
            </div>

            {/* Details */}
            <div>
              <span className="text-xs bg-[#f97316]/10 text-[#f97316] px-3 py-1 rounded-full font-medium">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mt-3 mb-4">{product.nameZh}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{product.descriptionZh}</p>
              <p className="text-slate-500 leading-relaxed mb-8">{product.description}</p>

              {/* Specs Table */}
              <h3 className="font-semibold text-[#1e3a5f] mb-3">Specifications / 技术参数</h3>
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-8">
                {product.specs.map((spec, i) => (
                  <div key={i} className={`flex justify-between px-4 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <span className="text-slate-500 text-sm">{spec.label}</span>
                    <span className="font-medium text-[#1e3a5f] text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-block bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Request a Quote / 索取报价
              </Link>
            </div>
          </div>

          {/* Features & Applications */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-[#1e3a5f] text-xl mb-4">Key Features / 产品特点</h3>
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#16a34a] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-[#1e3a5f] text-xl mb-4">Applications / 应用领域</h3>
              <ul className="space-y-3">
                {product.applications.map((a, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#f97316] shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
