import SubHeader from "@/components/layout/SubHeader";
import BlogCard from "@/components/blog/BlogCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { getBlogPosts, BlogPost } from "@/lib/strapi";

interface BlogPageProps {
  searchParams: { page?: string };
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const pageSize = 9;
  
  const { data: posts, meta } = await getBlogPosts(currentPage, pageSize);
  const totalPages = meta?.pagination?.pageCount || 1;
  
  return (
    <div>
      <SubHeader
        title="Our Blog"
        description="Insights on comfort-first dentistry, oral care, and smile confidence."
      />
      <section className="container mx-auto py-20">
        {posts?.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination className="mt-12">
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        href={`/blog?page=${currentPage - 1}`} 
                        className="rounded-full" 
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        href={`/blog?page=${page}`}
                        isActive={page === currentPage}
                        className={`rounded-full ${
                          page === currentPage 
                            ? 'bg-[#0E2F80] text-white hover:bg-[#0E2F80]/90' 
                            : ''
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        href={`/blog?page=${currentPage + 1}`} 
                        className="rounded-full" 
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600">No blog posts found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
