// ============================================================
// 5级分类数据 / Five-Level Category Hierarchy
// ============================================================
// 层级结构：L1(一级) → L2(二级) → L3(三级) → L4(四级) → L5(五级)
// 联动逻辑：点击左侧菜单，右侧产品区根据当前选中菜单显示对应产品

export interface CategoryNode {
  id: string
  name: string        // 英文名
  nameZh: string       // 中文名
  slug: string
  children?: CategoryNode[]
}

// ── 五级分类树 ──────────────────────────────────────────────
export const categoryTree: CategoryNode[] = [
  {
    id: 'l1-engine',
    name: 'Engine Parts',
    nameZh: '发动机配件',
    slug: 'engine-parts',
    children: [
      {
        id: 'l2-turbo',
        name: 'Turbochargers',
        nameZh: '涡轮增压器',
        slug: 'turbochargers',
        children: [
          {
            id: 'l3-holset',
            name: 'Holset Series',
            nameZh: '霍斯特系列',
            slug: 'holset-series',
            children: [
              {
                id: 'l4-vgt',
                name: 'VGT Turbochargers',
                nameZh: '可变几何涡轮增压器',
                slug: 'vgt-turbochargers',
                children: [
                  {
                    id: 'l5-hv35',
                    name: 'HV35 Series',
                    nameZh: 'HV35系列',
                    slug: 'hv35-series',
                  },
                  {
                    id: 'l5-hv51',
                    name: 'HV51 Series',
                    nameZh: 'HV51系列',
                    slug: 'hv51-series',
                  },
                  {
                    id: 'l5-hv71',
                    name: 'HV71 Series',
                    nameZh: 'HV71系列',
                    slug: 'hv71-series',
                  },
                ],
              },
              {
                id: 'l4-wastegate',
                name: 'Wastegate Turbochargers',
                nameZh: '放气阀涡轮增压器',
                slug: 'wastegate-turbochargers',
                children: [
                  {
                    id: 'l5-sx16',
                    name: 'SX16 Series',
                    nameZh: 'SX16系列',
                    slug: 'sx16-series',
                  },
                  {
                    id: 'l5-sx18',
                    name: 'SX18 Series',
                    nameZh: 'SX18系列',
                    slug: 'sx18-series',
                  },
                ],
              },
            ],
          },
          {
            id: 'l3-borgwarner',
            name: 'BorgWarner Series',
            nameZh: '博格华纳系列',
            slug: 'borgwarner-series',
            children: [
              {
                id: 'l4-s200',
                name: 'S200 Series',
                nameZh: 'S200系列',
                slug: 's200-series',
                children: [
                  { id: 'l5-s200-1', name: 'S200-EX', nameZh: 'S200-EX', slug: 's200-ex' },
                  { id: 'l5-s200-h', name: 'S200-H', nameZh: 'S200-H', slug: 's200-h' },
                ],
              },
              {
                id: 'l4-gt',
                name: 'GT Series',
                nameZh: 'GT系列',
                slug: 'gt-series',
                children: [
                  { id: 'l5-gt35', name: 'GT35', nameZh: 'GT35', slug: 'gt35' },
                  { id: 'l5-gt40', name: 'GT40', nameZh: 'GT40', slug: 'gt40' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'l2-piston',
        name: 'Pistons & Liners',
        nameZh: '活塞 & 缸套',
        slug: 'pistons-liners',
        children: [
          {
            id: 'l3-diesel-piston',
            name: 'Diesel Engine Pistons',
            nameZh: '柴油机活塞',
            slug: 'diesel-pistons',
            children: [
              {
                id: 'l4-110mm',
                name: 'Bore 110mm',
                nameZh: '缸径110mm',
                slug: 'bore-110mm',
                children: [
                  { id: 'l5-110-alusil', name: 'Alusil 110mm', nameZh: '铝硅合金110mm', slug: '110-alusil' },
                  { id: 'l5-110-castiron', name: 'Cast Iron 110mm', nameZh: '铸铁110mm', slug: '110-castiron' },
                ],
              },
              {
                id: 'l4-130mm',
                name: 'Bore 130mm',
                nameZh: '缸径130mm',
                slug: 'bore-130mm',
                children: [
                  { id: 'l5-130-alusil', name: 'Alusil 130mm', nameZh: '铝硅合金130mm', slug: '130-alusil' },
                ],
              },
            ],
          },
          {
            id: 'l3-cylinder-liner',
            name: 'Cylinder Liners',
            nameZh: '气缸套',
            slug: 'cylinder-liners',
            children: [
              {
                id: 'l4-wet-liner',
                name: 'Wet Liners',
                nameZh: '湿式气缸套',
                slug: 'wet-liners',
                children: [
                  { id: 'l5-wet-standard', name: 'Standard Wet Liner', nameZh: '标准湿式缸套', slug: 'wet-standard' },
                ],
              },
              {
                id: 'l4-dry-liner',
                name: 'Dry Liners',
                nameZh: '干式气缸套',
                slug: 'dry-liners',
                children: [
                  { id: 'l5-dry-standard', name: 'Standard Dry Liner', nameZh: '标准干式缸套', slug: 'dry-standard' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'l2-head',
        name: 'Cylinder Heads',
        nameZh: '气缸盖',
        slug: 'cylinder-heads',
        children: [
          {
            id: 'l3-head-4cyl',
            name: '4-Cylinder Heads',
            nameZh: '四缸气缸盖',
            slug: '4cyl-heads',
            children: [
              { id: 'l5-head-4c-standard', name: 'Standard 4C', nameZh: '标准四缸', slug: '4c-standard' },
            ],
          },
          {
            id: 'l3-head-6cyl',
            name: '6-Cylinder Heads',
            nameZh: '六缸气缸盖',
            slug: '6cyl-heads',
            children: [
              { id: 'l5-head-6c-standard', name: 'Standard 6C', nameZh: '标准六缸', slug: '6c-standard' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'l1-brake',
    name: 'Brake Systems',
    nameZh: '制动系统',
    slug: 'brake-systems',
    children: [
      {
        id: 'l2-air-brake',
        name: 'Air Brake Chambers',
        nameZh: '气压制动室',
        slug: 'air-brake-chambers',
        children: [
          {
            id: 'l3-type-30',
            name: 'Type 30/30',
            nameZh: '30/30型',
            slug: 'type-30-30',
            children: [
              {
                id: 'l4-3030-standard',
                name: 'Standard Type 30/30',
                nameZh: '标准30/30型',
                slug: '3030-standard',
                children: [
                  { id: 'l5-3030-ex', name: 'Type 30/30 EX', nameZh: '30/30 EX型', slug: '3030-ex' },
                ],
              },
            ],
          },
          {
            id: 'l3-type-36',
            name: 'Type 36/36',
            nameZh: '36/36型',
            slug: 'type-36-36',
            children: [
              { id: 'l5-3636-ex', name: 'Type 36/36 EX', nameZh: '36/36 EX型', slug: '3636-ex' },
            ],
          },
        ],
      },
      {
        id: 'l2-air-compressor',
        name: 'Air Compressors',
        nameZh: '空气压缩机',
        slug: 'air-compressors',
        children: [
          {
            id: 'l3-c500',
            name: 'C500 Series',
            nameZh: 'C500系列',
            slug: 'c500-series',
            children: [
              {
                id: 'l4-c500-std',
                name: 'C500 Standard',
                nameZh: 'C500标准型',
                slug: 'c500-std',
                children: [
                  { id: 'l5-c500-12bar', name: 'C500 12bar', nameZh: 'C500 12bar', slug: 'c500-12bar' },
                  { id: 'l5-c500-10bar', name: 'C500 10bar', nameZh: 'C500 10bar', slug: 'c500-10bar' },
                ],
              },
            ],
          },
          {
            id: 'l3-c700',
            name: 'C700 Series',
            nameZh: 'C700系列',
            slug: 'c700-series',
            children: [
              { id: 'l5-c700-14bar', name: 'C700 14bar', nameZh: 'C700 14bar', slug: 'c700-14bar' },
            ],
          },
        ],
      },
      {
        id: 'l2-brake-valve',
        name: 'Brake Valves',
        nameZh: '制动阀',
        slug: 'brake-valves',
        children: [
          {
            id: 'l3-relay-valve',
            name: 'Relay Valves',
            nameZh: '继动阀',
            slug: 'relay-valves',
            children: [
              {
                id: 'l4-relay-1in',
                name: '1-inch Relay Valve',
                nameZh: '1英寸继动阀',
                slug: 'relay-1in',
                children: [
                  { id: 'l5-relay-1in-std', name: '1" Standard', nameZh: '1寸标准型', slug: 'relay-1in-std' },
                ],
              },
            ],
          },
          {
            id: 'l3-protection-valve',
            name: 'Protection Valves',
            nameZh: '保护阀',
            slug: 'protection-valves',
            children: [
              { id: 'l5-prot-std', name: 'Standard Protection', nameZh: '标准保护阀', slug: 'prot-std' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'l1-suspension',
    name: 'Suspension Parts',
    nameZh: '悬挂配件',
    slug: 'suspension-parts',
    children: [
      {
        id: 'l2-leaf-spring',
        name: 'Leaf Springs',
        nameZh: '板簧',
        slug: 'leaf-springs',
        children: [
          {
            id: 'l3-multi-leaf',
            name: 'Multi-Leaf Springs',
            nameZh: '多片板簧',
            slug: 'multi-leaf-springs',
            children: [
              {
                id: 'l4-3-layer',
                name: '3-Layer Multi-Leaf',
                nameZh: '三层多片板簧',
                slug: '3-layer-leaf',
                children: [
                  { id: 'l5-3layer-10t', name: '3-Layer 10T', nameZh: '三层10吨', slug: '3layer-10t' },
                ],
              },
              {
                id: 'l4-5-layer',
                name: '5-Layer Multi-Leaf',
                nameZh: '五层多片板簧',
                slug: '5-layer-leaf',
                children: [
                  { id: 'l5-5layer-13t', name: '5-Layer 13T', nameZh: '五层13吨', slug: '5layer-13t' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'l2-shock-abs',
        name: 'Shock Absorbers',
        nameZh: '减震器',
        slug: 'shock-absorbers',
        children: [
          {
            id: 'l3-gas-shock',
            name: 'Gas Shocks',
            nameZh: '气体减震器',
            slug: 'gas-shocks',
            children: [
              {
                id: 'l4-heavy-duty-gas',
                name: 'Heavy Duty Gas',
                nameZh: '重载气体减震器',
                slug: 'heavy-duty-gas',
                children: [
                  { id: 'l5-hd-400', name: 'HD-400 Series', nameZh: 'HD-400系列', slug: 'hd-400' },
                  { id: 'l5-hd-500', name: 'HD-500 Series', nameZh: 'HD-500系列', slug: 'hd-500' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'l1-electrical',
    name: 'Electrical Systems',
    nameZh: '电气系统',
    slug: 'electrical-systems',
    children: [
      {
        id: 'l2-alternator',
        name: 'Alternators',
        nameZh: '发电机',
        slug: 'alternators',
        children: [
          {
            id: 'l3-alt-24v',
            name: '24V Alternators',
            nameZh: '24V发电机',
            slug: '24v-alternators',
            children: [
              {
                id: 'l4-alt-80a',
                name: '80A Alternators',
                nameZh: '80A发电机',
                slug: '80a-alternators',
                children: [
                  { id: 'l5-alt-80a-std', name: '28V 80A Standard', nameZh: '28V 80A标准型', slug: '28v-80a-std' },
                  { id: 'l5-alt-80a-hc', name: '28V 80A High-Current', nameZh: '28V 80A高电流型', slug: '28v-80a-hc' },
                ],
              },
              {
                id: 'l4-alt-120a',
                name: '120A Alternators',
                nameZh: '120A发电机',
                slug: '120a-alternators',
                children: [
                  { id: 'l5-alt-120a-std', name: '28V 120A Standard', nameZh: '28V 120A标准型', slug: '28v-120a-std' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'l2-starter',
        name: 'Starters',
        nameZh: '起动机',
        slug: 'starters',
        children: [
          {
            id: 'l3-str-24v',
            name: '24V Starters',
            nameZh: '24V起动机',
            slug: '24v-starters',
            children: [
              {
                id: 'l4-str-5kw',
                name: '5kW Starters',
                nameZh: '5kW起动机',
                slug: '5kw-starters',
                children: [
                  { id: 'l5-str-5kw-pinion', name: '5kW Pinion Type', nameZh: '5kW齿轮式', slug: '5kw-pinion' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'l2-battery',
        name: 'Batteries',
        nameZh: '电池',
        slug: 'batteries',
        children: [
          {
            id: 'l3-lead-acid',
            name: 'Lead-Acid Batteries',
            nameZh: '铅酸电池',
            slug: 'lead-acid',
            children: [
              {
                id: 'l4-12v-battery',
                name: '12V Batteries',
                nameZh: '12V电池',
                slug: '12v-batteries',
                children: [
                  { id: 'l5-12v-150ah', name: '12V 150Ah', nameZh: '12V 150安时', slug: '12v-150ah' },
                  { id: 'l5-12v-200ah', name: '12V 200Ah', nameZh: '12V 200安时', slug: '12v-200ah' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

// ── 扁平化：方便按菜单ID查产品 ─────────────────────────────
export interface ProductItem {
  id: string
  slug: string
  name: string
  nameZh: string
  categorySlug: string    // 关联到的最深层级slug
  description: string
  image: string
  price: number           // 美元
  unit: string            // 单位
}

export const products: ProductItem[] = [
  // ── Engine - Turbochargers - Holset - VGT ──
  { id: 'p-001', slug: 'hv35-turbo', name: 'Holset HV35 VGT Turbocharger', nameZh: '霍斯特HV35可变几何涡轮增压器', categorySlug: 'hv35-series', description: 'Variable geometry turbocharger for heavy-duty diesel engines, 35mm compressor wheel.', image: '/images/products/turbocharger.svg', price: 485, unit: 'pcs' },
  { id: 'p-002', slug: 'hv51-turbo', name: 'Holset HV51 VGT Turbocharger', nameZh: '霍斯特HV51可变几何涡轮增压器', categorySlug: 'hv51-series', description: 'Variable geometry turbocharger, high boost for 11-15L engines.', image: '/images/products/turbocharger.svg', price: 520, unit: 'pcs' },
  { id: 'p-003', slug: 'hv71-turbo', name: 'Holset HV71 VGT Turbocharger', nameZh: '霍斯特HV71可变几何涡轮增压器', categorySlug: 'hv71-series', description: 'Heavy-duty VGT turbocharger for 15L+ diesel engines.', image: '/images/products/turbocharger.svg', price: 580, unit: 'pcs' },
  // ── Engine - Turbochargers - Holset - Wastegate ──
  { id: 'p-004', slug: 'sx16-turbo', name: 'Holset SX16 Wastegate Turbo', nameZh: '霍斯特SX16放气阀涡轮增压器', categorySlug: 'sx16-series', description: 'Wastegate turbo for medium-duty diesel engines, 160mm turbine.', image: '/images/products/turbocharger.svg', price: 390, unit: 'pcs' },
  { id: 'p-005', slug: 'sx18-turbo', name: 'Holset SX18 Wastegate Turbo', nameZh: '霍斯特SX18放气阀涡轮增压器', categorySlug: 'sx18-series', description: 'Wastegate turbo with 180mm turbine wheel for 6-9L engines.', image: '/images/products/turbocharger.svg', price: 420, unit: 'pcs' },
  // ── Engine - Turbochargers - BorgWarner - S200 ──
  { id: 'p-006', slug: 's200-ex-turbo', name: 'BorgWarner S200-EX Turbo', nameZh: '博格华纳S200-EX涡轮增压器', categorySlug: 's200-ex', description: 'S200-EX wastegate turbo for commercial diesel engines.', image: '/images/products/turbocharger.svg', price: 445, unit: 'pcs' },
  { id: 'p-007', slug: 's200-h-turbo', name: 'BorgWarner S200-H Turbo', nameZh: '博格华纳S200-H涡轮增压器', categorySlug: 's200-h', description: 'S200-H high-flow wastegate turbo for 10-12L engines.', image: '/images/products/turbocharger.svg', price: 460, unit: 'pcs' },
  // ── Engine - Turbochargers - BorgWarner - GT ──
  { id: 'p-008', slug: 'gt35-turbo', name: 'BorgWarner GT35 Turbo', nameZh: '博格华纳GT35涡轮增压器', categorySlug: 'gt35', description: 'GT35 ball-bearing turbo with 350mm turbine for performance diesel.', image: '/images/products/turbocharger.svg', price: 380, unit: 'pcs' },
  { id: 'p-009', slug: 'gt40-turbo', name: 'BorgWarner GT40 Turbo', nameZh: '博格华纳GT40涡轮增压器', categorySlug: 'gt40', description: 'GT40 high-boost turbo for heavy-duty mining equipment.', image: '/images/products/turbocharger.svg', price: 410, unit: 'pcs' },
  // ── Engine - Pistons & Liners - Diesel Pistons - 110mm ──
  { id: 'p-010', slug: 'piston-110-alu', name: 'Diesel Piston 110mm Alusil', nameZh: '110mm铝硅合金柴油活塞', categorySlug: '110-alusil', description: '110mm bore alusil-coated diesel piston for commercial engines.', image: '/images/products/piston.svg', price: 45, unit: 'pcs' },
  { id: 'p-011', slug: 'piston-110-ci', name: 'Diesel Piston 110mm Cast Iron', nameZh: '110mm铸铁柴油活塞', categorySlug: '110-castiron', description: '110mm cast iron diesel piston with heat-resistant coating.', image: '/images/products/piston.svg', price: 38, unit: 'pcs' },
  { id: 'p-012', slug: 'piston-130-alu', name: 'Diesel Piston 130mm Alusil', nameZh: '130mm铝硅合金柴油活塞', categorySlug: '130-alusil', description: '130mm bore alusil diesel piston for large-bore engines.', image: '/images/products/piston.svg', price: 58, unit: 'pcs' },
  // ── Engine - Pistons & Liners - Cylinder Liners ──
  { id: 'p-013', slug: 'liner-wet-std', name: 'Wet Cylinder Liner Standard', nameZh: '标准湿式气缸套', categorySlug: 'wet-standard', description: 'Wet liner with anti-corrosion treatment, bore 100-120mm.', image: '/images/products/piston.svg', price: 32, unit: 'pcs' },
  { id: 'p-014', slug: 'liner-dry-std', name: 'Dry Cylinder Liner Standard', nameZh: '标准干式气缸套', categorySlug: 'dry-standard', description: 'Dry liner for engine rebuilding, precision honed finish.', image: '/images/products/piston.svg', price: 28, unit: 'pcs' },
  // ── Engine - Cylinder Heads ──
  { id: 'p-015', slug: 'head-4c-std', name: '4-Cylinder Cylinder Head', nameZh: '四缸气缸盖', categorySlug: '4c-standard', description: 'Complete 4-cylinder cylinder head with valves and springs.', image: '/images/products/piston.svg', price: 680, unit: 'pcs' },
  { id: 'p-016', slug: 'head-6c-std', name: '6-Cylinder Cylinder Head', nameZh: '六缸气缸盖', categorySlug: '6c-standard', description: 'Complete 6-cylinder cylinder head for heavy-duty engines.', image: '/images/products/piston.svg', price: 950, unit: 'pcs' },
  // ── Brake - Air Brake Chambers - Type 30/30 ──
  { id: 'p-017', slug: 'brake-3030-ex', name: 'Air Brake Chamber Type 30/30 EX', nameZh: '30/30型气压制动室 EX', categorySlug: '3030-ex', description: 'Dual-diaphragm spring brake chamber, 30/30 type, DOT/ECE certified.', image: '/images/products/brake.svg', price: 68, unit: 'pcs' },
  // ── Brake - Air Brake Chambers - Type 36/36 ──
  { id: 'p-018', slug: 'brake-3636-ex', name: 'Air Brake Chamber Type 36/36 EX', nameZh: '36/36型气压制动室 EX', categorySlug: '3636-ex', description: 'Heavy-duty 36/36 dual-diaphragm brake chamber for commercial vehicles.', image: '/images/products/brake.svg', price: 78, unit: 'pcs' },
  // ── Brake - Air Compressors ──
  { id: 'p-019', slug: 'comp-c500-12bar', name: 'Air Compressor C500 12bar', nameZh: 'C500 12bar空气压缩机', categorySlug: 'c500-12bar', description: 'Heavy-duty air compressor, 500cc/rev, 12 bar max pressure.', image: '/images/products/compressor.svg', price: 320, unit: 'pcs' },
  { id: 'p-020', slug: 'comp-c500-10bar', name: 'Air Compressor C500 10bar', nameZh: 'C500 10bar空气压缩机', categorySlug: 'c500-10bar', description: 'Air compressor C500, 10 bar, oil-flooded twin-cylinder design.', image: '/images/products/compressor.svg', price: 290, unit: 'pcs' },
  { id: 'p-021', slug: 'comp-c700-14bar', name: 'Air Compressor C700 14bar', nameZh: 'C700 14bar空气压缩机', categorySlug: 'c700-14bar', description: 'C700 high-pressure compressor for large commercial vehicles, 14 bar.', image: '/images/products/compressor.svg', price: 410, unit: 'pcs' },
  // ── Brake - Brake Valves ──
  { id: 'p-022', slug: 'valve-relay-1in', name: '1-inch Relay Valve', nameZh: '1英寸继动阀', categorySlug: 'relay-1in-std', description: '1-inch port relay valve for air brake systems, fast response.', image: '/images/products/brake.svg', price: 42, unit: 'pcs' },
  { id: 'p-023', slug: 'valve-prot-std', name: 'Brake Protection Valve', nameZh: '制动保护阀', categorySlug: 'prot-std', description: 'System protection valve for dual-circuit air brake systems.', image: '/images/products/brake.svg', price: 55, unit: 'pcs' },
  // ── Suspension - Leaf Springs ──
  { id: 'p-024', slug: 'spring-3layer-10t', name: '3-Layer Multi-Leaf Spring 10T', nameZh: '三层多片板簧10吨', categorySlug: '3layer-10t', description: '3-layer leaf spring assembly, 10T capacity, heat-treated alloy steel.', image: '/images/products/spring.svg', price: 145, unit: 'pcs' },
  { id: 'p-025', slug: 'spring-5layer-13t', name: '5-Layer Multi-Leaf Spring 13T', nameZh: '五层多片板簧13吨', categorySlug: '5layer-13t', description: '5-layer heavy-duty leaf spring, 13T axle capacity, shot-peened.', image: '/images/products/spring.svg', price: 185, unit: 'pcs' },
  // ── Suspension - Shock Absorbers ──
  { id: 'p-026', slug: 'shock-hd400', name: 'Shock Absorber HD-400 Series', nameZh: 'HD-400系列减震器', categorySlug: 'hd-400', description: 'Heavy-duty gas shock absorber HD-400 for truck suspension.', image: '/images/products/spring.svg', price: 68, unit: 'pcs' },
  { id: 'p-027', slug: 'shock-hd500', name: 'Shock Absorber HD-500 Series', nameZh: 'HD-500系列减震器', categorySlug: 'hd-500', description: 'HD-500 extended service life gas shock for off-road trucks.', image: '/images/products/spring.svg', price: 75, unit: 'pcs' },
  // ── Electrical - Alternators ──
  { id: 'p-028', slug: 'alt-28v-80a-std', name: 'Alternator 28V 80A Standard', nameZh: '28V 80A标准发电机', categorySlug: '28v-80a-std', description: 'Heavy-duty alternator 28V 80A, brushless design, built-in regulator.', image: '/images/products/alternator.svg', price: 185, unit: 'pcs' },
  { id: 'p-029', slug: 'alt-28v-80a-hc', name: 'Alternator 28V 80A High-Current', nameZh: '28V 80A高电流发电机', categorySlug: '28v-80a-hc', description: '28V 80A high-current alternator for vehicles with high electrical demand.', image: '/images/products/alternator.svg', price: 210, unit: 'pcs' },
  { id: 'p-030', slug: 'alt-28v-120a-std', name: 'Alternator 28V 120A Standard', nameZh: '28V 120A标准发电机', categorySlug: '28v-120a-std', description: '28V 120A heavy-duty alternator, 3-phase brushless, SAE mount.', image: '/images/products/alternator.svg', price: 265, unit: 'pcs' },
  // ── Electrical - Starters ──
  { id: 'p-031', slug: 'str-5kw-pinion', name: 'Starter 5kW Pinion Type', nameZh: '5kW齿轮式起动机', categorySlug: '5kw-pinion', description: '5kW pre-gear type starter motor for heavy-duty diesel engines.', image: '/images/products/alternator.svg', price: 195, unit: 'pcs' },
  // ── Electrical - Batteries ──
  { id: 'p-032', slug: 'bat-12v-150ah', name: 'Lead-Acid Battery 12V 150Ah', nameZh: '12V 150安时铅酸电池', categorySlug: '12v-150ah', description: '12V 150Ah deep-cycle lead-acid battery for commercial vehicles.', image: '/images/products/alternator.svg', price: 120, unit: 'pcs' },
  { id: 'p-033', slug: 'bat-12v-200ah', name: 'Lead-Acid Battery 12V 200Ah', nameZh: '12V 200安时铅酸电池', categorySlug: '12v-200ah', description: '12V 200Ah heavy-duty lead-acid battery, maintenance-free.', image: '/images/products/alternator.svg', price: 155, unit: 'pcs' },
]

// ── 辅助函数：查找某菜单slug下所有产品 ─────────────────────
export function getProductsByCategorySlug(slug: string | null): ProductItem[] {
  if (!slug) return products
  return products.filter(p => p.categorySlug === slug)
}

// ── 辅助函数：统计某菜单slug下的产品数量 ────────────────────
export function countProductsBySlug(slug: string): number {
  return products.filter(p => p.categorySlug === slug).length
}
