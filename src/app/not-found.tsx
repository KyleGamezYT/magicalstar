'use client'

import Link from 'next/link'
import MysticalStar from '@/components/MysticalStar'
import BackgroundSparkles from '@/components/BackgroundSparkles'

export default function NotFound() {
  return (
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

          {/* 404 Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-glow-white animate-glow tracking-wider">
                404
              </h1>
              <p className="text-2xl font-semibold text-gray-300 tracking-wide">
                Page Not Found
              </p>
              <p className="text-gray-400 text-sm">
                The page you're looking for doesn't exist in this realm...
              </p>
            </div>

            {/* Navigation Options */}
            <div className="space-y-4 pt-8">
              <Link 
                href="/"
                className="block w-full bg-glow-blue/20 text-glow-blue border border-glow-blue/30 rounded-lg px-6 py-3 font-medium hover:bg-glow-blue/30 transition-all duration-300 hover:scale-105"
              >
                Return Home
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-4 pt-8">
              <div className="w-2 h-2 bg-glow-blue rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-glow-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-glow-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
