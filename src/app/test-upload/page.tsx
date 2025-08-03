
'use client'

import { useState } from 'react'
import BackgroundSparkles from '../../components/BackgroundSparkles'

export default function TestUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setError('')
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setResult(data)
      } else {
        setError(data.error || 'Upload failed')
      }
    } catch (err) {
      setError('Network error: ' + (err as Error).message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
      <BackgroundSparkles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-glow-white mb-8 text-center">
            Test Upload API
          </h1>

          <div className="bg-mystical-gray/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select File
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-glow-blue file:text-white"
              />
            </div>

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full bg-glow-blue hover:bg-glow-blue/80 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              {uploading ? 'Uploading...' : 'Upload File'}
            </button>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400">Error: {error}</p>
              </div>
            )}

            {result && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 font-medium mb-2">Upload Successful!</p>
                <div className="space-y-2 text-sm">
                  <p><strong>URL:</strong> <a href={result.url} target="_blank" className="text-glow-blue hover:underline">{result.url}</a></p>
                  <p><strong>Name:</strong> {result.name}</p>
                  <p><strong>Type:</strong> {result.type}</p>
                  <p><strong>Size:</strong> {result.size} bytes</p>
                </div>
              </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h3 className="text-glow-white font-medium mb-2">API Status</h3>
              <p className="text-gray-400 text-sm">
                Test your upload API by selecting a file above. This simulates what ShareX does when uploading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
