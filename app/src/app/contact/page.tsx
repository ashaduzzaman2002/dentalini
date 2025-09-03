'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SubHeader from "@/components/layout/SubHeader";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent",
        description: "We will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <div>
         <SubHeader
      title="Contact Us"
      description="
            Send a message and our team will be in touch."
    />
      <section className="container mx-auto py-12">
     
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
            <Button type="submit" variant="hero" size="lg" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
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
    </div>
  );
};

export default Contact;
