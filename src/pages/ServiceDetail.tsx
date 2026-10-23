import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check, Info } from "lucide-react";
import { company, getService, services } from "@/data/site";
import { Button, Eyebrow, Img, Reveal, SectionHead, container, usePageMeta } from "@/components/ui";
import { CTABand, ServiceCard } from "@/components/sections";
import { cn } from "@/utils/cn";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function ServiceDetail() {
  const { slug = "" } = useParams();
  const s = getService(slug);
  usePageMeta(
    s ? `${s.title} | One Life One Mile Consulting, Inc.` : "Service not found",
    s ? s.short : "Service not found"
  );
  if (!s) return <Navigate to="/services" replace />;

  const related = s.related.map((r) => getService(r)).filter(Boolean) as typeof services;
  const second = related[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div className={cn(container, "grid items-center gap-10 pb-14 pt-8 lg:grid-cols-12 lg:gap-14 lg:pb-20 lg:pt-14")}>
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="rise text-[13px] text-slate">
              <Link to="/services" className="link-u hover:text-brand">Services</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page" className="text-ink">{s.title}</span>
            </nav>
            <p className="rise mt-8 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.17em] text-brand-deep" style={d(60)}>
              <span className="h-px w-8 bg-brand" aria-hidden /> {s.kicker}
            </p>
            <h1 className="rise mt-5 font-display text-[2.4rem] font-medium leading-[1.06] sm:text-5xl xl:text-[3.5rem]" style={d(120)}>
              {s.heroHeadline}
            </h1>
            <p className="rise mt-6 max-w-xl text-[17.5px] leading-relaxed text-slate" style={d(240)}>
              {s.intro}
            </p>
            <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={d(360)}>
              <Button to="/contact" state={{ service: s.slug }}>
                Schedule a Consultation
              </Button>
              {s.cta ? (
                <Button href={s.cta.href} variant="outline">
                  {s.cta.label}
                </Button>
              ) : (
                <Button to="/services" variant="outline">
                  All services
                </Button>
              )}
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="absolute -bottom-4 -right-4 left-10 top-8 rounded-2xl bg-mist" aria-hidden />
            <div className="mask-in relative aspect-[4/3.4] overflow-hidden rounded-2xl shadow-[0_40px_80px_-35px_rgba(10,37,64,0.5)]">
              <Img src={s.image} alt={s.imageAlt} eager />
            </div>
          </div>
        </div>
      </section>

      {/* Audience & challenge */}
      <section className="bg-white py-20 sm:py-24" aria-labelledby="who-h">
        <div className={cn(container, "grid gap-12 lg:grid-cols-12 lg:gap-16")}>
          <Reveal className="lg:col-span-5">
            <Eyebrow>Is this right for you?</Eyebrow>
            <h2 id="who-h" className="mt-5 font-display text-[1.9rem] font-medium leading-[1.12] sm:text-4xl">
              Who this service is for
            </h2>
            <ul className="mt-7 space-y-3">
              {s.audience.map((a) => (
                <li key={a} className="flex gap-3 text-[16.5px] leading-relaxed text-ink">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/30 text-leaf-deep">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            <Reveal delay={60} className="rounded-xl border border-line bg-paper p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-deep">The challenge</p>
              <p className="mt-3 font-display text-[1.3rem] leading-snug">{s.challenge}</p>
            </Reveal>
            <Reveal delay={140} className="rounded-xl border border-leaf/60 bg-leaf/10 p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-leaf-deep">Intended outcome</p>
              <p className="mt-3 font-display text-[1.3rem] leading-snug">{s.outcome}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-paper py-20 sm:py-24" aria-labelledby="incl-h">
        <div className={container}>
          <SectionHead eyebrow="What's included" title={<span id="incl-h">What you can expect</span>} />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {s.includes.map((t, i) => (
              <Reveal as="li" key={t} delay={(i % 2) * 70} className="flex gap-5 bg-white p-7">
                <span className="font-display text-2xl font-light italic text-brand/50">{String(i + 1).padStart(2, "0")}</span>
                <span className="pt-1 text-[16.5px] leading-relaxed text-ink">{t}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="on-dark relative overflow-hidden bg-ink py-20 text-white sm:py-24" aria-labelledby="appr-h">
        <div className="hairlines absolute inset-0" aria-hidden />
        <div className={cn(container, "relative")}>
          <SectionHead light eyebrow="Our approach" title={<span id="appr-h">A simple path from request to result.</span>} />
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {s.approach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 100} className="relative border-t border-white/20 pt-8">
                <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-leaf" aria-hidden />
                <p className="font-display text-4xl font-light italic text-leaf/80">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-[1.6rem] font-medium">{a.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-white/70">{a.text}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-12 max-w-2xl border-t border-white/15 pt-5 text-[12.5px] text-white/50">
            Proposed three-step summary for client review; adjust to match OLOM's actual process.
          </p>
        </div>
      </section>

      {/* Notes + alternate image */}
      <section className="bg-white py-20 sm:py-24" aria-labelledby="notes-h">
        <div className={cn(container, "grid items-center gap-12 lg:grid-cols-12 lg:gap-16")}>
          {second && (
            <Reveal className="lg:col-span-5">
              <div className="aspect-[5/4] overflow-hidden rounded-2xl">
                <Img src={second.image} alt={second.imageAlt} />
              </div>
            </Reveal>
          )}
          <Reveal delay={80} className="lg:col-span-7">
            <Eyebrow>Good to know</Eyebrow>
            <h2 id="notes-h" className="mt-5 font-display text-[1.9rem] font-medium leading-[1.12] sm:text-4xl">
              Clear expectations, from the start.
            </h2>
            <ul className="mt-7 space-y-4 text-[16px] leading-relaxed text-slate">
              {s.note && (
                <li className="flex gap-4">
                  <Info className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  {s.note}
                </li>
              )}
              <li className="flex gap-4">
                <Info className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden />
                Our services are preventive screening services only, not medical diagnosis, treatment, or emergency
                care. In a medical emergency, call 911.
              </li>
              <li className="flex gap-4">
                <Info className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden />
                {company.compliance}. Pricing is customized after consultation.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="bg-paper py-20 sm:py-24" aria-labelledby="rel-h">
        <div className={container}>
          <div className="flex items-end justify-between gap-6">
            <SectionHead eyebrow="Related services" title={<span id="rel-h">You may also be interested in</span>} />
            <Link to="/services" className="hidden items-center gap-2 text-[15px] font-medium text-brand sm:inline-flex">
              <span className="link-u">All services</span> <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((r, i) => (
              <ServiceCard key={r.slug} s={r} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Interested in ${s.title.toLowerCase()}?`}
        text="Tell us a little about your needs and we'll discuss the right next step. Pricing is customized after consultation."
      />
    </>
  );
}
