import { faqs } from "@/data/site";
import { Reveal, container, usePageMeta } from "@/components/ui";
import { CTABand, PageHero } from "@/components/sections";
import { FAQ } from "@/components/FAQ";
import { cn } from "@/utils/cn";

export default function FaqPage() {
  usePageMeta(
    "Frequently Asked Questions | One Life One Mile Consulting, Inc.",
    "Answers about preventive screening services, third-party vendors, event scheduling, nationwide coordination, and pricing from One Life One Mile Consulting, Inc."
  );
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        lead="Clear answers about what we do, how events are scheduled, and how pricing works."
      />
      <section className="bg-white py-16 sm:py-24">
        <div className={cn(container, "max-w-4xl")}>
          <Reveal>
            <FAQ items={faqs} idPrefix="faq" />
          </Reveal>
        </div>
      </section>
      <CTABand title="Still have a question?" text="Call or send us a note. We're happy to talk through your situation." />
    </>
  );
}
