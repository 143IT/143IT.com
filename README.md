# 143IT Website

Modern, responsive website for **143IT** — a Managed Service Provider specializing in automation, cloud modernization, and AI-powered infrastructure solutions.

**Tagline:** "Automate & Dominate with AI"
**Slogan:** "Next-Gen IT Management with Cloud, Automation, and AI at the Core."

## Features

- **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS, Framer Motion
- **Premium Visual Design**:
  - Glassmorphism cards with blur and glow effects
  - Vibrant gradients (cyan, purple, emerald accents)
  - Animated gradient orbs and grid patterns
  - 3D card hover effects and floating icons
- **AI Chatbot Widget**: OpenAI-powered assistant with rate limiting and security features
- **Azure VM Manager Product Surface**: Product page, guided workflow preview, demo-request funnel, Security & Trust page, and Product Support page
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Advanced SEO**: 
  - Open Graph and Twitter Card metadata
  - Canonical URLs on all pages
  - Structured data (JSON-LD) for Organization, WebSite, BlogPosting, and Service
  - Comprehensive meta tags and semantic HTML
- **Blog Features**:
  - Real-time search functionality
  - Category filtering
  - MDX support with syntax highlighting
  - Rich content with table of contents
  - 7 high-quality technical articles
- **Integrations**:
  - **Contact Form**: Connected to n8n with validation and rate limiting
  - **Product Demo Requests**: Azure VM Manager demo requests routed through n8n with business-email and active Azure subscription qualification
  - **Newsletter**: Double opt-in support via n8n
- **Security**:
  - Content Security Policy (CSP)
  - Rate limiting on all API endpoints
  - Input sanitization and validation (Zod)
  - Secure image remote patterns
- **Dark Theme**: Premium tech aesthetic with glassmorphism and neon accents
- **Animations**: Typing effects, scroll animations, animated counters, fade-in sections, 3D hovers
- **Performance**: Optimized images, lazy loading, minimal JavaScript
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels

## Pages

### Main Pages
- **Home** (`/`) - Product and services overview with credibility-focused positioning
- **Services** (`/services`) - Comprehensive service offerings with process overview
- **Blog** (`/blog`) - Dynamic blog feed with real-time search and category filtering
- **About** (`/about`) - Company story, mission, values, and capabilities
- **Contact** (`/contact`) - Fully functional contact form with n8n integration
- **Build Story** (`/case-studies`) - Truthful Azure VM Manager build story and product rationale
- **Resources** (`/resources`) - IT guides, tools, downloads, and learning resources
- **Pricing** (`/pricing`) - Discovery-led service pricing information
- **Azure VM Manager** (`/products/azure-vm-manager`) - Product overview, guided workflow preview, pricing model, and demo request form
- **Azure VM Manager Security & Trust** (`/products/azure-vm-manager/security`) - Product security model, boundaries, security contact, and review gates
- **Azure VM Manager Support** (`/products/azure-vm-manager/support`) - Launch support model, email support channel, and SLA approval gaps
- **Privacy Policy** (`/legal/privacy`) - Privacy policy and data protection
- **Terms of Service** (`/legal/terms`) - Terms and conditions

### Service Detail Pages
- **Managed IT** (`/services/managed-it`) - 24/7 monitoring, infrastructure management
- **Cloud Modernization** (`/services/cloud-modernization`) - Azure/AWS migration, cost optimization
- **Automation & DevOps** (`/services/automation-devops`) - IaC, CI/CD, GitOps workflows
- **AI Integration** (`/services/ai-integration`) - ChatGPT, n8n, custom ML models
- **Security & Compliance** (`/services/security-compliance`) - SOC, IAM, compliance frameworks

