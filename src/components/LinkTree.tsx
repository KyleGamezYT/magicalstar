'use client'

import { motion } from 'framer-motion'
import { 
  Music, 
  Video, 
  Gamepad2, 
  Instagram, 
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Car
} from 'lucide-react'

interface LinkItem {
  name: string
  url: string
  icon: React.ReactNode
  color: string
  description?: string
}

export default function LinkTree() {
  const links: LinkItem[] = [
    {
      name: 'Spotify',
      url: '/spotify',
      icon: <Music className="w-5 h-5" />,
      color: 'text-green-400',
      description: 'Music & Playlists'
    },
    {
      name: 'TikTok',
      url: '/tiktok',
      icon: <Video className="w-5 h-5" />,
      color: 'text-pink-400',
      description: 'Short Videos'
    },
    {
      name: 'Steam',
      url: '/steam',
      icon: <Gamepad2 className="w-5 h-5" />,
      color: 'text-blue-400',
      description: 'Gaming & Modding'
    },
    {
      name: 'Instagram',
      url: '/instagram',
      icon: <Instagram className="w-5 h-5" />,
      color: 'text-purple-400',
      description: 'Photos & Stories'
    },
    {
      name: 'GitHub',
      url: '/github',
      icon: <Github className="w-5 h-5" />,
      color: 'text-gray-300',
      description: 'Code & Projects'
    },
    
    {
      name: 'GearShift',
      url: '/gearshift',
      icon: <Car className="w-5 h-5" />,
      color: 'text-orange-400',
      description: 'Connecting Car Culture - In Development'
    },
    {
      name: 'Contact',
      url: '/email',
      icon: <Mail className="w-5 h-5" />,
      color: 'text-cyan-400',
      description: 'Get in Touch'
    },
  ]

  return (
    <nav className="space-y-3 sm:space-y-4" role="navigation" aria-label="Social links">
      {links.map((link, index) => (
        <motion.button
          key={link.name}
          onClick={() => {
            if (link.name === 'Contact') {
              navigator.clipboard.writeText('kyle@mxtor.net').then(() => {
                alert('Email copied to clipboard: kyle@mxtor.net');
              }).catch(() => {
                alert('Email: kyle@mxtor.net');
              });
            } else {
              window.open(link.url, '_blank', 'noopener,noreferrer');
            }
          }}
          className="group block w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-glow-white hover:bg-white/10 hover:border-glow-blue/30 transition-all duration-300 shadow-lg hover:shadow-glow-blue/20 focus:outline-none focus:ring-2 focus:ring-glow-blue/50 focus:ring-offset-2 focus:ring-offset-mystical-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.02,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Visit ${link.name}${link.description ? ` - ${link.description}` : ''}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
              <motion.div 
                className={`${link.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                whileHover={{ rotate: 5 }}
                aria-hidden="true"
              >
                {link.icon}
              </motion.div>
              <div className="min-w-0 flex-1">
                <span className="font-semibold tracking-wide text-base sm:text-lg block truncate">
                  {link.name}
                </span>
                {link.description && (
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 truncate">
                    {link.description}
                  </p>
                )}
              </div>
            </div>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-2"
              whileHover={{ x: 2 }}
              aria-hidden="true"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </motion.div>
          </div>
        </motion.button>
      ))}
    </nav>
  )
} 