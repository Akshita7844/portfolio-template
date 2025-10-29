# 💼 Portfolio Website — Quick Start

**👉 For detailed beginner-friendly instructions, see the [main README](../README.md) in the root directory.**

## 🎯 No-Code Option (Easiest!)

**Use the visual form generator!** No coding needed - just fill out a form.

1. Open `portfolio-generator.html` (in root directory) in any browser
2. Fill in your information
3. Generate your code
4. Copy-paste into `App.jsx`
5. Deploy to Vercel!

👉 See main [README.md](../README.md) for detailed no-code instructions

---

## ⚡ Fast Track (If You're Comfortable with Tech)

### 1. Get Your Copy

- **Template Button:** Click "Use this template" on GitHub
- **Direct Link:** https://github.com/Akshita7844/portfolio-template/generate

### 2. Edit Your Content

**Main file to edit:** `src/App.jsx`

- Find and replace:
  - Your name and title
  - `experiences` array → Your work history
  - `projects` array → Your projects
  - `skills` array → Your skills
  - Social links in footer

### 3. Add Your Photo

1. Upload to: `public/your-photo.jpg`
2. In `App.jsx`, change: `src="/Profile_Photo.PNG"` → `src="/your-photo.jpg"`

### 4. Deploy (One-Click!)

1. Go to: https://vercel.com/new
2. Import your repository
3. **Important:** Set **Root Directory** to: `portfolio-site`
4. Deploy!

Your site will be live at: `https://your-repo-name.vercel.app`

---

## 🛠️ Local Development (Optional)

If you want to preview changes locally before deploying:

### Prerequisites
- Node.js (v20 or higher) - Download from https://nodejs.org

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Visit: `http://localhost:5173`
   - The page auto-refreshes when you make changes!

4. **Build for production:**
   ```bash
   npm run build
   ```
   - Output goes to `dist/` folder

---

## 📁 Project Structure

```
portfolio-site/
├── public/              # Your images (upload photo here)
│   ├── placeholder.svg  # Default placeholder
│   └── favicon.svg
├── src/
│   ├── App.jsx          # ⭐ Main file - edit your content here!
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html           # HTML template
├── package.json         # Dependencies (don't edit unless needed)
└── vite.config.js       # Build config (don't edit unless needed)
```

---

## 🎨 Customization

### Quick Edits

**Everything is in `src/App.jsx`:**

- **Name/Title:** Search for your name in the hero section
- **Experience:** Find `const experiences = [...]`
- **Projects:** Find `const projects = [...]`
- **Skills:** Find `const skills = [...]`
- **Social Links:** Search footer for `href="...`

### Color Scheme

Edit `tailwind.config.js` to change colors. Default is cyan/teal.

---

## 🚀 Deployment Options

### Vercel (Recommended - Easiest)

1. Visit: https://vercel.com/new
2. Import your GitHub repository
3. Set **Root Directory:** `portfolio-site`
4. Deploy!

✅ Auto-updates on every push to main branch  
✅ Free HTTPS & custom domain option  
✅ Preview deployments for each PR

### GitHub Pages

1. Repository → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Your site: `https://username.github.io/repo-name`

---

## ❓ Need More Help?

**See the main [README.md](../README.md) for:**
- Detailed step-by-step instructions
- Troubleshooting guide
- Complete customization guide
- Photo upload instructions

---

## 📝 License

MIT License — Free to use for any purpose!

---

**Built with:** React + Vite + Tailwind CSS
