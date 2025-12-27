# next-init

A flexible Next.js template with optional features you can choose during setup.

## 🚀 Quick Start

### Option 1: Using NPX (Recommended)

```bash
npx create-next-init my-app
cd my-app
npm install
npm run dev
```

### Option 2: Using GitHub Template

1. Click "Use this template" on GitHub
2. Clone your new repository
3. Run the setup script:

```bash
npm run setup
npm install
npm run dev
```

## ✨ Features

Choose the features you need during setup:

- **Dashboard** - Protected dashboard with role-based routing
- **Authentication** - NextAuth.js integration with JWT
- **Google Analytics** - GA4 and GTM support
- **Contact Form** - Formik-powered contact form with Google Maps

## 📦 What's Included

### Core

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **React Toastify** for notifications
- **Cypress** for E2E testing

### Optional Features

The setup wizard will ask about:

- Dashboard with protected routes
- NextAuth authentication
- Google Analytics integration
- Contact form with validation

## 🎨 Customization

### Branding

- Set brand colors in `src/theme/brand.ts`
- Replace logo at `public/images/logo.webp`
- Update theme colors in `src/theme/styles.ts`

### SEO

- Update metadata in `src/app/layout.tsx`
- Modify metadata helpers in `src/app/components/common/metadata.ts`

## 📁 Project Structure

```
src/
├── app/
│   ├── (main)/           # Public pages
│   ├── dashboard/        # Protected dashboard (optional)
│   ├── api/              # API routes
│   └── components/       # App components
├── components/ui/        # Shadcn components
├── lib/                  # Utilities
└── theme/                # Theme configuration
```

## 🛠️ Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint and fix
npm run lint:fix
```

## 📝 License

MIT
