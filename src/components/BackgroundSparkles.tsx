<<<<<<< HEAD
'use client'

import { useEffect, useState } from 'react'

export default function BackgroundSparkles() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random sparkles
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-glow-white/30 rounded-full animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}
    </div>
  )
=======
'use client'

import { useEffect, useState } from 'react'

export default function BackgroundSparkles() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random sparkles
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-glow-white/30 rounded-full animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}
    </div>
  )
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
} 