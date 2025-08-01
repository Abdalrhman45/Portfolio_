# [🌐 Modern Portfolio Website](https://github.com/Abdalrhman45/Portfolio_)

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

A beautiful, responsive personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- 🖌️ **Modern Design**: Clean, elegant, and professional layout
- 📱 **Responsive**: Optimized for all screen sizes
- 🌗 **Dark/Light Mode**: Toggle between themes with smooth transitions
- 🎞️ **Smooth Animations**: Framer Motion for an engaging UX
- ⚡ **Performance Optimized**: Next.js 14 architecture
- 🔍 **SEO Ready**: Semantic HTML and meta tags
- ♿ **Accessible**: WCAG-compliant with ARIA labels
- ✉️ **Contact Form**: With validation and UX feedback
- 🛡️ **TypeScript**: Full type safety

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://localhost:3000
📁 Project Structure
css
Copy
Edit
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   └── theme-provider.tsx
└── types/
    └── index.ts
🎨 Customization Guide
🔖 Personal Info
Update your data in:

components/hero.tsx – name, role, social links

components/about.tsx – bio, resume link

components/contact.tsx – contact details

components/footer.tsx – copyright

app/layout.tsx – meta & SEO tags

📂 Projects
Edit components/projects.tsx

Add project images to public/

Update project list and details

💼 Skills
Modify components/skills.tsx

Add tech stack, categories, and levels

🎨 Styling
Tailwind theme: tailwind.config.js

Fonts: app/layout.tsx (Google Fonts)

Animations: Inside each component with Framer Motion

🛠️ Built With
Next.js 14

TypeScript

Tailwind CSS

Framer Motion

React Hook Form

next-themes

Lucide React Icons

📱 Responsive Design
Fully responsive on:

🖥️ Desktop (1920px+)

💻 Laptop (1024–1919px)

📱 Tablet (768–1023px)

📲 Mobile (320–767px)

🌙 Dark Mode Support
Detects system preference

Manual toggle switch

Smooth transitions

Saved theme preference in localStorage

📧 Contact Form
Built with React Hook Form:

Input validation

UX feedback (loading, success, error)

Fully responsive and accessible

🔧 Currently logs to console. For production, integrate with:

EmailJS

Formspree

Custom API / Serverless backend

🚀 Deployment
Vercel (Recommended)
Push to GitHub

Import repo on vercel.com

Deploy instantly

Other Options
Netlify: Drag & drop out/ folder after npm run build

GitHub Pages: Use next export

Custom Hosting: Run npm run build && npm start

📄 License
This project is licensed under the MIT License.

🤝 Contributing
Contributions, suggestions, and issues are welcome.
Please open an issue or submit a PR.

📞 Contact Me
📧 Email: abdalrhmansaber54@gmail.com

🌐 GitHub: @Abdalrhman45

💼 LinkedIn: linkedin.com/in/abdalrhman45

