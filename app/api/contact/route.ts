import { NextRequest, NextResponse } from "next/server";

// Basic email shape check without pulling in an external dependency.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // NOTE: This is a stub. Wire this up to a real email/CRM provider, e.g.:
    //   - Resend (https://resend.com)
    //   - SendGrid
    //   - A Google Sheet / Notion database via their API
    // Example with Resend:
    //   await resend.emails.send({
    //     from: "portfolio@yourdomain.com",
    //     to: "you@yourdomain.com",
    //     subject: `New message from ${name}`,
    //     text: message
    //   });
    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process the request." }, { status: 500 });
  }
}
