# Mobile App Landing Page

A modern, responsive landing page built with React and Vite. This project showcases a mobile app with animated components, feature highlights, and a clean design.

![Mobile App Landing Page](./src/assets/app-banner.jpg)
## Features

- Animated hero section with app preview
- Feature showcase with icons
- Responsive design for all devices
- Modern UI with gradient backgrounds
- Smooth animations using Framer Motion

## Technologies & Packages

### Core Dependencies
- **React** (^18.3.1) - UI framework
- **React DOM** (^18.3.1) - React rendering for web
- **Styled Components** (^6.1.8) - CSS-in-JS styling
- **Framer Motion** (^11.0.8) - Animation library
- **React Icons** (^5.0.1) - Icon components
- **Prop Types** (^15.8.1) - Runtime type checking

### Development Dependencies
- **Vite** (^6.0.5) - Build tool and dev server
- **@vitejs/plugin-react** (^4.3.4) - React support for Vite
- **ESLint** (^9.17.0) - Code linting
  - eslint-plugin-react (^7.37.2)
  - eslint-plugin-react-hooks (^5.0.0)
  - eslint-plugin-react-refresh (^0.4.16)
- **TypeScript Types**
  - @types/react (^18.3.18)
  - @types/react-dom (^18.3.5)

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Create Project Without Cloning the repository
### Follow the following steps, then copy the files from the repository to the project directory

```bash
# Create a new project with Vite
npm create vite@latest mobile-app-landing-page -- --template react

# Navigate to project directory
cd mobile-app-landing-page

# Install dependancies
npm install

# Install core dependencies
npm install styled-components framer-motion react-icons prop-types

# Install development dependencies
npm install -D @types/react @types/react-dom eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/ # React components
│ ├── Hero.jsx
│ ├── Features.jsx
│ └── Footer.jsx
├── styles/
│ └── GlobalStyles.js # Global styles
├── assets/ # Images and other assets
├── App.jsx # Main app component
└── main.jsx # Entry point
```

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this project as a template for your own landing page.
