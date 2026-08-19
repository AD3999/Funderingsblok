import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="py-10">
      <Container className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-foreground/50">
          Funderingsblok — coördinatie voor funderingsherstel per hersteleenheid
        </p>
        <p className="font-mono text-xs text-foreground/40">
          © {new Date().getFullYear()} Funderingsblok
        </p>
      </Container>
    </footer>
  );
}
