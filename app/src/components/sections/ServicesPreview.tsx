import {
  Sparkles,
  Brush,
  Smile,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const services = [
  {
    icon: Brush,
    title: "General Dentistry",
    desc: "Checkups, cleanings, and preventive care for all ages.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    desc: "Brighten your smile safely with professional whitening.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    desc: "Composite bonding, veneers, and smile makeovers.",
  },
  {
    icon: Heart,
    title: "Comfort-First Care",
    desc: "A calming, feminine environment with gentle techniques.",
  },
];

const ServicesPreview = () => {
  return (
    <div className="bg-[#E5F6FD80]">
      <section
        className="container mx-auto py-16"
        aria-labelledby="services-heading"
      >
        <h2
          id="services-heading"
          className="mb-2 text-center text-3xl font-semibold text-primary"
        >
          Our Services
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
          We combine expertise and empathy to deliver beautiful, healthy smiles.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon, title, desc }, index) => (
            <div key={index} className="p-7 bg-[#FFFFFF] shadow-lg rounded-[14px]">
              <div>
                <img
                  className="w-full aspect-auto object-cover rounded-[10px]"
                  src="/thumbnail_shutterstock_168128375.jpg"
                  alt=""
                />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-center text-2xl text-[#0B131E] font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-center text-[#0B131E] font-normal mb-5">
                  {desc}
                </p>
                <div className="flex justify-center">
                  <Link
                    className="font-medium text-center flex gap-2 justify-center border- text-base pb-1 text-[#0E2F80] border-[#0E2F80]"
                    href="/"
                  >
                    Learn more <ArrowRight className="w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="hero" size="lg" className="mt-12">View all Specialties</Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPreview;
