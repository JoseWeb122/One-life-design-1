import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { company, type Service } from "@/data/site";
import { Button, Img, Reveal, container } from "./ui";
import { cn } from "@/utils/cn";

/* Standard editorial service card with hover-reveal detail */
export function ServiceCard({ s, delay = 0, className }: { s: Service; delay?: number; className?: string }) {
  return (
    <Reveal delay={delay} className={className}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgba(10,37,64,0.4)] focus-within:-translate-y-1 focus-within:border-brand/40">
        <div className="relative aspect-[16/10] overflow-hidden bg-mist">
          <Img
            src={s.image}
            alt={s.imageAlt}
            className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden />
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-leaf-deep">{s.kicker}</p>
          <h3 className="mt-3 font-display text-[1.55rem] font-medium leading-tight text-ink">
            <Link
              to={`/services/${s.slug}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-offset-[-3px]"
            >
              {s.title}
            </Link>
          </h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-slate">{s.short}</p>

          <div className="more">
            <div className="overflow-hidden">
              <dl className="mt-5 space-y-3 border-t border-line pt-5 text-[14px] leading-relaxed">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-deep">Addresses</dt>
                  <dd className="mt-1 text-slate">{s.challenge}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-deep">Intended outcome</dt>
                  <dd className="mt-1 text-slate">{s.outcome}</dd>
                </div>
              </dl>
            </div>
          </div>

          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14.5px] font-medium text-brand">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
            <span className="sr-only"> about {s.title}</span>
          </span>
        </div>
      </article>
    </Reveal>
  );
}

/* Final conversion band */
export function CTABand({
  title = "Ready to bring structured wellness screening to your organization?",
  text = "Tell us about your team, location, and goals. We'll discuss the right screening program and next steps. Pricing is customized after consultation.",
  className,
}: {
  title?: string;
  text?: string;
  className?: string;
}) {
  return (
    <section
      className={cn("on-dark relative overflow-hidden bg-ink text-white", className)}
      aria-labelledby="cta-title"
    >
      <div className="hairlines absolute inset-0" aria-hidden />
      {/* Echo of the logo's ring */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border-[28px] border-brand/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-52 -left-24 h-[26rem] w-[26rem] rounded-full border border-leaf/30"
        aria-hidden
      />
      <div className={cn(container, "relative py-20 sm:py-28")}>
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-leaf">
            <span className="h-px w-8 bg-leaf" aria-hidden /> Start a conversation
          </p>
          <h2 id="cta-title" className="mt-6 font-display text-[2.2rem] font-medium leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/75">{text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/contact" variant="leaf">
              Book a Consultation Today
            </Button>
            <a
              href={company.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/30 px-6 text-[15px] font-medium transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              <Phone className="h-4 w-4" aria-hidden /> {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full border-[22px] border-brand/10"
        aria-hidden
      />
      <div className={cn(container, "relative pb-14 pt-14 sm:pb-20 sm:pt-20")}>
        <p className="rise flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-deep">
          <span className="h-px w-8 bg-brand" aria-hidden /> {eyebrow}
        </p>
        <h1
          className="rise mt-6 max-w-4xl font-display text-[2.4rem] font-medium leading-[1.06] sm:text-5xl lg:text-[3.8rem]"
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="rise mt-6 max-w-2xl text-[17.5px] leading-relaxed text-slate"
            style={{ "--d": "220ms" } as React.CSSProperties}
          >
            {lead}
          </p>
        )}
        {children && (
          <div className="rise mt-8" style={{ "--d": "320ms" } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
