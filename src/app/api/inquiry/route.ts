import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      businessName,
      email,
      whatsapp,
      businessType,
      currentWebsite,
      serviceNeeded,
      budgetRange,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: 'Name, email, and WhatsApp number are required fields.' },
        { status: 400 }
      );
    }

    const inquiryRecord = {
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString(),
      name: String(name).trim(),
      businessName: String(businessName || '').trim(),
      email: String(email).trim().toLowerCase(),
      whatsapp: String(whatsapp).trim(),
      businessType: String(businessType || 'Not specified'),
      currentWebsite: String(currentWebsite || ''),
      serviceNeeded: Array.isArray(serviceNeeded) ? serviceNeeded : [],
      budgetRange: String(budgetRange || 'Not specified'),
      message: String(message || '').trim(),
      status: 'new',
    };

    // Log the inquiry for server logs (can be piped to Datadog/Vercel Logs)
    console.log('[APEXGEN INQUIRY RECEIVED]:', JSON.stringify(inquiryRecord, null, 2));

    /*
     * FUTURE EXTENSIBILITY NOTE:
     * This endpoint is architected to seamlessly forward leads to your chosen backend:
     *
     * 1. Supabase:
     *    const { data, error } = await supabase.from('leads').insert([inquiryRecord]);
     *
     * 2. Firebase / Firestore:
     *    await adminDb.collection('leads').add(inquiryRecord);
     *
     * 3. Email Notification via Resend:
     *    await resend.emails.send({ ... });
     *
     * 4. Slack / Discord Webhook:
     *    await fetch(process.env.LEAD_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(inquiryRecord) });
     */

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. Our studio team will reach out within 24 hours.',
        leadId: inquiryRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please connect via WhatsApp or email directly.' },
      { status: 500 }
    );
  }
}
