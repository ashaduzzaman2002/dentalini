import SubHeader from "@/components/layout/SubHeader";

const Visit = () => (
  <div>
     <SubHeader
      title="Visit Dentalini"
      description="Find us easily and enjoy a calming, modern space designed around your comfort."
    />
    <section className="container mx-auto py-12">
     
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border overflow-hidden">
          <iframe
            title="Dentalini Smile Studio map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15,51.5,-0.12,51.52&layer=mapnik"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="mb-2 text-xl font-medium">Hours</h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
            <li>Sat: 10:00 AM – 2:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
          <h2 className="mb-2 mt-6 text-xl font-medium">Address</h2>
          <p className="text-sm text-muted-foreground">123 Smile Ave, Your City</p>
        </div>
      </div>
    </section>
  </div>
);

export default Visit;
