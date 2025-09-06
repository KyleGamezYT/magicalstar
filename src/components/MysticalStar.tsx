'use client'

import { motion } from 'framer-motion'

interface MysticalStarProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function MysticalStar({ size = 'md', className = '' }: MysticalStarProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  }

  return (
    <motion.div 
      className={`${sizeClasses[size]} relative star-glow ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        transition: { duration: 0.3 }
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-glow-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Outer pentagram star */}
        <motion.path
          d="M50 10 L61 35 L88 35 L68 55 L79 80 L50 65 L21 80 L32 55 L12 35 L39 35 Z"
          className="animate-pulse"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        {/* Inner pentagram */}
        <motion.path
          d="M50 25 L58 42 L75 42 L63 55 L68 72 L50 62 L32 72 L37 55 L25 42 L42 42 Z"
          className="animate-pulse"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        {/* Horizontal line through center */}
        <motion.line 
          x1="20" 
          y1="50" 
          x2="80" 
          y2="50" 
          stroke="currentColor" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        {/* Vertical line through center */}
        <motion.line 
          x1="50" 
          y1="20" 
          x2="50" 
          y2="80" 
          stroke="currentColor" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
        {/* Center circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        />
      </svg>
    </motion.div>
  )
} 