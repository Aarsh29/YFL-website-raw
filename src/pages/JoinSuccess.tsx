import { ArrowRight, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function JoinSuccess({ type = "plan" }: { type?: "plan" | "consultation" }) {
  const backgroundImage =
    type === "consultation"
      ? "/assets/ChatGPT Image Aug 28, 2026, 05_01_17 PM 1.png"
      : "/assets/hero-yoga-studio.png";

  return (
    <section className="relative flex min-h-[calc(100svh-68px)] items-center overflow-hidden bg-hero-overlay">
      <img
        src={backgroundImage}
        alt="A peaceful yoga studio"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/90 via-hero-overlay/65 to-hero-overlay/5" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-68px)] w-full max-w-[1280px] items-center px-6 py-14 sm:px-10 lg:px-14">
        <div className="w-full max-w-[720px]">
          <h1 className="font-heading text-[46px] font-medium leading-[0.98] text-primary-950 sm:text-[64px] lg:text-[78px]">
            <span className="block">Successfully</span>
            <span className={`mt-2 block text-heading ${type === "consultation" ? "text-[30px] leading-tight sm:text-[42px] lg:text-[48px]" : ""}`}>
              {type === "consultation" ? "Booked your free consultation" : "Joined the Plan!"}
            </span>
          </h1>

          <div className="relative mt-6 h-px max-w-[530px] bg-primary-800">
            <Sprout
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-6 w-8 -translate-x-1/2 -translate-y-1/2 bg-hero-overlay px-1 text-heading"
              strokeWidth={1.8}
            />
          </div>

          <p className="mt-8 max-w-[540px] font-body text-[16px] leading-[1.5] text-ink sm:text-[20px]">
            Welcome to our YFL Wellness Journey!
            <br />
            You&apos;re one step closer to a healthier, happier you.
          </p>

          <Link to="/join-now" className="mt-10 inline-flex w-full sm:w-auto">
            <Button className="h-[54px] w-full min-w-[280px] rounded-[7px] bg-action px-7 text-[14px] font-bold tracking-wide text-white shadow-[0_4px_9px_rgba(58,75,42,0.24)] hover:bg-action-hover sm:w-[485px] sm:text-[16px]">
              EXPLORE OTHER PLANS <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}