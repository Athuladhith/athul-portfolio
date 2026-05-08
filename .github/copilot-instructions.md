# Athul's Portfolio - Development Guide

## Project Overview
A modern React portfolio website built with Vite, React Router, and Tailwind CSS. The portfolio showcases projects, skills, and provides a contact form.

## Project Setup
- **Build Tool**: Vite 5.4.0 (compatible with Node.js 22.11.0)
- **Framework**: React 18
- **Styling**: Tailwind CSS with PostCSS
- **Routing**: React Router DOM
- **Dev Server**: Running on http://localhost:5173

## Key Technologies
- React 18+
- Vite 5.4 (build tool)
- React Router (client-side routing)
- Tailwind CSS (utility-first styling)
- PostCSS & Autoprefixer

## Project Structure
```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation
│   ├── Hero.jsx        # Hero section
│   ├── ProjectCard.jsx # Project showcase card
│   └── Footer.jsx      # Footer
├── pages/              # Page components
│   ├── Home.jsx        # Home page with skills
│   ├── Projects.jsx    # Projects showcase
│   ├── About.jsx       # About section
│   └── Contact.jsx     # Contact form
├── App.jsx             # Main routing setup
├── main.jsx            # Entry point
└── index.css           # Tailwind directives
```

## Development Workflow

### Starting Development
```bash
npm run dev
```
Server runs on http://localhost:5173 with hot module replacement (HMR)

### Build for Production
```bash
npm run build
```
Output: `dist/` folder (ready for deployment)

### Preview Production Build
```bash
npm run preview
```

## Customization Guide

### 1. Update Personal Info
- Edit component text directly in JSX files
- Update social links in Header, Footer, and Contact

### 2. Add Projects
- Update `projects` array in `src/pages/Projects.jsx`
- Each project needs: `id`, `title`, `description`, `tags`, `link`

### 3. Modify Styling
- Tailwind CSS classes in all components
- Edit `tailwind.config.js` for theme customization
- All colors and spacing use Tailwind utilities

### 4. Add New Pages
- Create page in `src/pages/`
- Add route in `App.jsx`
- Link from Header navigation

## Dependencies
- `react`: UI library
- `react-router-dom`: Client-side routing
- `tailwindcss`: CSS framework
- `vite`: Build tool
- `@vitejs/plugin-react`: React integration

## Build & Deployment
Project can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting

## Notes
- All components are functional components with hooks
- Responsive design using Tailwind's responsive prefixes
- Contact form logs to console (integrate with backend/email service as needed)
- Hero section includes call-to-action buttons
