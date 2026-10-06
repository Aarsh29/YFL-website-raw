import { contactDetails } from "../constants/contactDetails";

const INQUIRY_ENDPOINT = `https://formsubmit.co/ajax/${contactDetails.email}`;

export async function sendInquiry(subject: string, fields: Record<string, string>) {
  const response = await fetch(INQUIRY_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: "table",
    }),
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;

  if (!response.ok || result?.success === false || result?.success === "false") {
    throw new Error(result?.message || "Your message could not be sent. Please try again.");
  }
}