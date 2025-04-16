// app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.AWS_REGION!,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name, email, phone, company, website, address,
      projectName, quantity, description, dueDate,
      representative, fileLink,
    } = body;

    const message = `
📬 New Quote Request:

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
🏢 Company: ${company}
🌐 Website: ${website}
🏠 Address: ${address}
📌 Representative: ${representative}
📄 Project Name: ${projectName}
🔢 Quantity: ${quantity}
📝 Description: ${description}
📅 Due Date: ${dueDate}
📎 File: ${fileLink || "None"}
`;

    const params = {
      Source: "info@mseprinting.com",
      Destination: {
        ToAddresses: ["info@mseprinting.com"], // ✅ VERIFIED email
      },
      Message: {
        Subject: { Data: "New Quote Request – MSE Printing" },
        Body: {
          Text: { Data: message },
        },
      },
    };

    const result = await ses.sendEmail(params).promise();
    return NextResponse.json({ message: "Email sent", result }, { status: 200 });
  } catch (error: any) {
    console.error("❌ SES Error", error);
    return NextResponse.json({ message: "Failed to send", error }, { status: 500 });
  }
}
