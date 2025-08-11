import Page from "./_Page";

const reviews = [
  { name: "Sarah M.", text: "The most calming dental experience I’ve ever had. The team is so kind and gentle." },
  { name: "Emily R.", text: "Beautiful clinic, modern technology, and a dentist who truly listens." },
  { name: "Lina P.", text: "I was nervous at first, but they made me feel comfortable every step of the way!" },
  { name: "Hannah K.", text: "From booking to treatment, everything felt effortless and caring." },
];

const ReviewsPage = () => (
  <Page title="Patient Reviews | Dentalini" description="Read patient reviews and experiences at Dentalini Smile Studio.">
    <section className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold text-primary">Patient Reviews</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">We are honored to care for our community. Here’s what people are saying.</p>
      </header>
      <ul className="grid gap-6 md:grid-cols-2">
        {reviews.map((r, i) => (
          <li key={i} className="rounded-xl border p-6">
            <p className="mb-3 text-muted-foreground">“{r.text}”</p>
            <p className="font-medium">{r.name}</p>
          </li>
        ))}
      </ul>
    </section>
  </Page>
);

export default ReviewsPage;
