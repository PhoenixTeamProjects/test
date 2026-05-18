'use client'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import { products } from '@/data/products'

export default function ProductsPage() {
  return (
    <>
      <Header />
      {/* Page Hero */}
      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-slate-300">Browse our full catalog of truck parts and construction machinery components.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <Link key={product.id} href={`/products/${product.slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 card-hover group">
                {/* 👉 修改产品图片：替换下方 bg-[#1e3a5f]/10 中的颜色或添加 <Image> 标签 */}
                <div className="bg-[#1e3a5f]/10 h-48 flex items-center justify-center text-[#1e3a5f] font-bold text-3xl">
                  {/* <Image src={product.image} alt={product.name} fill className="object-cover" /> */}
                  {product.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="p-5">
                  {/* 👉 修改分类标签颜色： bg-[#f97316]/10 → 其他颜色 */}
                  <span className="text-xs bg-[#f97316]/10 text-[#f97316] px-2 py-0.5 rounded-full">{product.category}</span>
                  <h3 className="font-semibold text-[#1e3a5f] mt-2 mb-1 group-hover:text-[#f97316] transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
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
