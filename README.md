# Kyle's Mystical Portfolio ✨

A modern, mystical portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark theme with glowing effects, smooth animations, and ShareX integration for image sharing.

## 🌟 Features

- **Mystical Design**: Dark theme with glowing effects and animated mystical star
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Type Safety**: Full TypeScript support throughout
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Error Handling**: Comprehensive error boundaries and loading states
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.3
- **Icons**: Lucide React 0.400
- **Utilities**: clsx, tailwind-merge
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-clean.git
   cd portfolio-clean
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables (optional)**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your values if needed:
   ```env
   DOMAIN_URL=https://your-domain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── BackgroundSparkles.tsx
│   ├── ErrorBoundary.tsx
│   ├── LinkTree.tsx
│   ├── LoadingSpinner.tsx
│   └── MysticalStar.tsx
└── lib/                   # Utility functions
    └── utils.ts
```

## 🔧 Configuration

### Customization

#### Colors and Theme
Edit `tailwind.config.js` to customize the mystical theme:

```javascript
colors: {
  'mystical-black': '#0a0a0a',
  'mystical-purple': '#8b5cf6',
  'glow-white': '#ffffff',
  // Add your custom colors
}
```

#### Links
Update the links in `src/components/LinkTree.tsx`:

```typescript
const links: LinkItem[] = [
  {
    name: 'Your Platform',
    url: 'https://your-link.com',
    icon: <YourIcon className="w-5 h-5" />,
    color: 'text-your-color',
    description: 'Your description'
  }
]
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository
   - Add environment variables
   - Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm run clean        # Clean build artifacts
```

## 🔒 Security

- **Input Sanitization**: All inputs are validated and sanitized
- **Error Boundaries**: Comprehensive error handling
- **Type Safety**: Full TypeScript support throughout

## 🎨 Customization Guide

### Adding New Pages

1. Create a new file in `src/app/`
2. Export a default React component
3. Add navigation links in `LinkTree.tsx`

### Adding New Components

1. Create component in `src/components/`
2. Use TypeScript interfaces for props
3. Include proper accessibility attributes
4. Add responsive design classes

### Styling

- Use Tailwind CSS classes
- Follow the mystical theme color palette
- Ensure responsive design (mobile-first)
- Add proper focus states for accessibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

---

Built with ❤️ by Kyle
