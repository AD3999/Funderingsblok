import { Container } from "@/components/ui/Container";

const PLATFORM_LINKS = [
  { href: "#problem", label: "The problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#municipalities", label: "For municipalities" },
  { href: "#preview", label: "Product" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-panel-2 bg-panel/30">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-base font-semibold text-foreground">
            Funderingsblok
          </p>
          <p className="mt-3 max-w-xs font-sans text-sm text-foreground/60">
            Coordination for shared-foundation repair — consent, financing,
            and contractor selection, in one platform per repair unit.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Platform
          </p>
          <ul className="mt-4 space-y-2.5">
            {PLATFORM_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-foreground/70 transition-colors hover:text-steel"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Get started
          </p>
          <p className="mt-4 max-w-xs font-sans text-sm text-foreground/70">
            Running an FDF-backed repair unit and want to skip the
            spreadsheets? Request a pilot for your municipality.
          </p>
          <a
            href="#pilot"
            className="mt-4 inline-block rounded-sm border border-steel/40 px-4 py-2 font-sans text-sm font-semibold text-steel transition-colors hover:bg-steel hover:text-navy"
          >
            Request a pilot
          </a>
        </div>
      </Container>

      <div className="border-t border-panel-2">
        <Container className="flex flex-col items-center gap-2 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-mono text-xs text-foreground/40">
            © {new Date().getFullYear()} Funderingsblok
          </p>
          <p className="font-mono text-xs text-foreground/40">
            Built on FunderMaps risk data · FDF financing · KCAF contractors
          </p>
        </Container>
      </div>
    </footer>
  );
}
