import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

interface EstimatePayload {
  name?: string;
  contact?: string;
  message?: string;
  "cf-turnstile-response"?: string;
}

interface Env {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
}

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export const POST: APIRoute = async ({ request }) => {
  try {
    let body: EstimatePayload;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid request body" }, 400);
    }

    const name = body.name?.trim();
    const contact = body.contact?.trim();
    const message = body.message?.trim();
    const turnstileToken = body["cf-turnstile-response"];

    if (!name || !contact || !message) {
      return json({ error: "Missing required fields" }, 400);
    }

    const turnstileSecret = (env as Env).TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) return json({ error: "Verification not configured" }, 500);
    if (!turnstileToken) return json({ error: "Verification challenge missing" }, 400);

    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: request.headers.get("cf-connecting-ip") ?? undefined,
      }),
    });
    const verifyResult = (await verifyResponse.json()) as { success: boolean };
    if (!verifyResult.success) return json({ error: "Verification failed" }, 403);

    const apiKey = (env as Env).RESEND_API_KEY;
    if (!apiKey) return json({ error: "Email service not configured" }, 500);

    // Reply goes straight to the customer when they left an email address.
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Phoenix Website <website@phxpropertypartners.com>",
        to: ["info@phxpropertypartners.com"],
        ...(isEmail ? { reply_to: contact } : {}),
        subject: `New estimate request from ${name}`,
        text: `Name: ${name}\nPhone or email: ${contact}\n\nProject:\n${message}`,
      }),
    });
    if (!resendResponse.ok) return json({ error: "Failed to send message" }, 502);

    return json({ success: true }, 200);
  } catch {
    return json({ error: "Unhandled server error" }, 500);
  }
};
