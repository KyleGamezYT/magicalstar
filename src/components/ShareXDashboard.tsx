'use client'

import { useState } from 'react'

interface UploadItem {
  id: string
  name: string
  url: string
  type: 'image' | 'video' | 'file' | 'text'
  size: string
  date: string
  status: 'success' | 'pending' | 'failed'
}

export default function ShareXDashboard() {
  const [activeTab, setActiveTab] = useState('uploads')
  const [uploadHistory] = useState<UploadItem[]>([
    {
      id: '1',
      name: 'screenshot_2024_01_15.png',
      url: 'https://i.imgur.com/abc123.png',
      type: 'image',
      size: '2.4 MB',
      date: '2024-01-15 14:30',
      status: 'success'
    },
    {
      id: '2',
      name: 'gameplay_clip.mp4',
      url: 'https://i.imgur.com/def456.mp4',
      type: 'video',
      size: '15.7 MB',
      date: '2024-01-15 13:45',
      status: 'success'
    },
    {
      id: '3',
      name: 'code_snippet.txt',
      url: 'https://pastebin.com/ghi789',
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
        <div className="space-y-4">
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
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-sm ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                    <button className="text-glow-blue hover:text-glow-blue/80 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 00-3-3H9a3 3 0 00-3 3z" />
                      </svg>
                    </button>
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
} 
