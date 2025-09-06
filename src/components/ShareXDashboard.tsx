'use client'

<<<<<<< HEAD
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
=======
import { useState } from 'react'
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3

interface UploadItem {
  id: string
  name: string
  url: string
  type: 'image' | 'video' | 'file' | 'text'
  size: string
  date: string
  status: 'success' | 'pending' | 'failed'
<<<<<<< HEAD
  file?: File
  progress?: number
=======
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
}

export default function ShareXDashboard() {
  const [activeTab, setActiveTab] = useState('uploads')
<<<<<<< HEAD
  const [uploadHistory, setUploadHistory] = useState<UploadItem[]>([
    {
      id: '1',
      name: 'screenshot_2024_01_15.png',
      url: '/sharex-dashboard/abc123',
=======
  const [uploadHistory] = useState<UploadItem[]>([
    {
      id: '1',
      name: 'screenshot_2024_01_15.png',
      url: 'https://i.imgur.com/abc123.png',
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
      type: 'image',
      size: '2.4 MB',
      date: '2024-01-15 14:30',
      status: 'success'
    },
    {
      id: '2',
      name: 'gameplay_clip.mp4',
<<<<<<< HEAD
      url: '/sharex-dashboard/def456',
=======
      url: 'https://i.imgur.com/def456.mp4',
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
      type: 'video',
      size: '15.7 MB',
      date: '2024-01-15 13:45',
      status: 'success'
    },
    {
      id: '3',
      name: 'code_snippet.txt',
<<<<<<< HEAD
      url: '/sharex-dashboard/ghi789',
=======
      url: 'https://pastebin.com/ghi789',
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
      type: 'text',
      size: '1.2 KB',
      date: '2024-01-15 12:20',
      status: 'success'
    }
  ])

  const [settings] = useState({
    uploadService: 'Imgur',
    autoCopy: true,
    autoOpen: false,
    notifications: true,
    hotkeys: {
      screenshot: 'Ctrl+Shift+S',
      screenRecord: 'Ctrl+Shift+R',
      fileUpload: 'Ctrl+Shift+F'
    }
  })

<<<<<<< HEAD
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9)
      const fileType = getFileType(file.type)
      const fileSize = formatFileSize(file.size)
      
      const newUpload: UploadItem = {
        id: fileId,
        name: file.name,
        url: '',
        type: fileType,
        size: fileSize,
        date: new Date().toLocaleString(),
        status: 'pending',
        file: file,
        progress: 0
      }

      setUploadHistory(prev => [newUpload, ...prev])
      
      // Simulate upload process
      simulateUpload(fileId, file)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
      'video/*': ['.mp4', '.avi', '.mov', '.wmv'],
      'text/*': ['.txt', '.md', '.json', '.xml'],
      'application/*': ['.pdf', '.doc', '.docx', '.zip', '.rar']
    },
    multiple: true
  })

  const getFileType = (mimeType: string): 'image' | 'video' | 'file' | 'text' => {
    if (mimeType.startsWith('image/')) return 'image'
    if (mimeType.startsWith('video/')) return 'video'
    if (mimeType.startsWith('text/')) return 'text'
    return 'file'
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const simulateUpload = (fileId: string, file: File) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 20
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        
        // Generate a unique image ID for the URL
        const imageId = Math.random().toString(36).substr(2, 8)
        
        // Update upload status to success with local URL
        setUploadHistory(prev => prev.map(item => 
          item.id === fileId 
            ? { 
                ...item, 
                status: 'success' as const, 
                progress: 100,
                url: `/sharex-dashboard/${imageId}`
              }
            : item
        ))
      } else {
        setUploadHistory(prev => prev.map(item => 
          item.id === fileId 
            ? { ...item, progress }
            : item
        ))
      }
    }, 200)
  }

  const copyToClipboard = (url: string) => {
    // Convert relative URL to absolute URL
    const fullUrl = url.startsWith('/') ? `${window.location.origin}${url}` : url
    navigator.clipboard.writeText(fullUrl)
    // You could add a toast notification here
  }

