# Manas Ippar - Premium Developer Portfolio

A modern, futuristic developer portfolio website built with React, Vite, Tailwind CSS, and GSAP. Features cinematic animations, interactive UI, and a premium dark theme with neon accents.

## 🚀 Features

- **Cinematic Intro**: Smooth animated landing experience with skip option
- **Premium Design**: Dark cyberpunk theme with neon accents and glassmorphism
- **Smooth Animations**: GSAP and Framer Motion for high-quality animations
- **Interactive Terminal**: Play with a developer terminal to explore my profile
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Performance Optimized**: Fast load times with lazy loading and optimized assets
- **Accessibility**: Keyboard navigation and reduced motion support
- **Custom Cursor**: Reactive cursor that changes on interactive elements
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Easter Eggs**: Hidden surprises for curious visitors

## 📋 Sections

1. **Hero** - Eye-catching introduction with typing animation
2. **About** - Personal introduction and interests
3. **Education** - Timeline of educational background
4. **Skills** - Interactive skill cards and technology constellation
5. **Projects** - Showcase of completed projects with live demos
6. **Terminal** - Interactive terminal interface
7. **Contact** - Contact form and personal information
8. **Footer** - Navigation and social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP + Framer Motion
- **3D Effects**: Three.js / React Three Fiber (optional)
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter, Playfair Display

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/manasippar4-coder/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

## 🚀 Development

```bash
# Start the development server
npm run dev

# The site will be available at http://localhost:5173
```

## 🔧 Customization

All personal information is centralized in `src/data/portfolio.js`. Edit this file to:

- Update your name, location, and contact info
- Add/modify education details
- Update skills and technologies
- Add new projects
- Update social media links

### Example:

```javascript
export const portfolioData = {
  personal: {
    name: 'Manas Ippar',
    email: 'your.email@example.com',
    // ...
  },
  // ...
}
```

## 🎨 Color System

- **Background**: `#0a0e27` (Dark 900)
- **Primary Accent**: `#00ff88` (Neon Green)
- **Secondary Accent**: `#d4af37` (Gold)
- **Cyan Accent**: `#00d9ff`
- **Text Primary**: `#f5f5f5`
- **Text Secondary**: `#a0a0a0`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Deploy to GitHub Pages:

```bash
# Build the project
npm run build

# Deploy using gh-pages
npm run deploy
```

### Deploy to Vercel:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Create a new project and connect your GitHub repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify:

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command to `npm run build`
6. Set publish directory to `dist`

## 🔒 Environment Variables

If needed, create a `.env.local` file:

```env
VITE_API_URL=your_api_url_here
```

## 📊 Performance Tips

- Images are lazy loaded
- 3D effects are disabled on mobile by default
- Animations respect `prefers-reduced-motion`
- CSS is optimized with Tailwind's purging
- Fonts are served via Google Fonts CDN

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Animations not smooth?
- Check if hardware acceleration is enabled
- Reduce the number of 3D elements
- Update GSAP to the latest version

### Build errors?
- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

### Portfolio not updating?
- Rebuild: `npm run build`
- Clear browser cache
- Check `src/data/portfolio.js` for changes

## 📝 License

This project is open source and available under the MIT License.

## ✨ Credits

- Design inspiration from modern agency websites and developer portfolios
- Built with React, Vite, and modern web technologies
- Animations powered by GSAP and Framer Motion

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Made by Manas Ippar** | [GitHub](https://github.com/manasippar4-coder) | [Portfolio](https://manasippar.dev)
