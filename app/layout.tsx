import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VALUCIA 渼联 · 全球领先AI原生IP商业化平台',
  description: '渼联（VALUCIA）是全球领先的AI原生IP商业化与数字化生态平台，持有贝尔·泰迪熊、NASA等顶级国际IP全球官方授权。',
  keywords: 'VALUCIA,渼联,IP商业化,NASA授权,贝尔泰迪熊,AI平台,IP授权',
  openGraph: {
    title: 'VALUCIA 渼联',
    description: '全球领先的AI原生IP商业化与数字化生态平台',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
