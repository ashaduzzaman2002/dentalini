import SubHeader from "@/components/layout/SubHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => (
  <div>
    <SubHeader
      title="Frequently Asked Questions"
      description="If you don’t see your question here, we’re happy to help by phone or email."
    />
    <section className="container mx-auto py-12">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Do you offer gentle care for anxious patients?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. We explain each step, use comfort-first techniques, and
            create a calm, feminine environment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you accept new patients?</AccordionTrigger>
          <AccordionContent>
            Yes! We welcome new patients and tailor visits to your needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What payment options are available?
          </AccordionTrigger>
          <AccordionContent>
            We accept major cards and offer flexible plans for select
            treatments.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default Faqs;
