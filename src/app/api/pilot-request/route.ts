import { NextResponse } from "next/server";

interface PilotRequestBody {
  municipality?: unknown;
  contact?: unknown;
  email?: unknown;
  region?: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: PilotRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const municipality = typeof body.municipality === "string" ? body.municipality.trim() : "";
  const contact = typeof body.contact === "string" ? body.contact.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const region = typeof body.region === "string" ? body.region.trim() : "";

  if (!municipality || !contact || !email) {
    return NextResponse.json(
      { error: "Gemeente, contactpersoon en e-mailadres zijn verplicht." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Vul een geldig e-mailadres in." },
      { status: 400 },
    );
  }

  // v1 has no database or email provider, so the server log is the only
  // record of a submission — contact name/email are logged intentionally
  // so a pilot request can be followed up on. Replace this with a proper
  // store (DB row or outbound email) before relying on this in production;
  // provider logs aren't an access-controlled or retention-managed system
  // for personal data.
  console.log("[pilot-request]", {
    municipality,
    contact,
    email,
    region: region || null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
