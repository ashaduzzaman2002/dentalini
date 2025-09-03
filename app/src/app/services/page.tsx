import ServicesPreview from "@/components/sections/ServicesPreview";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
  return (
  
      <section className=" py-12">
        <header className="mb-8 container mx-auto">
          <h1 className="text-4xl font-semibold text-primary">Our Services</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">From routine care to cosmetic enhancements, we tailor treatments to your comfort and goals.</p>
        </header>
        <ServicesPreview />
        {/* <div className="mt-8 text-center">
          <Button asChild variant="hero" size="lg"><Link href="/contact">Book Your Visit</Link></Button>
        </div> */}
      </section>
  );
};

export default Services;
