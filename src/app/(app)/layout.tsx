import '@/styles/globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Educação e Trabalho',
  description: 'Code by Júlio Rarick',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full select-none bg-stone-50 text-stone-950 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
