import BackgroundSparkles from '../../../components/BackgroundSparkles'

export default function ShareXDashboardLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
      {/* Background sparkles */}
      <BackgroundSparkles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Loading Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-center flex-1">
              <div className="h-10 bg-glow-blue/20 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-600/20 rounded w-64 mx-auto animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-4 bg-gray-600/20 rounded w-32 animate-pulse"></div>
              <div className="h-8 bg-red-500/20 rounded-lg w-16 animate-pulse"></div>
            </div>
          </div>

          {/* Loading Dashboard */}
          <div className="bg-mystical-gray/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
            {/* Loading Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-glow-blue/20 rounded-lg animate-pulse"></div>
                <div className="h-6 bg-gray-600/20 rounded w-32 animate-pulse"></div>
              </div>
              <div className="flex space-x-2">
                <div className="h-8 bg-glow-blue/20 rounded-lg w-16 animate-pulse"></div>
                <div className="h-8 bg-glow-green/20 rounded-lg w-16 animate-pulse"></div>
              </div>
            </div>

            {/* Loading Tabs */}
            <div className="flex space-x-1 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 bg-gray-600/20 rounded-lg w-20 animate-pulse"></div>
              ))}
            </div>

            {/* Loading Content */}
            <div className="space-y-6">
              {/* Loading Upload Area */}
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-glow-blue/20 rounded-full animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-6 bg-gray-600/20 rounded w-48 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-gray-600/20 rounded w-32 mx-auto animate-pulse"></div>
                  </div>
                  <div className="h-3 bg-gray-600/20 rounded w-40 mx-auto animate-pulse"></div>
                </div>
              </div>

              {/* Loading Upload History */}
              <div className="flex items-center justify-between">
                <div className="h-6 bg-gray-600/20 rounded w-32 animate-pulse"></div>
                <div className="h-4 bg-gray-600/20 rounded w-16 animate-pulse"></div>
              </div>
              
              {/* Loading Upload Items */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-glow-blue/20 rounded animate-pulse"></div>
                        <div className="space-y-1">
                          <div className="h-4 bg-gray-600/20 rounded w-32 animate-pulse"></div>
                          <div className="h-3 bg-gray-600/20 rounded w-24 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-4 bg-gray-600/20 rounded w-16 animate-pulse"></div>
                        <div className="w-4 h-4 bg-gray-600/20 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
