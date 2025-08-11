import Page from "./_Page";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We will get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Page title="Contact Us | Dentalini" description="Contact Dentalini Smile Studio. We’re here to answer your questions and book your visit.">
      <section className="container mx-auto py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-semibold text-primary">Contact Us</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">Send a message and our team will be in touch.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-xl border p-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <Input placeholder="Your full name" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <Input type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <Textarea placeholder="How can we help?" required rows={5} />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
          </form>
          <div className="rounded-xl border overflow-hidden">
            <iframe
              title="Dentalini Smile Studio map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15,51.5,-0.12,51.52&layer=mapnik"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Contact;
