import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import { ArrowRight, Shield, Truck, Award, Users, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ========== HERO SECTION ========== */}
      {/* 👉 修改Hero背景图：替换下方的 bg-[#1e3a5f] 为 img 标签覆盖 */}
      <section className="bg-[#1e3a5f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            {/* 👉 修改标题文字 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Heavy-Duty Truck Parts &<br />
              <span className="text-[#f97316]">Construction Machinery</span> Export Expert
            </h1>
            {/* 👉 修改副标题 */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Professional exporter of engine parts, brake systems, suspension components and electrical systems. 
              Serving global clients with quality parts since 2010.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2">
                View Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUSTED BY ========== */}
      {/* 👉 修改证书展示：替换下面的证书名称 */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-400">
            {['ISO 9001:2015', 'CE Certified', 'DOT Approved', 'ECE R13', 'IATF 16949'].map(cert => (
              <span key={cert} className="text-sm font-medium tracking-wider uppercase flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#f97316]" /> {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Why Choose Huanyu Kuntai</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Reliable quality, professional service, and competitive pricing — trusted by clients in 50+ countries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Quality Certified', desc: 'All products meet international standards including ISO, CE, DOT, and ECE.' },
              { icon: Truck, title: 'Global Shipping', desc: 'Efficient logistics to 50+ countries. FOB, CIF, DDP shipping terms available.' },
              { icon: Award, title: 'OEM Experience', desc: '15+ years supplying OEM-grade parts to major manufacturers.' },
              { icon: Users, title: '24/7 Support', desc: 'Dedicated sales team ready to assist with inquiries and after-sales support.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm card-hover border border-slate-100">
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <h3 className="font-semibold text-[#1e3a5f] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRODUCT CATEGORIES PREVIEW ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3">Product Categories</h2>
              <p className="text-slate-500">Browse our main product lines for trucks and heavy machinery.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-1 text-[#f97316] font-medium hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Engine Parts', nameZh: '发动机配件', count: '24+', desc: 'Turbochargers, pistons, cylinders, gaskets and more.' },
              { name: 'Brake Systems', nameZh: '制动系统', count: '18+', desc: 'Brake chambers, compressors, valves, slack adjusters.' },
              { name: 'Suspension', nameZh: '悬挂配件', count: '15+', desc: 'Leaf springs, shock absorbers, torsion bars, bushings.' },
              { name: 'Electrical', nameZh: '电气系统', count: '12+', desc: 'Alternators, starters, sensors, wiring harnesses.' },
            ].map((cat, i) => (
              <Link key={i} href={`/products?cat=${['engine-parts','brake-systems','suspension-parts','electrical-systems'][i]}`} className="group bg-[#f8fafc] rounded-xl p-6 border border-slate-100 card-hover">
                {/* 👉 修改分类图片：替换下方 /images/placeholder.jpg 为实际图片路径 */}
                <div className="bg-[#1e3a5f]/10 rounded-lg h-32 mb-4 flex items-center justify-center text-[#1e3a5f] font-bold text-2xl">
                  {/* <Image src="/images/placeholder.jpg" /> */}
                  {cat.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1e3a5f]">{cat.name}</h3>
                  <span className="text-xs bg-[#1e3a5f]/10 text-[#1e3a5f] px-2 py-0.5 rounded-full">{cat.count} items</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{cat.desc}</p>
                <span className="text-[#f97316] text-sm font-medium group-hover:gap-2 transition-all">
                  View Products →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center gap-1 text-[#f97316] font-medium">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== INQUIRY CTA ========== */}
      <section className="bg-[#1e3a5f] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-8">Send us your requirements — we reply within 24 hours with specs, pricing, and shipping options.</p>
          <Link href="/contact" className="bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
            Send Inquiry Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
