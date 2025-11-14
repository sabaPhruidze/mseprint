import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface QuoteRequestPayload {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  extension?: string;
  representative?: string;
  projectName: string;
  quantity: number | string;
  description: string;
  dueDate: string;
  fileLink?: string | null;
}

type RequiredField = keyof QuoteRequestPayload;

const resend = new Resend(process.env.RESEND_API_KEY!);

function isMissing(value: unknown): boolean {
  return value === undefined || value === null || value === "";
}

export async function POST(req: NextRequest) {
  let body: QuoteRequestPayload;
  try {
    body = (await req.json()) as QuoteRequestPayload;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("❌  JSON parse error:", message);
    return NextResponse.json(
      { error: "Invalid JSON payload – check fetch body and headers" },
      { status: 400 }
    );
  }

  // 🔍 Log the raw payload coming from the client
  console.log("🔎  Received payload:", JSON.stringify(body, null, 2));
  console.log("🔎  fileLink value:", JSON.stringify(body.fileLink));

  const requiredFields: RequiredField[] = [
    "firstname",
    "lastname",
    "email",
    "projectName",
    "quantity",
    "description",
    "dueDate",
  ];

  for (const field of requiredFields) {
    if (isMissing(body[field])) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const html = `
<pre>
📬  New Order Placed : ${body.representative || "No preference"}
👤 Name: ${body.firstname} ${body.lastname}
📧 Email: ${body.email}
📞 Phone: ${body.phone || "N/A"}
🏢 Company: ${body.company || "N/A"}
🌐 Job Title: ${body.jobTitle || "N/A"}
🏠 Extension: ${body.extension || "N/A"}
📌 Representative: ${body.representative || "No preference"}
📄 Project Name: ${body.projectName}
🔢 Quantity: ${body.quantity}
📝 Description: ${body.description}
📅 Due Date: ${body.dueDate}
📎 File: ${body.fileLink || "None"}
</pre>`;

  const emailPayload = {
    from: process.env.RESEND_FROM!, // "MSE Printing <info@mseprinting.com>"
    to: process.env.RESEND_TO!,     // "info@mseprinting.com"
    subject: `New Order Placed: ${body.representative || "No preference"}`,
    html,
  };

  // 🔍 Log exactly what you send to Resend
  console.log(
    "📤 About to send email via Resend:",
    JSON.stringify(
      {
        ...emailPayload,
        // optional: only preview first part of html so logs aren’t huge
        htmlPreview: html.slice(0, 400),
      },
      null,
      2
    )
  );

  try {
    const result = await resend.emails.send(emailPayload);
    console.log("✅ Resend response:", result);
    return NextResponse.json({ ok: true, result }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("❌  Resend error:", message);
    return NextResponse.json(
      { error: "Resend failed – check RESEND_API_KEY & domain verification" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
