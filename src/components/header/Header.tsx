'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/applications', label: 'Applications' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/news', label: 'News' },
  ]

  return (
    <>
      {/* 顶部工具栏 / Top Bar */}
      <div className="bg-[#152a45] text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#f97316]" />
              <span>+86 138 0000 1234</span>
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#f97316]" />
              <span>sales@huanyukuntai.com</span>
            </span>
          </div>
          <div className="text-xs text-slate-400">
            Professional Truck Parts & Construction Machinery Exporter Since 2010
          </div>
        </div>
      </div>

      {/* 主导航 / Main Navigation */}
      <header className="bg-[#1e3a5f] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              {/* 
                👉 修改LOGO：替换下方 /images/logo.jpg 为你的logo图片路径
                👉 建议尺寸：60x60px，PNG透明背景最佳
              */}
              <div className="w-10 h-10 bg-[#f97316] rounded flex items-center justify-center font-bold text-lg">
                HK
              </div>
              <div>
                <div className="font-bold text-base leading-tight">Huanyu Kuntai</div>
                <div className="text-[#f97316] text-[10px] tracking-wider">HUANYU KUNTAI</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {/* 
                👉 修改联系方式按钮：链接指向联系页面 /contact
                👉 或替换 href 为实际邮箱：href="mailto:sales@huanyukuntai.com"
              */}
              <Link
                href="/contact"
                className="ml-3 bg-[#f97316] hover:bg-[#fb923c] text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#1e3a5f] border-t border-white/10 pb-4">
            <nav className="flex flex-col px-4 pt-2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm hover:bg-white/10 rounded"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 mt-2 bg-[#f97316] text-white text-sm font-semibold px-5 py-2.5 rounded text-center"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
