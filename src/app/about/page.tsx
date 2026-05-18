import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { Award, Globe, Users, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
          <p className="text-slate-300">Learn about Huanyu Kuntai — your trusted partner in truck parts export.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">15+ Years of Excellence in Parts Export</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded in 2010, Huanyu Kuntai Machinery Co., Ltd. is a professional exporter specializing in heavy-duty truck parts and construction machinery components.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Based in Jinan, Shandong — China&apos;s manufacturing hub — we supply OEM-grade parts to clients across 50+ countries, serving industries including logistics, mining, construction, and agriculture.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our commitment to quality, competitive pricing, and reliable logistics has made us a trusted partner for distributors, workshops, and fleet operators worldwide.
              </p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-8">
              <h3 className="font-semibold text-[#1e3a5f] mb-6">Company Overview</h3>
              <div className="space-y-4">
                {[
                  { icon: Users, label: 'Team', value: '50+ employees, 15+ sales engineers' },
                  { icon: Globe, label: 'Markets', value: '50+ countries worldwide' },
                  { icon: Award, label: 'Experience', value: '15+ years in parts export' },
                  { icon: CheckCircle, label: 'Quality', value: 'ISO 9001, CE, DOT, IATF certified' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#1e3a5f]" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</span>
                      <p className="font-medium text-[#1e3a5f]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['ISO 9001:2015', 'CE', 'DOT', 'ECE R13', 'IATF 16949', 'SGS Verified'].map(cert => (
              <div key={cert} className="bg-white px-6 py-4 rounded-lg shadow-sm border border-slate-200 font-medium text-[#1e3a5f]">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
