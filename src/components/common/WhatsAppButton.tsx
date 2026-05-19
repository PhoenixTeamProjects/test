'use client'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  // 👉 修改 WhatsApp 号：把 8613800001234 改成你的真实号码（国际格式，去掉+号）
  const whatsappNumber = '8613800001234'
  const message = encodeURIComponent('Hi, I am interested in your truck parts. Please send me your product catalog.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
