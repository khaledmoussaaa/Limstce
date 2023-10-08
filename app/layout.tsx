import '../app/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Limstce',
  description: 'Limstce provides a wide range of services in multiple fields that are essential for any bussines growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type='type="image/x-icon"' sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
