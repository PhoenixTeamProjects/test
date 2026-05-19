'use client'
import { useState } from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { products, categories } from '@/data/products'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredProducts = activeCategory
    ? products.filter(p => p.categorySlug === activeCategory)
    : products

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
          <div className="flex flex-col md:flex-row gap-8">

            {/* ===== 左侧分类菜单 ===== */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
                <div className="bg-[#1e3a5f] text-white px-5 py-4">
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Categories</h3>
                </div>
                <nav className="py-2">
                  {/* 全部 All */}
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`w-full text-left px-5 py-3 flex items-center justify-between hover:bg-[#f97316]/5 transition-colors ${
                      activeCategory === null ? 'bg-[#f97316]/10 text-[#f97316] border-r-2 border-[#f97316]' : 'text-slate-700'
                    }`}
                  >
                    <span className="font-medium text-sm">All Products</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${activeCategory === null ? 'bg-[#f97316]/20 text-[#f97316]' : 'bg-slate-100 text-slate-500'}`}>
                      {products.length}
                    </span>
                  </button>

                  {/* 分类列表 */}
                  {categories.map(cat => {
                    const count = products.filter(p => p.categorySlug === cat.slug).length
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.slug)}
                        className={`w-full text-left px-5 py-3 flex items-center justify-between hover:bg-[#f97316]/5 transition-colors ${
                          activeCategory === cat.slug ? 'bg-[#f97316]/10 text-[#f97316] border-r-2 border-[#f97316]' : 'text-slate-700'
                        }`}
                      >
                        <div>
                          <div className="font-medium text-sm">{cat.name}</div>
                          <div className="text-xs text-slate-400">{cat.nameZh}</div>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ml-2 flex-shrink-0 ${
                          activeCategory === cat.slug ? 'bg-[#f97316]/20 text-[#f97316]' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* ===== 右侧产品列表 ===== */}
            <div className="flex-1">
              {/* 当前分类提示 */}
              <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
                <span>Category:</span>
                <span className="font-medium text-[#1e3a5f]">
                  {activeCategory
                    ? categories.find(c => c.slug === activeCategory)?.name
                    : 'All Products'}
                </span>
                <span className="ml-auto">共 {filteredProducts.length} 个产品</span>
              </div>

              {/* 产品网格 */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16 text-slate-400">该分类暂无产品</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 card-hover group"
                    >
                      {/* 产品图片区域 */}
                      <div className="relative h-52 bg-[#1e3a5f]/5 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs bg-[#f97316]/10 text-[#f97316] px-2 py-0.5 rounded-full font-medium">
                          {product.category}
                        </span>
                        <h3 className="font-semibold text-[#1e3a5f] mt-2 mb-1 group-hover:text-[#f97316] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
                        {/* 规格标签 */}
                        <div className="mt-3 flex flex-wrap gap-1">
                          {product.specs.slice(0, 3).map((spec, i) => (
                            <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                              {spec.label}: {spec.value}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
