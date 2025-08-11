import Page from "./_Page";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import ReviewsPreview from "@/components/sections/ReviewsPreview";
import ContactPreview from "@/components/sections/ContactPreview";

const Index = () => {
  return (
    <Page title="Dentalini Smile Studio | Female Dentist" description="Gentle, modern dental care by a female dentist in a calming, feminine clinic. Book an appointment today.">
      <Hero />
      <main>
        <ServicesPreview />
        <AboutPreview />
        <ReviewsPreview />
        <ContactPreview />
      </main>
    </Page>
  );
};

export default Index;
