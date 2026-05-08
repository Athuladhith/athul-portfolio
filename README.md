# Athul's Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🎨 Features

- **Modern Design**: Built with Tailwind CSS for a sleek, professional look
- **Fast Performance**: Vite for lightning-fast development and optimized builds
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Navigation**: React Router for seamless page transitions
- **Interactive Contact Form**: Fully functional contact form for getting in touch
- **Project Showcase**: Display your best work with project cards

## 🚀 Quick Start

### Prerequisites

- Node.js (v22.11.0 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd athul-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The portfolio will open at `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── ProjectCard.jsx  # Project card component
│   └── Footer.jsx       # Footer
├── pages/
│   ├── Home.jsx         # Home page
│   ├── Projects.jsx     # Projects showcase
│   ├── About.jsx        # About page
│   └── Contact.jsx      # Contact form page
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Tailwind CSS imports
```

## 🛠️ Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

## 📝 Customization

### Update Personal Information

1. **Header**: Edit `src/components/Header.jsx` to add your name and links
2. **Hero Section**: Modify text and buttons in `src/components/Hero.jsx`
3. **Projects**: Update the projects array in `src/pages/Projects.jsx`
4. **About**: Edit your bio in `src/pages/About.jsx`
5. **Contact**: Customize the contact form in `src/pages/Contact.jsx`

### Styling

All styles use Tailwind CSS. Customize colors and themes in `tailwind.config.js`

## 🔧 Technologies Used

- **React 18**: UI library
- **Vite 5.4**: Build tool
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

This portfolio can be easily deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist/` folder.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ by Athul

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
