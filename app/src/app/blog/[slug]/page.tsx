import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost, getStrapiImageUrl } from "@/lib/strapi";
import BlogContent from "@/components/blog/BlogContent";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import SubHeader from "@/components/layout/SubHeader";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { data: posts } = await getBlogPost(slug);

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
    publishedAt,
  } = post;

  return (
    <div className="min-h-screen bg-gray-50">
      <SubHeader title={Title} description={Excerpt} />
      {/* Hero Section */}

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Blog Content */}
          <article className="bg-white rounded-lg shadow-sm p-8">
            <BlogContent content={Content} />
          </article>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#0E2F80] text-white px-6 py-2.5 rounded-lg hover:bg-[#0E2F80]/90 transition-colors"
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
  const { slug } = await params;
  const { data: posts } = await getBlogPost(slug);

  if (!posts || posts.length === 0) {
    return {
      title: "Post Not Found",
    };
  }

  const post = posts[0];
  const { Title, Excerpt, FeaturedImage } = post;

  return {
    title: `${Title} | Dentalini Blog`,
    description: Excerpt,
    openGraph: {
      title: Title,
      description: Excerpt,
      images: [getStrapiImageUrl(FeaturedImage.url)],
    },
  };
}
