import SubHeader from "@/components/layout/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const posts = [
  {
    slug: "feminine-dental-care",
    title: "What Feminine Dental Care Means to Us",
    excerpt: "Our approach to comfort, empathy, and clinical excellence.",
  },
  {
    slug: "brighten-your-smile",
    title: "Brighten Your Smile Safely",
    excerpt: "Professional whitening vs. at-home kits — what to know.",
  },
  {
    slug: "first-visit",
    title: "Your First Visit at Dentalini",
    excerpt: "What to expect and how we make it easy.",
  },
];

const Blog = () => (
  <div>
     <SubHeader
      title="Our Blog"
      description="Insights on comfort-first dentistry, oral care, and smile confidence."
    />
    <section className="container mx-auto py-12">
    
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.slug} className="hover-scale">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link className="story-link text-sm" href="#">
                Read article
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default Blog;
