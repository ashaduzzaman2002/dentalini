import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Brush, Smile, Heart, ShieldCheck, Calendar } from "lucide-react";

const services = [
  { icon: Brush, title: "General Dentistry", desc: "Checkups, cleanings, and preventive care for all ages." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Brighten your smile safely with professional whitening." },
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Composite bonding, veneers, and smile makeovers." },
  { icon: Heart, title: "Comfort-First Care", desc: "A calming, feminine environment with gentle techniques." },
  { icon: ShieldCheck, title: "Preventive Care", desc: "Sealants, fluoride, and personalized home routines." },
  { icon: Calendar, title: "Flexible Scheduling", desc: "Appointments designed to fit your lifestyle." },
];

const ServicesPreview = () => {
  return (
    <section className="container mx-auto py-12" aria-labelledby="services-heading">
      <h2 id="services-heading" className="mb-2 text-center text-3xl font-semibold text-primary">Our Services</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
        We combine expertise and empathy to deliver beautiful, healthy smiles.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="hover-scale">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/30">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
