const ContactPreview = () => {
  return (
    <section className="container mx-auto py-16" aria-labelledby="contact-heading">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 id="contact-heading" className="mb-3 text-3xl font-semibold text-primary">Contact Us</h2>
          <p className="mb-4 text-muted-foreground">We’d love to meet you. Reach out and we’ll help you schedule a visit.</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Phone:</strong> (000) 123-4567</li>
            <li><strong className="text-foreground">Email:</strong> hello@dentalini.com</li>
            <li><strong className="text-foreground">Address:</strong> 123 Smile Ave, Your City</li>
          </ul>
        </div>
        <div className="rounded-xl border overflow-hidden">
          <iframe
            title="Dentalini Smile Studio map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15,51.5,-0.12,51.52&layer=mapnik"
            className="h-64 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
