import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-cream pt-20 pb-8 px-6 md:px-10 border-t border-border-soft mt-auto">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col items-start">
          <img
            src="/assets/YFL LOGO (5) 2.png"
            alt="Yoga For Life Logo"
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
                to="/#pricing"
                className="hover:text-accent-green transition-colors"
              >
                Pricing
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
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl text-primary-dark font-semibold mb-6">
            Programs
          </h4>
          <ul className="flex flex-col gap-3 font-body text-text-muted">
            <li>
              <Link
                to="/program"
                className="hover:text-accent-green transition-colors"
              >
                Weight Loss
              </Link>
            </li>
            <li>
              <Link
                to="/program"
                className="hover:text-accent-green transition-colors"
              >
                Prenatal
              </Link>
            </li>
            <li>
              <Link
                to="/program"
                className="hover:text-accent-green transition-colors"
              >
                Postnatal
              </Link>
            </li>
            <li>
              <Link
                to="/program"
                className="hover:text-accent-green transition-colors"
              >
                Flexibility
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
              <span>Chennai, Tamil Nadu</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-accent-green shrink-0" />
              <span>+91 8870461152</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-accent-green shrink-0" />
              <span>hello@yogaforlife.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="font-bold text-accent-green text-lg pl-1 shrink-0">
                @
              </span>
              <span className="pl-1">yogaforlifeyfl</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-accent-green shrink-0" />
              <span>Mon–Sat</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto pt-8 border-t border-border-soft flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-text-muted">
          © 2026 Yoga for Life. All Rights Reserved.
        </p>
        <p className="font-body text-sm text-text-muted">
          Privacy Policy • Terms & Conditions
        </p>
      </div>
    </footer>
  );
}
