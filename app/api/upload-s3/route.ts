import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// 1. Create the S3 client here, using your env vars
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// 2. Export a POST handler for your route. 
// This file is: app/api/upload-s3/route.ts -> endpoint is "/api/upload-s3"
export async function POST(req: NextRequest) {
  try {
    // 3. Parse JSON from the request body
    const { fileName, fileType } = await req.json();

    // 4. Validate
    if (!fileName || !fileType) {
      return NextResponse.json(
        { message: "Missing fileName or fileType" },
        { status: 400 }
      );
    }

    // 5. Create a PutObjectCommand for S3
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME, // from .env
      Key: fileName,         // e.g. "RequestQuoteFiles.zip"
      ContentType: fileType, // e.g. "application/zip"
    });

    // 6. Generate a presigned URL good for 1 hour
    const presignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    // 7. Build a download URL (if your bucket is public or has a policy)
    const downloadUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

    // 8. Return JSON with both links
    return NextResponse.json({ presignedUrl, downloadUrl }, { status: 200 });
  } catch (error) {
    console.error("Error generating S3 URL:", error);
    return NextResponse.json(
      { message: "Error generating presigned URL" },
      { status: 500 }
    );
  }
}
