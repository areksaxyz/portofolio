import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const limit = rateLimit(`contact:${ip}`);

  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the form fields and try again." },
      { status: 400 }
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true, message: "Message received." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !to || !from) {
    return NextResponse.json(
      {
        ok: false,
        fallback: true,
        message:
          "Automatic email delivery is not active yet. Opening an email draft instead."
      },
      { status: 503 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message
      ].join("\n")
    });

    return NextResponse.json({
      ok: true,
      message: "Thanks. Your message has been sent."
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        fallback: true,
        message:
          "Automatic email delivery failed. Opening an email draft instead."
      },
      { status: 502 }
    );
  }
}
