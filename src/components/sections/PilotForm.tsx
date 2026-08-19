"use client";

import { useState, type FormEvent } from "react";
import { MotionButton } from "@/components/ui/MotionPress";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-sm border border-panel-2 bg-navy/60 px-4 py-3 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-steel focus:outline-none disabled:opacity-50";
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
        setError(payload?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 rounded-md border border-sage/40 bg-panel/40 bg-grid-faint p-8 text-center shadow-lg shadow-navy/10 backdrop-blur-xl">
        <p className="font-display text-lg font-semibold text-sage">
          Request received
        </p>
        <p className="mt-2 font-sans text-sm text-foreground/70">
          We&apos;ll be in touch within two working days.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      className="mt-10 space-y-5 rounded-md border border-panel-2/70 bg-panel/40 bg-grid-faint p-6 shadow-lg shadow-navy/10 backdrop-blur-xl sm:p-8"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="municipality" className={labelClass}>
          Municipality / organization
        </label>
        <input
          id="municipality"
          name="municipality"
          type="text"
          required
          disabled={submitting}
          placeholder="Municipality of Schiedam"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact" className={labelClass}>
            Contact person
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            disabled={submitting}
            placeholder="Process coordinator's name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={submitting}
            placeholder="name@municipality.nl"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="region" className={labelClass}>
          Region
        </label>
        <input
          id="region"
          name="region"
          type="text"
          disabled={submitting}
          placeholder="South Holland"
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
        {submitting ? "Sending…" : "Request a pilot"}
      </MotionButton>
    </form>
  );
}
