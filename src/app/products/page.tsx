'use client'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/data/products'

export default function ProductsPage() {
  return (
    <>
      <Header />
      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-slate-300">Browse our full catalog of truck parts and construction machinery components.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <Link key={product.id} href={`/products/${product.slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 card-hover group">
                {/* 👉 产品图片区域 */}
                <div className="relative h-56 bg-[#1e3a5f]/5 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs bg-[#f97316]/10 text-[#f97316] px-3 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-[#1e3a5f] mt-3 mb-2 text-lg group-hover:text-[#f97316] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{product.description}</p>
                  <div className="mt-4 flex items-center text-[#f97316] font-medium text-sm group-hover:gap-2 transition-all">
                    View Details <span className="ml-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
