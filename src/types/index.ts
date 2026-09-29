export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  tagline: string;
  badge: string; // e.g. "REAL PROJECT" or "APEXGEN CONCEPT"
  isReal?: boolean;
  projectType?: string; // e.g. "WEBSITE DESIGN & DEVELOPMENT", "DIGITAL EXPERIENCE", "BUSINESS WEBSITE"
  description: string;
  overview: string;
  challenge?: string;
  creativeDirection?: string;
  designApproach?: string;
  solution?: string;
  features: string[];
  designSystem?: {
    typography: string;
    palette: string[];
    mood: string;
  };
  technologies?: string[];
  expectedOutcomes?: string[];
  services: string[];
  accentColor: string;
  year: string;
  liveUrl?: string;
  heroImage: string;
  galleryImages: string[];
  metrics?: ProjectMetric[];
}

export interface ServicePillar {
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  subDisciplines: string[];
  techPills: string[];
  deliverables: string[];
  iconName: string;
  featuredQuote: string;
}

export interface WhyReason {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  headline: string;
  description: string;
  keyServices: string[];
  typicalOutcomes: string[];
  accentColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  idealFor: string;
  revisions: string;
  supportDuration: string;
  timeline: string;
  ctaText: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  keyTakeaway: string;
  content: string[];
}

export interface InquiryFormData {
  name: string;
  businessName: string;
  email: string;
  whatsapp: string;
  businessType: string;
  currentWebsite: string;
  serviceNeeded: string[];
  budgetRange: string;
  message: string;
}
