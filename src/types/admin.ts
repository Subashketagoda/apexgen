export type LeadStatus = 'new' | 'contacted' | 'proposal_sent' | 'won' | 'lost';
export type ProjectStatus = 'discovery' | 'design' | 'development' | 'review' | 'launched';
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue';

export interface LeadRecord {
  id: string;
  createdAt: string;
  name: string;
  businessName: string;
  email: string;
  whatsapp: string;
  businessType: string;
  currentWebsite?: string;
  servicesNeeded: string[];
  budgetRange: string;
  message: string;
  status: LeadStatus;
  notes?: string;
}

export interface ClientRecord {
  id: string;
  createdAt: string;
  companyName: string;
  contactPerson: string;
  email: string;
  whatsapp: string;
  portalToken?: string;
  activeProjectsCount: number;
}

export interface ProjectRecord {
  id: string;
  clientId: string;
  clientName: string;
  projectName: string;
  status: ProjectStatus;
  startDate: string;
  targetLaunchDate: string;
  stagingUrl?: string;
  productionUrl?: string;
  totalInvestmentLKR: number;
}

export interface ProposalRecord {
  id: string;
  leadId: string;
  clientName: string;
  title: string;
  scopeSummary: string;
  deliverables: string[];
  timelineWeeks: number;
  totalQuoteLKR: number;
  validUntil: string;
  isAccepted: boolean;
}

export interface InvoiceRecord {
  id: string;
  projectId: string;
  clientName: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  amountLKR: number;
  status: InvoiceStatus;
  items: { description: string; amount: number }[];
}
