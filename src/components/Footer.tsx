import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "@/data/site";
import { Logo } from "./Logo";
import { container } from "./ui";

const col = "text-[12px] font-semibold uppercase tracking-[0.18em] text-leaf";
const lnk = "link-u inline-block py-1 text-[15px] text-white/75 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-ink text-white">
      <div className="hairlines pointer-events-none absolute inset-0" aria-hidden />
      <div className={`${container} relative pt-16 pb-10 lg:pt-20`}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              {company.tagline} Mobile preventive health screenings, laboratory testing, occupational health services,
              DNA testing, and wellness programs for individuals, employers, and communities.
            </p>
            <p className="mt-5 inline-block rounded-full border border-white/20 px-4 py-2 text-[12.5px] text-white/80">
              {company.compliance}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className={col}>Company</h2>
              <ul className="mt-4">
                <li><Link className={lnk} to="/">Home</Link></li>
                <li><Link className={lnk} to="/about">About</Link></li>
                <li><Link className={lnk} to="/about" state={{ scrollTo: "philosophy" }}>Philosophy</Link></li>
                <li><Link className={lnk} to="/faq">FAQ</Link></li>
                <li><Link className={lnk} to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2 className={col}>Services</h2>
              <ul className="mt-4">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link className={lnk} to={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className={col}>Contact</h2>
              <ul className="mt-4 space-y-3 text-[15px] text-white/75">
                <li className="flex gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-leaf" aria-hidden />
                  <a href={company.phoneHref} className="link-u hover:text-white">{company.phone}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-leaf" aria-hidden />
                  <a href={company.emailHref} className="link-u break-all hover:text-white">{company.email}</a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-leaf" aria-hidden />
                  <a href={company.mapsHref} target="_blank" rel="noopener noreferrer" className="link-u hover:text-white">
                    {company.address[0]}
                    <br />
                    {company.address[1]}
                  </a>
                </li>
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
                {company.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3.5 py-2 text-[13px] text-white/80 transition-colors hover:border-leaf hover:text-leaf"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 rounded-xl border border-white/12 bg-white/[0.04] p-5 text-[13.5px] leading-relaxed text-white/70">
          <strong className="font-semibold text-white">Please note: </strong>
          Our services are preventive screening services only. We do not provide medical diagnosis, treatment, or
          emergency care. In a medical emergency, call 911.
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/12 pt-6 text-[13.5px] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name} All Rights Reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            <li><Link to="/privacy" className="link-u hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="link-u hover:text-white">Terms &amp; Conditions</Link></li>
            <li className="text-white/45">Design mockup — not the live website. Photography is illustrative.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
