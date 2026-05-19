// 新闻/博客数据 / News Data
// 用途：新闻列表页和详情页数据来源
// 修改说明：增删新闻请编辑此文件中的 news 数组

export interface NewsItem {
  id: string
  slug: string
  title: string
  titleZh: string
  excerpt: string
  excerptZh: string
  content: string
  contentZh: string
  date: string
  author: string
  category: string
  image: string
  featured?: boolean
}

export const newsItems: NewsItem[] = [
  {
    id: 'n-001',
    slug: 'truck-parts-market-trends-2024',
    title: 'Global Truck Parts Market Trends and Outlook 2024',
    titleZh: '2024年全球卡车配件市场趋势与展望',
    excerpt: 'The commercial vehicle parts industry continues to grow globally, driven by increasing freight demand and stricter emission standards.',
    excerptZh: '商业汽车配件行业在全球货运需求增长和排放标准趋严的推动下持续增长。',
    date: '2024-03-15',
    author: 'Huanyu Kuntai',
    category: 'Industry News',
    image: '/images/news/truck-market.jpg',
    featured: true,
    content: `The global truck parts market is experiencing significant growth in 2024, driven by multiple factors including increased freight transportation demand, stricter environmental regulations, and technological advancements in commercial vehicles.

**Key Market Drivers:**

1. **E-commerce Boom**: The continued growth of e-commerce has led to increased demand for last-mile delivery trucks, driving parts replacement and maintenance needs.

2. **Emission Standards**: Stricter emission regulations in Europe, North America, and China are accelerating fleet renewals, creating demand for new parts compatible with Euro VI, EPA 2027, and China VI standards.

3. **Electric Truck Transition**: While electric trucks are gaining market share, the transition period will sustain traditional parts demand for decades. Diesel parts remain critical for existing fleets.

4. **Aftermarket Growth**: Independent aftermarket channels are expanding as fleet operators seek cost-effective alternatives to OEM parts.

**Regional Outlook:**

- **China**: World's largest truck market, with export growth to Belt and Road countries
- **North America**: Strong aftermarket demand, driver shortage driving automation trends
- **Europe**: Euro VI parts and electric truck infrastructure focus
- **Southeast Asia**: Growing market with increasing Chinese truck exports

**Opportunities for Parts Suppliers:**

Quality-certified manufacturers with competitive pricing and reliable logistics are well-positioned to capture market share in this growing sector.`,
    contentZh: `2024年全球卡车配件市场在多重因素推动下实现显著增长，包括货运需求增加、环保法规趋严以及商用车技术进步。

**市场主要驱动因素：**

1. **电商蓬勃发展**：电商持续增长推动同城配送卡车需求，带动配件更换和维护需求。

2. **排放标准升级**：欧洲、北美和中国更严格的排放法规加速车队更新，创造符合欧VI、EPA 2027和中国VI标准的新配件需求。

3. **电动卡车转型**：电动卡车市场份额增长，但过渡期将维持传统配件需求数十年。柴油车配件对现有车队仍然关键。

4. **售后市场增长**：独立售后渠道正在扩展，车队运营商寻求更具性价比的OEM配件替代品。

**区域展望：**

- **中国**：全球最大卡车市场，对"一带一路"国家出口增长
- **北美**：强劲售后市场需求，驾驶员短缺推动自动化趋势
- **欧洲**：欧VI配件和电动卡车基础设施重点
- **东南亚**：增长市场，中国卡车出口增加`,
  },
  {
    id: 'n-002',
    slug: 'how-to-choose-quality-brake-chambers',
    title: 'How to Choose Quality Brake Chambers for Commercial Vehicles',
    titleZh: '如何为商用车选择优质的制动气室',
    excerpt: 'Brake chambers are critical safety components. Learn what to look for when sourcing brake chambers for trucks and trailers.',
    excerptZh: '制动气室是关键安全部件。了解在为卡车和拖车采购制动气室时的注意事项。',
    date: '2024-02-20',
    author: 'Huanyu Kuntai',
    category: 'Technical Guide',
    image: '/images/news/brake-tech.jpg',
    content: `Brake chambers are among the most critical safety components on commercial vehicles. Choosing the right brake chamber affects braking performance, vehicle safety, and operating costs.

**What is a Brake Chamber?**

A brake chamber converts air pressure into mechanical force to actuate the brake shoes or pads. In spring brake chambers, the spring force provides parking/Emergency braking.

**Key Specifications:**

- **Type**: 30, 30/30, 36, 24 — corresponds to brake size
- **Push rod travel**: Affects brake adjustment range
- **Service brake output**: Force delivered to the brake
- **Spring brake release pressure**: Typically 60-80 PSI

**Certification Standards:**

Look for brake chambers that meet international safety standards:
- ECE R13: European braking regulation
- FMVSS 121: US federal motor vehicle safety standard
- DOT certification: Required for US market

**Quality Indicators:**

1. **Material**: High-quality cast aluminum or steel housing
2. **Diaphragm**: Oil-resistant rubber, consistent thickness
3. **Corrosion protection**: Powder coating or electrophoretic coating
4. **Service life**: 500,000+ cycles for premium products

**Common Mistakes to Avoid:**

- Choosing solely based on price
- Ignoring certification requirements for your target market
- Not verifying dimensional compatibility with existing brake systems
- Overlooking the importance of diaphragm material quality`,
    contentZh: `制动气室是商用车最关键的安全部件之一。选择合适的制动气室直接影响制动性能、车辆安全和运营成本。

**什么是制动气室？**

制动气室将气压转换为机械力，驱动制动蹄或制动片。在弹簧制动气室中，弹簧力提供驻车/紧急制动。

**关键规格参数：**

- **型号**：30、30/30、36、24——对应制动器尺寸
- **推杆行程**：影响制动调整范围
- **行车制动输出力**：传递给制动的力
- **弹簧制动释放压力**：通常为60-80 PSI

**认证标准：**

选择符合国际安全标准的制动气室：
- ECE R13：欧洲制动法规
- FMVSS 121：美国联邦机动车安全标准
- DOT认证：美国市场必备

**质量指标：**

1. **材质**：优质铸铝或钢壳体
2. **膜片**：耐油橡胶，厚度均匀
3. **防腐保护**：粉末涂层或电泳涂层
4. **使用寿命**：优质产品50万次以上`,
  },
  {
    id: 'n-003',
    slug: 'turbocharger-maintenance-tips',
    title: 'Turbocharger Maintenance: Extending Service Life',
    titleZh: '涡轮增压器维护：延长使用寿命',
    excerpt: 'Proper maintenance can significantly extend turbocharger service life. Here are expert tips for maintaining turbocharged engines.',
    excerptZh: '正确的维护可以显著延长涡轮增压器使用寿命。这里有维护涡轮增压器发动机的专家建议。',
    date: '2024-01-10',
    author: 'Huanyu Kuntai',
    category: 'Technical Guide',
    image: '/images/news/turbo-maintain.jpg',
    featured: true,
    content: `Turbochargers are precision-engineered components that can last the lifetime of an engine when properly maintained. Here are essential maintenance practices.

**Understanding Turbochargers:**

A turbocharger uses exhaust gases to drive a compressor, forcing more air into the engine cylinders. This increases power output without increasing engine size or fuel consumption.

**Key Maintenance Practices:**

**1. Warm Up and Cool Down:**
- Allow engine to idle for 1-2 minutes before high-load operation
- After high-load operation, idle for 2-3 minutes before shutdown
- This allows turbo temperatures to stabilize and oil to cool

**2. Use Quality Engine Oil:**
- Use manufacturer-recommended oil grade
- Change oil at specified intervals
- Consider synthetic oils for extended drain intervals
- Oil quality directly affects turbo bearing life

**3. Keep Air Filters Clean:**
- Replace air filters regularly
- Clean air is essential for compressor efficiency
- Check for air intake leaks

**4. Monitor for Warning Signs:**
- Unusual whining or whirring sounds
- Excessive oil consumption
- Blue or white exhaust smoke
- Loss of power or boost pressure
- Oil leakage around turbo housing

**Common Causes of Turbo Failure:**

1. Insufficient warm-up/cool-down time
2. Using wrong or degraded engine oil
3. Restricting clean air intake
4. Ignoring oil change intervals
5. Operating with restricted exhaust flow`,
    contentZh: `涡轮增压器是精密工程部件，在正确维护的情况下可以使用整个发动机寿命。以下是基本维护实践。

**了解涡轮增压器：**

涡轮增压器利用废气驱动压缩机，向发动机气缸强制送入更多空气。这在不改发动机尺寸或油耗的情况下增加功率输出。

**关键维护实践：**

**1. 预热和冷却：**
- 高负荷运行前让发动机怠速1-2分钟
- 高负荷运行后，关闭前怠速2-3分钟
- 这样可以让涡轮温度稳定，机油冷却

**2. 使用优质发动机油：**
- 使用制造商推荐的机油等级
- 按规定间隔更换机油
- 考虑使用合成油延长换油周期
- 机油质量直接影响涡轮轴承寿命

**3. 保持空气滤清器清洁：**
- 定期更换空气滤清器
- 清洁空气对压缩机效率至关重要
- 检查进气是否有泄漏

**4. 监测警告信号：**
- 异常的呜呜声或嗖嗖声
- 过度消耗机油
- 蓝色或白色排气烟
- 动力损失或增压压力下降
- 涡轮壳周围漏油`,
  },
  {
    id: 'n-004',
    slug: 'export-logistics-truck-parts',
    title: 'Shipping Truck Parts Internationally: Logistics Guide',
    titleZh: '国际运输卡车配件：物流指南',
    excerpt: 'Understanding shipping options, packaging requirements, and documentation for exporting truck parts worldwide.',
    excerptZh: '了解出口卡车配件的运输选择、包装要求和文件准备。',
    date: '2023-12-05',
    author: 'Huanyu Kuntai',
    category: 'Export Guide',
    image: '/images/news/logistics.jpg',
    content: `Successfully exporting truck parts requires understanding international logistics, packaging standards, and documentation requirements.

**Shipping Methods:**

**1. Sea Freight (Most Common)**
- FCL (Full Container Load): 20ft or 40ft containers
- LCL (Less than Container Load): Consolidated shipments
- Transit times: 15-45 days depending on destination
- Best for: Large volume orders, heavy items

**2. Air Freight**
- Faster transit: 3-7 days
- Higher cost: 4-10x sea freight
- Best for: Urgent orders, samples, high-value parts

**3. Express Courier**
- Door-to-door service
- Best for: Samples and small parcels

**Packaging Requirements:**

- **Crating**: Heavy parts require wooden crates
- **Palletizing**: Standard 120x100cm or 120x80cm pallets
- **Moisture protection**: Desiccants, moisture barrier bags
- **Labeling**: Clear part numbers, country of origin

**Documentation:**

1. Commercial Invoice
2. Packing List
3. Bill of Lading (B/L) or Air Waybill
4. Certificate of Origin
5. Product-specific certifications (CE, DOT, etc.)
6. Export Declaration

**Incoterms:**

Common incoterms for truck parts:
- FOB (Free on Board): Seller's responsibility ends at port
- CIF (Cost, Insurance, Freight): Seller covers shipping and insurance
- DDP (Delivered Duty Paid): Seller handles all import duties
- EXW (Ex Works): Buyer assumes all responsibility`,
    contentZh: `成功出口卡车配件需要了解国际物流、包装标准和文件要求。

**运输方式：**

**1. 海运（最常见）**
- FCL（整箱）：20ft或40ft集装箱
- LCL（拼箱）：合并运输
- 运输时间：15-45天（视目的地而定）
- 适合：大宗订单、重货

**2. 空运**
- 运输更快：3-7天
- 成本更高：空运是海运的4-10倍
- 适合：紧急订单、样品、高价值配件

**3. 快递**
- 门到门服务
- 适合：样品和小包裹

**包装要求：**

- **装箱**：重货需要木箱
- **托盘化**：标准120x100cm或120x80cm托盘
- **防潮**：干燥剂、防潮袋
- **标签**：清晰的零件号、原产地

**文件：**

1. 商业发票
2. 装箱单
3. 提单（B/L）或空运单
4. 原产地证书
5. 产品特定认证（CE、DOT等）
6. 出口申报单

**贸易术语：**

卡车配件常用贸易术语：
- FOB（离岸价）：卖方责任在港口结束
- CIF（到岸价）：卖方承担运费和保险
- DDP（完税后交货）：卖方处理所有进口关税
- EXW（工厂交货）：买方承担所有责任`,
  },
]
