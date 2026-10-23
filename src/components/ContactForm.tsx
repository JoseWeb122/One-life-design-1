import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { company, orgTypes, services } from "@/data/site";
import { submitInquiry, type InquiryPayload } from "@/lib/inquiry";
import { cn } from "@/utils/cn";
import { Button } from "./ui";

type Errors = Partial<Record<keyof InquiryPayload, string>>;

const empty: InquiryPayload = {
  fullName: "",
  organization: "",
  role: "",
  phone: "",
  email: "",
  orgType: "",
  service: "",
  eventDate: "",
  participants: "",
  city: "",
  state: "",
  message: "",
  privacyAck: false,
  smsTransactional: false,
  smsMarketing: false,
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: InquiryPayload): Errors {
  const e: Errors = {};
  if (!v.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!v.organization.trim()) e.organization = "Please enter your organization name.";
  if (!v.role.trim()) e.role = "Please enter your title or role.";
  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone.trim()) e.phone = "Please enter a phone number.";
  else if (digits.length < 10 || digits.length > 15) e.phone = "Enter a valid phone number, including area code.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!emailRe.test(v.email.trim())) e.email = "Enter a valid email address, like name@company.com.";
  if (!v.orgType) e.orgType = "Please select your organization type.";
  if (!v.eventDate) e.eventDate = "Please choose a preferred date.";
  else if (new Date(v.eventDate + "T00:00:00") < new Date(new Date().toDateString()))
    e.eventDate = "Please choose a date that isn't in the past.";
  const n = Number(v.participants);
  if (!v.participants) e.participants = "Please estimate the number of participants.";
  else if (!Number.isInteger(n) || n < 1) e.participants = "Enter a whole number of 1 or more.";
  if (!v.privacyAck) e.privacyAck = "Please acknowledge the privacy notice to continue.";
  return e;
}

