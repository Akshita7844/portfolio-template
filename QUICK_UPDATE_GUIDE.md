# Quick Update Guide - Portfolio Customization

## 📝 Your Portfolio is Ready! Just Update Your Info

Your beautiful portfolio is built and running at `http://localhost:5173/Portfolio/portfolio-site/`

To customize it with your actual LinkedIn information, simply:

### Step 1: Open the Main File
Open: `src/App.jsx`

### Step 2: Find and Update These Sections

#### 1. Hero Section (Line ~25-35)
Replace:
- "Akshita Mishra" → Your preferred display name
- "AI/ML Product Engineer" → Your current title

#### 2. Contact Info (Line ~75)
Update email:
```jsx
href="mailto:YOUR_EMAIL@example.com"
```

#### 3. About Section (Line ~105-125)
Replace the placeholder text with your actual bio from LinkedIn

#### 4. Experience Section (Line ~38-60)
Update each experience with:
- `title`: Your job title
- `company`: Company name
- `period`: "YYYY - Present" or "YYYY - YYYY"
- `description`: Your role description and achievements
- `technologies`: Technologies you actually used

#### 5. Projects Section (Line ~62-95)
Update each project with:
- `name`: Project name
- `description`: What the project does
- `technologies`: Tech stack used
- `github`: Your GitHub repo URL
- `demo`: Live demo URL (if available)

#### 6. Skills Section (Line ~97-105)
Update your skills with actual proficiency percentages:
```jsx
{ name: "Python", level: 95, color: "from-yellow-500 to-yellow-600" },
{ name: "Your Skill", level: 90, color: "from-purple-500 to-purple-600" },
```

#### 7. Footer Social Links (Line ~330-350)
Update with your actual URLs:
```jsx
href="https://linkedin.com/in/your-profile" // Your LinkedIn
href="https://github.com/your-username"     // Your GitHub
href="https://twitter.com/your-handle"      // Your Twitter/X
```

## 🎯 Quick Copy-Paste Example

Here's what you need to fill in:

### Your Info
- **Name**: Akshita Mishra (or preferred name)
- **Current Role**: ?
- **Email**: ?
- **LinkedIn**: https://www.linkedin.com/in/akshita-mishra-294076170/
- **GitHub**: ?
- **Current Company**: ?
- **Current Position Date**: ?

### Recent Experience
1. **Role**: ?
2. **Company**: ?
3. **Duration**: ?
4. **What you did**: ?

### Top Projects
1. **Name**: ?
2. **Description**: ?
3. **Tech Stack**: ?

Once you provide this info, I'll update everything for you instantly!

## 🔄 After Updating

1. **View changes**: The dev server auto-refreshes at http://localhost:5173/Portfolio/portfolio-site/
2. **Build**: Run `npm run build`
3. **Deploy**: Follow the deployment guide in SETUP.md

## 💡 Tip

If you want, just copy-paste your LinkedIn sections here and I'll format it properly for the portfolio!

