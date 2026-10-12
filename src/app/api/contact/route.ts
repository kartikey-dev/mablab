import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name;
    const email = body.email;
    const phone = body.phone || body.number || '';
    const company = body.company || body.companyName || '';
    const calendly = body.calendly || body.calendlyLink || '';

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Target email recipient specified by user: hello@mablab.in
    const recipientEmail = 'hello@mablab.in';

    // Log the submission payload (in production, integrate with nodemailer, Resend, or SendGrid API)
    console.log(`[Mablab Contact Form] New Inquiry received for ${recipientEmail}:`, {
      recipient: recipientEmail,
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
