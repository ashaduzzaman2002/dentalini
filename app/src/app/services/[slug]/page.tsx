import { notFound } from "next/navigation";
import { getService, getStrapiImageUrl } from "@/lib/strapi";
import BlogContent from "@/components/blog/BlogContent";
import SubHeader from "@/components/layout/SubHeader";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const { data: services } = await getService(slug);
  
  if (!services || services.length === 0) {
    notFound();
  }

  const service = services[0];

  return (
    <div>
      <SubHeader
        title={service.attributes.Title}
        description=""
      />
      <article className="container mx-auto py-20">
        <div className="max-w-4xl mx-auto">
          {service.attributes.Image_url?.data && (
            <img
              src={getStrapiImageUrl(service.attributes.Image_url.data.attributes.url)}
              alt={service.attributes.Image_url.data.attributes.alternativeText || service.attributes.Title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          )}
          
          <div className="prose max-w-none">
            <BlogContent content={service.attributes.Content} />
          </div>
        </div>
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const { data: services } = await getService(slug);
  
  if (!services || services.length === 0) {
    return {
      title: "Service Not Found",
    };
  }

  const service = services[0];

  return {
    title: service.Title,
    description: service.description.slice(0, 160),
  };
}
