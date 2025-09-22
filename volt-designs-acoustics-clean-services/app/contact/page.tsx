import { NextRequest, NextResponse } from "next/server";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function clamp(str: string, max = 2000) {
  return (str || "").toString().slice(0, max);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, service } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const subject = `New enquiry: ${service || "General"} — ${name}`;
    const html = `
      <div style="font-family:system-ui,Arial,sans-serif;font-size:14px;color:#111;line-height:1.5">
        <h2 style="margin:0 0 6px">New service enquiry</h2>
        <p><strong>Service:</strong> ${clamp(service ?? "", 120)}</p>
        <p><strong>Name:</strong> ${clamp(name, 120)}</p>
        <p><strong>Email:</strong> ${clamp(email, 120)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${clamp(phone, 40)}</p>` : ""}
        <p style="margin:8px 0 4px"><strong>Message</strong></p>
        <pre style="white-space:pre-wrap;margin:0;background:#f6f6f6;padding:10px;border-radius:8px">${clamp(
          message,
          4000
        )}</pre>
        <p style="color:#666;margin-top:16px">Sent from Volt Designs & Acoustics website</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        reply_to: email
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend send failed:", res.status, err);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("CONTACT_FORM_ERROR", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
