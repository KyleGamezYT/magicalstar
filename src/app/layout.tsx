<<<<<<< HEAD
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
=======
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
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
} 