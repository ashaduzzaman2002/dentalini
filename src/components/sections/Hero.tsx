import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import hero from "@/assets/hero-dentalini.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section aria-label="Hero" className="relative">
      {/* <div className="absolute inset-0 -z-10 bg-animated-gradient opacity-30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,hsl(var(--accent)/0.18),transparent_70%)]" /> */}
      <Carousel className="mx-auto">
        <CarouselContent>
          {[hero, hero].map((img, idx) => (
            <CarouselItem key={idx}>
              <div className="relative overflow-hidden bg-card">
                <img src={img} alt="Modern, feminine dental clinic hero" className="h-screen w-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-background/10" />
              
                <div className="absolute inset-0 flex items-center p-6 md:p-12">
                  <div className="max-w-2xl animate-fade-in">
                    <h1 className="mb-3 text-4xl font-semibold leading-tight text-primary md:text-5xl">
                      Feminine, Gentle, and Modern Dental Care
                    </h1>
                    <p className="mb-6 text-muted-foreground md:text-lg">
                      Led by a compassionate female dentist, Dentalini Smile Studio blends advanced technology with a calming touch.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button asChild variant="hero" size="lg" className="hover-scale">
                        <Link to="/contact">Book Appointment</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link to="/services">Our Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

export default Hero;
