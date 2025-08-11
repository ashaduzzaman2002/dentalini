const AboutPreview = () => {
  return (
    <section className="container mx-auto py-16" aria-labelledby="about-heading">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 id="about-heading" className="mb-3 text-3xl font-semibold text-primary">About Us</h2>
          <p className="text-muted-foreground">
            Dentalini Smile Studio is a women-led clinic dedicated to gentle, modern dental care. Our philosophy is simple: your comfort comes first. We’ve curated a calm, feminine atmosphere and use the latest technology to keep your smile healthy and radiant.
          </p>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-accent/10 to-primary/5 p-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-wide text-muted-foreground">Our Promise</p>
          <p className="text-lg text-foreground">We listen, we care, and we craft treatment plans that feel right for you.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
