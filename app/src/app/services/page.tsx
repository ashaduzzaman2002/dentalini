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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service: Service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {service.Image_url?.url && (
                  <img
                    src={getStrapiImageUrl(service.Image_url.url)}
                    alt={service.Image_url.alternativeText || service.Title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0B131E] mb-3">
                    {service.Title}
                  </h3>
                  <div className="text-gray-600 mb-4">
                    {service.short_description?.map((block, index) => (
                      <p key={index}>
                        {block.children?.map((child) => child.text).join("")}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.Slug}`}
                    className="inline-flex items-center gap-2 text-[#0E2F80] font-medium hover:underline"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
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
