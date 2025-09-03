const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

interface Block {
  type: string;
  children?: { text: string }[];
}

export interface BlogPost {
  id: number;
  Title: string;
  Slug: string;
  Excerpt: string;
  Content: Block[];
  Author: string;
  ReadTime: number;
  Tags: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  FeaturedImage: {
    url: string;
    alternativeText: string;
  };
  blog_category: {
    Name: string;
    Slug: string;
  };
}

export interface BlogCategory {
  id: number;
  attributes: {
    Name: string;
    Slug: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export async function getBlogPosts(page = 1, pageSize = 9) {
  const response = await fetch(
    `${STRAPI_URL}/api/blog-posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`,
    { next: { revalidate: 60 } }
  );
  return response.json();
}

export async function getBlogPost(slug: string) {
  const response = await fetch(
    `${STRAPI_URL}/api/blog-posts?filters[Slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } }
  );
  return response.json();
}

export async function getBlogCategories() {
  const response = await fetch(`${STRAPI_URL}/api/blog-categories?populate=*`, {
    next: { revalidate: 300 },
  });
  return response.json();
}

export async function getBlogPostsByCategory(
  categorySlug: string,
  page = 1,
  pageSize = 9
) {
  const response = await fetch(
    `${STRAPI_URL}/api/blog-posts?filters[blog_category][Slug][$eq]=${categorySlug}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`,
    { next: { revalidate: 60 } }
  );
  return response.json();
}

export function getStrapiImageUrl(url: string) {
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}
