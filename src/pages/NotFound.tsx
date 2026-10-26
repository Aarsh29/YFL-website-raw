import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-[calc(100svh-68px)] w-full items-center justify-center bg-[#F7F9F2] px-6 py-20 text-center">
      <div className="mx-auto flex max-w-[620px] flex-col items-center">
        <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-heading">
          Yoga for Life
        </p>
        <p className="mt-4 font-heading text-[100px] font-bold leading-none text-[#DCE8D2] sm:text-[150px]">
          404
        </p>
        <h1 className="mt-2 font-heading text-[34px] font-bold leading-tight text-primary-dark sm:text-[46px]">
          Page not found
        </h1>
        <p className="mt-4 max-w-[460px] font-body text-[15px] leading-7 text-text-muted">
          The page you are looking for may have moved, or the link may be
          incorrect. Let&apos;s get you back on your wellness journey.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-[46px] items-center gap-2 rounded-[7px] bg-action px-6 font-body text-xs font-bold uppercase tracking-[0.06em] text-white shadow-[0_4px_9px_rgba(70,90,50,0.18)] transition-colors hover:bg-action-hover"
          >
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex h-[46px] items-center gap-2 rounded-[7px] border border-border-sage px-6 font-body text-xs font-bold uppercase tracking-[0.06em] text-heading transition-colors hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}
