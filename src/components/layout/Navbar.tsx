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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Program", path: "/program" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav
      className={`
        sticky
        top-0
        z-50
        w-full
        bg-white
        border-b
        border-[#E7E9E1]
        transition-shadow
        duration-300
        ${isScrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : ""}
      `}
    >
      <div
        className="
          grid
          h-[68px]
          w-full
          grid-cols-[1fr_auto_1fr]
          items-center
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div className="flex items-center justify-start">
          <Link
            to="/"
            className="
              flex
              h-[68px]
              w-[105px]
              items-center
              justify-start
              outline-none
              focus:outline-none
            "
          >
            <img
              src="/assets/YFL LOGO (5) 1.png"
              alt="Yoga For Life"
              className="
                h-[66px]
                w-[92px]
                scale-[1.08]
                object-contain
                object-left
              "
            />
          </Link>
        </div>

        <div
          className="
            hidden
            items-center
            justify-center
            lg:flex
          "
        >
          <div
            className="
              flex
              h-[68px]
              items-center
              gap-[30px]
            "
          >
            {links.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== "/" &&
                  location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    relative
                    flex
                    h-[68px]
                    items-center
                    whitespace-nowrap
                    font-heading
                    text-[12px]
                    font-medium
                    outline-none
                    focus:outline-none
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-link"
                        : "text-ink hover:text-link"
                    }
                  `}
                >
                  {link.name}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-[12px]
                        left-1/2
                        h-[4px]
                        w-[4px]
                        -translate-x-1/2
                        rounded-full
                        bg-link
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Link
            to="/join-now"
            className="
              hidden
              outline-none
              focus:outline-none
              lg:block
            "
          >
            <Button
              className="
                h-[40px]
                w-[108px]
                rounded-[7px]
                px-0
                text-[12px]
                font-bold
                tracking-[0.03em]
                shadow-[0_2px_5px_rgba(70,90,50,0.14)]
              "
            >
              JOIN NOW
            </Button>
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="
              flex
              items-center
              justify-center
              text-ink
              outline-none
              focus:outline-none
              lg:hidden
            "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={26} strokeWidth={1.8} />
            ) : (
              <Menu size={26} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="
            absolute
            left-0
            top-full
            w-full
            border-b
            border-[#E7E9E1]
            bg-white
            px-6
            py-5
            shadow-[0_6px_15px_rgba(0,0,0,0.06)]
            lg:hidden
          "
        >
          <div className="flex flex-col">
            {links.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== "/" &&
                  location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    border-b
                    border-[#EEF0EA]
                    py-3.5
                    font-body
                    text-[14px]
                    outline-none
                    focus:outline-none
                    ${
                      isActive
                        ? "font-medium text-link"
                        : "text-ink"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-5">
              <Link
                to="/join-now"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  className="
                    h-[42px]
                    w-full
                    rounded-[7px]
                    text-[12px]
                    font-bold
                    tracking-wide
                  "
                >
                  JOIN NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}