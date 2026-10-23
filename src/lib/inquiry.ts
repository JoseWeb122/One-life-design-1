// ------------------------------------------------------------------
// Inquiry submission adapter.
// FRONTEND PROTOTYPE: this does NOT send data anywhere.
// To go live, replace the body of `submitInquiry` with a real call, e.g.
//   await fetch("/api/inquiries", { method: "POST", body: JSON.stringify(payload) })
// or a CRM / email-service SDK. The form UI needs no other changes.
// ------------------------------------------------------------------

export type InquiryPayload = {
  fullName: string;
  organization: string;
  role: string;
  phone: string;
  email: string;
  orgType: string;
  service: string;
  eventDate: string;
  participants: string;
  city: string;
  state: string;
  message: string;
  privacyAck: boolean;
  smsTransactional: boolean;
  smsMarketing: boolean;
};

export async function submitInquiry(
  _payload: InquiryPayload,
  opts: { simulateFailure?: boolean } = {}
): Promise<{ ok: true; demo: true }> {
  await new Promise((r) => setTimeout(r, 1400));
  if (opts.simulateFailure) {
    throw new Error("Simulated server error (demo)");
  }
  return { ok: true, demo: true };
}
