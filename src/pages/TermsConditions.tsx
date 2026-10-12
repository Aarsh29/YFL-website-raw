import { ArrowRight, Check, ChevronDown, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { contactDetails } from "../constants/contactDetails";

const sections = [
  { id: "agreement", label: "Agreement & Eligibility" },
  { id: "programs", label: "Programs & Participation" },
  { id: "booking", label: "Registration & Payments" },
  { id: "health", label: "Health & Safety" },
  { id: "content", label: "Website Content" },
  { id: "liability", label: "Limitations & Contact" },
];

export function TermsConditions() {
  return (
    <main className="w-full overflow-hidden bg-[#F7F9F2] text-body">
      <section className="relative overflow-hidden border-b border-border-soft px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <img
          src="/assets/BG/Aboutcta2.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1180px]">
          <p className="font-body text-xs text-muted">
            <Link to="/">Home</Link> <span className="mx-2">/</span> Terms &amp; Conditions
          </p>
          <p className="mt-7 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-heading">Legal information</p>
          <h1 className="mt-3 font-heading text-[38px] font-bold leading-[1.05] tracking-[-0.025em] text-[#304333] sm:text-[48px] lg:text-[56px]">
            Terms &amp; Conditions
          </h1>
          <p className="mt-5 max-w-[680px] font-body text-[15px] leading-7 text-body-secondary">
            These terms apply when you use the Yoga For Life website, register for a program, book a consultation, or attend one of our classes.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-t border-border-sage pt-4 font-body text-xs text-muted">
            <span><strong className="font-semibold text-primary-dark">Effective date:</strong> October 10, 2026</span>
            <span><strong className="font-semibold text-primary-dark">Last updated:</strong> October 10, 2026</span>
          </div>
          <Link
            to="/consultation#consultation-form"
            className="mt-8 inline-flex h-[46px] items-center gap-2 rounded-[7px] bg-action px-6 font-body text-xs font-bold uppercase tracking-[0.06em] text-white shadow-[0_4px_9px_rgba(70,90,50,0.18)] transition-colors hover:bg-action-hover"
          >
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[220px_1fr] lg:gap-16 lg:px-12">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <details className="group rounded-xl border border-border-soft bg-surface-soft p-4 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between font-body text-xs font-bold uppercase tracking-[0.12em] text-heading">
              Table of contents
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <nav className="mt-4 flex flex-col gap-3 border-t border-border-soft pt-4">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="font-body text-sm text-muted hover:text-heading">{section.label}</a>
              ))}
            </nav>
          </details>
          <div className="hidden lg:block">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-heading">On this page</p>
            <nav className="mt-5 flex flex-col gap-4 border-l border-border-sage pl-5">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="font-body text-[13px] leading-5 text-muted transition-colors hover:text-heading">{section.label}</a>
              ))}
            </nav>
            <div className="mt-12 rounded-2xl bg-surface-soft p-5">
              <p className="font-heading text-xl leading-tight text-primary-dark">Questions about these terms?</p>
              <p className="mt-3 font-body text-xs leading-5 text-muted">Our team can help explain registration, class, or program details.</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-wide text-heading hover:text-action-dark">
                Contact YFL <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </aside>

        <article className="max-w-[820px] space-y-10">
          <section id="agreement" className="scroll-mt-28">
            <TermsHeading>Agreement &amp; Eligibility</TermsHeading>
            <TermsCopy>
              These Terms and Conditions form an agreement between you and Yoga For Life (YFL). By accessing our website, submitting an enquiry, registering for a program, or attending a class, you confirm that you have read and accepted these terms.
            </TermsCopy>
            <TermsCopy>
              You must provide accurate information when registering. Our programs are intended for participants who can make informed decisions about their own participation, with a parent or guardian responsible for registrations involving minors.
            </TermsCopy>
          </section>

          <section id="programs" className="scroll-mt-28">
            <TermsHeading>Programs &amp; Participation</TermsHeading>
            <TermsCopy>Program schedules, instructors, session formats, and availability may change when reasonably necessary. We will communicate material changes as early as possible.</TermsCopy>
            <TermsList items={["Attend sessions on time and follow the instructor’s guidance.", "Treat instructors and fellow participants with respect and help maintain a welcoming environment.", "Do not record, reproduce, redistribute, or commercially use YFL classes or teaching materials without written permission.", "Access links, recordings, and other program resources only for your personal use."]} />
          </section>

          <section id="booking" className="scroll-mt-28">
            <TermsHeading>Registration, Payments &amp; Cancellations</TermsHeading>
            <TermsCopy>
              A place in a program is confirmed only after the required registration information and payment, where applicable, have been received. Program fees, inclusions, duration, and payment schedules will be shown or communicated before you complete registration.
            </TermsCopy>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              <TermCard title="Registration">Please review your selected plan and contact details before submitting.</TermCard>
              <TermCard title="Cancellations">Contact YFL as soon as possible if you cannot attend or need to discuss a change.</TermCard>
              <TermCard title="Refunds">Any refund or transfer is handled according to the program-specific terms shared at registration.</TermCard>
            </ul>
          </section>

          <section id="health" className="scroll-mt-28">
            <TermsHeading>Health, Safety &amp; Personal Responsibility</TermsHeading>
            <TermsCopy>
              Yoga and movement practices involve physical activity. You are responsible for deciding whether a class is appropriate for you and for working within your own limits. Please inform your instructor before practice about relevant injuries, pregnancy, medical conditions, or other concerns.
            </TermsCopy>
            <TermsCopy>
              YFL classes are educational and wellness services, not medical care, diagnosis, or treatment. Stop any movement that causes pain, dizziness, or discomfort and seek advice from a qualified healthcare professional when appropriate.
            </TermsCopy>
          </section>

          <section id="content" className="scroll-mt-28">
            <TermsHeading>Website Content &amp; Intellectual Property</TermsHeading>
            <TermsCopy>
              The YFL name, logo, written content, class materials, photographs, graphics, and other website elements belong to YFL or their respective licensors. They may not be copied, adapted, published, or used for commercial purposes without prior written permission.
            </TermsCopy>
            <TermsCopy>
              Website content is provided for general information and may be updated from time to time. While we aim to keep it accurate and useful, we do not promise that every page will always be complete, current, or available without interruption.
            </TermsCopy>
          </section>

          <section id="liability" className="scroll-mt-28 rounded-[24px] bg-primary-dark p-7 text-white sm:p-10">
            <TermsHeading light>Limitations &amp; Contact</TermsHeading>
            <TermsCopy light>
              To the extent permitted by law, YFL is not responsible for indirect loss, interruptions caused by events outside our reasonable control, or injuries resulting from failure to follow safety guidance or disclose relevant health information. Nothing in these terms limits rights that cannot legally be excluded.
            </TermsCopy>
            <TermsCopy light>
              These terms are governed by the applicable laws of India. If you have a question, concern, or complaint about these terms, please contact us first so we can work toward a clear resolution.
            </TermsCopy>
            <a href={`mailto:${contactDetails.email}`} className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent-green px-5 py-3 font-body text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-action-hover">
              <Mail className="h-4 w-4" /> {contactDetails.email}
            </a>
          </section>

          <div className="flex items-center gap-3 border-t border-border-soft pt-8 font-body text-xs text-muted">
            <Check className="h-4 w-4 text-accent-green" />
            Thank you for helping us keep YFL safe, respectful, and welcoming.
          </div>
        </article>
      </div>

      <section className="bg-surface-soft px-6 py-14 text-center sm:py-16">
        <p className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-heading">Related information</p>
        <h2 className="mx-auto mt-4 max-w-[620px] font-heading text-3xl leading-tight text-primary-dark sm:text-4xl">Read our Privacy Policy</h2>
        <Link to="/privacy-policy" className="mt-7 inline-flex items-center gap-2 rounded-md bg-action px-6 py-3 font-body text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-action-hover">
          View privacy policy <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}

function TermsHeading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`font-heading text-3xl font-medium leading-tight sm:text-[38px] ${light ? "text-white" : "text-primary-dark"}`}>{children}</h2>;
}

function TermsCopy({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mt-5 font-body text-sm leading-7 ${light ? "text-white/75" : "text-body-secondary"}`}>{children}</p>;
}

function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 font-body text-sm leading-7 text-body-secondary">
          <Check className="mt-1 h-4 w-4 shrink-0 text-accent-green" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TermCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="rounded-xl border border-border-soft bg-surface-input p-5">
      <p className="font-body text-sm font-semibold text-heading">{title}</p>
      <p className="mt-2 font-body text-[13px] leading-6 text-muted">{children}</p>
    </li>
  );
}
