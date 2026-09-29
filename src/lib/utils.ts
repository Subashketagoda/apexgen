import { siteConfig } from '@/data/siteConfig';

export function cn(...classes: (string | boolean | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatWhatsAppUrl(numberOrMessage?: string, maybeMessage?: string): string {
  let rawNumber = siteConfig.contact.whatsappNumber;
  let message = numberOrMessage;

  // Support both formatWhatsAppUrl(msg) and formatWhatsAppUrl(num, msg)
  if (maybeMessage !== undefined) {
    rawNumber = numberOrMessage || siteConfig.contact.whatsappNumber;
    message = maybeMessage;
  }

  // Clean non-digit characters for international standard
  let cleaned = rawNumber.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    cleaned = '94' + cleaned.substring(1);
  }
  const defaultMessage = `Hello ApexGen Studio, I'm interested in starting a website project.`;
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${cleaned}?text=${text}`;
}

export function formatProjectWhatsAppUrl(projectTitle: string): string {
  const text = `Hi ApexGen, I'm inspired by the ${projectTitle} showcase and would like to build a similar experience for my business.`;
  return formatWhatsAppUrl(text);
}

export function formatPlanWhatsAppUrl(planName: string, price: string): string {
  const text = `Hi ApexGen, I'm interested in the ${planName} package (${price}) for my business website. Let's discuss requirements.`;
  return formatWhatsAppUrl(text);
}
