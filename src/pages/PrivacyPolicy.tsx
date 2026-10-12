import { ArrowRight, Check, ChevronDown, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { contactDetails } from "../constants/contactDetails";

const sections = [
  { id: "information", label: "Information We Collect" },
  { id: "use", label: "How We Use Your Information" },
  { id: "sharing", label: "When Information Is Shared" },
  { id: "choices", label: "Your Choices & Rights" },
  { id: "security", label: "Security & Retention" },
  { id: "contact", label: "Contact Us" },
];

export function PrivacyPolicy() {
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
            <Link to="/">Home</Link> <span className="mx-2">/</span> Privacy Policy
          </p>
          <p className="mt-7 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-heading">
            Legal information
          </p>
          <h1 className="mt-3 font-heading text-[38px] font-bold leading-[1.05] tracking-[-0.025em] text-[#304333] sm:text-[48px] lg:text-[56px]">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-[680px] font-body text-[15px] leading-7 text-body-secondary">
            This Privacy Policy applies to the Yoga For Life website, program registrations, consultations, and communications.
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
                <a key={section.id} href={`#${section.id}`} className="font-body text-sm text-muted hover:text-heading">
                  {section.label}
                </a>
              ))}
            </nav>
          </details>

          <div className="hidden lg:block">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-primary-dark">
              Contents
            </p>
            <nav className="mt-4 flex flex-col gap-3 border-l border-border-soft pl-4">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="font-body text-[13px] leading-5 text-muted transition-colors hover:text-heading">
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="max-w-[820px] space-y-10">
          <section id="information" className="scroll-mt-28">
            <PolicyHeading>Information We Collect</PolicyHeading>
            <p className="policy-copy">
              When you enquire about a program, register for a session, book a consultation, or contact YFL, we may collect information that helps us respond and support your wellness journey.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <PolicyCard title="Contact details">Name, phone number, email address, and city or location.</PolicyCard>
              <PolicyCard title="Program details">Your selected program, goals, preferred schedule, and class preferences.</PolicyCard>
              <PolicyCard title="Messages">Questions, feedback, and information you choose to include in a form or conversation.</PolicyCard>
              <PolicyCard title="Technical information">Basic device, browser, and website usage information needed to keep our site reliable.</PolicyCard>
            </ul>
          </section>

          <section id="use" className="scroll-mt-28">
            <PolicyHeading>How We Use Your Information</PolicyHeading>
            <p className="policy-copy">We use information only for clear, relevant purposes connected to providing and improving YFL services:</p>
            <PolicyList items={["To respond to enquiries and help you choose a suitable program.", "To process registrations, schedule consultations, and share class-related updates.", "To personalise guidance and communicate important changes to your sessions.", "To improve our website, programs, and member experience."]} />
          </section>

          <section id="sharing" className="scroll-mt-28">
            <PolicyHeading>When Information Is Shared</PolicyHeading>
            <p className="policy-copy">
              YFL does not sell, rent, or trade your personal information. We may share limited information with trusted service providers who help us operate our forms, communications, scheduling, or website. They may use it only to provide those services and are expected to protect it.
            </p>
            <p className="policy-copy mt-4">
              We may also disclose information when required by law, to protect the safety of our students and team, or to prevent fraud and misuse of our services.
            </p>
          </section>

          <section id="choices" className="scroll-mt-28">
            <PolicyHeading>Your Choices &amp; Rights</PolicyHeading>
            <p className="policy-copy">You can contact us at any time to:</p>
            <PolicyList items={["Ask what personal information we hold about you.", "Request correction of information that is inaccurate or incomplete.", "Ask us to delete information that we no longer need to retain.", "Withdraw consent for optional communications."]} />
            <p className="policy-copy mt-4">To make a request, email us using the address below. We may need to verify your identity before completing it.</p>
          </section>

          <section id="security" className="scroll-mt-28">
            <PolicyHeading>Security, Cookies &amp; Retention</PolicyHeading>
            <p className="policy-copy">
              We use reasonable administrative and technical safeguards to protect information from unauthorised access, loss, or misuse. No online transmission can be guaranteed to be completely secure, so please avoid sending sensitive medical or financial information through website forms.
            </p>
            <p className="policy-copy mt-4">
              Our website may use essential cookies or similar technologies to remember preferences and understand basic site performance. We retain information only for as long as necessary to provide services, meet legal obligations, resolve issues, and maintain appropriate records.
            </p>
          </section>

          <section id="contact" className="scroll-mt-28 rounded-[24px] bg-primary-dark p-7 text-white sm:p-10">
            <Mail className="h-8 w-8 text-accent-light" strokeWidth={1.5} />
            <PolicyHeading light>Contact Us About Privacy</PolicyHeading>
            <p className="mt-4 max-w-[560px] font-body text-sm leading-7 text-white/75">
              If you have questions about this policy or how YFL handles your information, please reach out. We will do our best to respond promptly.
            </p>
            <a href={`mailto:${contactDetails.email}`} className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent-green px-5 py-3 font-body text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-action-hover">
              {contactDetails.email} <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          <div className="flex items-center gap-3 border-t border-border-soft pt-8 font-body text-xs text-muted">
            <Check className="h-4 w-4 text-accent-green" />
            We will never ask for more information than we need.
          </div>
        </article>
      </div>

    </main>
  );
}

function PolicyHeading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`font-heading text-3xl font-medium leading-tight sm:text-[38px] ${light ? "text-white" : "text-primary-dark"}`}>{children}</h2>;
}

function PolicyCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="rounded-xl border border-border-soft bg-surface-input p-5">
      <p className="font-body text-sm font-semibold text-heading">{title}</p>
      <p className="mt-2 font-body text-[13px] leading-6 text-muted">{children}</p>
    </li>
  );
}

function PolicyList({ items }: { items: string[] }) {
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
