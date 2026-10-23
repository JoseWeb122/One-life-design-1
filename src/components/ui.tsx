import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { asset } from "@/data/site";

/* ---------- Page metadata ---------- */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", description);
    const og = document.querySelector('meta[property="og:title"]');
    og?.setAttribute("content", title);
    const ogd = document.querySelector('meta[property="og:description"]');
    ogd?.setAttribute("content", description);
  }, [title, description]);
}

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={cn("reveal", seen && "is-visible", className)}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ---------- Image ---------- */
export function Img({
  src,
  alt,
  className,
  eager,
  width = 1400,
  height = 933,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <img
      src={asset(src)}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}

/* ---------- Buttons ---------- */
type Variant = "primary" | "leaf" | "outline" | "outlineLight" | "quiet";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 min-h-12 py-3 text-[15px] font-medium tracking-tight transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_-10px_rgba(15,116,188,0.7)] hover:bg-ink hover:shadow-[0_10px_28px_-10px_rgba(10,37,64,0.8)]",
  leaf: "bg-leaf text-ink hover:bg-white shadow-[0_8px_24px_-12px_rgba(142,196,55,0.8)]",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  outlineLight: "border border-white/35 text-white hover:border-white hover:bg-white hover:text-ink",
  quiet: "text-ink hover:text-brand px-0 min-h-0 py-1",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
  to?: string;
  state?: LinkProps["state"];
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  className,
  children,
  arrow = true,
  to,
  state,
  href,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow &&
        (href ? (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        ) : (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        ))}
    </>
  );
  if (to) {
    return (
      <Link to={to} state={state} className={cls}>
        {content}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}

/* ---------- Typography helpers ---------- */
export function Eyebrow({ children, light, className }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em]",
        light ? "text-leaf" : "text-brand-deep",
        className
      )}
    >
      <span aria-hidden className={cn("h-px w-8", light ? "bg-leaf" : "bg-brand")} />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  light,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-5 font-display text-[2rem] font-medium leading-[1.1] sm:text-4xl lg:text-[2.9rem]",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-5 max-w-2xl text-[17px] leading-relaxed", light ? "text-white/75" : "text-slate")}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}

export const container = "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10";
