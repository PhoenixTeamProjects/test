'use client'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-slate-300">Get in touch for quotes, technical support, or partnership inquiries.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Address</p>
                    {/* 👉 修改地址：替换下方文字 */}
                    <p className="text-sm text-slate-500">No.88 Jiefang Road, Jinan, Shandong, China 250000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Phone</p>
                    {/* 👉 修改电话：替换下方 */}
                    <p className="text-sm text-slate-500">+86 138 0000 1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Email</p>
                    {/* 👉 修改邮箱：替换下方 */}
                    <p className="text-sm text-slate-500">sales@huanyukuntai.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Business Hours</p>
                    <p className="text-sm text-slate-500">Mon-Fri: 9:00 - 18:00 CST</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-white rounded-xl border border-slate-200">
                <p className="font-medium text-[#1e3a5f] mb-2">Response Time</p>
                <p className="text-sm text-slate-500">We typically reply within 24 hours on business days. For urgent inquiries, please call directly.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for your inquiry. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200">
                  <h2 className="text-xl font-bold text-[#1e3a5f] mb-6">Send us a Message</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e3a5f]" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e3a5f]" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                      <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e3a5f]" placeholder="ABC Trading Co." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Products Interested</label>
                      <select className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e3a5f]">
                        <option>Select category</option>
                        <option>Engine Parts</option>
                        <option>Brake Systems</option>
                        <option>Suspension Parts</option>
                        <option>Electrical Systems</option>
                        <option>Multiple Categories</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e3a5f] resize-none" placeholder="Please include product part numbers, quantity needed, and your destination country." />
                  </div>
                  <button type="submit" className="w-full bg-[#f97316] hover:bg-[#fb923c] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
