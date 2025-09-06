'use client'

import Link from 'next/link'
import MysticalStar from '@/components/MysticalStar'
import BackgroundSparkles from '@/components/BackgroundSparkles'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
          {/* Background sparkles */}
          <BackgroundSparkles />
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-sm mx-auto text-center space-y-10">
              
              {/* Mystical Star Emblem */}
              <div className="flex justify-center mb-8">
                <div className="scale-125">
                  <MysticalStar />
                </div>
              </div>

              {/* Error Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-6xl font-bold text-red-400 animate-glow tracking-wider">
                    Error
                  </h1>
                  <p className="text-xl font-semibold text-gray-300 tracking-wide">
                    Something went wrong
                  </p>
                  <p className="text-gray-400 text-sm">
                    An unexpected error occurred in the mystical realm
                  </p>
                </div>

                {/* Error Details (only in development) */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-left">
                    <p className="text-red-400 text-sm font-mono break-all">
                      {error.message}
                    </p>
                    {error.digest && (
                      <p className="text-red-400/70 text-xs mt-2">
                        Error ID: {error.digest}
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-4 pt-8">
                  <button
                    onClick={reset}
                    className="block w-full bg-glow-blue/20 text-glow-blue border border-glow-blue/30 rounded-lg px-6 py-3 font-medium hover:bg-glow-blue/30 transition-all duration-300 hover:scale-105"
                  >
                    Try Again
                  </button>
                  
                  <Link 
                    href="/"
                    className="block w-full bg-white/5 text-gray-300 border border-white/10 rounded-lg px-6 py-3 font-medium hover:bg-white/10 transition-all duration-300"
                  >
                    Return Home
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-center space-x-4 pt-8">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-glow-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
