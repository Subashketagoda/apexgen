# APEXGEN — Digital Studio Web Platform

> **“BUILD DIGITAL EXPERIENCES THAT PEOPLE REMEMBER.”**  
> Production-ready agency website for **APEXGEN** (`https://apexgen.online`), an independent digital studio engineering fast, bespoke websites for modern businesses using AI-assisted workflows, high-quality UX/UI, animation, and conversion-focused systems.

---

## 🚀 Tech Stack

- **Framework**: Next.js (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4)
- **Animation**: Framer Motion
- **Icons**: Lucide Icons
- **Celebration Effects**: Canvas Confetti
- **SEO**: Structured Data (JSON-LD Organization & WebSite schemas), Dynamic Edge OpenGraph (`/opengraph-image`), Dynamic Edge Favicon (`/icon`), Automated `sitemap.xml` & `robots.txt`
- **Deployment**: Vercel Global Edge Network Ready

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Set your official WhatsApp business phone number (with country code, e.g. `+94771234567` for Sri Lanka):
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+94789656969
NEXT_PUBLIC_SITE_URL=https://apexgen.online
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
apexgen/
├── src/
│   ├── app/
│   │   ├── admin/             # Future internal control plane shell (/admin)
│   │   ├── api/
│   │   │   └── inquiry/       # Lead intake API route (/api/inquiry)
│   │   ├── globals.css        # Studio dark theme & surface tokens
│   │   ├── icon.tsx           # Dynamic Edge Favicon (32x32)
│   │   ├── layout.tsx         # Root layout with meta tags & Schema.org JSON-LD
│   │   ├── opengraph-image.tsx# Dynamic Edge OpenGraph social card (1200x630)
│   │   ├── page.tsx           # Single-page studio experience orchestrator
│   │   ├── robots.ts          # Automated robots.txt
│   │   └── sitemap.ts         # Automated sitemap generator
│   ├── components/
│   │   ├── projects/
│   │   │   └── ProjectDetailModal.tsx # Full case study drawer modal
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx       # Studio philosophy & DESIGN+CODE+AI diagram
│   │   │   ├── CtaBannerSection.tsx   # Dramatic full-width CTA
│   │   │   ├── HeroSection.tsx        # Master headline, CTAs & credibility pills
│   │   │   ├── IndustriesSection.tsx  # 10 Modern industry specializations
│   │   │   ├── InquiryFormSection.tsx # Interactive project intake form
│   │   │   ├── MarqueeSection.tsx     # Infinite ticker marquee
│   │   │   ├── PartnershipSection.tsx # Founding cohort launch statement
│   │   │   ├── PricingSection.tsx     # 3 Transparent LKR pricing tiers
│   │   │   ├── ProcessSection.tsx     # 5-step sprint timeline
│   │   │   ├── SelectedWorkSection.tsx# Interactive project showcase cards
│   │   │   ├── ServicesSection.tsx    # "What We Build" capabilities
│   │   │   └── WhyApexGenSection.tsx  # 6 Core engineering principles
│   │   └── ui/
│   │       ├── CinematicLoader.tsx    # 0-100% minimal intro counter
│   │       ├── CustomCursor.tsx       # Desktop custom cursor with "VIEW PROJECT"
│   │       ├── Footer.tsx             # Studio directory & socials
│   │       ├── HeroBackground.tsx     # Ambient canvas lighting & grid interaction
│   │       ├── Navbar.tsx             # Sticky translucent bar + mobile menu
│   │       └── WhatsAppButton.tsx     # Floating WhatsApp contact trigger
│   ├── data/
│   │   └── siteConfig.ts      # Centralized studio content, projects, pricing & copy
│   ├── lib/
│   │   └── utils.ts           # Styling & dynamic WhatsApp link formatters
│   └── types/
│       ├── admin.ts           # Schemas for leads, projects, clients, invoices, proposals
│       └── index.ts           # Core UI and showcase types
```

---

## 🎨 Visual Direction & Standards

- **Obsidian Dark Studio Canvas**: `#070709` background with subtle `#0e0e13` surfaces and `rgba(255,255,255,0.08)` fine borders.
- **Micro-Interactions**: Custom desktop cursor expanding over interactive links and displaying an animated circular badge over project cards; automatically disabled on touch devices.
- **Cinematic Loading**: Clean 0–100% progress counter with smooth reveal.
- **Zero Fake Reviews**: Launch transparency with founding client cohort proposition.
- **Transparent Starting Pricing**: Starter (LKR 25K+), Business (LKR 50K+), Premium (LKR 100K+).

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project in the [Vercel Dashboard](https://vercel.com/new).
3. Add the environment variable:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your studio WhatsApp number (e.g., `+94771234567`)
   - `NEXT_PUBLIC_SITE_URL`: `https://apexgen.online`
4. Click **Deploy**. Vercel will build and distribute the site globally with zero configuration needed.
