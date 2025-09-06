'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Eye, Sparkles } from 'lucide-react'
import MysticalStar from '@/components/MysticalStar'
import LinkTree from '@/components/LinkTree'
import BackgroundSparkles from '@/components/BackgroundSparkles'

export default function Home() {
  const [viewCount, setViewCount] = useState(8)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate view count increment
    const timer = setTimeout(() => {
      setViewCount(prev => prev + 1)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-mystical-gradient relative overflow-hidden">
      {/* Background sparkles */}
      <BackgroundSparkles />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        <motion.div 
          className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto text-center space-y-8 sm:space-y-10 lg:space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Mystical Star Emblem */}
          <motion.div 
            className="flex justify-center mb-6 sm:mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="scale-110 sm:scale-125">
              <MysticalStar size="md" />
            </div>
          </motion.div>

          {/* Name Section */}
          <motion.div 
            className="space-y-2 sm:space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-glow-white animate-glow tracking-wider">
              kyle
            </h1>
            <p className="text-gray-400 text-base sm:text-lg font-medium tracking-wide">
              nj
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse-slow" />
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse-slow" />
            </div>
          </motion.div>

          {/* Link Tree */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <LinkTree />
          </motion.div>

          {/* View Count */}
          <motion.div 
            className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500 pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            role="status"
            aria-label={`${viewCount} views`}
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-mono">{viewCount.toLocaleString()}</span>
            <span className="text-xs">views</span>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
