import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { DrawingDefs } from "@/components/ui/DrawingDefs";
import { BlueprintBackdrop } from "@/components/ui/BlueprintBackdrop";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/layout/BackToTop";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Funderingsblok — Coordination for shared-foundation repair",
  description:
    "Funderingsblok brings every owner in a shared-foundation block to 100% consent, financing, and a chosen contractor — one platform for municipalities and process coordinators.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-foreground">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <DrawingDefs />
          <BlueprintBackdrop />
          <Navbar />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
