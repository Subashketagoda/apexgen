// ApexGen 2.0 Studio Analytics & Telemetry Layer
// Integrates with Google Analytics 4 (GA4) and tracks high-intent conversion actions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Log page views to Google Analytics 4
 */
export function pageView(url: string) {
  if (typeof window === 'undefined' || !window.gtag || !GA_TRACKING_ID) return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
}

/**
 * Dispatch generic telemetry event safely
 */
export function trackEvent(
  action: string,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === 'undefined') return;

  // Filter out undefined params
  const cleanParams = Object.entries(params).reduce<Record<string, unknown>>(
    (acc, [key, val]) => {
      if (val !== undefined) acc[key] = val;
      return acc;
    },
    {}
  );

  if (window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, cleanParams);
  }

  // Developer logging in non-production
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Telemetry] ${action}:`, cleanParams);
  }
}

/**
 * High-intent conversion: WhatsApp button clicked
 */
export function trackWhatsAppClick(location: string, details?: string) {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: location,
    details,
  });
}

/**
 * High-intent conversion: Multi-step inquiry form completed
 */
export function trackInquirySubmit(service?: string, budget?: string) {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    service_requested: service,
    budget_range: budget,
  });
}

/**
 * High-intent conversion: Direct email inquiry clicked
 */
export function trackEmailClick(emailLocation: string) {
  trackEvent('email_click', {
    event_category: 'contact',
    event_label: emailLocation,
  });
}

/**
 * Engagement: Portfolio case study clicked or viewed
 */
export function trackPortfolioView(projectSlug: string) {
  trackEvent('select_content', {
    content_type: 'portfolio_project',
    item_id: projectSlug,
  });
}

/**
 * Engagement: Service capability page viewed
 */
export function trackServiceView(serviceSlug: string) {
  trackEvent('view_item', {
    content_type: 'service_page',
    item_id: serviceSlug,
  });
}

/**
 * High-intent conversion: Start a Project CTA clicked
 */
export function trackStartProjectClick(location: string) {
  trackEvent('start_project_click', {
    event_category: 'engagement',
    event_label: location,
  });
}

/**
 * Conversion intent: Inquiry form interaction initiated
 */
export function trackFormStart(formName: string = 'start_a_project') {
  trackEvent('form_start', {
    event_category: 'engagement',
    form_name: formName,
  });
}

