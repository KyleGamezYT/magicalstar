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
        destination: 'mailto:kyle@mxtor.net',
        permanent: false,
      },
      {
        source: '/roblox',
        destination: 'https://www.roblox.com/users/145593283/profile',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/tactilekyle/',
        permanent: false,
      },
      {
        source: '/sharex',
        destination: '/sharex-dashboard',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig 