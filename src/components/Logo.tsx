import { Link } from "react-router-dom";
import { asset, company } from "@/data/site";
import { cn } from "@/utils/cn";

export function Logo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${company.name} — home`}
      className={cn("group flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-[8deg]",
          light && "bg-white"
        )}
      >
        <img
          src={asset("brand/emblem.png")}
          alt=""
          width={240}
          height={258}
          className="h-10 w-auto"
        />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-[19px] font-medium tracking-tight",
            light ? "text-white" : "text-ink"
          )}
        >
          One Life One Mile
        </span>
        <span
          className={cn(
            "mt-1 block text-[10.5px] font-semibold uppercase tracking-[0.26em]",
            light ? "text-leaf" : "text-leaf-deep"
          )}
        >
          Consulting, Inc.
        </span>
      </span>
    </Link>
  );
}
