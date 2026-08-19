import { Hero } from "@/components/sections/Hero";
import { ProblemStats } from "@/components/sections/ProblemStats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForMunicipalities } from "@/components/sections/ForMunicipalities";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { PilotCta } from "@/components/sections/PilotCta";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStats />
      <HowItWorks />
      <ForMunicipalities />
      <ProductPreview />
      <PilotCta />
      <SiteFooter />
    </main>
  );
}
