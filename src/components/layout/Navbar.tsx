import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Program", path: "/program" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? "border-b border-border-soft shadow-sm py-3" : "py-5"}`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/YFL LOGO (5) 1.png"
            alt="Yoga For Life"
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading font-semibold text-primary-dark text-xl tracking-wide hidden sm:block">
            YOGA FOR LIFE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== "/" && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-body text-[15px] transition-colors ${isActive ? "text-accent-green font-medium" : "text-text-muted hover:text-primary-dark"}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-green rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
          <Link to="/join-now">
            <Button className="px-6 py-2.5 text-sm">JOIN NOW</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-primary-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border-soft shadow-lg py-4 px-6 flex flex-col gap-4">
          {links.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-body text-lg ${isActive ? "text-accent-green font-medium" : "text-text-muted"}`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-border-soft">
            <Link to="/join-now" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">JOIN NOW</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
