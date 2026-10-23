import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import {
  audiences,
  challenges,
  company,
  faqs,
  principles,
  process,
  services,
} from "@/data/site";
import { Button, Eyebrow, Img, Reveal, SectionHead, container, usePageMeta } from "@/components/ui";
import { CTABand, ServiceCard } from "@/components/sections";
import { FAQ } from "@/components/FAQ";
import { cn } from "@/utils/cn";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        className="pointer-events-none absolute -left-52 top-24 h-[34rem] w-[34rem] rounded-full border border-brand/15"
        aria-hidden
      />
      <div className={cn(container, "relative grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-16")}>
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="rise flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.17em] text-brand-deep">
            <span className="h-px w-8 bg-brand" aria-hidden />
            Mobile preventive health screenings
          </p>
          <h1
            className="rise mt-6 font-display text-[2.65rem] font-medium leading-[1.04] text-ink sm:text-6xl xl:text-[4.4rem]"
            style={d(100)}
          >
            Preventive screening, brought to <em className="font-medium italic text-brand">where people are.</em>
          </h1>
          <p className="rise mt-7 max-w-xl text-[17.5px] leading-relaxed text-slate" style={d(240)}>
            One Life One Mile Consulting brings professional laboratory and wellness screening services directly to
            transportation organizations, employers, families, and communities, making preventive healthcare simple,
            convenient, and accessible.
          </p>
          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={d(380)}>
            <Button to="/contact">Schedule a Consultation</Button>
            <Button to="/services" variant="outline">
              Explore Services
            </Button>
          </div>
          <ul className="rise mt-10 grid gap-3 text-[14.5px] text-ink/80 sm:grid-cols-2" style={d(520)}>
            {[
              "Founded by a healthcare professional with 25+ years of experience",
              "Coordinated nationwide, based in Houston, TX",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/30 text-leaf-deep">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-[620px] lg:ml-auto lg:mr-0">
            <div className="absolute -bottom-5 -left-5 right-8 top-10 rounded-2xl bg-ink sm:-bottom-6 sm:-left-6" aria-hidden />
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-leaf/90 mix-blend-multiply sm:h-28 sm:w-28" aria-hidden />
            <div className="mask-in relative aspect-[4/4.4] overflow-hidden rounded-2xl shadow-[0_40px_80px_-30px_rgba(10,37,64,0.55)] sm:aspect-[4/4.2]">
              <Img
                src="img/fleet-depot.jpg"
                alt="Truck drivers speaking with a healthcare professional at a pop-up screening table at a fleet depot"
                eager
                className="object-[60%_50%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" aria-hidden />
              <p className="absolute bottom-5 left-5 flex items-center gap-2 text-[13px] font-medium text-white">
                <MapPin className="h-4 w-4 text-leaf" aria-hidden /> On-site screenings for fleets &amp; communities
              </p>
            </div>
            <div className="rise absolute -bottom-8 right-2 w-[78%] rounded-xl border border-line bg-white p-5 shadow-[0_24px_50px_-24px_rgba(10,37,64,0.5)] sm:right-[-1.5rem] sm:w-72" style={d(700)}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-leaf-deep">Our mission</p>
              <p className="mt-2 font-display text-[1.05rem] leading-snug text-ink">
                Innovative mobile healthcare solutions—one life, one mile at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const items = [
    { k: "25+ years", v: "of healthcare experience behind our founder and our programs" },
    { k: "CLIA-waived", v: "testing, HIPAA & OSHA compliant" },
    { k: "Nationwide", v: "coordination, depending on event scope and staffing availability" },
    { k: "Houston, TX", v: "13100 Wortham Center Dr — our home base" },
  ];
  return (
    <section aria-label="Credibility" className="mt-8 border-y border-line bg-white sm:mt-6">
      <div className={cn(container, "grid sm:grid-cols-2 lg:grid-cols-4")}>
        {items.map((it, i) => (
          <Reveal key={it.k} delay={i * 80} className="border-t border-line py-7 first:border-t-0 sm:px-7 sm:even:border-l sm:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0 lg:first:pl-0 lg:[&:nth-child(n+2)]:border-l">
            <p className="font-display text-[1.75rem] font-medium text-ink">{it.k}</p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-slate">{it.v}</p>
          </Reveal>
        ))}
      </div>
      <p className={cn(container, "pb-4 text-[12px] text-slate/80")}>
        Credentials and experience as stated on the current One Life One Mile Consulting website.
      </p>
    </section>
  );
}

function Challenges() {
  return (
    <section className="bg-paper py-20 sm:py-28" aria-labelledby="challenges-h">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>Why it matters</Eyebrow>
                <h2 id="challenges-h" className="mt-5 font-display text-[2rem] font-medium leading-[1.1] sm:text-4xl lg:text-[2.9rem]">
                  Healthy teams keep communities moving.
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate">
                  Transportation professionals and community members are often too busy to prioritize their own
                  health. We build screening programs around the realities of their day.
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-9 hidden overflow-hidden rounded-2xl lg:block">
                <div className="aspect-[4/3]">
                  <Img
                    src="img/community-event.jpg"
                    alt="Community members receiving preventive health screenings from healthcare volunteers at a community hall"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-7">
            {challenges.map((c, i) => (
              <Reveal as="li" key={c.n} delay={i * 60} className="group border-t border-line py-9 first:border-t-0 first:pt-0 sm:py-10">
                <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
                  <span className="font-display text-5xl font-light italic text-brand/35 transition-colors group-hover:text-brand">
                    {c.n}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.65rem] font-medium leading-tight">{c.title}</h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-slate">{c.why}</p>
                    <div className="mt-5 rounded-lg border-l-2 border-leaf bg-white px-5 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-leaf-deep">How we help</p>
                      <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink">{c.help}</p>
                    </div>
                    <Link
                      to={`/services/${c.link}`}
                      className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-medium text-brand"
                    >
                      <span className="link-u">View the related service</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [primary, ...rest] = services;
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="services-h">
      <div className={container}>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHead
            eyebrow="What we offer"
            title={<span id="services-h">Screening, testing, and mobile care, built around you.</span>}
            lead="A focused set of services for individuals, employers, and community organizations, delivered by experienced healthcare professionals."
          />
          <Reveal>
            <Button to="/services" variant="outline">
              All services
            </Button>
          </Reveal>
        </div>

        {/* Primary offering */}
        <Reveal className="mt-14">
          <article className="group on-dark relative grid overflow-hidden rounded-2xl bg-ink text-white lg:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[480px]">
              <Img
                src={primary.image}
                alt={primary.imageAlt}
                className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/30 lg:to-ink/60" aria-hidden />
              <span className="absolute left-5 top-5 rounded-full bg-leaf px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink">
                Primary offering
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-5 lg:p-12">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-leaf">{primary.kicker}</p>
              <h3 className="mt-4 font-display text-[2rem] font-medium leading-[1.1] sm:text-[2.4rem]">{primary.title}</h3>
              <p className="mt-5 text-[16px] leading-relaxed text-white/75">{primary.short}</p>
              <dl className="mt-6 space-y-4 border-t border-white/15 pt-6 text-[14.5px] leading-relaxed">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-leaf">Addresses</dt>
                  <dd className="mt-1 text-white/75">{primary.challenge}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-leaf">Intended outcome</dt>
                  <dd className="mt-1 text-white/75">{primary.outcome}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <Button to={`/services/${primary.slug}`} variant="leaf">
                  Learn more
                  <span className="sr-only"> about {primary.title}</span>
                </Button>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Supporting services — asymmetric rhythm */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
          {rest.map((s, i) => (
            <ServiceCard key={s.slug} s={s} delay={(i % 2) * 90} className={cn(i % 2 === 1 && "md:mt-12")} />
          ))}
          <Reveal delay={180} className="md:mt-0">
            <div className="flex h-full min-h-[18rem] flex-col justify-between rounded-xl border border-dashed border-brand/40 bg-mist p-7 sm:p-8">
              <div>
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-deep">Order online</p>
                <h3 className="mt-3 font-display text-[1.55rem] font-medium leading-tight">Ready to order labs?</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-slate">
                  Choose your tests online through our lab-testing partner, Ulta Lab Tests, then arrange mobile
                  collection with our team.
                </p>
              </div>
              <div className="mt-7">
                <Button href={company.labsUrl} variant="primary">
                  Order Your Labs
                  <span className="sr-only"> (opens partner site in a new tab)</span>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink py-20 text-white sm:py-28" aria-labelledby="process-h">
      <div className="hairlines absolute inset-0" aria-hidden />
      <div className={cn(container, "relative")}>
        <SectionHead
          light
          eyebrow="How an engagement works"
          title={<span id="process-h">From first conversation to a well-run screening day.</span>}
          lead="A simple, collaborative path. Every program is customized to your event size, services, staffing, and location."
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-leaf/60 via-white/25 to-transparent lg:block" aria-hidden />
          {process.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 110} className="relative pl-16 lg:pl-0 lg:pr-6">
              <span className="absolute left-0 top-0 flex h-[54px] w-[54px] items-center justify-center rounded-full border border-leaf/60 bg-ink font-display text-lg text-leaf lg:static">
                {p.n}
              </span>
              {i < process.length - 1 && (
                <span className="absolute left-[27px] top-[54px] h-[calc(100%+1.5rem)] w-px bg-white/15 md:hidden" aria-hidden />
              )}
              <h3 className="font-display text-[1.6rem] font-medium lg:mt-7">{p.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-white/70">{p.text}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-14 max-w-2xl border-t border-white/15 pt-5 text-[12.5px] leading-relaxed text-white/50">
          Proposed engagement outline for client review. Scheduling guidance and pricing notes come from the current
          website; the four-step framing is editable and not an established formal methodology.
        </p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-paper py-20 sm:py-28" aria-labelledby="why-h">
      <div className={cn(container, "grid items-center gap-14 lg:grid-cols-12 lg:gap-16")}>
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[5/6] overflow-hidden rounded-2xl">
            <Img src="img/planning-session.jpg" alt="A healthcare professional and organization leaders reviewing an event plan around a conference table" className="object-[40%_50%]" />
          </div>
          <div className="absolute -bottom-6 left-5 right-5 rounded-xl bg-white p-6 shadow-[0_24px_50px_-24px_rgba(10,37,64,0.5)] sm:left-auto sm:right-[-1.5rem] sm:max-w-xs">
            <p className="font-display text-[1.15rem] leading-snug">
              “Over 25 years of healthcare experience dedicated to providing quality care with integrity and compassion.”
            </p>
            <p className="mt-3 text-[12px] text-slate">From the OLOM website</p>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>Our approach</Eyebrow>
            <h2 id="why-h" className="mt-5 font-display text-[2rem] font-medium leading-[1.1] sm:text-4xl lg:text-[2.9rem]">
              Preventive care should be accessible, professional, and <em className="italic text-brand">intentional.</em>
            </h2>
          </Reveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60} className="group grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <h3 className="font-display text-[1.25rem] font-medium transition-colors group-hover:text-brand">{p.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-slate">{p.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={100} className="mt-9">
            <Button to="/about" state={{ scrollTo: "philosophy" }} variant="outline">
              Read our philosophy
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="serve-h">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Who we serve"
              title={<span id="serve-h">One mission, many communities.</span>}
              lead="We proudly serve a wide range of people and organizations nationwide. Tell us about yours and we'll shape the program together."
            />
            <Reveal delay={100} className="mt-8">
              <Button to="/contact">Tell us about your organization</Button>
            </Reveal>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {audiences.map((a, i) => (
              <Reveal as="li" key={a} delay={(i % 2) * 70} className="group flex items-center justify-between border-b border-line py-5 transition-colors hover:border-brand">
                <span className="flex items-baseline gap-4">
                  <span className="font-display text-sm italic text-brand/50">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[1.4rem] font-medium">{a}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 -translate-x-2 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-mist py-20 sm:py-28" aria-labelledby="about-h">
      <div className={cn(container, "grid items-center gap-12 lg:grid-cols-12 lg:gap-16")}>
        <div className="order-2 lg:order-1 lg:col-span-6">
          <Reveal>
            <Eyebrow>About the company</Eyebrow>
            <h2 id="about-h" className="mt-5 font-display text-[2rem] font-medium leading-[1.1] sm:text-4xl lg:text-[2.9rem]">
              Built to make preventive healthcare simple, convenient, and accessible.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-slate">
              One Life One Mile Consulting, Inc. was founded by healthcare professional{" "}
              <strong className="font-semibold text-ink">{company.founder}</strong>, who brings more than 25 years of
              healthcare experience. We believe early detection, education, and proactive care can improve lives and
              strengthen communities.
            </p>
            <blockquote className="mt-7 border-l-2 border-leaf pl-5 font-display text-[1.3rem] italic leading-snug text-ink">
              {company.mission}
            </blockquote>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button to="/about">Our story</Button>
              <a
                href={company.socials[3].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-brand"
              >
                <span className="link-u">Connect with {company.founder.split(" ")[0]} on LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100} className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative">
            <div className="aspect-[4/4.4] overflow-hidden rounded-2xl">
              <Img src="img/care-conversation.jpg" alt="A healthcare professional speaking kindly with a client in a bright, warm room" />
            </div>
            <div className="absolute -right-3 -top-3 -z-0 h-full w-full rounded-2xl border border-brand/30" aria-hidden />
          </div>
          <p className="mt-3 text-[12px] text-slate">Illustrative photography. To be replaced with OLOM's own images.</p>
        </Reveal>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="bg-paper py-20 sm:py-28" aria-labelledby="faq-h">
      <div className={cn(container, "grid gap-12 lg:grid-cols-12 lg:gap-16")}>
        <div className="lg:col-span-4">
          <SectionHead eyebrow="Good to know" title={<span id="faq-h">Straight answers before you reach out.</span>} />
          <Reveal delay={100} className="mt-8">
            <Button to="/faq" variant="outline">
              See all questions
            </Button>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-8">
          <FAQ items={faqs.slice(0, 4)} idPrefix="home-faq" />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(
    "Mobile Preventive Health Screenings in Houston, TX | One Life One Mile Consulting, Inc.",
    "One Life One Mile Consulting, Inc. brings mobile preventive health screenings, laboratory testing, occupational health services, and wellness programs to transportation organizations, employers, and communities."
  );
  return (
    <>
      <Hero />
      <Credibility />
      <Challenges />
      <Services />
      <Process />
      <Why />
      <WhoWeServe />
      <AboutPreview />
      <FaqPreview />
      <CTABand />
    </>
  );
}
