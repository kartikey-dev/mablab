import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, calendly } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Target email recipient specified by user: hello@kumarkartikey.com
    const recipientEmail = 'hello@kumarkartikey.com';

    // Log the submission payload (in production, integrate with nodemailer, Resend, or SendGrid API)
    console.log(`[Mablab Contact Form] New Inquiry received for ${recipientEmail}:`, {
      name,
      email,
      phone,
      company,
      calendly,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully! Our lab team will reach out within 24 hours.',
    });
  } catch (error) {
    console.error('[Mablab Contact Form API Error]:', error);
    return NextResponse.json(
      { error: 'Internal server error processing request.' },
      { status: 500 }
    );
  }
}
