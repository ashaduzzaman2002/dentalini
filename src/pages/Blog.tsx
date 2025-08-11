import Page from "./_Page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const posts = [
  { slug: "feminine-dental-care", title: "What Feminine Dental Care Means to Us", excerpt: "Our approach to comfort, empathy, and clinical excellence." },
  { slug: "brighten-your-smile", title: "Brighten Your Smile Safely", excerpt: "Professional whitening vs. at-home kits — what to know." },
  { slug: "first-visit", title: "Your First Visit at Dentalini", excerpt: "What to expect and how we make it easy." },
];

const Blog = () => (
  <Page title="Blog | Dentalini" description="Tips and insights on gentle, modern dental care from the Dentalini team.">
    <section className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold text-primary">Our Blog</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">Insights on comfort-first dentistry, oral care, and smile confidence.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.slug} className="hover-scale">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link className="story-link text-sm" to="#">Read article</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </Page>
);

export default Blog;
