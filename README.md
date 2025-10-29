# 📁 Portfolio Website Template — Complete Beginner's Guide

**Live Example:** `https://akshita-mishra.vercel.app`

This is a template to create your own professional portfolio website—even if you've never coded before!

---

## 🎯 What You'll Get

A beautiful, modern portfolio website showing:
- Your photo and introduction
- Work experience
- Projects you've worked on
- Your skills
- Awards and education
- Contact information

**You don't need to know coding!** Just follow the steps below.

---

## ✅ Before You Start

You'll need:
1. A **GitHub account** (free) → Sign up at https://github.com
2. A **Vercel account** (free) → Sign up at https://vercel.com (can use GitHub to sign in)
3. Your portfolio information ready (experience, projects, etc.)
4. A photo of yourself (optional, but recommended)

**That's it!** No coding knowledge required.

---

## 🎯 Option 0: No-Code Generator (Easiest - No Editing Required!)

**NEW!** Use our visual form generator - fill in a form, get your code ready!

1. **Open the Generator:**
   - Download `portfolio-generator.html` from this repo
   - OR open it directly on GitHub: [View Raw](https://raw.githubusercontent.com/Akshita7844/portfolio-template/main/portfolio-generator.html)
   - Save the file and open it in any web browser (Chrome, Firefox, Safari, etc.)

2. **Fill in the Form:**
   - Enter your name, title, bio
   - Add your work experience (click "+ Add Another Job" for multiple)
   - Add your projects (click "+ Add Another Project" for multiple)
   - Add your skills (comma-separated)
   - Fill in social links

3. **Click "Generate My Portfolio Code"**
   - Your custom code will appear below
   - Copy the generated code

4. **Use the Template:**
   - Follow Step 1 below to create your copy
   - Then paste the generated code into `App.jsx` (the generator tells you exactly where)
   - Deploy to Vercel!

**That's it!** You never need to understand or edit code - just fill out a form! 🎉

---

## 🚀 Method 1: Get Your Own Copy (5 minutes)

### Step 1: Create Your Copy from This Template

1. Go to: https://github.com/Akshita7844/portfolio-template
2. Click the green button that says **"Use this template"** (top right, next to "Code")
3. Choose **"Create a new repository"**
4. Give it a name (e.g., `my-portfolio` or `jane-doe-portfolio`)
5. Make sure it's set to **"Public"** (so you can deploy it for free)
6. Click **"Create repository from template"**

**What this does:** Creates your own copy in your GitHub account. Your copy won't affect anyone else's.

---

### Step 2: Edit Your Information

1. Go to your newly created repository
2. Navigate: **portfolio-site** → **src** → **App.jsx**
3. Click the **pencil icon** (✏️) to edit
4. Find the sections marked with comments like `// Your name here` or similar

**What to change:**
- Find `experiences = [...]` → Replace with your work experience
- Find `projects = [...]` → Replace with your projects
- Find `skills = [...]` → Add/remove skills
- Find your name and title at the top
- Find social media links and email

5. Scroll down and click **"Commit changes"** (green button at bottom)

**💡 Pro Tip:** Save as you go! If you make a mistake, you can always undo it on GitHub.

---

### Step 3: Add Your Photo

1. Still in your repository, go to: **portfolio-site** → **public**
2. Click **"Add file"** → **"Upload files"**
3. Upload your photo (name it something simple like `my-photo.jpg`)
4. In **portfolio-site** → **src** → **App.jsx**, find the line with `src="/Profile_Photo.PNG"`
5. Change it to `src="/my-photo.jpg"` (use the exact name you uploaded)
6. Click **"Commit changes"**

**What this does:** Replaces the placeholder image with your actual photo.

---

### Step 4: Deploy to the Internet (Make It Live!)

#### Option A: One-Click Deploy with Vercel (Easiest!)

1. Go to https://vercel.com/new
2. Sign in with GitHub (if not already signed in)
3. Click **"Import Git Repository"**
4. Select your repository from the list
5. Vercel will auto-detect settings, but verify:
   - **Framework Preset:** Vite
   - **Root Directory:** `portfolio-site` ← **IMPORTANT!**
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. You'll get a live URL like `https://your-name.vercel.app`

**🎉 Done!** Your portfolio is now live on the internet!

**Every time you update your GitHub repo, Vercel will automatically update your live site** (usually takes 30 seconds).

---

#### Option B: Manual GitHub Pages (Alternative)

If you prefer not to use Vercel:

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **"GitHub Actions"**
3. Save and wait a few minutes
4. Your site will be at: `https://your-username.github.io/your-repo-name`

---

## 📝 Customization Guide (What to Change)

### Your Name and Title

**File:** `portfolio-site/src/App.jsx`  
**Find:** Lines with your name and title  
**Replace with:** Your actual name and job title

Example:
```javascript
// BEFORE
<span className="text-white">Akshita Mishra</span>

// AFTER
<span className="text-white">Jane Doe</span>
```

---

### Work Experience

**File:** `portfolio-site/src/App.jsx`  
**Find:** The `experiences` section (looks like an array with job details)

**Replace with:**
```javascript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Jan 2023 - Present",
    location: "City, Country",
    achievements: [
      "Your achievement 1",
      "Your achievement 2",
      "Your achievement 3",
    ],
    technologies: ["Python", "React", "SQL"],
  },
]
```

**💡 Pro Tip:** You can add multiple jobs by adding more objects (separated by commas).

---

### Projects

**File:** `portfolio-site/src/App.jsx`  
**Find:** The `projects` section

**Template:**
```javascript
{
  name: "Your Project Name",
  description: "A brief description of what the project does and why it matters.",
  technologies: ["Python", "React", "FastAPI"],
  link: "https://github.com/your-username/project-repo", // or null if private
  isCompanyProject: false,
  gradient: "from-cyan-500 to-teal-600",
  impact: "Brief impact statement"
}
```

---

### Skills

**File:** `portfolio-site/src/App.jsx`  
**Find:** The `skills` array

**Add/Remove skills like this:**
```javascript
{ name: "Python", color: "from-yellow-500 to-yellow-600", category: "Programming" },
{ name: "React", color: "from-cyan-500 to-cyan-600", category: "Frontend" },
```

**💡 Pro Tip:** Keep the color format the same—just change the name!

---

### Social Links (Email, LinkedIn, GitHub, Twitter)

**File:** `portfolio-site/src/App.jsx`  
**Find:** Links in the footer section (look for `href="..."`)

**Replace URLs with:**
- Your email: `mailto:your-email@gmail.com`
- Your LinkedIn: `https://linkedin.com/in/your-profile`
- Your GitHub: `https://github.com/your-username`
- Your Twitter: `https://twitter.com/your-handle`

---

### Colors (Optional - Advanced)

**File:** `portfolio-site/tailwind.config.js`

If you want to change the color scheme, you can modify the gradients. The current theme uses cyan/teal colors.

---

## 🖼️ Changing Your Photo

1. Upload your photo to: **portfolio-site/public/** (name it something simple like `photo.jpg`)
2. In **App.jsx**, find: `src="/Profile_Photo.PNG"`
3. Change to: `src="/photo.jpg"` (match the exact filename)
4. Save and commit

**Recommended photo specs:**
- Size: Square (e.g., 800x800px works well)
- Format: JPG or PNG
- File size: Under 1MB (so it loads fast)

---

## 🔧 Troubleshooting

### "I can't see the 'Use this template' button"

- Make sure you're logged into GitHub
- Try refreshing the page
- Direct link: https://github.com/Akshita7844/portfolio-template/generate

---

### "My changes aren't showing on the live site"

1. Make sure you committed your changes on GitHub (clicked "Commit changes")
2. Wait 1-2 minutes (Vercel auto-updates)
3. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
4. Check Vercel dashboard for any build errors

---

### "I broke something! How do I fix it?"

**Good news:** On GitHub, you can see your edit history!

1. Go to the file you edited
2. Click **"History"** (top right)
3. Click on a previous version
4. Copy the old code and paste it back

OR use GitHub's "Revert" button if it's available.

---

### "I don't understand the code!"

**That's okay!** You don't need to understand it.

- Just find the text you want to change (your name, job title, etc.)
- Replace it with your information
- Save and commit

The structure (code brackets, quotes, etc.) should stay the same—only change the content inside quotes.

---

### "The deploy button doesn't work"

1. Make sure you've created your own copy of the template first
2. Make sure your repository is public
3. Try the manual method: Go to https://vercel.com/new → Import your repository

---

### "My photo isn't showing"

1. Check the filename matches exactly (case-sensitive!)
2. Make sure it's in the `portfolio-site/public/` folder
3. In App.jsx, make sure the path starts with `/` (e.g., `/my-photo.jpg`)
4. Commit and wait for deployment

---

## 🆘 Still Need Help?

1. **Check GitHub Issues:** Someone might have asked the same question
2. **Create an Issue:** Describe your problem and we'll help
3. **Common Solutions:** Most issues are fixed by:
   - Making sure you committed your changes
   - Waiting a few minutes for deployment
   - Checking that filenames match exactly

---

## 📚 Quick Reference

**Main files to edit:**
- `portfolio-site/src/App.jsx` — All your content (name, experience, projects, skills)
- `portfolio-site/public/` — Your photos and images

**Don't edit unless you know what you're doing:**
- `package.json`
- `vite.config.js`
- `tailwind.config.js` (unless customizing colors)

---

## ✅ Checklist Before Going Live

- [ ] Changed your name and title
- [ ] Updated work experience
- [ ] Added your projects
- [ ] Updated skills list
- [ ] Added your photo
- [ ] Updated social media links and email
- [ ] Tested that all links work
- [ ] Deployed to Vercel
- [ ] Shared your live URL!

---

## 🎉 You're Done!

Your portfolio is now live. Share your URL with employers, clients, or anyone who wants to see your work!

**Remember:** Every time you update your GitHub repository, your live site automatically updates within 1-2 minutes.

---

## 📄 License

MIT License — Feel free to use this template for personal or commercial projects!

---

**Made with ❤️ using React, Vite, and Tailwind CSS**
