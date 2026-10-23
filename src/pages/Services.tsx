import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";
import { company, services } from "@/data/site";
import { Button, Img, Reveal, container, usePageMeta } from "@/components/ui";
import { CTABand, PageHero, ServiceCard } from "@/components/sections";
import { cn } from "@/utils/cn";

export default function Services() {
  usePageMeta(
    "Services | One Life One Mile Consulting, Inc.",
    "Preventive health screening programs, corporate and occupational health, laboratory testing, mobile healthcare services, and DNA testing from One Life One Mile Consulting, Inc."
  );
  const [primary, ...rest] = services;
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Preventive health services, delivered where you are."
        lead="From structured screening programs for transportation and community organizations to personal lab work and DNA testing, every service is designed to be professional, compassionate, and convenient."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/contact">Schedule a Consultation</Button>
          <Button href={company.labsUrl} variant="outline">
            Order Your Labs
          </Button>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className={container}>
          <Reveal>
            <article className="group on-dark grid overflow-hidden rounded-2xl bg-ink text-white lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden lg:col-span-6 lg:aspect-auto lg:min-h-[440px]">
                <Img src={primary.image} alt={primary.imageAlt} className="transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                <span className="absolute left-5 top-5 rounded-full bg-leaf px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink">
                  Primary offering
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-6 lg:p-14">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-leaf">{primary.kicker}</p>
                <h2 className="mt-4 font-display text-[2rem] font-medium leading-[1.1] sm:text-[2.6rem]">{primary.title}</h2>
                <p className="mt-5 text-[16.5px] leading-relaxed text-white/75">{primary.intro}</p>
                <ul className="mt-6 space-y-2 text-[15px] text-white/80">
                  {primary.includes.slice(0, 3).map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button to={`/services/${primary.slug}`} variant="leaf">
                    Learn more<span className="sr-only"> about {primary.title}</span>
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
            {rest.map((s, i) => (
              <ServiceCard key={s.slug} s={s} delay={(i % 2) * 90} className={cn(i % 2 === 1 && "md:mt-12")} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20" aria-labelledby="notes-h">
        <div className={cn(container, "grid gap-10 lg:grid-cols-12")}>
          <Reveal className="lg:col-span-4">
            <h2 id="notes-h" className="font-display text-3xl font-medium leading-tight">Important to know</h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8">
            <ul className="space-y-5">
              {[
                "Our services are preventive screening services only. We do not provide medical diagnosis, treatment, or emergency care. In a medical emergency, call 911.",
                "Certain services may be performed by qualified independent third-party vendors, who operate independently and maintain their own compliance standards.",
                "Pricing is customized based on event size, services selected, staffing, laboratory coordination, and location. Quotes are provided after consultation.",
              ].map((t) => (
                <li key={t} className="flex gap-4 text-[16px] leading-relaxed text-slate">
                  <Info className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/faq" className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-brand">
              <span className="link-u">Read the full FAQ</span> <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