const field =
  "w-full rounded-lg border bg-white px-4 py-3 text-[15.5px] text-ink placeholder:text-slate/60 transition-colors focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15";

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[13.5px] font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-0.5 text-brand-deep" aria-hidden>
            *
          </span>
        ) : (
          <span className="ml-1.5 font-normal text-slate">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-[12.5px] text-slate">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 flex items-start gap-1.5 text-[13px] font-medium text-red-700">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [v, setV] = useState<InquiryPayload>({ ...empty, service: defaultService });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [simFail, setSimFail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof InquiryPayload>(k: K, val: InquiryPayload[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const props = (k: keyof InquiryPayload, required = false) => ({
    id: `f-${k}`,
    name: k,
    value: v[k] as string,
    onChange: (e: { target: { value: string } }) => set(k, e.target.value as never),
    "aria-invalid": errors[k] ? (true as const) : undefined,
    "aria-describedby": errors[k] ? `f-${k}-err` : undefined,
    required: required || undefined,
    className: cn(field, errors[k] ? "border-red-600" : "border-line"),
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const errs = validate(v);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      setStatus("idle");
      formRef.current?.querySelector<HTMLElement>(`#f-${first}`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      await submitInquiry(v, { simulateFailure: simFail });
      setStatus("success");
      setTimeout(() => successRef.current?.focus(), 50);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="fade-in rounded-2xl border border-line bg-white p-8 outline-none sm:p-12"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf/25 text-leaf-deep">
          <CircleCheck className="h-7 w-7" aria-hidden />
        </span>
        <p className="mt-6 inline-block rounded-full bg-amber-100 px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-amber-900">
          Prototype demonstration
        </p>
        <h3 className="mt-4 font-display text-3xl font-medium leading-tight">
          Thank you, {v.fullName.split(" ")[0]}. This is how your confirmation would look.
        </h3>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-slate">
          <strong className="text-ink">Nothing was sent.</strong> This design mockup is not connected to One Life One
          Mile Consulting, Inc., and no information you entered was transmitted or stored. To reach the team now, call{" "}
          <a className="font-medium text-brand underline underline-offset-4" href={company.phoneHref}>
            {company.phone}
          </a>{" "}
          or email{" "}
          <a className="font-medium text-brand underline underline-offset-4" href={company.emailHref}>
            {company.email}
          </a>
          .
        </p>
        <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-line pt-6 text-[14.5px] sm:grid-cols-2">
          <div>
            <dt className="text-slate">Organization</dt>
            <dd className="font-medium">{v.organization}</dd>
          </div>
          <div>
            <dt className="text-slate">Preferred date</dt>
            <dd className="font-medium">{v.eventDate}</dd>
          </div>
          <div>
            <dt className="text-slate">Service</dt>
            <dd className="font-medium">{services.find((s) => s.slug === v.service)?.title ?? "Not specified"}</dd>
          </div>
          <div>
            <dt className="text-slate">Participants</dt>
            <dd className="font-medium">{v.participants}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            variant="outline"
            arrow={false}
            onClick={() => {
              setV({ ...empty, service: defaultService });
              setStatus("idle");
            }}
          >
            Start a new demo request
          </Button>
          <Button to="/services" variant="quiet">
            Explore services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-[0_30px_70px_-40px_rgba(10,37,64,0.35)] sm:p-9">
      <div className="mb-7 rounded-lg border border-amber-300/70 bg-amber-50 px-4 py-3 text-[13.5px] leading-relaxed text-amber-950">
        <strong>Demo form.</strong> This prototype validates your entries but does not send them anywhere. Fields mirror
        the request form on the live site.
      </div>

      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <Field id="f-fullName" label="Full name" required error={errors.fullName}>
          <input {...props("fullName", true)} type="text" autoComplete="name" />
        </Field>
        <Field id="f-organization" label="Organization name" required error={errors.organization}>
          <input {...props("organization", true)} type="text" autoComplete="organization" />
        </Field>
        <Field id="f-role" label="Title / role" required error={errors.role}>
          <input {...props("role", true)} type="text" autoComplete="organization-title" />
        </Field>
        <Field id="f-phone" label="Phone" required error={errors.phone}>
          <input {...props("phone", true)} type="tel" autoComplete="tel" inputMode="tel" placeholder="(555) 555-5555" />
        </Field>
        <Field id="f-email" label="Email" required error={errors.email} className="sm:col-span-2">
          <input {...props("email", true)} type="email" autoComplete="email" placeholder="name@company.com" />
        </Field>
        <Field id="f-orgType" label="Type of organization" required error={errors.orgType}>
          <select {...props("orgType", true)}>
            <option value="">Select organization type</option>
            {orgTypes.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field id="f-service" label="Type of service requested">
          <select {...props("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Not sure yet / other</option>
          </select>
        </Field>
        <Field id="f-eventDate" label="Preferred event date" required error={errors.eventDate} hint="We recommend 3–4 weeks' notice when possible.">
          <input {...props("eventDate", true)} type="date" />
        </Field>
        <Field id="f-participants" label="Estimated number of participants" required error={errors.participants}>
          <input {...props("participants", true)} type="number" min={1} inputMode="numeric" />
        </Field>
        <Field id="f-city" label="Event location (city)">
          <input {...props("city")} type="text" autoComplete="address-level2" />
        </Field>
        <Field id="f-state" label="Event location (state)">
          <input {...props("state")} type="text" autoComplete="address-level1" />
        </Field>
        <Field id="f-message" label="Message / additional details" className="sm:col-span-2">
          <textarea {...props("message")} rows={4} placeholder="Tell us about your group, location, and goals." />
        </Field>
      </div>

      <fieldset className="mt-7 space-y-4">
        <legend className="sr-only">Consent</legend>
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-slate">
            <input
              type="checkbox"
              id="f-privacyAck"
              checked={v.privacyAck}
              onChange={(e) => set("privacyAck", e.target.checked)}
              aria-invalid={errors.privacyAck ? true : undefined}
              aria-describedby={errors.privacyAck ? "f-privacyAck-err" : undefined}
              className="mt-1 h-5 w-5 shrink-0 accent-[#0f74bc]"
            />
            <span>
              I have read the{" "}
              <Link to="/privacy" className="font-medium text-brand underline underline-offset-4">
                privacy information
              </Link>{" "}
              and understand this request is used to contact me about screening services.
              <span className="text-brand-deep" aria-hidden> *</span>
            </span>
          </label>
          {errors.privacyAck && (
            <p id="f-privacyAck-err" role="alert" className="mt-1.5 flex items-start gap-1.5 text-[13px] font-medium text-red-700">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {errors.privacyAck}
            </p>
          )}
        </div>
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-slate">
          <input
            type="checkbox"
            checked={v.smsTransactional}
            onChange={(e) => set("smsTransactional", e.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 accent-[#0f74bc]"
          />
          <span>
            (Optional) I consent to receive non-marketing text messages from {company.name} about health screening
            event coordination and scheduling. Message frequency varies, message &amp; data rates may apply. Text HELP
            for assistance, reply STOP to opt out.
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-slate">
          <input
            type="checkbox"
            checked={v.smsMarketing}
            onChange={(e) => set("smsMarketing", e.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 accent-[#0f74bc]"
          />
          <span>
            (Optional) I consent to receive marketing and promotional messages including special offers, service
            updates, and wellness program announcements from {company.name} at the phone number provided. Frequency
            may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </span>
        </label>
      </fieldset>

      {status === "error" && (
        <div role="alert" className="mt-6 flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-[14px] text-red-900">
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <p>
            <strong>Demo failure state.</strong> Your request couldn't be submitted. Nothing was lost — you can retry, or
            contact us directly at{" "}
            <a href={company.phoneHref} className="font-medium underline">
              {company.phone}
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-3.5 text-[15.5px] font-medium text-white shadow-[0_8px_24px_-10px_rgba(15,116,188,0.7)] transition-all duration-300 hover:bg-ink focus-visible:bg-ink disabled:cursor-wait disabled:opacity-80"
        >
          {status === "loading" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> Submitting demo…
            </>
          ) : status === "error" ? (
            "Retry Request"
          ) : (
            "Request a Screening Event"
          )}
        </button>
        <label className="flex cursor-pointer items-center gap-2.5 text-[12.5px] text-slate">
          <input
            type="checkbox"
            checked={simFail}
            onChange={(e) => setSimFail(e.target.checked)}
            className="h-4 w-4 accent-[#0f74bc]"
          />
          Prototype only: simulate a server error
        </label>
      </div>
      <p className="sr-only" aria-live="polite">
        {status === "loading" ? "Submitting demo request" : ""}
      </p>
    </form>
  );
}
