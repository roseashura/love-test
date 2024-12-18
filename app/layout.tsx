import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI恋爱契合度测试',
  description: '通过AI分析你们的缘分指数',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
