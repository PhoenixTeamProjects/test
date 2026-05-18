import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'

const applications = [
  { title: 'Heavy-Duty Trucks', titleZh: '重载卡车', desc: 'Engine components, brake systems, and suspension parts designed for long-haul and off-road trucking operations.', icon: '🚛' },
  { title: 'Construction Machinery', titleZh: '工程机械', desc: 'Durable parts for excavators, loaders, bulldozers, and cranes used in demanding construction environments.', icon: '🏗️' },
  { title: 'Mining Equipment', titleZh: '采矿设备', desc: 'Heavy-duty components built to withstand extreme loads, dust, and temperature conditions in mining operations.', icon: '⛏️' },
  { title: 'Agricultural Machinery', titleZh: '农业机械', desc: 'Reliable parts for tractors, harvesters, and irrigation systems supporting modern farming operations.', icon: '🌾' },
  { title: 'Marine Vessels', titleZh: '船舶', desc: 'Engine and electrical components rated for marine environments with salt-water corrosion resistance.', icon: '🚢' },
  { title: 'Power Generation', titleZh: '发电', desc: 'Parts for diesel generator sets and backup power systems used in industrial and commercial facilities.', icon: '⚡' },
]

export default function ApplicationsPage() {
  return (
    <>
      <Header />
      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Applications</h1>
          <p className="text-slate-300">Our parts serve diverse industries across the globe.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 card-hover">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="font-bold text-[#1e3a5f] text-lg mb-1">{app.title}</h3>
                <p className="text-xs text-[#f97316] mb-3">{app.titleZh}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center bg-[#1e3a5f] rounded-xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-3">Need Parts for a Specific Application?</h2>
            <p className="text-slate-300 mb-6">Tell us your requirements and our technical team will help you find the right parts.</p>
            <Link href="/contact" className="inline-block bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
