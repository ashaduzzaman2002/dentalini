import { Button } from "../ui/button";

const AboutPreview = () => {
  return (
    <div className="">
      <section
        className="container mx-auto py-16"
        aria-labelledby="about-heading"
      >
        <div className="grid items-center gap-[120px] md:grid-cols-2">
          <div className="h-full aspect-square relative">
            <div className="w-full h-full p-1 bg-white rounded-full relative z-10">
              <img
                className="w-full h-full object-cover rounded-full"
                src="/thumbnail_teeth2.jpg"
                alt=""
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-[#0091BA]/0 via-[#0091BA]/30 to-[#0091BA] rounded-full w-full h-full"></div>
            <div className="w-[190px] aspect-square bg-white p-2 absolute -bottom-[20px] -right-[20px] z-10 rounded-full">
              <div className="bg-[#0E2F80] w-full h-full text-white flex flex-col justify-center items-center rounded-full">
                <h3 className="text-5xl font-bold">
                  {new Date().getFullYear() - 2018 + 1}+
                </h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>

          <div>
            <h2
              id="about-heading"
              className="mb-3 text-3xl font-semibold text-primary"
            >
              Who We Are
            </h2>
            <p className="text-muted-foreground mb-2">
              At Dentalini we believe that everybody deserves good health. It's
              all about giving you quality treatment by Dentists that are
              experienced, gentle and accessible for adults and children.
            </p>
            <p className="text-muted-foreground mb-2">
              We believe in a holistic approach to dentistry, one which
              prioritises compassion, enthusiasm and care; putting a patient’s
              needs first. Every patient’s treatment plan is unique and tailored
              to the individual, and revolves around the options we can provide
              based on what they would like to achieve, while also considering
              their personal and financial circumstances.
            </p>
            <p className="text-muted-foreground mb-2">
              We offer a range of general dental health procedures to ensure
              teeth are in optimum condition. We strongly believe that
              prevention is better than cure. The key to successful oral health
              is identifying and treating potential problems before they become
              an issue.
            </p>
            <p className="text-muted-foreground mb-2">
              We use the latest innovative procedures to repair tooth decay,
              tooth trauma or any disease of the teeth and gums. The goal is to
              prevent, uncover or treat problems as early as possible.
            </p>
            <p className="text-muted-foreground">
              The practice has state-of-art machines including in-house CBCT
              (3-D X-ray) machine, Intra-Oral scanner and Philips Zoom Teeth
              Whitening.
            </p>

            <Button variant="hero" size="lg" className="mt-10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPreview;
