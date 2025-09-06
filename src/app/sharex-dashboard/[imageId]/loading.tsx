import BackgroundSparkles from '@/components/BackgroundSparkles'

export default function ImageLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
      <BackgroundSparkles />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-glow-blue/20 rounded-lg w-64 mx-auto mb-4"></div>
            <div className="h-96 bg-gray-600/20 rounded-lg w-full max-w-2xl mx-auto"></div>
          </div>
        </div>
      </div>
    </main>
  )
} 