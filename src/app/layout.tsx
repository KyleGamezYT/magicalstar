import type { Metadata } from 'next'
import './globals.css'
import ErrorBoundary from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  title: 'Kyle - Portfolio',
  description: 'Kyle\'s mystical portfolio showcasing skills and projects',
  keywords: ['portfolio', '', 'full stack', 'mystical', 'kyle'],
  authors: [{ name: 'Kyle' }],
  creator: 'Kyle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mxtor.net',
    title: 'Kyle - Portfolio',
    description: 'Kyle\'s mystical portfolio showcasing skills and projects',
    siteName: 'Kyle Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle - Portfolio',
    description: 'Kyle\'s mystical portfolio showcasing skills and projects',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-mystical-black text-glow-white antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
} 