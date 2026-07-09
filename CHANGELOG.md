# Changelog

All notable changes to the 143IT website will be documented in this file.

## [1.4.0] - 2024-12-13

### Added
- **Visual Redesign**: Complete premium tech aesthetic overhaul
  - Glassmorphism cards with blur and glow effects (`glass-card` utility)
  - Vibrant gradient accents using cyan, purple, and emerald colors
  - Grid background patterns and animated gradient orbs
  - Shimmer text effects and neon shadows
  - New `ParticleGrid.tsx` component for interactive backgrounds

- **Enhanced Animations**:
  - 3D card hover effects with perspective transforms
  - Staggered reveal animations using Framer Motion
  - Floating tech icons with continuous animations
  - Animated nav link underlines and logo hover effects
  - Slide-in mobile menu with staggered items

- **Design Tokens**:
  - New top-level colors: `cyan`, `purple`, `emerald` for gradient support
  - Extended box shadows: `glow-cyan`, `glow-purple`, `neon`
  - New keyframe animations: `pulse-glow`, `shimmer`, `float-slow`, `gradient-x`

### Changed
- **Hero Section**: Redesigned with gradient orbs, floating icons, glassmorphism stat cards, bolder typography
- **Header**: Added glassmorphism navbar, animated logo, underline link animations
- **Pillars**: Added 3D hover effects, gradient-colored titles, shimmer icon backgrounds
- **FeaturedServices**: Gradient icon backgrounds, hover lift, animated arrows
- **Footer**: Added gradient top border, animated social icons, grid background
- **About Page**: Animated hero, glassmorphism story card, gradient value cards
- **Contact Page**: Glassmorphism form, animated contact info cards, focus glow inputs

### Files Added
- `components/ParticleGrid.tsx` - Interactive particle canvas background

### Files Modified
- `tailwind.config.ts` - Extended colors, animations, shadows
- `app/globals.css` - Glassmorphism utilities, gradient classes
- `components/Hero.tsx`, `Header.tsx`, `Pillars.tsx`, `FeaturedServices.tsx`, `Footer.tsx`
- `app/about/page.tsx`, `app/contact/page.tsx`

## [1.3.1] - 2024-11-30

### Fixed
- **Docker Environment Variables**: Fixed contact form and newsletter failures in Docker deployments
  - Updated `docker-compose.yml` to load environment variables from `.env.production` file
  - Added `env_file` directive to automatically read `.env.production`
  - Explicitly defined required environment variables: `OPENAI_API_KEY`, `N8N_CONTACT_WEBHOOK`, `N8N_NEWSLETTER_WEBHOOK`
  - Contact form now properly receives webhook URLs in production Docker containers

### Added
- **Deployment Templates**:
  - `.env.production.example` - Template file for production environment variables
  - `VPS_DEPLOYMENT_CHECKLIST.md` - Comprehensive step-by-step VPS deployment guide with:
    - Environment variable configuration instructions
    - SSL/TLS setup with nginx and Caddy
    - Contact form testing procedures
    - Troubleshooting section
    - Security recommendations

### Changed
- **Documentation Updates**:
  - `DEPLOYMENT.md` - Enhanced Environment Variables section with:
    - Detailed table of required variables
    - Separate instructions for development vs production
    - Docker-specific configuration examples
    - Security best practices
  - `DEPLOYMENT.md` - Updated VPS Docker deployment section with environment setup steps
  - `README.md` - Updated Docker Quick Start section with `.env.production` setup instructions
  - Added important notes about required webhook URLs for contact form functionality

### Technical Details
- Environment variables are now properly passed to Docker containers at runtime
- `.env.production` file is gitignored (security best practice)
- Docker Compose reads variables using `${VAR_NAME}` syntax from `.env.production`
- Contact form API validates webhook URL presence and returns appropriate errors

### Files Added
- `.env.production.example` - Production environment template
- `VPS_DEPLOYMENT_CHECKLIST.md` - VPS deployment guide

### Files Modified
- `docker-compose.yml` - Added environment variable support
- `DEPLOYMENT.md` - Enhanced documentation
- `README.md` - Updated Docker Quick Start section

## [1.3.0] - 2025-01-XX


