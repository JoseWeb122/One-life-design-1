import { Button, container, usePageMeta } from "@/components/ui";
import { cn } from "@/utils/cn";

export default function NotFound() {
  usePageMeta("Page not found | One Life One Mile Consulting, Inc.", "The page you were looking for could not be found.");
  return (
    <section className="bg-paper py-28 sm:py-40">
      <div className={cn(container, "max-w-2xl text-center")}>
        <p className="font-display text-7xl font-light italic text-brand/40">404</p>
        <h1 className="mt-4 font-display text-4xl font-medium">This mile doesn't lead anywhere.</h1>
        <p className="mt-4 text-[17px] text-slate">The page you were looking for isn't here. Let's get you back on the road.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Back to home</Button>
          <Button to="/services" variant="outline">
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}
