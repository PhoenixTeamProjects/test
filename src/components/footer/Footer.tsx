import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const productLinks = [
    { href: '/products?cat=engine-parts', label: 'Engine Parts' },
    { href: '/products?cat=brake-systems', label: 'Brake Systems' },
    { href: '/products?cat=suspension-parts', label: 'Suspension Parts' },
    { href: '/products?cat=electrical-systems', label: 'Electrical Systems' },
  ]

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/applications', label: 'Applications' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-[#1e3a5f] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* 👉 修改LOGO：替换下方 /images/logo.jpg 为你的logo图片路径 */}
              <div className="w-10 h-10 bg-[#f97316] rounded flex items-center justify-center font-bold text-lg text-white">
                HK
              </div>
              <div>
                <div className="font-bold text-base text-white">Huanyu Kuntai</div>
                <div className="text-[#f97316] text-[10px] tracking-wider">HUANYU KUNTAI</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Professional exporter of truck parts and construction machinery components since 2010.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#f97316] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#f97316] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#f97316] shrink-0" />
                <span className="text-sm">No.88 Jiefang Road, Jinan, Shandong, China</span>
              </li>
              {/* 👉 修改电话：替换下方的号码 */}
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                <span className="text-sm">+86 138 0000 1234</span>
              </li>
              {/* 👉 修改邮箱：替换下方的邮箱 */}
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <span className="text-sm">sales@huanyukuntai.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#f97316] shrink-0" />
                <span className="text-sm">Mon-Fri: 9:00-18:00 CST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-slate-400">
          {/* 👉 修改公司信息：替换下方文字 */}
          <p>© 2024 Huanyu Kuntai Machinery Co., Ltd. All rights reserved.</p>
          <p className="mt-1">Professional Truck Parts & Construction Machinery Exporter</p>
        </div>
      </div>
    </footer>
  )
}
