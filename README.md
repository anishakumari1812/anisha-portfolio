# Anisha Kumari – Portfolio

Built with **React.js**, **Tailwind CSS**, **Vite**, and **Framer Motion**.

---

## 📁 Project Structure

```
anisha-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## 🚀 Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 🛠 Customizations

### Add your photo
In `Hero.jsx`, replace the placeholder div with:
```jsx
<img src="/your-photo.jpg" alt="Anisha" className="w-64 h-64 rounded-full object-cover shadow-[0_0_0_4px_#8b5cf6,0_0_60px_rgba(139,92,246,0.35)]" />
```
Put your photo in the `public/` folder.

### Add your CV
Put your `cv.pdf` in the `public/` folder. The Download CV button already points to `/cv.pdf`.

### Update social links
In `Contact.jsx`, update the `href` values in the `socials` array with your actual GitHub and LinkedIn URLs.

### Update project links
In `Projects.jsx`, update the `demo` and `code` fields in the `projects` array.

---

## 🌐 Deploy to Vercel (Free)

1. Push your project to GitHub
2. Go to https://vercel.com
3. Click "New Project" → Import your repo
4. Vercel auto-detects Vite → click Deploy
5. Get your live URL instantly! 🎉
