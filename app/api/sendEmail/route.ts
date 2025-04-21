import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* ------------------------------------------------------------------ */
/* 1. Types                                                            */
/* ------------------------------------------------------------------ */
interface QuoteRequestPayload {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;                 // keep as string → can hold “+1‑800…”
  company?: string;
  jobTitle?: string;
  extension?: string;
  representative?: string;
  projectName: string;
  quantity: number | string;      // change to number if you coerce later
  description: string;
  dueDate: string;                // ISO‑8601 date string
  fileLink?: string | null;
}

type RequiredField = keyof QuoteRequestPayload;

/* ------------------------------------------------------------------ */
/* 2. Resend client                                                    */
/* ------------------------------------------------------------------ */
const resend = new Resend(process.env.RESEND_API_KEY!);

/* ------------------------------------------------------------------ */
/* 3. Helpers                                                          */
/* ------------------------------------------------------------------ */
function isMissing(value: unknown): boolean {
  return value === undefined || value === null || value === "";
}

/* ------------------------------------------------------------------ */
/* 4. POST /api/sendEmail                                              */
/* ------------------------------------------------------------------ */
export async function POST(req: NextRequest) {
  /* ---------- 4.1  Parse JSON safely ---------- */
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

  console.log("🔎  Received payload:", body);

  /* ---------- 4.2  Validate required fields ---------- */
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

  /* ---------- 4.3  Build the e‑mail body ---------- */
  const html = `
<pre>
📬  New Quote Request for ${body.representative || "No preference"}
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

  /* ---------- 4.4  Send via Resend ---------- */
  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM!, // e.g. "MSE Printing <info@mseprinting.com>"
      to: process.env.RESEND_TO!,     // e.g. "info@mseprinting.com"
      subject: `New Quote Request: ${body.projectName}`,
      html,
    });

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

/* ------------------------------------------------------------------ */
/* 5. OPTIONS  (CORS pre‑flight)                                       */
/* ------------------------------------------------------------------ */
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
