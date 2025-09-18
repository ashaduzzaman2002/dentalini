import SubHeader from "@/components/layout/SubHeader";
import { getServices, getStrapiImageUrl, Service } from "@/lib/strapi";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function Services() {
  const { data: services } = await getServices();

  return (
    <div>
      <SubHeader
        title="Our Services"
        description="From routine care to cosmetic enhancements, we tailor treatments to your comfort and goals."
      />
      <section className="container mx-auto py-20">
        {services?.length > 0 ? (
          <div className="grid gap-5   md:grid-cols-2 lg:grid-cols-4">
            {services.map((service: Service) => (
               <div key={service.id} className="p-4 bg-[#FFFFFF] shadow-lg rounded-[14px]">
              <div>
                <img
                  className="w-full aspect-video object-cover rounded-[10px]"
                  src={service.Image_url?.url 
                    ? getStrapiImageUrl(service.Image_url.url)
                    : "/thumbnail_shutterstock_168128375.jpg"
                  }
                  alt={service.Image_url?.alternativeText || service.Title}
                />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-center text-2xl line-clamp-1 text-[#0B131E] font-semibold mb-3">
                  {service.Title}
                </h3>
                <p className="text-center text-[#0B131E] font-normal mb-5 line-clamp-2">
                  {service.description?.slice(0, 100)}...
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
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600">No services found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
