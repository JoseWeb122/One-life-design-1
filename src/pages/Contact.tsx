import { useLocation } from "react-router-dom";
import { CalendarClock, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { company } from "@/data/site";
import { Reveal, container, usePageMeta } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { cn } from "@/utils/cn";

export default function Contact() {
  usePageMeta(
    "Contact & Schedule a Consultation | One Life One Mile Consulting, Inc.",
    "Request a screening event or schedule a consultation with One Life One Mile Consulting, Inc. in Houston, TX. Call (888) 543-3763 or email info@olomconsulting.org."
  );
  const { state } = useLocation();
  const defaultService = (state as { service?: string } | null)?.service ?? "";

  const rows = [
    { i: Phone, k: "Phone", v: company.phone, href: company.phoneHref },
    { i: Mail, k: "Email", v: company.email, href: company.emailHref },
    {
      i: MapPin,
      k: "Office",
      v: `${company.address[0]}, ${company.address[1]}`,
      href: company.mapsHref,
      ext: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to bring structured wellness screening to your organization?"
        lead="Share a few details about your group and goals. We'll follow up to discuss the right program. Pricing is customized after consultation."
      />

      <section className="bg-paper py-14 sm:py-20" aria-label="Contact and consultation request">
        <div className={cn(container, "grid gap-12 lg:grid-cols-12 lg:gap-14")}>
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <h2 className="font-display text-[1.8rem] font-medium leading-tight">Reach us directly</h2>
                <ul className="mt-7 divide-y divide-line border-y border-line">
                  {rows.map((r) => (
                    <li key={r.k}>
                      <a
                        href={r.href}
                        {...(r.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-start gap-4 py-5"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand ring-1 ring-line transition-colors group-hover:bg-brand group-hover:text-white">
                          <r.i className="h-5 w-5" aria-hidden />
                        </span>
                        <span>
                          <span className="block text-[12px] font-semibold uppercase tracking-[0.15em] text-slate">{r.k}</span>
                          <span className="mt-0.5 block break-words text-[16px] font-medium text-ink group-hover:text-brand">
                            {r.v}
                            {r.ext && <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" aria-hidden />}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={100} className="mt-8 rounded-xl bg-ink p-6 text-white">
                <CalendarClock className="h-6 w-6 text-leaf" aria-hidden />
                <p className="mt-3 font-display text-[1.2rem] leading-snug">Plan ahead where you can.</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/70">
                  Corporate and community events require advance coordination. We recommend scheduling at least 3–4
                  weeks ahead when possible.
                </p>
              </Reveal>
              <Reveal delay={160} className="mt-4 rounded-xl border border-line bg-white p-5 text-[13.5px] leading-relaxed text-slate">
                <strong className="text-ink">Emergency?</strong> We don't provide emergency care. If you're
                experiencing a medical emergency, call 911 immediately.
              </Reveal>
            </div>
          </aside>
          <div className="lg:col-span-8">
            <ContactForm defaultService={defaultService} />
          </div>
        </div>
      </section>
    </>
  );
}
