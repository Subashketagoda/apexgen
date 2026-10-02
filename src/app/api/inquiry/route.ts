import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      whatsapp,
      businessName,
      requiredService,
      budgetRange,
      projectTimeline,
      projectDescription,
      referenceWebsite,
      _hp, // Honeypot field
    } = body;

    // Spam honeypot trap: if bot filled this hidden field, fail gracefully without processing
    if (_hp) {
      console.warn('[SPAM BOT DETECTED & BLOCKED]:', { email, name });
      return NextResponse.json({ success: true, message: 'Inquiry received.' }, { status: 200 });
    }

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter your name.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(String(email).trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!projectDescription || typeof projectDescription !== 'string' || projectDescription.trim().length < 5) {
      return NextResponse.json(
        { error: 'Please provide a brief description of your project requirements.' },
        { status: 400 }
      );
    }

    const leadId = `AG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const inquiryRecord = {
      id: leadId,
      timestamp: new Date().toISOString(),
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : '',
      whatsapp: whatsapp ? String(whatsapp).trim() : (phone ? String(phone).trim() : ''),
      businessName: businessName ? String(businessName).trim() : '',
      requiredService: String(requiredService || 'Web Design & Development'),
      budgetRange: String(budgetRange || 'Flexible'),
      projectTimeline: String(projectTimeline || 'Standard (2–4 weeks)'),
      projectDescription: String(projectDescription).trim(),
      referenceWebsite: referenceWebsite ? String(referenceWebsite).trim() : '',
      status: 'pending',
    };

    // Server telemetry logging (clean, structured format)
    console.log(`[APEXGEN LEAD CAPTURED ${inquiryRecord.id}]:`, JSON.stringify(inquiryRecord, null, 2));

    // Optional External Webhook Forwarding (Discord, Slack, Make.com, Zapier)
    if (process.env.LEAD_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEAD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **New ApexGen Studio Lead [${inquiryRecord.id}]**\n` +
              `**Client:** ${inquiryRecord.name} (${inquiryRecord.businessName || 'Independent'})\n` +
              `**Email:** ${inquiryRecord.email} | **WhatsApp:** ${inquiryRecord.whatsapp || 'N/A'}\n` +
              `**Service:** ${inquiryRecord.requiredService} | **Budget:** ${inquiryRecord.budgetRange}\n` +
              `**Timeline:** ${inquiryRecord.projectTimeline}\n` +
              `**Description:** ${inquiryRecord.projectDescription}\n` +
              `**Ref:** ${inquiryRecord.referenceWebsite || 'None'}`,
          }),
        });
      } catch (webhookErr) {
        console.error('[WEBHOOK ERROR]:', webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. Our studio creative director will review your brief within 24 hours.',
        leadId: inquiryRecord.id,
        record: {
          id: inquiryRecord.id,
          name: inquiryRecord.name,
          service: inquiryRecord.requiredService,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please message our studio directly via WhatsApp.' },
      { status: 500 }
    );
  }
}
