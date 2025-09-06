export default function ProfileCard() {
  return (
    <div className="bg-mystical-gray/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 shadow-2xl">
      <div className="flex items-center space-x-4">
        {/* Profile Picture */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Status indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-mystical-gray">
            <div className="w-full h-full bg-red-500 rounded-full opacity-75"></div>
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-glow-white">mxtorkyle</span>
            {/* Status icons */}
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-glow-green rounded-full animate-pulse"></div>
              <svg className="w-3 h-3 text-glow-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <div className="w-3 h-3 bg-glow-blue rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="text-sm text-gray-400">Playing Roblox</div>
        </div>
      </div>
    </div>
  )
} 