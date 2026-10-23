import { Droplets, Truck, Building2, Dna, HeartPulse, Handshake, ArrowUpRight } from "lucide-react";
import { company, principles } from "@/data/site";
import { Button, Eyebrow, Img, Reveal, SectionHead, container, usePageMeta } from "@/components/ui";
import { CTABand, PageHero } from "@/components/sections";
import { cn } from "@/utils/cn";

const sets = [
  { i: Droplets, t: "Comprehensive laboratory testing", d: "Hundreds of affordable lab tests, collected by professional mobile phlebotomists." },
  { i: Truck, t: "Mobile healthcare services", d: "Blood collection and select services at your home, office, community center, church, and more." },
  { i: Building2, t: "Corporate & occupational health", d: "Wellness programs, drug testing, biometric screenings, and employee health services." },
  { i: Dna, t: "DNA testing services", d: "Confidential, reliable testing for personal, legal, and immigration needs." },
  { i: HeartPulse, t: "Preventive health focus", d: "Screenings, education, and wellness resources that help detect concerns early." },
  { i: Handshake, t: "Experienced professionals", d: "Over 25 years of healthcare experience, with integrity and compassion." },
];

export default function About() {
  usePageMeta(
    "About | One Life One Mile Consulting, Inc.",
    "Founded by healthcare professional Tremcia Roddy, One Life One Mile Consulting, Inc. makes preventive healthcare simple, convenient, and accessible."
  );
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Making preventive healthcare simple, convenient, and accessible for everyone."
        lead="One Life One Mile Consulting, Inc. brings high-quality laboratory and wellness services directly to individuals, families, employers, and communities."
      />

      <section className="bg-white py-20 sm:py-28" aria-labelledby="story-h">
        <div className={cn(container, "grid items-start gap-12 lg:grid-cols-12 lg:gap-16")}>
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <Img src="img/care-conversation.jpg" alt="A healthcare professional speaking kindly with a client" />
              </div>
              <p className="mt-3 text-[12px] text-slate">Illustrative photography. To be replaced with OLOM's own images.</p>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
              <h2 id="story-h" className="mt-5 font-display text-[2rem] font-medium leading-[1.1] sm:text-4xl lg:text-[2.7rem]">
                Founded by a healthcare professional with one mission.
              </h2>
              <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-slate">
                <p>
                  One Life One Mile Consulting, Inc. was founded by healthcare professional{" "}
                  <strong className="font-semibold text-ink">{company.founder}</strong>, who brings more than 25 years
                  of healthcare experience. It was created with one mission:{" "}
                  <strong className="font-semibold text-ink">to make preventive healthcare simple, convenient, and accessible for everyone.</strong>
                </p>
                <p>
                  We believe early detection, education, and proactive care can improve lives and strengthen
                  communities. Whether you're ordering personal lab work, scheduling a mobile blood draw, organizing a
                  corporate wellness event, or partnering with us on community health initiatives, our team is committed
                  to delivering professional, compassionate, and reliable service.
                </p>
                <p>
                  We proudly serve individuals, families, employers, healthcare providers, schools, churches, nonprofit
                  organizations, and communities nationwide.
                </p>
              </div>
              <a
                href={company.socials[3].href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand"
              >
                <span className="link-u">{company.founder} on LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="on-dark relative overflow-hidden bg-ink py-20 text-white sm:py-28" aria-label="Our mission">
        <div className="hairlines absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full border-[24px] border-brand/25" aria-hidden />
        <div className={cn(container, "relative")}>
          <Reveal className="mx-auto max-w-4xl text-center">
            <Eyebrow light className="justify-center">Our mission</Eyebrow>
            <p className="mt-8 font-display text-[2rem] font-medium leading-[1.15] sm:text-5xl">
              Providing innovative mobile healthcare solutions—<em className="italic text-leaf">one life, one mile at a time.</em>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28" aria-labelledby="sets-h">
        <div className={container}>
          <SectionHead eyebrow="What sets us apart" title={<span id="sets-h">Convenient. Professional. Trusted.</span>} />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {sets.map((s, i) => (
              <Reveal as="li" key={s.t} delay={(i % 3) * 70} className="group bg-white p-8 transition-colors hover:bg-mist">
                <s.i className="h-7 w-7 text-brand transition-transform duration-300 group-hover:-translate-y-1" aria-hidden />
                <h3 className="mt-6 font-display text-[1.35rem] font-medium leading-tight">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">{s.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="philosophy" className="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="philosophy-h">
        <div className={cn(container, "grid gap-12 lg:grid-cols-12 lg:gap-16")}>
          <Reveal className="lg:col-span-6">
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 id="philosophy-h" className="mt-5 font-display text-[2rem] font-medium leading-[1.1] sm:text-4xl lg:text-[2.9rem]">
              Preventive care should be accessible, professional, and <em className="italic text-brand">intentional.</em>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-slate">
              Transportation professionals keep our communities and industries moving forward. Yet, as stated on our
              current website, over 50% of commercial drivers have at least one major cardiovascular risk factor.
              Hypertension, diabetes, and untreated metabolic conditions significantly increase long-term health costs
              and safety risks.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-slate">
              We believe structured screening programs strengthen individuals, organizations, and entire communities.
            </p>
            <p className="mt-6 text-[12.5px] text-slate/80">
              Statistic is quoted from the current OLOM website. A published source should be added before launch.
            </p>
            <div className="mt-8">
              <Button to="/contact">Talk with our team</Button>
            </div>
          </Reveal>
          <ol className="lg:col-span-6">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60} className="group flex gap-6 border-b border-line py-6 first:pt-0">
                <span className="font-display text-3xl font-light italic text-brand/40 transition-colors group-hover:text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.4rem] font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-[15.5px] leading-relaxed text-slate">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTABand />
    </>
  );
}