### Blog Articles (MDX)
- **Infrastructure as Code Guide** (`/blog/infrastructure-as-code-guide-2024`)
- **Self-Healing Infrastructure** (`/blog/self-healing-infrastructure`)
- **Terraform vs Ansible** (`/blog/terraform-vs-ansible`)
- **ChatGPT + n8n Workflows** (`/blog/chatgpt-n8n-workflows`)
- **Azure Misconfigurations** (`/blog/azure-misconfigurations`)
- **CI/CD Security Best Practices** (`/blog/cicd-security-best-practices`)
- **M365 Automation** (`/blog/m365-automation-graph-api`)

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [MDX](https://mdxjs.com/) with rehype plugins
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter, Orbitron (Google Fonts)
- **Syntax Highlighting**: Highlight.js (Atom One Dark theme)
- **Validation**: [Zod](https://zod.dev/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (optional, for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/143IT.com.git
cd 143IT.com
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your keys:
```bash
# OpenAI API (for Chatbot)
OPENAI_API_KEY=your_actual_api_key_here

# n8n Webhooks (for Forms)
N8N_CONTACT_WEBHOOK=https://your-n8n-instance.com/webhook/contact
N8N_PRODUCT_DEMO_WEBHOOK=https://your-n8n-instance.com/webhook/product-demo
N8N_NEWSLETTER_WEBHOOK=https://your-n8n-instance.com/webhook/newsletter
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Quick Start

For production deployment with Docker:

```bash
# 1. Create environment file for production
cp .env.production.example .env.production

# 2. Edit .env.production with your actual values
nano .env.production
# Add your OpenAI API key and n8n webhook URLs

# 3. Build and start with Docker Compose (recommended)
docker-compose up -d

# 4. View logs
docker-compose logs -f web

### Fix Server Action Mismatch (VPS)

If you encounter `Error: Failed to find Server Action "x"` after deploying, run a clean rebuild:

```bash
cd ~/docker/143IT.com && \
  docker-compose down && \
  rm -rf .next node_modules && \
  docker-compose build --no-cache && \
  docker-compose up -d && \
  docker-compose logs -f web
```


# 5. Verify environment variables are loaded
docker exec 143it-web env | grep -E "N8N|OPENAI"

# Or build and run manually
npm run docker:build
npm run docker:run

# Stop container
npm run docker:stop
```

> **Important:** The contact form and newsletter require `N8N_CONTACT_WEBHOOK` and `N8N_NEWSLETTER_WEBHOOK` to be set in `.env.production`. See [VPS_DEPLOYMENT_CHECKLIST.md](./VPS_DEPLOYMENT_CHECKLIST.md) for detailed setup instructions.


See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment documentation.

## Development

### Project Structure

```
143IT.com/
├── app/                           # Next.js App Router pages
│   ├── api/                      # API Routes
│   │   ├── chat/                # OpenAI Chatbot API
│   │   ├── contact/             # Contact Form API
│   │   └── newsletter/          # Newsletter API
│   ├── about/                    # About page
│   ├── blog/                     # Blog pages & articles
│   ├── contact/                  # Contact page
│   ├── services/                 # Services pages
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Animated hero
│   ├── Newsletter.tsx           # Newsletter signup
│   └── ...                      # Other UI components
├── lib/                         # Utility functions
│   ├── metadata.ts             # SEO metadata generation
│   └── rate-limit.ts           # Rate limiting utility
├── public/                       # Static assets
├── tailwind.config.ts            # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.mjs               # Next.js + MDX configuration
├── middleware.ts                 # Security headers & routing
├── package.json                  # Dependencies
├── Dockerfile                    # Docker multi-stage build
└── docker-compose.yml            # Docker Compose configuration
```

### Available Scripts

**Development:**
- `npm run dev` - Start development server (recommended for local development)
- `npm run build` - Build for production
- `npm start` - Start production server ⚠️ **Note:** Not compatible with standalone output config. Use `node .next/standalone/server.js` or Docker instead
- `npm run lint` - Run ESLint

**Docker:**
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:stop` - Stop and remove container
- `npm run docker:logs` - View container logs
- `npm run docker:compose:up` - Start with Docker Compose
- `npm run docker:compose:down` - Stop Docker Compose
- `npm run docker:compose:logs` - View Compose logs

**Testing:**
- `./docker-test.sh` - Run automated Docker deployment test

### Important Notes

**Production Testing Locally:**
This project uses `output: 'standalone'` configuration for optimized Docker deployment. This means:
- ✅ **For development**: Use `npm run dev`
- ✅ **For Docker deployment**: Use `docker-compose up` or Docker scripts
- ⚠️ **For local production testing**: Use `node .next/standalone/server.js` (NOT `npm start`)

The `npm start` command will show a warning but still work. For proper production testing, use Docker.

## Design System

### Colors

- **Background**: `#0B0F14` (Dark Blue-Gray)
- **Primary Accent**: `#F59E0B` (Gold)
- **Secondary Accent**: `#3B82F6` (Blue)
- **Cyan Accent**: `#06B6D4` (Gradient highlight)
- **Purple Accent**: `#A855F7` (Gradient highlight)
- **Emerald Accent**: `#10B981` (Gradient highlight)
- **Text**: `#E0E0E0`
- **CTA Hover**: `#FBBF24` (Light Gold)

### Typography

- **Headings**: Orbitron Bold
- **Body**: Inter Regular

### Components

#### Tailwind Utility Classes
- `.btn-primary` - Primary CTA button with hover effects
- `.btn-secondary` - Secondary outlined button
- `.gradient-text` - Gradient text effect (accent-1 to accent-2)
- `.glow-effect` - Text glow effect for headings
- `.card-glow` - Card shadow glow
- `.prose-blog` - MDX article styling wrapper

## Deployment

The 143IT website supports multiple deployment options. Choose based on your infrastructure needs.

### Docker Deployment (Recommended for Control & Flexibility)

**Quick Start:**
```bash
# Automated test and deployment
./docker-test.sh

# Or manually with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f web
```

**Production Ready Features:**
- ✅ Multi-stage build (~150MB optimized image)
- ✅ Non-root user security
- ✅ Standalone Next.js output
- ✅ Alpine Linux base
- ✅ Health checks included
- ✅ Production-optimized build

**Deploy To:**
- VPS (DigitalOcean, Linode, Vultr) - $5-20/month
- AWS ECS / Azure Container Instances
- Google Cloud Run
- Kubernetes clusters
- Any Docker-compatible platform

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete Docker documentation including SSL setup, monitoring, and production best practices.

---

### Vercel (Recommended for Serverless)

**Best for:** Quick deployment, automatic scaling, zero configuration

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy with one click

**Features:** Automatic HTTPS, global CDN, preview deployments, free tier available

**Vercel CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

### Other Platforms

- **Netlify**: Works out of the box with Next.js plugin
- **Azure Static Web Apps**: Follow [Azure docs](https://azure.microsoft.com/en-us/services/app-service/static/)
- **AWS Amplify**: Compatible with Next.js
- **Railway**: Easy Docker deployment with free tier

### Deployment Comparison

| Platform | Cost | Control | Setup Time | SSL | Scaling |
|----------|------|---------|------------|-----|---------|
| Docker (VPS) | $5-20/mo | Full | 30 min | Manual | Manual |
| Vercel | Free-$20/mo | Limited | 5 min | Auto | Auto |
| AWS ECS | Pay-as-go | High | 60 min | Manual | Auto |
| Netlify | Free-$19/mo | Limited | 5 min | Auto | Auto |

## AI Chatbot Widget

The website includes an intelligent AI chatbot powered by OpenAI that appears on every page.

### Features
- **Floating Widget**: Fixed bottom-right chat button with smooth animations
- **Smart Conversations**: AI assistant with full knowledge of 143IT services
- **Multi-Purpose**:
  - Answer questions about services and pricing
  - Provide technical support guidance
  - Qualify leads by understanding business needs
  - Direct urgent issues to human support
- **Modern UI**: Dark theme matching the site aesthetic
- **Responsive**: Works perfectly on mobile and desktop
- **Persistent**: Chat history maintained during session
- **Secure**: Rate limited (10 req/min) and validated

### Configuration

1. Add your OpenAI API key to `.env.local`:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

2. (Optional) Customize the model in `app/api/chat/route.ts`:
```typescript
model: 'gpt-4-turbo-preview', // or 'gpt-3.5-turbo' for faster/cheaper responses
```

3. The chatbot automatically loads on all pages via the root layout

### Customization

The chatbot's knowledge and behavior can be customized in `app/api/chat/route.ts` by modifying the `SYSTEM_PROMPT` constant. It currently includes:
- Complete information about 143IT services
- Lead qualification questions
- Technical support guidance
- Contact information

## Integrations

### Contact Form
- **Status**: ✅ Active
- **Integration**: n8n Webhook
- **Features**: Validation, Rate Limiting, Error Handling
- **Setup**: Add `N8N_CONTACT_WEBHOOK` to `.env.local`

### Newsletter Signup
- **Status**: ✅ Active
- **Integration**: n8n Webhook
- **Features**: Double Opt-in Support, Rate Limiting
- **Setup**: Add `N8N_NEWSLETTER_WEBHOOK` to `.env.local`

## SEO

Each page includes:
- Unique meta titles and descriptions
- Open Graph tags
- Structured data ready
- Semantic HTML
- Fast Core Web Vitals

## Performance

Target metrics:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

## Completed Features

**Core Functionality:**
- [x] 32 generated routes in the latest production build
- [x] Azure VM Manager product, demo, security, and support pages
- [x] Service detail pages (5 pages)
- [x] Blog article pages with MDX support
- [x] Credibility-focused homepage with product and services positioning
- [x] Scroll-triggered animations
- [x] Syntax highlighting for code blocks
- [x] Table of contents for blog posts
- [x] Author info and related posts

**AI Integration:**
- [x] AI chatbot widget with OpenAI integration
- [x] Context-aware responses about 143IT services
- [x] Lead qualification capabilities
- [x] Technical support assistance
- [x] Floating chat interface with animations

**Deployment & DevOps:**
- [x] Docker multi-stage build
- [x] Docker Compose configuration
- [x] Automated deployment testing (docker-test.sh)
- [x] ESM module configuration (next.config.mjs)
- [x] Production-optimized build (~150MB image)
- [x] Comprehensive deployment documentation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

© 2024 143IT. All rights reserved.

## Support

For questions or support:
- **Email:** support@143it.com
- **Location:** Remote, serving the United States and Canada

**Social Media:**
- **GitHub:** [github.com/iloveyouit](https://github.com/iloveyouit)
- **LinkedIn:** [linkedin.com/in/rob-loftin-143it](https://www.linkedin.com/in/rob-loftin-143it)

---

**Built with ❤️ by 143IT**
