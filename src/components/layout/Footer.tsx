import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactDetails } from "../../constants/contactDetails";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 px-6 md:px-10 border-t border-border-soft mt-auto">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col items-start">
          <img
            src="/assets/YFL Logo.png"
            alt="Yoga For Life logo"
            className="w-24 h-24 object-contain mb-6"
          />
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent-green mb-4">
            ⟶ YOGA FOR LIFE · BALANCE. BREATHE. BLOOM. ⟵
          </p>
          <p className="font-body text-text-muted leading-relaxed">
            Helping you build strength, balance, and inner peace through
            authentic yoga.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-xl text-primary-dark font-semibold mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 font-body text-text-muted">
            <li>
              <Link
                to="/"
                className="hover:text-accent-green transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-accent-green transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/program"
                className="hover:text-accent-green transition-colors"
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-accent-green transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-accent-green transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-accent-green transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl text-primary-dark font-semibold mb-6">
            Programs
          </h4>
          <ul className="flex flex-col gap-3 font-body text-text-muted">
            <li>
              <Link
                to="/program/weight-loss-yoga"
                className="hover:text-accent-green transition-colors"
              >
                Weight Loss
              </Link>
            </li>
            <li>
              <Link
                to="/program/prenatal-yoga"
                className="hover:text-accent-green transition-colors"
              >
                Prenatal
              </Link>
            </li>
            <li>
              <Link
                to="/program/postnatal-yoga"
                className="hover:text-accent-green transition-colors"
              >
                Postnatal
              </Link>
            </li>
            <li>
              <Link
                to="/program/general-yoga"
                className="hover:text-accent-green transition-colors"
              >
                General Yoga
              </Link>
            </li>
            <li>
              <Link
                to="/program/senior-yoga"
                className="hover:text-accent-green transition-colors"
              >
                Senior Yoga
              </Link>
            </li>
            <li>
              <Link
                to="/program/private-session"
                className="hover:text-accent-green transition-colors"
              >
                Private Session
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl text-primary-dark font-semibold mb-6">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 font-body text-text-muted">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-accent-green shrink-0 mt-0.5" />
              <span>{contactDetails.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-accent-green shrink-0" />
              <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-accent-green shrink-0" />
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-accent-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <a href={contactDetails.instagramUrl} className="pl-1">{contactDetails.instagramHandle}</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-accent-green shrink-0" />
              <span>Mon-Sat</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto pt-8 border-t border-border-soft flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-text-muted">
          © Copyright {new Date().getFullYear()} Yoga for Life. All rights reserved.
        </p>
        <p className="font-body text-sm text-text-muted">
          Privacy Policy • Terms & Conditions
        </p>
        <p className="font-body text-sm text-text-muted">
          - Designed and Developed by{" "}
          <a
            href="https://creaviq.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary-dark transition-colors hover:text-accent-green"
          >
            Creaviq Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
