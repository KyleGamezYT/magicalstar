/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/gvro',
        permanent: false,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/your-spotify-id',
        permanent: false,
      },
      {
        source: '/tiktok',
        destination: 'https://tiktok.com/@your-tiktok-username',
        permanent: false,
      },
      {
        source: '/cashapp',
        destination: 'https://cash.app/$your-cashapp-username',
        permanent: false,
      },
      {
        source: '/email',
        destination: 'mailto:your-email@example.com',
        permanent: false,
      },
      {
        source: '/roblox',
        destination: 'https://www.roblox.com/user/your-roblox-id',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/tactilekyle/',
        permanent: false,
      }, 
      {
        source: '/karaoke',
        destination: 'https://medal.tv/games/roblox/clips/kUU2CeHAjBXbWP2yH?invite=cr-MSxvNGcsNDE0MDc5ODMx&v=133',
        permanent: false,
      }, 
    ]
  },
}

module.exports = nextConfig 