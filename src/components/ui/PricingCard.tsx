import { Check } from "lucide-react";
import { Button } from "./Button";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  onSelect?: () => void;
  selected?: boolean;
  selectable?: boolean;
}

export function PricingCard({
  title,
  price,
  features,
  isPopular = false,
  buttonText,
  onSelect,
  selected = false,
  selectable = false,
}: PricingCardProps) {
  const isDark = isPopular;

  return (
    <div
      onClick={selectable ? onSelect : undefined}
      className={`relative rounded-3xl p-8 md:p-10 transition-all duration-300 ${isDark ? "bg-primary text-white shadow-xl md:-mt-4 md:mb-4" : "bg-white text-text-dark border border-border-soft"} ${selectable ? "cursor-pointer hover:shadow-lg" : ""} ${selected ? "ring-2 ring-accent-green ring-offset-4 ring-offset-bg-cream" : ""}`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white font-body text-[11px] font-bold uppercase tracking-widest px-5 py-2 rounded-full whitespace-nowrap shadow-sm">
          ★ Most Popular
        </div>
      )}

      <div className="text-center mb-8 border-b border-white/20 pb-8">
        <h3
          className={`font-heading text-2xl font-semibold mb-4 ${isDark ? "text-white" : "text-primary-dark"}`}
        >
          {title}
        </h3>
        <div className="flex items-baseline justify-center gap-1">
          <span
            className={`font-heading text-5xl font-bold ${isDark ? "text-white" : "text-primary-dark"}`}
          >
            {price}
          </span>
          <span
            className={`font-body text-sm ${isDark ? "text-white/80" : "text-text-muted"}`}
          >
            /month
          </span>
        </div>
      </div>

      <ul className="flex flex-col gap-5 mb-10">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div
              className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isDark ? "bg-white/20 text-white" : "bg-accent-light/30 text-accent-green"}`}
            >
              <Check size={12} strokeWidth={3} />
            </div>
            <span
              className={`font-body text-[15px] ${isDark ? "text-white/90" : "text-text-muted"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {selectable ? (
        <div className="flex justify-center mt-auto pt-4 border-t border-border-soft/20">
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected ? "border-accent-green bg-accent-green" : "border-border-soft bg-transparent"}`}
          >
            {selected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
          </div>
        </div>
      ) : (
        <Button
          variant={isDark ? "outline-dark" : "outline-light"}
          className="w-full text-sm"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}
