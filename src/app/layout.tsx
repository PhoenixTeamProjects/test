import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/common/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://huanyukuntai.com'),
  title: {
    default: 'Huanyu Kuntai - Truck & Construction Machinery Parts Exporter',
    template: '%s | Huanyu Kuntai',
  },
  description: 'Professional exporter of truck parts, construction machinery components, and heavy-duty equipment. Engine parts, brake systems, suspension and electrical systems. Serving global markets since 2010.',
  keywords: ['truck parts', 'construction machinery parts', 'heavy duty parts', 'engine parts', 'brake systems', 'China exporter', 'B2B parts supplier'],
  authors: [{ name: 'Huanyu Kuntai' }],
  creator: 'Huanyu Kuntai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://huanyukuntai.com',
    siteName: 'Huanyu Kuntai',
    title: 'Huanyu Kuntai - Truck & Construction Machinery Parts Exporter',
    description: 'Professional exporter of truck parts and construction machinery components.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huanyu Kuntai - Industrial Parts Exporter',
    description: 'Quality truck parts and construction machinery components from China.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
