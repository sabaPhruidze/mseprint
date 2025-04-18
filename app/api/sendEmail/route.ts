import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  /* ---------- 1. Parse JSON safely ---------- */
  let body: any;
  try {
    body = await req.json();
  } catch (err: any) {
    console.error('❌  JSON parse error:', err.message);
    return NextResponse.json(
      { error: 'Invalid JSON payload – check fetch body and headers' },
      { status: 400 }
    );
  }

  console.log('🔎  Received payload:', body);

  /* ---------- 2. Validate required fields ---------- */
  const requiredFields = [
    'name',
    'email',
    'projectName',
    'quantity',
    'description',
    'dueDate'
  ];

  for (const field of requiredFields) {
    if (body[field] === undefined || body[field] === null || body[field] === '') {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  /* ---------- 3. Build the e‑mail body ---------- */
  const html = `
<pre>
📬  New Quote Request
👤 Name: ${body.name}
📧 Email: ${body.email}
📞 Phone: ${body.phone || 'N/A'}
🏢 Company: ${body.company || 'N/A'}
🌐 Website: ${body.website || 'N/A'}
🏠 Address: ${body.address || 'N/A'}
📌 Representative: ${body.representative || 'No preference'}
📄 Project Name: ${body.projectName}
🔢 Quantity: ${body.quantity}
📝 Description: ${body.description}
📅 Due Date: ${body.dueDate}
📎 File: ${body.fileLink || 'None'}
</pre>`;

  /* ---------- 4. Send via Resend ---------- */
  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM!,   // "MSE Printing <info@mseprinting.com>"
      to:   process.env.RESEND_TO!,     // info@mseprinting.com  (or quotes@…)
      subject: `New Quote Request: ${body.projectName}`,
      html
    });

    return NextResponse.json({ ok: true, result }, { status: 200 });
  } catch (err: any) {
    console.error('❌  Resend error:', err);
    return NextResponse.json(
      { error: 'Resend failed – check RESEND_API_KEY & domain verification' },
      { status: 500 }
    );
  }
}

/* ---------- 5. CORS pre‑flight ---------- */
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
