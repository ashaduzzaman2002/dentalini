import Page from "./_Page";
import ServicesPreview from "@/components/sections/ServicesPreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Page title="Services | Dentalini Smile Studio" description="Explore gentle, modern dental services: cleanings, whitening, cosmetic dentistry and more at Dentalini.">
      <section className="container mx-auto py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-semibold text-primary">Our Services</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">From routine care to cosmetic enhancements, we tailor treatments to your comfort and goals.</p>
        </header>
        <ServicesPreview />
        <div className="mt-8 text-center">
          <Button asChild variant="hero" size="lg"><Link to="/contact">Book Your Visit</Link></Button>
        </div>
      </section>
    </Page>
  );
};

export default Services;
