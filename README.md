# Developer Portfolio

A modern, responsive developer portfolio website built with React (functional components only).

## Features

- **Modern Design**: Clean, minimal, tech-focused UI with smooth animations
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Component-Based Architecture**: Well-organized React functional components
- **Dark Mode**: Beautiful dark theme with carefully selected color palette
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form with validation
- **Social Links**: Easy integration with GitHub, LinkedIn, Twitter, and Email

## Design System

### Colors
- **Primary**: #2563EB (Blue)
- **Accent**: #38BDF8 (Sky Blue)
- **Background (Dark)**: #0F172A (Dark Navy)
- **Text Primary (Dark)**: #E5E7EB
- **Text Muted**: #94A3B8

### Typography
- **Font Family**: Inter
- Responsive font sizes using clamp()

### Components
- Navbar (Fixed navigation with mobile menu)
- Hero (Landing section with CTA buttons)
- About (Personal introduction)
- Skills (Technical skills display)
- Projects (Portfolio showcase)
- Contact (Contact form and social links)
- Footer (Site footer)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Change name, role, and description

2. **About Section** (`src/components/About.js`):
   - Update personal bio and highlights

3. **Skills Section** (`src/components/Skills.js`):
   - Modify skill categories and technologies

4. **Projects Section** (`src/components/Projects.js`):
   - Replace with your actual projects
   - Update GitHub and live demo URLs

5. **Contact Section** (`src/components/Contact.js`):
   - Update social media links
   - Configure email address
   - Connect form to your backend/email service

6. **Footer** (`src/components/Footer.js`):
   - Update name in footer text

### Styling

All styles are organized in component-specific CSS files:
- Global styles: `src/index.css`
- Component styles: `src/components/[Component].css`

Design system variables are defined in `src/index.css` using CSS custom properties.

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- React 18.2.0
- CSS3 (Custom Properties, Flexbox, Grid)
- HTML5 (Semantic markup)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!
