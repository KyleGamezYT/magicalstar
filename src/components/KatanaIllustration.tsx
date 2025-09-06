<<<<<<< HEAD
export default function KatanaIllustration() {
  return (
    <div className="relative w-80 h-96 float-animation">
      {/* Main Katana */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Blade */}
        <div className="w-2 h-48 bg-gradient-to-b from-glow-white to-gray-300 rounded-sm shadow-lg">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-glow-white/20 to-transparent"></div>
        </div>
        
        {/* Hilt */}
        <div className="w-6 h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded-sm mt-2 relative">
          {/* Hilt wrapping details */}
          <div className="absolute inset-0 flex flex-col justify-center space-y-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-0.5 bg-amber-400/50 mx-1"></div>
            ))}
          </div>
        </div>
        
        {/* Guard */}
        <div className="w-12 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-sm mt-2"></div>
        
        {/* Handle */}
        <div className="w-3 h-20 bg-gradient-to-b from-amber-800 to-amber-900 rounded-sm mt-2 relative">
          {/* Handle wrapping */}
          <div className="absolute inset-0 flex flex-col justify-center space-y-0.5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-0.5 bg-amber-500/30 mx-0.5"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Cherry Blossoms */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${i * 20 - 40}px`,
              top: `${i * 10 - 20}px`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <svg className="w-4 h-4 text-glow-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Reflection */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-y-[-0.3] opacity-30">
        {/* Reflected Blade */}
        <div className="w-2 h-48 bg-gradient-to-t from-glow-white/20 to-transparent rounded-sm"></div>
        
        {/* Reflected Hilt */}
        <div className="w-6 h-16 bg-gradient-to-t from-amber-600/20 to-transparent rounded-sm mt-2"></div>
        
        {/* Reflected Guard */}
        <div className="w-12 h-2 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-sm mt-2"></div>
        
        {/* Reflected Handle */}
        <div className="w-3 h-20 bg-gradient-to-t from-amber-800/20 to-amber-900/20 rounded-sm mt-2"></div>
      </div>

      {/* Reflected Flowers */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-y-[-0.3] opacity-20">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${i * 15 - 20}px`,
              top: `${i * 5 - 10}px`,
            }}
          >
            <svg className="w-3 h-3 text-glow-white/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Light Streak */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-glow-white/20 to-transparent"></div>
    </div>
  )
=======
export default function KatanaIllustration() {
  return (
    <div className="relative w-80 h-96 float-animation">
      {/* Main Katana */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Blade */}
        <div className="w-2 h-48 bg-gradient-to-b from-glow-white to-gray-300 rounded-sm shadow-lg">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-glow-white/20 to-transparent"></div>
        </div>
        
        {/* Hilt */}
        <div className="w-6 h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded-sm mt-2 relative">
          {/* Hilt wrapping details */}
          <div className="absolute inset-0 flex flex-col justify-center space-y-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-0.5 bg-amber-400/50 mx-1"></div>
            ))}
          </div>
        </div>
        
        {/* Guard */}
        <div className="w-12 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-sm mt-2"></div>
        
        {/* Handle */}
        <div className="w-3 h-20 bg-gradient-to-b from-amber-800 to-amber-900 rounded-sm mt-2 relative">
          {/* Handle wrapping */}
          <div className="absolute inset-0 flex flex-col justify-center space-y-0.5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-0.5 bg-amber-500/30 mx-0.5"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Cherry Blossoms */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${i * 20 - 40}px`,
              top: `${i * 10 - 20}px`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <svg className="w-4 h-4 text-glow-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Reflection */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-y-[-0.3] opacity-30">
        {/* Reflected Blade */}
        <div className="w-2 h-48 bg-gradient-to-t from-glow-white/20 to-transparent rounded-sm"></div>
        
        {/* Reflected Hilt */}
        <div className="w-6 h-16 bg-gradient-to-t from-amber-600/20 to-transparent rounded-sm mt-2"></div>
        
        {/* Reflected Guard */}
        <div className="w-12 h-2 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-sm mt-2"></div>
        
        {/* Reflected Handle */}
        <div className="w-3 h-20 bg-gradient-to-t from-amber-800/20 to-amber-900/20 rounded-sm mt-2"></div>
      </div>

      {/* Reflected Flowers */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-y-[-0.3] opacity-20">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${i * 15 - 20}px`,
              top: `${i * 5 - 10}px`,
            }}
          >
            <svg className="w-3 h-3 text-glow-white/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Light Streak */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-glow-white/20 to-transparent"></div>
    </div>
  )
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
} 