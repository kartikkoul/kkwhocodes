import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getClientIp, verifyTurnstileToken } from "../../../lib/turnstile";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
  turnstileToken?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const contactTo = process.env.CONTACT_TO_EMAIL ?? gmailUser;

  if (!gmailUser || !gmailAppPassword || !contactTo) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.",
      },
      { status: 503 },
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const honeypot = body.website?.trim() ?? "";
  const turnstileToken = body.turnstileToken?.trim() ?? "";

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Please complete the verification check." },
      { status: 400 },
    );
  }

  const verification = await verifyTurnstileToken(
    turnstileToken,
    getClientIp(request),
  );

  if (!verification.ok) {
    return NextResponse.json(
      { error: verification.error ?? "Verification failed. Please try again." },
      { status: 400 },
    );
  }

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long (max 5000 characters)." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const safeName = name.replace(/[\r\n]/g, " ");
  const subject = `kartikkoul.com | Message from ${safeName}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New message on kartikkoul.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"kartikkoul.com visitor" <${gmailUser}>`,
      to: contactTo,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form mail error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Try again later." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
