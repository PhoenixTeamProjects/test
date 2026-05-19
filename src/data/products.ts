// 产品数据 / Products Data
// 用途：产品列表和产品详情页数据来源
// 修改说明：增删产品请编辑此文件中的 products 数组

export interface Product {
  id: string
  slug: string
  name: string
  nameZh: string
  category: string
  categorySlug: string
  description: string
  descriptionZh: string
  image: string
  specs: { label: string; value: string }[]
  features: string[]
  applications: string[]
}

export interface Category {
  id: string
  slug: string
  name: string
  nameZh: string
  description: string
  descriptionZh: string
  image: string
  productCount: number
}

export const categories = [
  { id: 'cat-1', slug: 'engine-parts', name: 'Engine Parts', nameZh: '发动机配件', description: 'High-quality engine components for heavy-duty trucks and construction machinery.', descriptionZh: '重卡及工程机械高质量发动机配件', image: '/images/products/turbocharger.svg', productCount: 24 },
  { id: 'cat-2', slug: 'brake-systems', name: 'Brake Systems', nameZh: '制动系统', description: 'Reliable brake systems meeting international safety standards.', descriptionZh: '符合国际安全标准的可靠制动系统', image: '/images/products/brake.svg', productCount: 18 },
  { id: 'cat-3', slug: 'suspension-parts', name: 'Suspension Parts', nameZh: '悬挂配件', description: 'Durable suspension components for smooth and safe operation.', descriptionZh: '持久耐用的悬挂配件，确保平稳安全行驶', image: '/images/products/spring.svg', productCount: 15 },
  { id: 'cat-4', slug: 'electrical-systems', name: 'Electrical Systems', nameZh: '电气系统', description: 'Advanced electrical components for modern vehicles.', descriptionZh: '现代车辆先进电气元件', image: '/images/products/alternator.svg', productCount: 12 },
]

