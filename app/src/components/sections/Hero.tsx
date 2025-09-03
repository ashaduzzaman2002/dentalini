'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section aria-label="Hero" className="relative mb-16">
      <Carousel
        plugins={
          [
            Autoplay({
              delay: 3000,
            }),
          ]
        }
        className="mx-auto"
      >
        <CarouselContent>
          {[
            "/thumbnail_shutterstock_70216339.jpg",
            "/thumbnail_shutterstock_168128375.jpg",
          ].map((img, idx) => (
            <CarouselItem key={idx}>
            

              <div className="bg-[#E5F6FD] h-[570px] overflow-hidden relative">
                <div className="absolute bottom-0 right-0">
                  <img src="/plus.svg" alt="" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img src="/heart-beat.svg" alt="" />
                </div>
                <div className="absolute top-16 left-28 ">
                  <img className="w-20" src="/medical-icon1.svg" alt="" />
                </div>
                <div className="absolute top-1/2 left-7 -translate-y-1/2">
                  <img className="w-20" src="/medical-icon-2.svg" alt="" />
                </div>
                <div className="container mx-auto grid grid-cols-2 h-full">
                  <div className="h-full flex flex-col justify-center gap-16">
                    <h1 className="text-[70px] font-bold leading-[75px] text-[#0E2F80]">
                      Experience and Quality <span className="text-[#0091BA]">Treatment You can</span> Trust.
                    </h1>
                    <div className="">
                      <Button variant="hero"  size="lg">Book Appointment</Button>
                    </div>
                  </div>

                  <div className="flex justify-end overflow-hidden">
                   <div className="bg-[#0091BA] h-[70%] mt-auto shadow-lg relative mb-5 overflow-hidden -mr-20 rounded-t-full w-[300px]">
                     <img className="w-[100%] object-cover object-top" src="/hero-doctor.png" alt="" />
                   </div>
                   <div className="bg-[#0091BA] h-[70%] mt-10 shadow-lg rounded-t-full w-[300px] overflow-hidden">
                     <img className="w-[100%] object-cover object-top" src="/hero-image.jpg" alt="" />
                   </div>
                  </div>
                </div>
              </div>
              
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
