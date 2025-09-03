import AboutPreview from "@/components/sections/AboutPreview";
import Hero from "@/components/sections/Hero";
import ReviewsPreview from "@/components/sections/ReviewsPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <AboutPreview />
        <ServicesPreview />
        <ReviewsPreview />
      </main>
    </div>
  );
}