export const products = [
  {
    id: 'p-001', slug: 'turbocharger-t4', name: 'Turbocharger T4 Series', nameZh: 'T4系列涡轮增压器',
    category: 'Engine Parts', categorySlug: 'engine-parts',
    description: 'High-efficiency turbocharger designed for heavy-duty diesel engines. Improves fuel economy and power output with precision-engineered compressor and turbine wheels.',
    descriptionZh: '专为重载柴油机设计的高效涡轮增压器，提升燃油经济性和功率输出',
    image: '/images/products/turbocharger.svg',
    specs: [
      { label: 'Model', value: 'T4-EX' },
      { label: 'Compressor Ratio', value: '3.5:1' },
      { label: 'Max Boost', value: '1.8 bar' },
      { label: 'Flow Rate', value: '350 kg/min' },
      { label: 'Weight', value: '28 kg' },
    ],
    features: ['Wastegate valve', 'Dual-row bearings', 'Cast iron housing', 'Corrosion resistant'],
    applications: ['Heavy-duty trucks', 'Mining equipment', 'Construction machinery', 'Power generators'],
  },
  {
    id: 'p-002', slug: 'piston-assembly', name: 'Piston Assembly Kit', nameZh: '活塞组件套装',
    category: 'Engine Parts', categorySlug: 'engine-parts',
    description: 'Complete piston assembly with rings, pins and connecting rods. OEM quality replacement for diesel engines in commercial vehicles.',
    descriptionZh: '配备活塞环、活塞销和连杆的完整活塞组件，OEM品质替代件',
    image: '/images/products/piston.svg',
    specs: [
      { label: 'Bore Size', value: '110mm' },
      { label: 'Compression Ratio', value: '18:1' },
      { label: 'Material', value: 'Forged Aluminum Alloy' },
      { label: 'Rings', value: '3-piece steel' },
    ],
    features: ['Forged construction', 'Heat-resistant coating', 'Low friction rings', 'Direct OEM fit'],
    applications: ['Diesel engines', 'Industrial machinery', 'Marine engines', 'Generator sets'],
  },
  {
    id: 'p-003', slug: 'air-brake-chamber', name: 'Air Brake Chamber Type 30/30', nameZh: '30/30型气压制动室',
    category: 'Brake Systems', categorySlug: 'brake-systems',
    description: 'Dual-diaphragm spring brake chamber for commercial vehicles. Meets ECE R13 and FMVSS standards for safety and reliability.',
    descriptionZh: '商用车双膜片弹簧制动室，符合ECE R13标准',
    image: '/images/products/brake.svg',
    specs: [
      { label: 'Type', value: '30/30 Dual Diaphragm' },
      { label: 'Push Rod Stroke', value: '60mm' },
      { label: 'Service Brake', value: '30 mm per 100 PSI' },
      { label: 'Spring Brake', value: 'Release at 60 PSI' },
    ],
    features: ['DOT / ECE certified', 'Corrosion-proof coating', 'Easy maintenance', 'Long service life'],
    applications: ['Semi-trailers', 'Box trucks', 'Buses', 'Industrial vehicles'],
  },
  {
    id: 'p-004', slug: 'air-compressor', name: 'Air Compressor C500', nameZh: 'C500空气压缩机',
    category: 'Brake Systems', categorySlug: 'brake-systems',
    description: 'Heavy-duty air compressor for brake systems. Oil-flooded twin-cylinder design with high reliability and easy service access.',
    descriptionZh: '制动系统重载空气压缩机，油浸式双缸设计',
    image: '/images/products/compressor.svg',
    specs: [
      { label: 'Displacement', value: '500 cc/rev' },
      { label: 'Max Pressure', value: '12 bar' },
      { label: 'Cooling', value: 'Air-cooled' },
      { label: 'Mount', value: 'SAE 3-bolt' },
    ],
    features: ['High reliability', 'Low noise operation', 'Easy service access', 'Interchangeable parts'],
    applications: ['Air brake systems', 'Air suspension', 'Clutch actuation', 'Air tools'],
  },
  {
    id: 'p-005', slug: 'leaf-spring-assembly', name: 'Leaf Spring Assembly', nameZh: '板簧总成',
    category: 'Suspension Parts', categorySlug: 'suspension-parts',
    description: 'Multi-leaf spring assembly for truck suspension. Heat-treated alloy steel construction with shot-peened surface for maximum durability.',
    descriptionZh: '卡车悬挂多片板簧总成，热处理合金钢制造',
    image: '/images/products/spring.svg',
    specs: [
      { label: 'Length', value: '1200mm' },
      { label: 'Width', value: '100mm' },
      { label: 'Thickness', value: '12-20mm taper' },
      { label: 'Capacity', value: '13T per axle' },
    ],
    features: ['Shot-peened finish', 'Anti-corrosion primer', 'Heavy-duty clips', 'Greaseable bushings'],
    applications: ['Truck suspension', 'Trailer suspension', 'Heavy haul vehicles', 'Off-road trucks'],
  },
  {
    id: 'p-006', slug: 'alternator-24v', name: 'Alternator 28V 80A', nameZh: '28V 80A发电机',
    category: 'Electrical Systems', categorySlug: 'electrical-systems',
    description: 'Heavy-duty alternator for commercial vehicles. Built-in voltage regulator and cooling fan. Brushless design for extended service life.',
    descriptionZh: '商用车重载发电机，内置电压调节器和冷却风扇',
    image: '/images/products/alternator.svg',
    specs: [
      { label: 'Voltage', value: '28V DC' },
      { label: 'Current Output', value: '80A' },
      { label: 'Pulley', value: '8-groove poly-V' },
      { label: 'Rotation', value: 'CW/CCW reversible' },
    ],
    features: ['Brushless design', 'Over-voltage protection', 'EMI suppressed', 'Vibration resistant'],
    applications: ['Trucks', 'Buses', 'Agricultural machinery', 'Military vehicles'],
  },
]
