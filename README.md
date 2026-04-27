# Dhanveer M - Portfolio Website

A modern, minimalist portfolio website built with React and CSS. Features smooth navigation, responsive design, and green accent colors.

## 📋 Project Structure

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
│   ├── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd dhanveer-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## 🎨 Features

- ✅ **Modern & Minimalist Design** - Clean, elegant interface with green accent colors
- ✅ **Smooth Navigation** - Fixed navbar with smooth scrolling to sections
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Sections Included:**
  - Hero/Home
  - About Me
  - Featured Projects
  - Work Experience
  - Skills & Technologies
  - Contact
  - Footer

- ✅ **Interactive Elements** - Hover effects, smooth transitions, bounce animations
- ✅ **Social Links** - GitHub, LinkedIn, HackerRank, Google Dev profiles
- ✅ **Mobile Menu** - Hamburger menu for mobile devices

## 📱 Customization

### Change Colors
In `src/App.css`, update the CSS variables:
```css
:root {
  --primary-color: #639922;        /* Change this to your color */
  --primary-light: #7fb328;
  --primary-dark: #4a7315;
  /* ... other colors */
}
```

### Update Personal Information

#### In `src/components/Hero.jsx`:
```jsx
<h1 className="hero-title">Your Name</h1>
<p className="hero-subtitle">Your Title | Your Tagline</p>
```

#### In `src/components/About.jsx`:
- Update education details
- Update school information
- Modify about text

#### In `src/components/Projects.jsx`:
- Add/remove projects in the projects array
- Update project details, features, and tech stack

#### In `src/components/Experience.jsx`:
- Update work experience details
- Add more experiences by duplicating the structure

#### In `src/components/Skills.jsx`:
- Update languages array
- Update tools array
- Update profile links (GitHub, LinkedIn, etc.)

#### In `src/components/Contact.jsx`:
- Update email address
- Update LinkedIn profile URL

## 🔗 Update Social Links

Search for these URLs and replace with your own:

- **GitHub**: `https://github.com/Dhanveer-7`
- **LinkedIn**: `https://www.linkedin.com/in/dhanveer-m-a0785232b/`
- **HackerRank**: `https://www.hackerrank.com/profile/dhanveer24112006`
- **Google Dev**: `https://g.dev/Dhanveer`
- **Email**: `dhanveer24112006@gmail.com`

## 🌐 Deployment

### Option 1: Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Deploy with default settings
6. Your site will be live at `yourusername.vercel.app`

### Option 2: Deploy on Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Deploy
8. Your site will be live at `yoursite.netlify.app`

### Option 3: GitHub Pages

1. Update `homepage` in `package.json`:
```json
"homepage": "https://yourusername.github.io/dhanveer-portfolio"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

4. Go to GitHub repository Settings → Pages → Select `gh-pages` branch

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎯 SEO Optimization

- Update `public/index.html`:
  - Change `<title>`
  - Update `<meta name="description">`
  - Add additional meta tags as needed

- The portfolio is mobile-friendly and includes proper viewport settings

## 🔧 Troubleshooting

**Port 3000 already in use:**
```bash
npx kill-port 3000
npm start
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm cache clean --force
npm install
npm start
```

## 📄 License

This portfolio is free to use and modify. Feel free to use it as a template for your own portfolio.

## 💡 Tips

1. **Add More Projects** - Update the projects array in `Projects.jsx`
2. **Add Blog Section** - Create a new `Blog.jsx` component
3. **Add Dark Mode** - Use CSS variables to implement dark mode toggle
4. **Add Animations** - Enhance animations in `App.css`
5. **Add Contact Form** - Integrate with services like Formspree or Nodemailer

## 📧 Questions?

If you face any issues, check the code comments or review the component structure carefully.

---

**Happy coding! 🚀**
