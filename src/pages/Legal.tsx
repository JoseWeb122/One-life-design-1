import { company } from "@/data/site";
import { Button, Reveal, container, usePageMeta } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { cn } from "@/utils/cn";

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
  const liveUrl = isPrivacy ? company.privacyUrl : company.termsUrl;
  usePageMeta(
    `${title} | One Life One Mile Consulting, Inc.`,
    `${title} information for the One Life One Mile Consulting, Inc. website redesign prototype.`
  );
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        lead="The official legal text is published by One Life One Mile Consulting, Inc. and is not reproduced or altered in this design mockup."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className={cn(container, "max-w-3xl")}>
          <Reveal className="space-y-10 text-[17px] leading-relaxed text-slate">
            <div>
              <h2 className="font-display text-2xl font-medium text-ink">Official {title.toLowerCase()}</h2>
              <p className="mt-3">
                The current, authoritative {title.toLowerCase()} for One Life One Mile Consulting, Inc. is available on
                the company's live website. Please refer to it for all legal terms.
              </p>
              <div className="mt-6">
                <Button href={liveUrl}>Read the official {title}</Button>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium text-ink">About this prototype</h2>
              <p className="mt-3">
                This website is a frontend design mockup. It does not collect, transmit, or store personal information.
                The consultation form validates entries in your browser and displays a demonstration confirmation only.
                Nothing you type is sent to One Life One Mile Consulting, Inc.
              </p>
              <p className="mt-4">
                Before launch, the final privacy and terms pages should be replaced with the company's approved legal
                text.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium text-ink">Questions</h2>
              <p className="mt-3">
                Contact us at{" "}
                <a className="font-medium text-brand underline underline-offset-4" href={company.emailHref}>
                  {company.email}
                </a>{" "}
                or{" "}
                <a className="font-medium text-brand underline underline-offset-4" href={company.phoneHref}>
                  {company.phone}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
