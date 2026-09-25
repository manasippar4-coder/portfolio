# Setup Instructions for Manas Ippar's Portfolio

## Quick Start

### 1. Prerequisites
Make sure you have:
- Node.js (v16 or higher)
- npm or yarn
- Git

### 2. Installation Steps

```bash
# Clone the repository
git clone https://github.com/manasippar4-coder/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Customize Your Portfolio

Edit `src/data/portfolio.js` to update:

```javascript
personal: {
  name: 'Your Name',
  email: 'your.email@example.com',
  phone: 'Your Phone',
  location: 'Your Location',
  // ... other fields
}
```

### 4. Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

### 5. Deployment Options

#### Option A: GitHub Pages

1. Update `vite.config.js`:
```javascript
base: '/portfolio/' // Change 'portfolio' to your repo name if different
```

2. Deploy:
```bash
npm run deploy
```

#### Option B: Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy (Vercel auto-detects Vite)

#### Option C: Netlify

1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## Customization Guide

### Update Color Scheme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        neon: '#your-color',
        gold: '#your-color',
        // ...
      }
    }
  }
}
```

### Add New Projects

Add to `src/data/portfolio.js`:

```javascript
projects: [
  {
    id: 1,
    number: '01',
    title: 'Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    liveDemo: 'https://example.com',
  },
  // Add more projects...
]
```

### Add Skills

```javascript
skills: {
  programming: [
    { name: 'Java', icon: '☕', description: 'Description' },
    // Add more...
  ],
  // ...
}
```

### Update Social Links

```javascript
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
}
```

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## File Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Intro.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Terminal.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Troubleshooting

### Issue: Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Issue: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Animations not working
- Make sure GSAP and Framer Motion are installed
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue: Build fails
```bash
npm cache clean --force
npm install
npm run build
```

## Performance Optimization

- Images are lazy loaded
- CSS is minified by Tailwind
- JavaScript is tree-shaken by Vite
- 3D effects disabled on mobile
- Animations respect `prefers-reduced-motion`

## Browser Compatibility

- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

## SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags added
- [x] Semantic HTML used
- [x] Mobile responsive
- [x] Fast loading time
- [x] Accessibility features
- [ ] Google Analytics (optional)
- [ ] Sitemap (optional)

## Next Steps

1. Update all personal information in `src/data/portfolio.js`
2. Replace placeholder URLs with your actual links
3. Add your projects with descriptions and links
4. Test on different devices
5. Deploy to your preferred platform
6. Share with the world! 🚀

## Support

For questions or issues:
- Check the README.md
- Review the component files
- Check browser console for errors
- Verify all URLs in portfolio.js

## License

MIT License - Feel free to use and customize!

---

**Happy Coding! 🎉**