### Added
- **SEO Enhancements**:
  - Comprehensive metadata utility (`lib/metadata.ts`) for generating Open Graph, Twitter Cards, and canonical URLs
  - Open Graph images support across all pages
  - Canonical URLs for all pages to prevent duplicate content issues
  - Enhanced structured data (JSON-LD) support:
    - BlogPosting schema for blog articles
    - Service schema for service pages
    - Improved Organization and WebSite schemas
  - Twitter Card metadata for better social media sharing
  - Blog layout component (`app/blog/layout.tsx`) for proper metadata handling

- **Blog Functionality**:
  - Real-time search functionality on blog page
    - Search across titles, excerpts, and categories
    - Instant filtering as you type
    - Proper ARIA labels for accessibility
  - Category filtering system
    - Clickable category buttons with active state
    - "All Posts" option to clear filters
    - Combined search and category filtering
  - Enhanced UX features:
    - Result count display when filters are active
    - "Clear filters" button
    - Empty state message when no results found
    - Featured post hidden when filters are active
    - Improved accessibility with proper ARIA attributes

### Changed
- **Blog Page** (`app/blog/page.tsx`):
  - Converted to client component for interactive search/filter functionality
  - Improved state management with React hooks
  - Enhanced user experience with real-time filtering

- **BlogArticleLayout Component**:
  - Added BlogPosting structured data generation
  - Added support for `href` and `excerpt` props for better SEO
  - Automatic JSON-LD schema generation for blog posts

- **StructuredData Component**:
  - Enhanced to support BlogPosting and Service types
  - Improved base URL handling for consistency
  - Better schema.org compliance

- **Service Pages**:
  - Updated Managed IT page with Service structured data
  - Integrated new metadata utility for canonical URLs and Open Graph

### Technical Details
- Created reusable metadata utility functions
- Improved SEO best practices implementation
- Enhanced accessibility with proper ARIA labels
- Better code organization with utility functions

### Files Added
- `lib/metadata.ts` - Metadata generation utility
- `app/blog/layout.tsx` - Blog layout for metadata handling

### Files Modified
- `app/blog/page.tsx` - Added search and filter functionality
- `components/BlogArticleLayout.tsx` - Added structured data support
- `components/StructuredData.tsx` - Enhanced with BlogPosting and Service types
- `app/services/managed-it/page.tsx` - Added Service structured data
- `app/blog/infrastructure-as-code-guide-2024/page.mdx` - Added href and excerpt props
- `app/blog/self-healing-infrastructure/page.mdx` - Added href and excerpt props

## [1.2.0] - 2025-11-08

### Added
- **AI Chatbot Widget**: OpenAI-powered chatbot for service inquiries and lead qualification
  - Floating chat button with smooth animations (Framer Motion)
  - Intelligent responses about 143IT services
  - Multi-purpose: service questions, technical support, lead qualification
  - Dark theme UI matching site aesthetic
  - Mobile responsive design
  - Session-based chat history
  - Configurable via environment variables
  - OpenAI GPT-4 Turbo integration

- **Dependencies**:
  - Added `openai` package (v6.8.1) for AI integration
  - Environment variable configuration (.env.local)

- **Components**:
  - `components/ChatBot.tsx` - Main chatbot UI component
  - `app/api/chat/route.ts` - OpenAI API integration endpoint
  - `.env.example` - Environment configuration template

### Changed
- **README.md**: Added comprehensive AI Chatbot Widget section
- **Features List**: Moved AI chatbot from future enhancements to completed features
- **Installation Guide**: Added OpenAI API key setup instructions

## [1.1.1] - 2025-01-XX

### Added
- **New Pages**:
  - Resources page (`/resources`) - IT guides, tools, downloads, and learning resources
  - Privacy Policy page (`/legal/privacy`) - Complete privacy policy with GDPR compliance
  - Terms of Service page (`/legal/terms`) - Terms and conditions for website usage

### Changed
- **Brand Identity**:
  - Updated tagline from "Automate. Evolve. Dominate." to "Automate & Dominate with AI"
  - Updated across all pages, components, and documentation

- **Contact Information**:
  - Email: Changed from `hello@143it.com` to `support@143it.com`
  - Phone: Updated to `+1 (720) 292-6098`
  - Location: Updated to "Remote-First, Serving USA and CA"

- **Social Media Links**:
  - GitHub: Added link to https://github.com/iloveyouit
  - LinkedIn: Added link to https://www.linkedin.com/in/rob-loftin-143it
  - Added proper `target="_blank"` and `rel="noopener noreferrer"` for security
  - Added `aria-label` attributes for accessibility

