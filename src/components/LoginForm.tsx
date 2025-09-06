'use client'

import { useState } from 'react'
<<<<<<< HEAD
import { validateCredentials } from '@/config/auth'
=======
import { validateCredentials } from '../config/auth'
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3

interface LoginFormProps {
  onLogin: (username: string) => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Use configuration-based authentication
    if (validateCredentials(username, password)) {
      onLogin(username)
    } else {
      setError('Invalid username or password')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden flex items-center justify-center">
      <div className="bg-mystical-gray/20 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-glow-blue rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-glow-white mb-2">
            ShareX Dashboard
          </h1>
          <p className="text-gray-400 text-sm">
            Enter your credentials to access the dashboard
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white placeholder-gray-400 focus:outline-none focus:border-glow-blue/50 focus:ring-1 focus:ring-glow-blue/50 transition-colors"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-glow-white placeholder-gray-400 focus:outline-none focus:border-glow-blue/50 focus:ring-1 focus:ring-glow-blue/50 transition-colors"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Login Button */}
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
                <span>Signing in...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-gray-400 text-sm text-center">
            <strong className="text-glow-white">Demo Credentials:</strong><br />
            Username: <code className="text-glow-blue">admin</code><br />
            Password: <code className="text-glow-blue">sharex2024</code>
          </p>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
} 
=======
} 
>>>>>>> 71b3cc6c0b1b3674c234eb3b766b4f31efa5b2e3
