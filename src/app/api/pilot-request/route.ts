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

  console.log("[pilot-request]", {
    municipality,
    contact,
    email,
    region: region || null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
