# Deployment Guide

## Vercel Deployment (Recommended)

### Why Vercel?
- ✅ Free hosting
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ Fast global CDN
- ✅ Environment variables support
- ✅ Automatic HTTPS

### Steps:

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will auto-detect:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

6. Click "Deploy"

7. Your site is live! 🎉

### Custom Domain:
1. Go to project settings
2. Add your custom domain
3. Follow DNS setup instructions

---

## GitHub Pages Deployment

### Prerequisites:
- GitHub repository with this code
- Node.js and npm installed

### Steps:

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Change to your repo name
})
```

2. Update `package.json` repository field

3. Install gh-pages:
```bash
npm install gh-pages --save-dev
```

4. Deploy:
```bash
npm run deploy
```

5. Go to repository Settings → Pages

6. Select "gh-pages" branch as source

7. Your site is live at: `https://yourusername.github.io/portfolio/`

---

## Netlify Deployment

### Steps:

1. Go to [netlify.com](https://netlify.com)

2. Sign up with GitHub

3. Click "New site from Git"

4. Select your repository

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy site"

7. Your site is live! 🚀

### Custom Domain:
1. Go to Site settings
2. Domain management
3. Add custom domain
4. Update DNS records

---

## Self-Hosted (VPS/Server)

### Prerequisites:
- Server with Node.js
- Domain name
- SSH access

### Steps:

1. Build your project:
```bash
npm run build
```

2. Upload `dist` folder to server

3. Set up web server (Nginx/Apache)

4. Point domain to server

5. Set up HTTPS with Let's Encrypt

### Example Nginx config:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Environment Variables

### For contact form emails:
Create `.env.local`:
```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_CONTACT_API_URL=your-api-endpoint
```

### Using in your code:
```javascript
const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
```

---

## Performance Optimization

### CDN Configuration:
- Enable gzip compression
- Enable brotli compression
- Set cache headers
- Minify assets

### Monitoring:
- Set up Google Analytics
- Monitor Core Web Vitals
- Track deployment errors

---

## Domain Setup

### Buy Domain:
- GoDaddy
- Namecheap
- Domain.com
- Your registrar of choice

### Point to Deployment:

**For Vercel:**
- Add domain in Vercel dashboard
- Update DNS records as shown

**For Netlify:**
- Add domain in Netlify dashboard
- Update DNS records as shown

**For GitHub Pages:**
- Create CNAME file in repo root:
```
yourdomain.com
```
- Update DNS A records

---

## HTTPS/SSL Certificate

- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ GitHub Pages: Automatic
- For self-hosted: Use Let's Encrypt with Certbot

---

## Continuous Deployment

### Auto-deploy on push:

Vercel, Netlify, and GitHub Pages all support automatic deployments when you push to main/master branch.

### Preview deployments:
Get automatic preview URLs for pull requests!

---

## Rollback

### Vercel:
- Dashboard → Deployments → Select previous version → Redeploy

### GitHub Pages:
```bash
git revert <commit-hash>
git push
```

### Netlify:
- Deployments tab → Select previous → Publish deploy

---

## Monitoring & Analytics

### Add Google Analytics:
1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Monitor Performance:
- Google PageSpeed Insights
- WebPageTest
- Lighthouse

---

## Recommended Setup

**Best Overall:** Vercel
- Easiest setup
- Best performance
- Free tier is generous
- Excellent DX

**Best Free:** GitHub Pages
- Completely free
- Simple setup
- Direct GitHub integration

**Best Features:** Netlify
- Form handling
- Functions (serverless)
- Analytics

---

## Troubleshooting Deployments

### Site showing old version:
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache
- Wait for CDN cache to update (usually 5-10 minutes)

### Build fails on deployment:
- Check build logs
- Ensure all dependencies are in package.json
- Test build locally: `npm run build`

### Routing issues:
- Ensure `index.html` fallback is configured
- Check base URL in vite.config.js

---

## Support

- Vercel: [vercel.com/help](https://vercel.com/help)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)

---

**Questions? Check the main README.md and SETUP.md files!** 🚀
