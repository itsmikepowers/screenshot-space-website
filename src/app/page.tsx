import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero, Features, HowItWorks, CTA } from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
