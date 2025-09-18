import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost } from "@/lib/strapi";
import BlogContent from "@/components/blog/BlogContent";
import { ArrowLeft} from "lucide-react";
import SubHeader from "@/components/layout/SubHeader";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const { data: posts } = await getBlogPost(slug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  const post = posts[0];
  const {
    title,
    content,
    excerpt,
  } = post;

  console.log(post)

  return (
    <div className="min-h-screen bg-gray-50">
      <SubHeader title={title} description={excerpt} />
      {/* Hero Section */}

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Blog Content */}
          <article className="bg-white rounded-lg shadow-sm p-8">
            <BlogContent content={content} />
          </article>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#0E2F80] text-white px-6 py-2.5 rounded-lg hover:bg-[#0E2F80]/90 transition-colors"
            >
              <ArrowLeft size={16} />
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}