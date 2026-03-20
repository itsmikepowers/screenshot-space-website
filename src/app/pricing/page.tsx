import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PricingHero, Benefits, FAQ } from "@/components/pricing";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingHero />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
}
