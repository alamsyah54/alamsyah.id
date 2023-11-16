import HeroSection from "@/components/HeroSection";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  return (
    <main className="flex flex-col duration-700">
      <HeroSection />
      <PromoSection />
    </main>
  );
}
