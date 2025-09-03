import Image from "next/image";
import Link from "next/link";
import { BlogPost, getStrapiImageUrl } from "@/lib/strapi";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { Title, Slug, Excerpt, FeaturedImage, blog_category, Author, ReadTime, publishedAt } = post;
  
  return (
    <div className="bg-white shadow-lg px-[30px] pt-7 pb-10 rounded-[14px]">
      <div className="w-full mb-[38px] h-[250px] relative">
        <Image
          className="w-full object-cover rounded-[10px]"
          src={getStrapiImageUrl(FeaturedImage.url)}
          alt={FeaturedImage.alternativeText || Title}
          width={392}
          height={250}
        />
        <div className="bg-[#0AA9E5] absolute px-[18px] py-[7.5px] rounded-[6px] -bottom-3 left-1/2 -translate-x-1/2 h-[29px]">
          <p className="text-xs font-semibold uppercase text-white">
            {new Date(publishedAt).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </p>
        </div>
      </div>

      <div>
        <p className="font-semibold text-xl mb-4 text-center text-[#0B131E]">{Title}</p>
        <p className="text-[#0B131E]/60 text-center mb-[18px] font-normal">{Excerpt}</p>
        
      

        <Link
          href={`/blog/${Slug}`}
          className="text-[#0E2F80] p-1 border-b border-[#0E2F80] font-medium mx-auto flex w-fit"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
