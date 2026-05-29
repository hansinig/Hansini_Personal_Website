import { NextRequest, NextResponse } from "next/server";

// ─── Contact form API endpoint ────────────────────────────────────────────────
// Wire up a real email provider (Resend, Nodemailer, SendGrid) or
// form service (Formspree, Web3Forms) in production.
// For now: logs to console and returns 200.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ── Option A: Resend (recommended) ──────────────────────────────────────
    // 1. npm install resend
    // 2. Set RESEND_API_KEY in .env.local
    // 3. Uncomment below:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio <onboarding@resend.dev>",
    //   to: "hansinig101@gmail.com",
    //   subject: `Portfolio message from ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    // ── Dev: just log ────────────────────────────────────────────────────────
    console.log("[Contact Form]", { name, email, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
