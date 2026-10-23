import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { company, nav, services } from "@/data/site";
import { Logo } from "./Logo";
import { Button, container } from "./ui";
import { cn } from "@/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const [mobSvc, setMobSvc] = useState(false);
  const loc = useLocation();
  const ddRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDd(false);
    setMobSvc(false);
  }, [loc.pathname, loc.key]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDd(false);
        setOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const link =
    "relative px-3 py-2 text-[14.5px] font-medium text-ink/80 transition-colors hover:text-brand";

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-paper/90 shadow-[0_8px_30px_-18px_rgba(10,37,64,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-paper"
      )}
    >
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
          document.getElementById("main")?.scrollIntoView();
        }}
        className="sr-only z-[60] rounded bg-ink px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <div className={cn(container, "flex items-center justify-between transition-all duration-300", scrolled ? "h-[68px]" : "h-[80px]")}>
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.label}
                  ref={ddRef}
                  className="relative"
                  onMouseEnter={() => {
                    window.clearTimeout(closeTimer.current);
                    setDd(true);
                  }}
                  onMouseLeave={() => {
                    closeTimer.current = window.setTimeout(() => setDd(false), 140);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={dd}
                    aria-haspopup="true"
                    aria-controls="services-menu"
                    onClick={() => setDd((v) => !v)}
                    className={cn(link, "inline-flex items-center gap-1", loc.pathname.startsWith("/services") && "text-brand")}
                  >
                    Services
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", dd && "rotate-180")} aria-hidden />
                  </button>
                  <div
                    id="services-menu"
                    className={cn(
                      "absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3 transition-all duration-200",
                      dd ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                    )}
                  >
                    <div className="rounded-xl border border-line bg-white p-2 shadow-[0_30px_60px_-24px_rgba(10,37,64,0.35)]">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          tabIndex={dd ? 0 : -1}
                          className="group flex items-start gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-mist focus-visible:bg-mist"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" aria-hidden />
                          <span>
                            <span className="block text-[14.5px] font-medium text-ink group-hover:text-brand">
                              {s.title}
                            </span>
                            <span className="block text-[12.5px] text-slate">{s.kicker}</span>
                          </span>
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        tabIndex={dd ? 0 : -1}
                        className="mt-1 block rounded-lg border-t border-line px-4 py-3 text-[13.5px] font-medium text-brand hover:bg-mist"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            if (item.scrollTo) {
              return (
                <Link key={item.label} to={item.to} state={{ scrollTo: item.scrollTo }} className={link}>
                  {item.label}
                </Link>
              );
            }
            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => cn(link, isActive && "text-brand")}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.labsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-2 text-[14.5px] font-medium text-ink/80 transition-colors hover:text-brand"
          >
            Order Your Labs <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            <span className="sr-only">(opens partner site in a new tab)</span>
          </a>
          <Button to="/contact" className="min-h-11 px-5 py-2.5 text-[14.5px]">
            Schedule a Consultation
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand lg:hidden"
        >
          <Menu className={cn("absolute h-5 w-5 transition-all duration-300", open ? "rotate-90 opacity-0" : "rotate-0 opacity-100")} aria-hidden />
          <X className={cn("absolute h-5 w-5 transition-all duration-300", open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0")} aria-hidden />
        </button>
      </div>
    </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-paper transition-all duration-500 ease-out lg:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        )}
        style={{ top: scrolled ? 68 : 80 }}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className={cn(container, "flex flex-col py-6")}>
          {nav.map((item, i) => {
            const style = { transitionDelay: open ? `${80 + i * 45}ms` : "0ms" };
            const itemCls = cn(
              "border-b border-line py-4 font-display text-2xl text-ink transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            );
            if (item.children) {
              return (
                <div key={item.label} className={itemCls} style={style}>
                  <button
                    type="button"
                    aria-expanded={mobSvc}
                    onClick={() => setMobSvc((v) => !v)}
                    className="flex w-full items-center justify-between text-left"
                    tabIndex={open ? 0 : -1}
                  >
                    Services
                    <ChevronDown className={cn("h-5 w-5 transition-transform", mobSvc && "rotate-180")} aria-hidden />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      mobSvc ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-1 pb-1 pl-1 font-sans text-base">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              tabIndex={open && mobSvc ? 0 : -1}
                              className="block py-2.5 text-slate hover:text-brand"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link to="/services" tabIndex={open && mobSvc ? 0 : -1} className="block py-2.5 font-medium text-brand">
                            All services →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.to}
                state={item.scrollTo ? { scrollTo: item.scrollTo } : undefined}
                tabIndex={open ? 0 : -1}
                className={itemCls}
                style={style}
              >
                {item.label}
              </Link>
            );
          })}
          <div
            className={cn(
              "mt-8 flex flex-col gap-3 transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
            style={{ transitionDelay: open ? "380ms" : "0ms" }}
          >
            <Button to="/contact" className="w-full">
              Schedule a Consultation
            </Button>
            <Button href={company.labsUrl} variant="outline" className="w-full">
              Order Your Labs
            </Button>
            <a href={company.phoneHref} className="mt-2 text-center text-[15px] text-slate">
              Or call <span className="font-medium text-ink">{company.phone}</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
