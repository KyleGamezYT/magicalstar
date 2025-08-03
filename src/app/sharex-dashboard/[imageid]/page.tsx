'use client'

import { useState } from 'react'
import ShareXDashboard from '../../../components/ShareXDashboard'
import LoginForm from '../../../components/LoginForm'
import BackgroundSparkles from '../../../components/BackgroundSparkles'

export default function ShareXDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const handleLogin = (username: string) => {
    setIsAuthenticated(true)
    setCurrentUser(username)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser('')
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-mystical-black via-gray-900 to-black relative overflow-hidden">
      {/* Background sparkles */}
      <BackgroundSparkles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header with Logout */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold text-glow-white mb-2">
                ShareX Dashboard
              </h1>
              <p className="text-gray-400">
                Advanced upload management and analytics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Welcome, <span className="text-glow-blue font-medium">{currentUser}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium hover:bg-red-500/30 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Dashboard */}
          <ShareXDashboard />
        </div>
      </div>
    </main>
  )
} 
