# 🚀 Saoussen Chaabnia - Portfolio Website

A modern, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features smooth animations with Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan?logo=tailwindcss)

## ✨ Features

- ⚡ **Blazing Fast** - Vite-powered development and builds
- 🎨 **Modern Design** - Dark theme with animated gradients
- 📱 **Fully Responsive** - Works on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📝 **Easy Content Updates** - Just edit TypeScript data files
- 🚀 **Auto-Deploy** - GitHub Actions workflow included

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Writing.tsx      # Articles & Publications
│   ├── Experience.tsx
│   └── ...
├── data/                # 👈 EDIT THESE FILES TO UPDATE CONTENT
│   ├── profile.ts       # Personal info, stats, certifications
│   ├── articles.ts      # Blog articles
│   ├── publications.ts  # Academic publications
│   ├── projects.ts      # Featured projects
│   └── types.ts         # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Saoussen-CH/Saoussen-CH.github.io.git
cd Saoussen-CH.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📝 How to Update Content

### Add a New Article

Edit `src/data/articles.ts`:

```typescript
{
  id: 'my-new-article',
  emoji: '🤖',
  category: 'Agentic AI',
  date: 'December 2024',
  title: 'My New Article Title',
  excerpt: 'Brief description of the article...',
  tags: ['AI Agents', 'LangChain'],
  url: 'https://medium.com/@saoussen.chaabnia/my-article',
}
```

### Add a New Publication

Edit `src/data/publications.ts`:

```typescript
{
  id: 'my-paper',
  type: 'Conference Paper',
  title: 'My Paper Title',
  authors: 'Saoussen Chaabnia, Co-Author',
  venue: 'Conference Name',
  date: 'Month Year',
  abstract: 'Paper abstract...',
  links: [
    { label: 'PDF', url: 'https://...' },
  ],
}
```

### Add a New Project

Edit `src/data/projects.ts`:

```typescript
{
  id: 'my-project',
  emoji: '🚀',
  title: 'My Project',
  description: 'Project description...',
  tags: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/...',
}
```

### Update Personal Info

Edit `src/data/profile.ts` to update:
- Name, title, tagline
- About section paragraphs
- Stats
- Certifications
- Experience
- Skills
- Education
- Social links

## 🚀 Deployment

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

### Manual Setup

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select **GitHub Actions**
3. Push to `main` branch - deployment happens automatically!

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain
2. Configure DNS at your registrar
3. Enable HTTPS in repository settings

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  accent: {
    cyan: '#00d4ff',
    magenta: '#ff006e',
    violet: '#8338ec',
    gold: '#ffbe0b',
    green: '#00f5a0',
  },
}
```

### Fonts

The site uses:
- **Outfit** - Body text
- **Space Mono** - Code and labels

Change in `index.html` and `tailwind.config.js`.

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio!

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Built with ❤️ by Saoussen Chaabnia**
