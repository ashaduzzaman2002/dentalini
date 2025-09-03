import SubHeader from "@/components/layout/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "feminine-dental-care",
    title: "What Feminine Dental Care Means to Us",
    excerpt: "Our approach to comfort, empathy, and clinical excellence.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "brighten-your-smile",
    title: "Brighten Your Smile Safely",
    excerpt: "Professional whitening vs. at-home kits — what to know.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "first-visit",
    title: "Your First Visit at Dentalini",
    excerpt: "What to expect and how we make it easy.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "feminine-dental-care",
    title: "What Feminine Dental Care Means to Us",
    excerpt: "Our approach to comfort, empathy, and clinical excellence.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "brighten-your-smile",
    title: "Brighten Your Smile Safely",
    excerpt: "Professional whitening vs. at-home kits — what to know.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "first-visit",
    title: "Your First Visit at Dentalini",
    excerpt: "What to expect and how we make it easy.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "feminine-dental-care",
    title: "What Feminine Dental Care Means to Us",
    excerpt: "Our approach to comfort, empathy, and clinical excellence.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "brighten-your-smile",
    title: "Brighten Your Smile Safely",
    excerpt: "Professional whitening vs. at-home kits — what to know.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "first-visit",
    title: "Your First Visit at Dentalini",
    excerpt: "What to expect and how we make it easy.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "feminine-dental-care",
    title: "What Feminine Dental Care Means to Us",
    excerpt: "Our approach to comfort, empathy, and clinical excellence.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "brighten-your-smile",
    title: "Brighten Your Smile Safely",
    excerpt: "Professional whitening vs. at-home kits — what to know.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  {
    slug: "first-visit",
    title: "Your First Visit at Dentalini",
    excerpt: "What to expect and how we make it easy.",
    image: "/thumbnail_shutterstock_70216339.jpg",
  },
  
];

const Blog = () => (
  <div>
    <SubHeader
      title="Our Blog"
      description="Insights on comfort-first dentistry, oral care, and smile confidence."
    />
    <section className="container mx-auto py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <div className="bg-white shadow-lg px-[30px] pt-7 pb-10 rounded-[14px]">
            <div className="w-full mb-[38px] h-[250px] relative">
              <Image
                className="w-full object-cover rounded-[10px]"
                src={p.image}
                alt={p.title}
                width={392}
                height={250}
              />
              <div className="bg-[#0AA9E5] absolute px-[18px] py-[7.5px] rounded-[6px] -bottom-3 left-1/2 -translate-x-1/2 h-[29px]">
                <p className="text-xs font-semibold  uppercase text-white ">Jul 19, 2022</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-xl mb-4 text-center text-[#0B131E]">{p.title}</p>
              <p className="text-[#0B131E]/60 text-center mb-[18px] font-normal">{p.excerpt}</p>

              <Link
                href={`/blog/${p.slug}`}
                className="text-[#0E2F80] p-1 border-b border-[#0E2F80] font-medium mx-auto flex w-fit"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div>
        
      </div>
    </section>
  </div>
);

export default Blog;
