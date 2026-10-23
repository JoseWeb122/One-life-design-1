import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/utils/cn";

export function FAQ({ items, idPrefix = "faq" }: { items: { q: string; a: string }[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3 className="font-sans">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${i}`}
                id={`${idPrefix}-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-[1.2rem] font-medium leading-snug transition-colors sm:text-[1.35rem]",
                    isOpen ? "text-brand" : "text-ink group-hover:text-brand"
                  )}
                >
                  {it.q}
                </span>
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen ? "rotate-45 border-brand bg-brand text-white" : "border-line text-ink group-hover:border-brand"
                  )}
                >
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </h3>
            <div
              id={`${idPrefix}-panel-${i}`}
              role="region"
              aria-labelledby={`${idPrefix}-btn-${i}`}
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-[16px] leading-relaxed text-slate">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
