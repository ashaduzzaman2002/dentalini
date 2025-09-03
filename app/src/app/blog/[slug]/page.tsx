import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost, getStrapiImageUrl } from "@/lib/strapi";
import BlogContent from "@/components/blog/BlogContent";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { data: posts } = await getBlogPost(params.slug);
  
  if (!posts || posts.length === 0) {
    notFound();
  }

  const post = posts[0];
  const { 
    Title, 
    Content, 
    Excerpt, 
    FeaturedImage, 
    blog_category, 
    Author, 
    ReadTime, 
    Tags, 
    publishedAt 
  } = post;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#0E2F80] to-[#0AA9E5]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
            
            {blog_category?.data && (
              <div className="mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {blog_category.Name}
                </span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {Title}
            </h1>
            
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              {Excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{Author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>
                  {new Date(publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{ReadTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8 -mt-20 relative z-10">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src={getStrapiImageUrl(FeaturedImage.url)}
                alt={FeaturedImage.alternativeText || Title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Tags */}
          {/* {Tags && Tags.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag size={16} className="text-gray-500" />
                {Tags?.map((tag: string) => (
                  <span 
                    key={tag}
                    className="bg-[#0AA9E5]/10 text-[#0AA9E5] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )} */}

          {/* Blog Content */}
          <article className="bg-white rounded-lg shadow-sm p-8">
            <BlogContent content={Content} />
          </article>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#0E2F80] text-white px-6 py-3 rounded-lg hover:bg-[#0E2F80]/90 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { data: posts } = await getBlogPost(params.slug);
  
  if (!posts || posts.length === 0) {
    return {
      title: 'Post Not Found',
    };
  }

  const post = posts[0];
  const { Title, Excerpt, FeaturedImage } = post.attributes;

  return {
    title: `${Title} | Dentalini Blog`,
    description: Excerpt,
    openGraph: {
      title: Title,
      description: Excerpt,
      images: [getStrapiImageUrl(FeaturedImage.data.attributes.url)],
    },
  };
}
