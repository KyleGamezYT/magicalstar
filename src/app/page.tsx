'use client'

import { useState, useEffect } from 'react'
<<<<<<< HEAD
import MysticalStar from '@/components/MysticalStar'
import LinkTree from '../components/LinkTree'
import BackgroundSparkles from '@/components/BackgroundSparkles'
=======
import MysticalStar from '../components/MysticalStar'
import LinkTree from '../components/LinkTree'
import BackgroundSparkles from '../components/BackgroundSparkles'
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3

export default function Home() {
  const [viewCount, setViewCount] = useState(8)

  useEffect(() => {
    // Simulate view count increment
    const timer = setTimeout(() => {
      setViewCount(prev => prev + 1)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
<<<<<<< HEAD
      {/* Background sparkles */}
      <BackgroundSparkles />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-sm mx-auto text-center space-y-10">
          
=======

      <BackgroundSparkles />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-sm mx-auto text-center space-y-10">

>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
          {/* Mystical Star Emblem */}
          <div className="flex justify-center mb-8">
            <div className="scale-125">
              <MysticalStar />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-glow-white animate-glow tracking-wider">
              kyle
            </h1>
            <p className="text-gray-400 text-sm font-medium tracking-wide">nj</p>
          </div>

          {/* Link Tree */}
          <div className="space-y-4">
            <LinkTree />
          </div>

          {/* View Count */}
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 pt-8">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span>{viewCount}</span>
          </div>
        </div>
      </div>
    </main>
  )
<<<<<<< HEAD
} 
=======
}
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
