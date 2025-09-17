import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getServices, getStrapiImageUrl, Service } from "@/lib/strapi";

export default async function ServicesPreview() {
  const { data: services } = await getServices();

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
          {services?.slice(0, 4).map((service: Service) => (
            <div key={service.id} className="p-7 bg-[#FFFFFF] shadow-lg rounded-[14px]">
              <div>
                <img
                  className="w-full aspect-auto object-cover rounded-[10px]"
                  src={service.Image_url?.url 
                    ? getStrapiImageUrl(service.Image_url.url)
                    : "/thumbnail_shutterstock_168128375.jpg"
                  }
                  alt={service.Image_url?.alternativeText || service.Title}
                />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-center text-2xl text-[#0B131E] font-semibold mb-3">
                  {service.Title}
                </h3>
                <p className="t ext-center text-[#0B131E] font-normal mb-5">
                  {service.short_description?.map(block => 
                    block.children?.map(child => child.text).join('')
                  ).join(' ').slice(0, 100)}...
                </p>
                <div className="flex justify-center">
                  <Link
                    className="font-medium text-center flex gap-2 justify-center border- text-base pb-1 text-[#0E2F80] border-[#0E2F80]"
                    href={`/services/${service.Slug}`}
                  >
                    Learn more <ArrowRight className="w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="hero" size="lg" className="mt-12" asChild>
            <Link href="/services">View all Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
