"use client";

import { useState, type FormEvent } from "react";
import { MotionButton } from "@/components/ui/MotionPress";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-sm border border-panel-2 bg-navy px-4 py-3 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-steel focus:outline-none disabled:opacity-50";
const labelClass = "block font-mono text-xs uppercase tracking-widest text-foreground/60";

export function PilotForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/pilot-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          municipality: data.get("municipality"),
          contact: data.get("contact"),
          email: data.get("email"),
          region: data.get("region"),
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setError(payload?.error ?? "Er ging iets mis. Probeer het opnieuw.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError("Er ging iets mis. Controleer je verbinding en probeer het opnieuw.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 rounded-sm border border-sage/40 bg-navy p-6 text-center">
        <p className="font-display text-lg font-semibold text-sage">
          Aanvraag ontvangen
        </p>
        <p className="mt-2 font-sans text-sm text-foreground/70">
          We nemen binnen twee werkdagen contact op.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="municipality" className={labelClass}>
          Gemeente / organisatie
        </label>
        <input
          id="municipality"
          name="municipality"
          type="text"
          required
          disabled={submitting}
          placeholder="Gemeente Schiedam"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact" className={labelClass}>
            Contactpersoon
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            disabled={submitting}
            placeholder="Naam procesbegeleider"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={submitting}
            placeholder="naam@gemeente.nl"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="region" className={labelClass}>
          Regio
        </label>
        <input
          id="region"
          name="region"
          type="text"
          disabled={submitting}
          placeholder="Zuid-Holland"
          className={fieldClass}
        />
      </div>

      {status === "error" && (
        <p className="font-mono text-sm text-brick" role="alert">
          {error}
        </p>
      )}

      <MotionButton
        type="submit"
        disabled={submitting}
        className="w-full rounded-sm bg-steel px-6 py-3 font-sans text-sm font-semibold text-navy transition-colors hover:bg-steel/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Bezig met versturen…" : "Pilot aanvragen"}
      </MotionButton>
    </form>
  );
}
