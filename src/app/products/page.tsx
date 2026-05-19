'use client'
import { useState, useCallback } from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  categoryTree,
  products,
  getProductsByCategorySlug,
  countProductsBySlug,
  type CategoryNode,
} from '@/data/categories'

const PER_PAGE = 20   // 4列 × 5行
const COLUMNS = 4

// 递归渲染菜单项
function MenuItem({
  node,
  depth,
  activeSlug,
  expandedSlugs,
  onToggle,
  onSelect,
}: {
  node: CategoryNode
  depth: number
  activeSlug: string | null
  expandedSlugs: Set<string>
  onToggle: (id: string) => void
  onSelect: (slug: string) => void
}) {
  const hasChildren = node.children && node.children.length > 0
  const isExpanded = expandedSlugs.has(node.id)
  const isActive = activeSlug === node.slug
  const indentPx = depth * 20

  return (
    <div>
      <div
        className="flex items-center gap-1 py-2 pr-2 rounded cursor-pointer transition-colors group"
        style={{ paddingLeft: `${indentPx + 8}px` }}
        onClick={() => {
          onSelect(node.slug)
          if (hasChildren) onToggle(node.id)
        }}
      >
        {/* 层级竖线 */}
        {depth > 0 && (
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-slate-200"
            style={{ left: `${indentPx - 1}px` }}
          />
        )}

        {/* 展开/折叠按钮 */}
        <span
          className={`w-5 h-5 flex items-center justify-center rounded text-xs font-bold flex-shrink-0 transition-all ${
            hasChildren
              ? isExpanded
                ? 'bg-[#f97316] text-white rotate-45'
                : 'bg-slate-200 text-slate-600 group-hover:bg-[#f97316] group-hover:text-white'
              : 'invisible'
          }`}
        >
          +
        </span>

        {/* 菜单名 */}
        <div className="flex-1 min-w-0">
          <div className={`text-sm font-medium truncate ${isActive ? 'text-[#f97316]' : 'text-slate-700 group-hover:text-[#f97316]'}`}>
            {node.name}
          </div>
          <div className={`text-xs truncate ${isActive ? 'text-[#f97316]/70' : 'text-slate-400'}`}>
            {node.nameZh}
          </div>
        </div>

        {/* 产品数量 */}
        <span className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ml-1 ${
          isActive ? 'bg-[#f97316]/15 text-[#f97316]' : 'bg-slate-100 text-slate-400 group-hover:bg-[#f97316]/10 group-hover:text-[#f97316]'
        }`}>
          {countProductsBySlug(node.slug)}
        </span>
      </div>

      {/* 递归子菜单 */}
      {hasChildren && isExpanded && (
        <div className="relative">
          {/* 子树连接线 */}
          {node.children!.map(child => (
            <MenuItem
              key={child.id}
              node={child}
              depth={depth + 1}
              activeSlug={activeSlug}
              expandedSlugs={expandedSlugs}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// 产品卡片
function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 card-hover group flex flex-col"
    >
      {/* 图片 */}
      <div className="relative h-44 bg-[#f8fafc] overflow-hidden flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>

      {/* 信息 */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-[#1e3a5f] text-sm leading-snug group-hover:text-[#f97316] transition-colors line-clamp-2 mb-1">
          {product.name}
        </h3>
        <div className="text-xs text-slate-400 mb-2">{product.nameZh}</div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[#f97316] font-bold text-sm">${product.price}</span>
          <span className="text-xs text-slate-400">/{product.unit}</span>
        </div>
        <div className="mt-2 text-xs text-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity">
          View Details →
        </div>
      </div>
    </Link>
  )
}

export default function ProductsPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [expandedSlugs, setExpandedSlugs] = useState<Set<string>>(new Set())
  const [page, setPage] = useState(1)

  // 切换展开/折叠
  const handleToggle = useCallback((id: string) => {
    setExpandedSlugs(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        // 同级别只展开一个（可选）：这里注释掉，允许同时展开多个
        // next.forEach(k => { if (k.startsWith(id.split('-')[0])) next.delete(k) })
        next.add(id)
      }
      return next
    })
  }, [])

  // 点击菜单项
  const handleSelect = useCallback((slug: string) => {
    setActiveSlug(slug)
    setPage(1)
  }, [])

  const filteredProducts = getProductsByCategorySlug(activeSlug)
  const totalPages = Math.ceil(filteredProducts.length / PER_PAGE) || 1
  const safePage = Math.min(page, totalPages)
  const displayedProducts = filteredProducts.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE)

  // 当前选中菜单的完整路径名
  function getActiveMenuName(slug: string | null): string {
    if (!slug) return 'All Products'
    function find(nodes: CategoryNode[], s: string): CategoryNode | null {
      for (const n of nodes) {
        if (n.slug === s) return n
        if (n.children) {
          const f = find(n.children, s)
          if (f) return f
        }
      }
      return null
    }
    const node = find(categoryTree, slug)
    return node ? `${node.name} / ${node.nameZh}` : 'All Products'
  }

  return (
    <>
      <Header />
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Product Catalog</h1>
          <p className="text-slate-300">Browse our full range of truck and machinery parts</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ===== 左侧：5级分类菜单 ===== */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
                <div className="bg-[#1e3a5f] text-white px-5 py-4 flex items-center justify-between">
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Product Categories</h3>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{products.length} Items</span>
                </div>

                <div className="py-2 relative">
                  {/* 全部分类入口 */}
                  <div
                    className={`flex items-center gap-1 py-2 pr-2 cursor-pointer transition-colors hover:bg-orange-50 ${
                      activeSlug === null ? 'bg-[#f97316]/8 text-[#f97316]' : 'text-slate-700'
                    }`}
                    style={{ paddingLeft: '12px' }}
                    onClick={() => { setActiveSlug(null); setPage(1) }}
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded bg-slate-200 text-slate-600 text-xs font-bold flex-shrink-0">
                      ⊙
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium ${activeSlug === null ? 'text-[#f97316]' : ''}`}>All Products</div>
                      <div className="text-xs text-slate-400">全部产品</div>
                    </div>
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-400 flex-shrink-0 ml-1">
                      {products.length}
                    </span>
                  </div>

                  {/* 分类树 */}
                  {categoryTree.map(node => (
                    <MenuItem
                      key={node.id}
                      node={node}
                      depth={0}
                      activeSlug={activeSlug}
                      expandedSlugs={expandedSlugs}
                      onToggle={handleToggle}
                      onSelect={handleSelect}
                    />
                  ))}
                </div>
              </div>
            </aside>

            {/* ===== 右侧：产品网格 ===== */}
            <div className="flex-1 min-w-0">
              {/* 头部提示 */}
              <div className="mb-6 flex items-center gap-3 flex-wrap">
                <span className="text-sm text-slate-500">Showing:</span>
                <span className="text-sm font-semibold text-[#1e3a5f] bg-[#f97316]/10 text-[#f97316] px-3 py-1 rounded-full">
                  {getActiveMenuName(activeSlug)}
                </span>
                <span className="text-sm text-slate-400 ml-auto">
                  {filteredProducts.length} products
                  {totalPages > 1 && ` · Page ${safePage} of ${totalPages}`}
                </span>
              </div>

              {/* 产品网格：4列×5行 */}
              {displayedProducts.length === 0 ? (
                <div className="text-center py-20 text-slate-400">
                  <div className="text-5xl mb-4">📦</div>
                  <div className="text-lg font-medium text-slate-500">No products in this category</div>
                  <div className="text-sm mt-1">Please select another category from the menu</div>
                </div>
              ) : (
                <>
                  <div
                    className="grid gap-4"
                    style={{
                      gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,
                    }}
                  >
                    {displayedProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* 分页导航 */}
                  {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-3">
                      <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={safePage <= 1}
                        className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-colors"
                      >
                        ← Prev
                      </button>

                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                          <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                              p === safePage
                                ? 'bg-[#f97316] text-white'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-[#f97316]/10 hover:text-[#f97316]'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={safePage >= totalPages}
                        className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-colors"
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
