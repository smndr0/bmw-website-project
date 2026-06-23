# BMW Website Project

A responsive React landing page built with Vite, Tailwind CSS, and a 3D BMW model viewer.

## Project Overview

This project delivers a modern automotive landing page experience with:
- React 19 and Vite for fast development and production builds
- Tailwind CSS v4 using the `@tailwindcss/vite` plugin
- 3D model rendering powered by `three`, `@react-three/fiber`, and `@react-three/drei`
- GSAP scroll-triggered animations and transitions
- Zustand state management for interactive controls

## Key Sections

The app is composed of the following sections:
- `Navbar` — sticky top navigation
- `Hero` — introductory landing section
- `ProductViewer` — interactive 3D BMW model showcase
- `Showcase` — media-rich feature section
- `Performance` — performance and specs presentation
- `Feature` — additional product highlights
- `Highlights` — feature cards and summary content
- `Footer` — page footer

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the project.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

- `src/` — application source files
  - `main.jsx` — app entry point
  - `app.jsx` — main layout and component composition
  - `index.css` — Tailwind utilities, custom utilities, and component styles
  - `components/` — React UI and 3D viewer components
- `public/` — static assets such as fonts, models, and videos
- `vite.config.js` — Vite configuration with React and Tailwind plugins

## Notes

- Tailwind CSS is configured through `src/index.css` using `@import "tailwindcss"` and `@apply` rules.
- The project uses viewport-driven sizing classes such as `h-[100dvh]` for full-screen model sections.
- If you update Tailwind utility usage, ensure the class names are valid and complete (e.g. avoid dangling responsive prefixes such as `lg:` without a class).

## License

This repository is currently a private project template. Adjust the license section as needed.
