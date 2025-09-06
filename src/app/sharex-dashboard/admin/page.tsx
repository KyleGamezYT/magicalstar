'use client'

import { useState } from 'react'
import Link from 'next/link'
<<<<<<< HEAD
import MysticalStar from '@/components/MysticalStar'
import BackgroundSparkles from '@/components/BackgroundSparkles'
import { AUTH_CONFIG } from '@/config/auth'
=======
import MysticalStar from '../../../components/MysticalStar'
import BackgroundSparkles from '../../../components/BackgroundSparkles'
import { AUTH_CONFIG } from '../../../config/auth'
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3

export default function AdminPage() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match')
      setIsLoading(false)
      return
    }

    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long')
      setIsLoading(false)
      return
    }

    // Simulate password update
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setMessage('Password updated successfully! You will need to restart the server for changes to take effect.')
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
      <BackgroundSparkles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold text-glow-white mb-2">
                Admin Settings
              </h1>
              <p className="text-gray-400">
                Manage your ShareX dashboard configuration
              </p>
            </div>
            <Link
              href="/sharex-dashboard"
              className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Configuration */}
            <div className="bg-mystical-gray/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-glow-white mb-4">Current Configuration</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Username
                  </label>
                  <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white">
                    {AUTH_CONFIG.username}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Password
                  </label>
                  <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white">
                    ••••••••
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Max Login Attempts
                  </label>
                  <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white">
                    {AUTH_CONFIG.maxLoginAttempts}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Session Timeout
                  </label>
                  <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white">
                    {Math.round(AUTH_CONFIG.sessionTimeout / (60 * 60 * 1000))} hours
                  </div>
                </div>
              </div>
            </div>

            {/* Password Change Form */}
            <div className="bg-mystical-gray/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-glow-white mb-4">Change Password</h2>
              
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white placeholder-gray-400 focus:outline-none focus:border-glow-blue/50 focus:ring-1 focus:ring-glow-blue/50 transition-colors"
                    placeholder="Enter current password"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white placeholder-gray-400 focus:outline-none focus:border-glow-blue/50 focus:ring-1 focus:ring-glow-blue/50 transition-colors"
                    placeholder="Enter new password"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white placeholder-gray-400 focus:outline-none focus:border-glow-blue/50 focus:ring-1 focus:ring-glow-blue/50 transition-colors"
                    placeholder="Confirm new password"
                    required
                  />
                </div>

                {message && (
                  <div className={`p-3 rounded-lg text-sm ${
                    message.includes('successfully') 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}>
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-glow-blue hover:bg-glow-blue/80 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Updating...</span>
                    </>
                  ) : (
                    <span>Update Password</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Configuration Instructions */}
          <div className="mt-8 bg-mystical-gray/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-glow-white mb-4">How to Update Password</h2>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-glow-blue font-medium mb-2">Method 1: Edit Configuration File</h3>
                <p className="text-sm mb-2">Update the password in <code className="bg-white/10 px-2 py-1 rounded">src/config/auth.ts</code>:</p>
                <pre className="bg-black/20 p-4 rounded-lg text-xs overflow-x-auto">
{`export const AUTH_CONFIG = {
  username: 'admin',
  password: 'your-new-password', // Change this line
  // ... rest of config
}`}
                </pre>
              </div>

              <div>
                <h3 className="text-glow-blue font-medium mb-2">Method 2: Environment Variables</h3>
                <p className="text-sm mb-2">Create a <code className="bg-white/10 px-2 py-1 rounded">.env.local</code> file:</p>
                <pre className="bg-black/20 p-4 rounded-lg text-xs">
{`SHAREX_USERNAME=admin
SHAREX_PASSWORD=your-new-password`}
                </pre>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="text-yellow-400 font-medium mb-2">⚠️ Important Notes</h3>
                <ul className="text-sm space-y-1">
                  <li>• Password changes require a server restart</li>
                  <li>• Use strong passwords with letters, numbers, and symbols</li>
                  <li>• Keep your credentials secure and don't share them</li>
                  <li>• Consider using environment variables for production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
<<<<<<< HEAD
} 
=======
} 
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
