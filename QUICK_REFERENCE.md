# ⚡ React Portfolio - Quick Reference Card

## 📁 Files You Need to Create

### Folder Structure
```
dhanveer-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```

## 🚀 Quick Commands

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Start dev server | `npm start` |
| Build for production | `npm run build` |
| Kill port 3000 | `npx kill-port 3000` |
| Delete node_modules | `rm -rf node_modules` |

## 🎨 Key Files to Customize

| What to Change | File | Location |
|---|---|---|
| Colors | `src/App.css` | Lines 1-15 (CSS variables) |
| Your Name | `src/components/Hero.jsx` | Line 10 |
| About Text | `src/components/About.jsx` | Line 6 |
| Projects | `src/components/Projects.jsx` | Line 3 |
| Experience | `src/components/Experience.jsx` | Line 3 |
| Skills | `src/components/Skills.jsx` | Lines 1-10 |
| Page Title | `public/index.html` | `<title>` tag |

## 📱 Responsive Breakpoints

```css
Desktop:   > 768px (full layout)
Tablet:    768px  (adjusted layout)
Mobile:    < 480px (stacked layout)
```

## 🔗 Links to Update

Search and replace these:

```
GitHub:     https://github.com/Dhanveer-7
LinkedIn:   https://www.linkedin.com/in/dhanveer-m-a0785232b/
Email:      dhanveer24112006@gmail.com
HackerRank: https://www.hackerrank.com/profile/dhanveer24112006
Google Dev: https://g.dev/Dhanveer
```

## 🎯 Components Overview

```
Header.jsx     → Navigation bar (fixed at top)
Hero.jsx       → Welcome section (name, intro)
About.jsx      → About me (bio, education)
Projects.jsx   → Portfolio projects (project cards)
Experience.jsx → Work experience (internships, jobs)
Skills.jsx     → Technical skills (languages, tools)
Contact.jsx    → Contact section (email, LinkedIn)
Footer.jsx     → Footer (copyright)
```

## 📊 Color Palette

```
Primary:   #639922  (Green)
Light:     #7fb328  (Light Green)
Dark:      #4a7315  (Dark Green)
Text:      #1c1917  (Dark)
Secondary: #78716c  (Gray)
Background:#fafaf9  (Off-white)
Border:    #e7e5e4  (Light Gray)
```

## 🔧 Common Edits

### Add a Project
```javascript
{
  id: 3,
  title: 'Project Name',
  category: 'Category',
  description: 'Description',
  features: ['Feature 1', 'Feature 2'],
  tech: ['Java', 'MongoDB']
}
```

### Change Primary Color
In `src/App.css`:
```css
--primary-color: #YOUR_COLOR;
--primary-light: #LIGHTER_VERSION;
--primary-dark: #DARKER_VERSION;
```

### Update Social Link
Search for the URL and replace:
```jsx
<a href="NEW_URL">Link Text</a>
```

## ✅ Before Deploying

- [ ] Edited all personal info
- [ ] Updated all social links
- [ ] Tested on mobile (F12)
- [ ] No console errors (F12)
- [ ] All links working
- [ ] `npm run build` succeeds

## 🌐 Deployment URLs

| Service | URL |
|---------|-----|
| Vercel | yourusername.vercel.app |
| Netlify | yoursite.netlify.app |
| GitHub Pages | yourusername.github.io/repo-name |

## 🆘 Emergency Commands

```bash
# Fix dependencies
rm -rf node_modules package-lock.json
npm install

# Clear cache
npm cache clean --force

# Kill stuck port
npx kill-port 3000

# Fresh start
npm cache clean --force && rm -rf node_modules && npm install && npm start
```

## 📚 File Quick Reference

```
App.jsx          ← Main component (imports all sections)
App.css          ← All styling (MOST IMPORTANT)
Header.jsx       ← Navigation
Hero.jsx         ← Your name & intro
About.jsx        ← Your story
Projects.jsx     ← Your projects
Experience.jsx   ← Your experience
Skills.jsx       ← Your skills
Contact.jsx      ← Contact info
Footer.jsx       ← Footer
package.json     ← Dependencies
index.html       ← HTML template
```

## 🎨 Styling Quick Tips

```css
/* Change section width */
.section-container {
  max-width: 900px;  /* Change this */
}

/* Change button color */
.btn-primary {
  background-color: var(--primary-color);
}

/* Change text color */
color: var(--text-primary);

/* Change spacing */
padding: 80px 40px;  /* top/bottom, left/right */
```

## 🔐 Important Notes

1. **Don't edit**: `node_modules/` folder
2. **Do backup**: Your code to GitHub or cloud
3. **Do test**: Mobile view before deploying
4. **Do check**: Console for errors (F12)
5. **Do update**: Social links before sharing

## 📝 Component Structure

```jsx
// Each component has this structure:
import React from 'react';

const ComponentName = () => {
  return (
    <section id="section-id" className="section-name">
      <div className="section-container">
        <h2 className="section-title">Title</h2>
        {/* Content here */}
      </div>
    </section>
  );
};

export default ComponentName;
```

## 🚀 Deployment Checklist

**For Vercel**:
1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repo
4. Click Deploy ✅

**For Netlify**:
1. Run `npm run build`
2. Go to netlify.com
3. Drag `build/` folder
4. Done ✅

**For GitHub Pages**:
1. Update homepage in package.json
2. Run `npm run deploy`
3. Check repository settings
4. Done ✅

## 📞 Help Resources

| Issue | Solution |
|-------|----------|
| npm not found | Reinstall Node.js |
| Port in use | `npx kill-port 3000` |
| Changes not showing | Refresh browser (F5) |
| Styling broken | Clear cache (Ctrl+Shift+Del) |
| Build fails | `rm -rf node_modules && npm install` |

## 🎉 Success Indicators

✅ `npm start` opens browser automatically
✅ Site loads at http://localhost:3000
✅ Changes appear immediately after saving
✅ Mobile view looks good (test with F12)
✅ No red errors in console (F12)
✅ `npm run build` completes successfully

---

**Keep this card handy! Reference it while setting up! 📌**
