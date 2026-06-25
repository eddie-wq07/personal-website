import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Orex Inquiries <onboarding@resend.dev>",
    to: "edward.h.jung07@gmail.com",
    replyTo: email,
    subject: `Orex inquiry — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n"),
    html: `
      <table style="font-family:sans-serif;font-size:14px;color:#333;max-width:480px">
        <tr><td style="padding-bottom:16px">
          <strong style="font-size:16px">New inquiry from ${name}</strong>
        </td></tr>
        <tr><td style="padding-bottom:8px"><strong>Name:</strong> ${name}</td></tr>
        <tr><td style="padding-bottom:8px"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></td></tr>
        ${company ? `<tr><td style="padding-bottom:8px"><strong>Company:</strong> ${company}</td></tr>` : ""}
        <tr><td style="padding-top:16px;border-top:1px solid #eee;white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
