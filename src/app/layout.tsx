import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kyle - Portfolio',
  description: 'Kyle\'s mystical portfolio showcasing skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-mystical-black text-glow-white">
        {children}
      </body>
    </html>
  )
} 