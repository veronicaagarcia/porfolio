# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Verónica García's professional portfolio - a modern, optimized showcase of her work as a Frontend Developer and UI/UX Designer with +3 years of experience. The site demonstrates best practices in web development, accessibility, and SEO.

**Key Technologies & Optimizations:**

- **Astro 4.9.2** - Static site generator with Islands Architecture
- **React 18.3.1** - Interactive contact form with EmailJS integration
- **Tailwind CSS 3.4.3** - Custom theme with dark mode support
- **TypeScript** - Full type safety across components and data
- **Sharp 0.34.3** - Image optimization (WebP conversion, 98% size reduction)
- **EmailJS** - Secure contact form with environment variables
- **ESLint + Prettier** - Code quality and consistent formatting
- **SEO Optimized** - Open Graph, JSON-LD, sitemap, robots.txt

## Development Commands

```bash
# Development server
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build
npm run preview

# Code quality checks
npm run lint          # ESLint check
npm run lint:fix      # Auto-fix ESLint issues
npm run format        # Format with Prettier
npm run format:check  # Check Prettier formatting
npm run type-check    # TypeScript type checking
npm run quality       # Run all quality checks (lint + format + types)
```

**Package Manager:** Uses pnpm 9.12.2 (specified in packageManager field)

**Environment Variables Required:**

- `PUBLIC_EMAILJS_SERVICE_ID` - EmailJS service ID
- `PUBLIC_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `PUBLIC_EMAILJS_PUBLIC_KEY` - EmailJS public key

## Architecture & Structure

### Component Organization

- **`src/components/`** - Astro components for main sections (About, Contact, Experience, Projects, etc.)
- **`src/layouts/Layout.astro`** - Base layout with animated background circles and theme support
- **`src/icons/`** - SVG icon components (Github, Gmail, LinkedIn, etc.)
- **`src/pages/index.astro`** - Single page application structure

### Styling System

The project uses a custom Tailwind theme with light/dark mode support:

- **Color Scheme:** Custom color palette defined in `tailwind.config.mjs`
- **Typography:** Onest Variable (body) + Poppins (headings)
- **Dark Mode:** Class-based switching via ThemeToggle component
- **Animation:** Floating background circles with CSS animations

### React Integration

- **Contact Form** (`Form.jsx`) - Only React component, handles email sending via EmailJS
- **EmailJS Integration** - Service ID: 'service_vsaeinm', Template ID: 'template_g5rnaf7'
- **Toast Notifications** - Uses Sonner library for user feedback

### Key Features

- **Single Page Layout** - All sections on one page with smooth scrolling
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Theme Switching** - Light/dark mode with animated transitions
- **Animated Background** - Multiple floating circles with CSS keyframe animations
- **Contact Form** - Full validation and email sending functionality

## Important Notes

- **Portfolio Content:** The site is in Spanish (Argentina-based developer)
- **Deployment:** Configured for Netlify (canonical URL: veronicagarciaporfolio.netlify.app)
- **Email Configuration:** EmailJS credentials are hardcoded in Form.jsx
- **No Testing Framework** - No test commands or testing setup currently in place
- **No Linting Setup** - No ESLint or Prettier configuration found
