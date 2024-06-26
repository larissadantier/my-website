import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import './globals.css'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Larissa Dantier',
  description: 'Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inconsolata.variable} lang="pt">
      <body className="bg-zinc-900 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  )
}
