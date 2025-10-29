# AI/ML Product Engineer Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAkshita7844%2Fportfolio&project-name=portfolio-site&repository-name=portfolio&root-directory=portfolio-site&build-command=npm%20run%20build&output-directory=dist)

Use it your way:
- Template (recommended): https://github.com/Akshita7844/portfolio-template/generate
- Clone: `git clone https://github.com/Akshita7844/portfolio-template`
- Run: `cd portfolio/portfolio-site && npm install && npm run dev`

A beautiful, modern portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with glassmorphism effects
- 🎨 Gradient animations and smooth scrolling
- 💼 Professional sections: About, Experience, Projects, Skills
- 🚀 Optimized for GitHub Pages deployment
- 📱 Fully responsive and mobile-friendly

## Local Development

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deploy (Vercel Recommended)

### Vercel (1-click, auto-previews)

1) Import the repo in Vercel
- Framework Preset: Vite
- Root Directory: `portfolio-site`
- Build Command: `npm run build`
- Output Directory: `dist`

2) On push to `main`, Production updates automatically.
3) Every PR gets a Preview URL posted by Vercel.

### GitHub Pages (Alternative)

### Option 1: Automatic Deployment (Recommended)

1. Push this code to your GitHub repository
2. Go to your repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The site will automatically deploy on every push to `main` branch

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy using gh-pages (install if needed: npm install -g gh-pages)
npx gh-pages -d dist
```

## Use This as a Template

Pick one:
- Use template (fastest): https://github.com/Akshita7844/portfolio-template/generate
- Fork: fork → edit → deploy
- Degit (no history):
  ```bash
  npx degit Akshita7844/portfolio-template portfolio-yourname
  cd portfolio-yourname/portfolio-site
  npm install
  npm run dev
  ```

## Customization

### Update Your Information

Edit `src/App.jsx` to customize:
- Your name and title
- Professional experiences
- Projects showcase
- Skills and expertise
- Contact information and social links

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'primary': '#6366f1',
  'secondary': '#8b5cf6',
  'accent': '#ec4899',
}
```

### Add New Sections

You can add new sections by:
1. Creating new sections in `App.jsx`
2. Adding navigation links in the navbar
3. Following the existing pattern for glass-effect styling

## Share Your Live Portfolio

- Live URL: `https://akshita-mishra.vercel.app`
- Optional badge: `[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)`

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting

## License

MIT License - feel free to use this for your own portfolio!

## Contact

For questions or suggestions, please reach out!
