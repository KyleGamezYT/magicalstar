'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import MysticalStar from '@/components/MysticalStar'
import BackgroundSparkles from '@/components/BackgroundSparkles'

interface FileData {
  id: string
  name: string
  url: string
  type: 'image' | 'video' | 'file' | 'text'
  size: string
  date: string
  status: 'success' | 'pending' | 'failed'
}

export default function FileViewer({ params }: { params: { imageId: string } }) {
  const [fileData, setFileData] = useState<FileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const fetchFileData = async () => {
      setLoading(true)
      
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Determine file type based on extension
      const getFileType = (fileName: string): 'image' | 'video' | 'file' | 'text' => {
        const ext = fileName.split('.').pop()?.toLowerCase()
        if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'].includes(ext || '')) return 'image'
        if (['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'].includes(ext || '')) return 'video'
        if (['txt', 'md', 'json', 'xml', 'csv'].includes(ext || '')) return 'text'
        return 'file'
      }

      const fileName = `file_${params.imageId}.mp4` // Default to video for demo
      const fileType = getFileType(fileName)
      
      const mockFileData: FileData = {
        id: params.imageId,
        name: fileName,
        url: `/uploads/${params.imageId}_${fileName}`,
        type: fileType,
        size: '15.7 MB',
        date: new Date().toLocaleString(),
        status: 'success'
      }
      
      setFileData(mockFileData)
      setLoading(false)
    }

    fetchFileData()
  }, [params.imageId])

  const copyToClipboard = (url: string) => {
    const fullUrl = url.startsWith('/') ? `${window.location.origin}${url}` : url
    navigator.clipboard.writeText(fullUrl)
  }

  // Video player functions
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  if (loading) {
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

  if (error || !fileData) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
        <BackgroundSparkles />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-sm mx-auto text-center space-y-10">
            <div className="flex justify-center mb-8">
              <div className="scale-125">
                <MysticalStar />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl font-bold text-red-400 animate-glow tracking-wider">
                  Not Found
                </h1>
                <p className="text-xl font-semibold text-gray-300 tracking-wide">
                  File not found
                </p>
                <p className="text-gray-400 text-sm">
                  The file you're looking for doesn't exist
                </p>
              </div>
              <Link 
                href="/sharex-dashboard"
                className="block w-full bg-glow-blue/20 text-glow-blue border border-glow-blue/30 rounded-lg px-6 py-3 font-medium hover:bg-glow-blue/30 transition-all duration-300 hover:scale-105"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
      <BackgroundSparkles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold text-glow-white mb-2">
                {fileData.type === 'video' ? 'Video Player' : fileData.type === 'image' ? 'Image Viewer' : 'File Viewer'}
              </h1>
              <p className="text-gray-400">
                {fileData.name}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => copyToClipboard(`/sharex-dashboard/${fileData.id}`)}
                className="px-4 py-2 bg-glow-blue/20 text-glow-blue rounded-lg text-sm font-medium hover:bg-glow-blue/30 transition-colors"
                title="Copy URL"
              >
                Copy URL
              </button>
              <Link
                href="/sharex-dashboard"
                className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* File Display */}
          <div className="bg-mystical-gray/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
            <div className="space-y-6">
              {/* Video Player */}
              {fileData.type === 'video' && (
                <div className="relative group" onMouseMove={handleMouseMove}>
                  <video
                    ref={videoRef}
                    className="w-full h-auto rounded-lg shadow-2xl"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    onError={(e) => {
                      console.error('Video error:', e)
                      // Fallback to placeholder video
                      const target = e.target as HTMLVideoElement
                      target.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    }}
                  >
                    <source src={fileData.url} type="video/mp4" />
                    <source src={fileData.url} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Controls Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Top Controls */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <div className="text-white text-sm font-medium">
                        {fileData.name}
                      </div>
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
                      >
                        {isFullscreen ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={togglePlay}
                        className="p-4 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      >
                        {isPlaying ? (
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Bottom Controls */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-3">
                      {/* Progress Bar */}
                      <div className="relative">
                        <input
                          type="range"
                          min="0"
                          max={duration || 0}
                          value={currentTime}
                          onChange={handleSeek}
                          className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-white text-xs mt-1">
                          <span>{formatTime(currentTime)}</span>
                          <span>{formatTime(duration)}</span>
                        </div>
                      </div>

                      {/* Control Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={togglePlay}
                            className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
                          >
                            {isPlaying ? (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={toggleMute}
                              className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
                            >
                              {isMuted ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.793a1 1 0 011.414.076zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.793a1 1 0 011.414.076zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              )}
                            </button>
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.1"
                              value={volume}
                              onChange={handleVolumeChange}
                              className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                            />
                          </div>
                        </div>

                        <div className="text-white text-sm">
                          {Math.round(volume * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Image Display */}
              {fileData.type === 'image' && (
                <div className="flex justify-center">
                  <div className="relative group">
                    <img
                      src={fileData.url}
                      alt={fileData.name}
                      className="max-w-full h-auto rounded-lg shadow-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPgo='
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <a
                        href={fileData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
                      >
                        Open Full Size
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* File Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-glow-white">File Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-glow-white">{fileData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Size:</span>
                      <span className="text-glow-white">{fileData.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type:</span>
                      <span className="text-glow-white capitalize">{fileData.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uploaded:</span>
                      <span className="text-glow-white">{fileData.date}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-glow-white">Actions</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => copyToClipboard(`/sharex-dashboard/${fileData.id}`)}
                      className="w-full px-4 py-2 bg-glow-blue/20 text-glow-blue border border-glow-blue/30 rounded-lg hover:bg-glow-blue/30 transition-colors"
                    >
                      Copy File URL
                    </button>
                    <a
                      href={fileData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-2 bg-glow-green/20 text-glow-green border border-glow-green/30 rounded-lg hover:bg-glow-green/30 transition-colors text-center"
                    >
                      Download File
                    </a>
                    <Link
                      href="/sharex-dashboard"
                      className="block w-full px-4 py-2 bg-white/5 text-gray-300 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-center"
                    >
                      Back to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #4a9eff;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #4a9eff;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </main>
  )
} 
