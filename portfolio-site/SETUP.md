# Portfolio Setup & Deployment Guide

## 🚀 Quick Start

### 1. Local Development

```bash
cd portfolio-site
npm install
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 2. Customize Your Information

Edit `src/App.jsx` and update:

- **Your Name**: Line 27 in `App.jsx` - Replace "Akshita Mishra" 
- **Contact Email**: Line 75 - Update with your email
- **Experiences**: Lines 26-45 - Update with your work history
- **Projects**: Lines 47-82 - Add your projects
- **Skills**: Lines 84-92 - Update your technical skills
- **Social Links**: Lines 330-350 - Add your LinkedIn, GitHub, Twitter links

### 3. Deploy to GitHub Pages (Free!)

#### Option A: Automatic Deployment (Easiest)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

2. **Enable GitHub Pages**:
   - Go to your repo on GitHub
   - Click Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save

3. **Your portfolio will be live at**:
   ```
   https://YOUR_USERNAME.github.io/portfolio-site/
   ```

#### Option B: Manual Deployment

```bash
# Build the project
npm run build

# Install gh-pages (one time)
npm install -g gh-pages

# Deploy
gh-pages -d dist
```

### 4. Alternative: Deploy to Vercel (Even Easier!)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy" - Done! ✨

Your portfolio will be live instantly with a custom domain!

## 🎨 Customization Tips

### Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  'primary': '#6366f1',      // Change this
  'secondary': '#8b5cf6',    // Change this
  'accent': '#ec4899',       // Change this
}
```

### Add Your Photo

1. Add your photo to `src/assets/`
2. Update the hero section in `App.jsx` to include:
```jsx
<img src="/your-photo.jpg" alt="Your Name" className="rounded-full w-48 h-48" />
```

### Add More Sections

You can add sections like:
- Blog posts
- Certifications
- Publications
- Testimonials

Just follow the existing pattern in `App.jsx`!

## 📝 Notes

- The portfolio is **fully responsive** and works on all devices
- All animations are **smooth** and **performance-optimized**
- SEO-friendly with proper meta tags
- **Free hosting** on GitHub Pages or Vercel

## 🆘 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Styles not showing?**
Make sure Tailwind is configured properly in `tailwind.config.js`

**GitHub Pages not working?**
- Check that the base path in `vite.config.js` matches your repo name
- Make sure GitHub Pages is enabled in repo settings

## ✨ Next Steps

1. Customize with your information
2. Add your real projects and experiences
3. Deploy to GitHub Pages or Vercel
4. Share your portfolio!

Good luck! 🎉


