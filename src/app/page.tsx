import FeaturedCourses from "@/components/FeaturedCourses";
import HearOurHarmony from "@/components/HearOurHarmony";
import HeroSection from "@/components/HeroSection";
import WhyChooseUss from "@/components/WhyChooseUss";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-center text-3xl"></h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUss/>
      <HearOurHarmony/>
    </main>
  );
}
