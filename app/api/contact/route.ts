import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // Send notification email via Resend (NO PHI in email body)
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "admin@p24homecare.com";

    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Prestige 24 Website <onboarding@resend.dev>",
        to: contactEmail,
        subject: "New Care Inquiry Received - Prestige 24 Home Care",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1B2D5B; padding: 20px; text-align: center;">
              <h1 style="color: #F5A623; margin: 0; font-size: 24px;">New Care Inquiry</h1>
            </div>
            <div style="padding: 30px; background-color: #f9f9f9;">
              <p style="color: #1B2D5B; font-size: 16px; line-height: 1.6;">
                A new care inquiry has been submitted through the Prestige 24 Home Care website.
              </p>
              <p style="color: #666; font-size: 14px; line-height: 1.6;">
                <strong>Service Requested:</strong> ${result.data.serviceNeeded}<br/>
                <strong>Preferred Contact:</strong> ${result.data.contactMethod}<br/>
                <strong>Submitted:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}
              </p>
              <div style="background-color: #FFF3CD; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="color: #856404; font-size: 13px; margin: 0;">
                  <strong>HIPAA Notice:</strong> For privacy compliance, detailed patient information
                  is not included in this email. Please log in to your secure portal to review the
                  full inquiry details.
                </p>
              </div>
            </div>
            <div style="background-color: #1B2D5B; padding: 15px; text-align: center;">
              <p style="color: #A8B0C9; font-size: 12px; margin: 0;">
                Prestige 24 Home Care &bull; 470-884-3905 &bull; p24homecare.com
              </p>
            </div>
          </div>
        `,
      });
    }

    // NOTE: In production, the full form data should be stored in a HIPAA-compliant
    // database or secure portal — NOT logged or stored in plain text.
    // The email notification above intentionally omits PHI.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