=======
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        )
      case 'video':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        )
      case 'file':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        )
      case 'text':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        )
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400'
      case 'pending':
        return 'text-yellow-400'
      case 'failed':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="bg-mystical-gray/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-glow-blue rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-glow-white">ShareX Dashboard</h2>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-glow-blue/20 text-glow-blue rounded-lg text-sm font-medium hover:bg-glow-blue/30 transition-colors">
            Settings
          </button>
          <button className="px-3 py-1 bg-glow-green/20 text-glow-green rounded-lg text-sm font-medium hover:bg-glow-green/30 transition-colors">
            Upload
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6">
        {[
          { id: 'uploads', name: 'Uploads', icon: '📁' },
          { id: 'settings', name: 'Settings', icon: '⚙️' },
          { id: 'stats', name: 'Stats', icon: '📊' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-glow-blue/20 text-glow-blue'
                : 'text-gray-400 hover:text-glow-white hover:bg-white/5'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'uploads' && (
<<<<<<< HEAD
        <div className="space-y-6">
          {/* Upload Area */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
              isDragActive
                ? 'border-glow-blue bg-glow-blue/10'
                : 'border-white/20 hover:border-glow-blue/50 hover:bg-white/5'
            }`}
          >
            <input {...getInputProps()} />
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-glow-blue/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-glow-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-glow-white">
                  {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  or click to select files
                </p>
              </div>
              <p className="text-xs text-gray-500">
                Supports: Images, Videos, Documents, Text files
              </p>
            </div>
          </div>

          {/* Upload History */}
=======
        <div className="space-y-4">
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-glow-white">Recent Uploads</h3>
            <span className="text-sm text-gray-400">{uploadHistory.length} items</span>
          </div>
          <div className="space-y-3">
            {uploadHistory.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-glow-blue">
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <p className="text-glow-white font-medium">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.size} • {item.date}</p>
<<<<<<< HEAD
                      {item.status === 'pending' && item.progress !== undefined && (
                        <div className="mt-2">
                          <div className="w-full bg-gray-600 rounded-full h-1">
                            <div 
                              className="bg-glow-blue h-1 rounded-full transition-all duration-300"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Uploading... {Math.round(item.progress)}%</p>
                        </div>
                      )}
=======
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-sm ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
<<<<<<< HEAD
                    {item.status === 'success' && item.url && (
                      <button 
                        onClick={() => copyToClipboard(item.url)}
                        className="text-glow-blue hover:text-glow-blue/80 transition-colors"
                        title="Copy URL"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 00-3-3H9a3 3 0 00-3 3z" />
                        </svg>
                      </button>
                    )}
                    {item.status === 'success' && item.url && (
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-glow-green hover:text-glow-green/80 transition-colors"
                        title="Open URL"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    )}
=======
                    <button className="text-glow-blue hover:text-glow-blue/80 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 00-3-3H9a3 3 0 00-3 3z" />
                      </svg>
                    </button>
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-glow-white mb-4">Upload Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Upload Service</span>
                <span className="text-glow-blue font-medium">{settings.uploadService}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Auto Copy URL</span>
                <div className={`w-4 h-4 rounded ${settings.autoCopy ? 'bg-glow-green' : 'bg-gray-600'}`}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Auto Open Browser</span>
                <div className={`w-4 h-4 rounded ${settings.autoOpen ? 'bg-glow-green' : 'bg-gray-600'}`}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Notifications</span>
                <div className={`w-4 h-4 rounded ${settings.notifications ? 'bg-glow-green' : 'bg-gray-600'}`}></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-glow-white mb-4">Hotkeys</h3>
            <div className="space-y-3">
              {Object.entries(settings.hotkeys).map(([action, key]) => (
                <div key={action} className="flex items-center justify-between">
                  <span className="text-gray-300 capitalize">{action.replace(/([A-Z])/g, ' $1')}</span>
                  <kbd className="px-2 py-1 bg-white/10 text-glow-white rounded text-sm font-mono">
                    {key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-glow-white">1,247</div>
              <div className="text-sm text-gray-400">Total Uploads</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-glow-green">98.5%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-glow-white mb-4">Upload Types</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Images</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-600 rounded-full h-2">
                    <div className="bg-glow-blue h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm text-gray-400">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Videos</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-600 rounded-full h-2">
                    <div className="bg-glow-green h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-sm text-gray-400">20%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Files</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-600 rounded-full h-2">
                    <div className="bg-glow-blue h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                  <span className="text-sm text-gray-400">5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
<<<<<<< HEAD
} 
=======
} 
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
