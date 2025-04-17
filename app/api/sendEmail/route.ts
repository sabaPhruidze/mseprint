// app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"; // Changed to v3 SDK

// Initialize SES client with modern SDK
const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Add validation for required fields
    const requiredFields = ['name', 'email', 'projectName', 'quantity', 'description', 'dueDate'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Construct HTML email version
    const htmlBody = `
      <html>
        <body>
          <h1>New Quote Request</h1>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
          <p><strong>Project Name:</strong> ${body.projectName}</p>
          <p><strong>Quantity:</strong> ${body.quantity}</p>
          <p><strong>Due Date:</strong> ${body.dueDate}</p>
          <h2>Description:</h2>
          <p>${body.description.replace(/\n/g, '<br>')}</p>
          ${body.fileLink ? `<p><strong>File:</strong> <a href="${body.fileLink}">Download</a></p>` : ''}
        </body>
      </html>
    `;

    // SES parameters with proper configuration
    const params = {
      Source: process.env.SES_FROM_EMAIL!, // Use env variable
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!], // Use env variable
      },
      Message: {
        Subject: { Data: `New Quote Request: ${body.projectName}` },
        Body: {
          Html: { Data: htmlBody },
          Text: { Data: `Text version: ${JSON.stringify(body, null, 2)}` }
        }
      },
      ReplyToAddresses: [body.email], // Add reply-to address
    };

    // Send using modern SDK command
    const result = await sesClient.send(new SendEmailCommand(params));
    
    return NextResponse.json(
      { message: "Email sent successfully", result },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("SES Error Details:", {
      message: error.message,
      code: error.name,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        message: "Failed to send email",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
        code: error.name
      },
      { status: 500 }
    );
  }
}

// Add CORS support
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}