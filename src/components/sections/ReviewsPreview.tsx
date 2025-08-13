import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah M.",
    text:
      "The most calming dental experience I’ve ever had. The team is so kind and gentle.",
  },
  {
    name: "Emily R.",
    text:
      "Beautiful clinic, modern technology, and a dentist who truly listens.",
  },
  {
    name: "Lina P.",
    text:
      "I was nervous at first, but they made me feel comfortable every step of the way!",
  },
];

const ReviewsPreview = () => {
  return (
    <section className="container mx-auto py-16" aria-labelledby="reviews-heading">
      <h2 id="reviews-heading" className="mb-2 text-center text-3xl font-semibold text-primary">What Patients Say</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
        Real stories from people who chose a gentler approach to dental care.
      </p>
      <Carousel>
        <CarouselContent className="-ml-5 pb-5">
          {testimonials.map((t) => (
            <CarouselItem key={t.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-none shadow-lg">
                <CardHeader>
                  <div>
                    <div className="flex gap-4 items-center">
                    <div className="w-[50px] h-[50px] bg-[#0E2F80] rounded-full overflow-hidden">
                      <img src="/hero-doctor.png" alt="" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="text-[#0B131E]  font-bold">Samantha Madigan</p>
                      <p className="text-xs">Advocate</p>
                    </div>
                  </div>
                  
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">“{t.text}”</p>
                  <p className="font-medium">{t.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ReviewsPreview;