### Fixed
- Fixed broken footer links (404 errors) by creating missing pages
- Improved accessibility with proper ARIA labels on social media links

## [1.1.0] - 2025-10-20

### Added
- **Docker Support**: Complete containerization with multi-stage Dockerfile
  - Optimized production build (~150MB Alpine Linux image)
  - Docker Compose configuration for easy deployment
  - Standalone Next.js output for minimal dependencies
  - Non-root user security (nextjs:nodejs)
  - Health check support

- **Deployment Infrastructure**:
  - `Dockerfile` - Multi-stage build (deps, builder, runner)
  - `docker-compose.yml` - Single-command orchestration
  - `.dockerignore` - Optimized build context
  - `docker-test.sh` - Automated deployment testing script
  - `public/` directory with .gitkeep

- **Documentation**:
  - `DEPLOYMENT.md` - Comprehensive deployment guide (400+ lines)
    - Docker deployment (VPS, AWS ECS, Azure, Kubernetes)
    - Vercel/Netlify deployment
    - SSL/TLS configuration (nginx + Let's Encrypt, Caddy)
    - Production monitoring and troubleshooting
  - `DOCKER_TEST.md` - Docker testing guide
  - `CHANGELOG.md` - This file

- **npm Scripts**:
  - `docker:build` - Build Docker image
  - `docker:run` - Run container
  - `docker:stop` - Stop and remove container
  - `docker:logs` - View container logs
  - `docker:compose:up` - Start with Docker Compose
  - `docker:compose:down` - Stop Docker Compose
  - `docker:compose:logs` - View Compose logs

### Changed
- **Configuration**: Migrated from CommonJS to ESM
  - Renamed `next.config.js` → `next.config.mjs`
  - Updated to use ES6 imports for rehype plugins
  - Fixes compatibility with rehype v6+ (pure ESM packages)
  - Added `output: 'standalone'` for Docker optimization

- **Documentation Updates**:
  - `PROJECT_STATUS.md` - Updated to v1.1.0, added Docker section
  - `README.md` - Added Docker deployment section, deployment comparison table
  - `QUICKSTART.md` - Added Docker quick start guide
  - `package.json` - Updated version to 1.1.0, added Docker description

- **Build Performance**:
  - Production build time: ~14 seconds
  - Docker image size: ~150MB (down from potential 1GB+ without optimization)
  - Then-current 15-page site statically pre-rendered
  - Bundle size: 87.2 kB shared JS, 42.9 kB home page

### Fixed
- ESM module compatibility issues with rehype plugins
- Docker build errors related to missing public directory
- Production build configuration for containerized deployment

### Technical Details

**Build Statistics:**
```
Route (app)                                  Size     First Load JS
┌ ○ /                                        42.9 kB         139 kB
├ ○ /_not-found                              873 B          88.1 kB
├ ○ /about                                   192 B          96.1 kB
├ ○ /blog                                    192 B          96.1 kB
├ ○ /blog/infrastructure-as-code-guide-2024  1.27 kB        97.2 kB
├ ○ /blog/self-healing-infrastructure        1.27 kB        97.2 kB
├ ○ /contact                                 2.87 kB        90.1 kB
├ ○ /services                                192 B          96.1 kB
├ ○ /services/ai-integration                 192 B          96.1 kB
├ ○ /services/automation-devops              192 B          96.1 kB
├ ○ /services/cloud-modernization            192 B          96.1 kB
├ ○ /services/managed-it                     192 B          96.1 kB
└ ○ /services/security-compliance            192 B          96.1 kB
+ First Load JS shared by all                87.2 kB
```

**Deployment Tested:**
- ✅ Local Docker Desktop (macOS)
- ✅ Production build successful
- ✅ Then-current 15-page site accessible
- ✅ HTTP endpoint responsive
- ✅ No console errors

## [1.0.0] - 2024-03-15

### Added
- Initial release with 15 complete pages
- Next.js 14 with App Router
- TypeScript for type safety
- TailwindCSS for styling
- Framer Motion animations
- MDX blog system with syntax highlighting
- 5 service detail pages
- 2 sample blog articles
- Responsive mobile-first design
- SEO optimization

### Features
- Animated hero with typing effect
- Scroll-triggered fade-in animations
- Animated stat counters
- Table of contents for blog posts
- Author info and related posts components
- Dark theme with neon blue accents (#00E0FF)

---

**Built with ❤️ by 143IT** | Automate & Dominate with AI
