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
        destination: 'https://open.spotify.com/user/31ubk3f75ktm6cn6rw3rfzg7gbeq',
        permanent: false,
      },
      {
        source: '/tiktok',
        destination: 'https://www.tiktok.com/@mxtorkyle',
        permanent: false,
      },
      {
        source: '/cashapp',
        destination: 'https://cash.app/$TactileKyle',
        permanent: false,
      },
      {
        source: '/email',
        destination: 'mailto:kyle@mxtor.net',
        permanent: false,
      },
      {
        source: '/steam',
        destination: 'https://steamcommunity.com/id/MxtorKyle/',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/tactilekyle/',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/tactilekyle',
        permanent: false,
      },
      
      {
        source: '/gearshift',
        destination: 'https://www.tiktok.com/@getgearshift',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig 