import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  question: string;
  answer: string;
}

export function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-border-soft rounded-2xl mb-4 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
      <button
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-bg-cream flex items-center justify-center shrink-0">
            <img
              src="/assets/Lotus.png"
              alt=""
              className="w-5 h-5 object-contain"
            />
          </div>
          <span className="font-heading text-lg font-semibold text-primary-dark">
            {question}
          </span>
        </div>
        <ChevronDown
          className={`text-text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={24}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out px-6 ${isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pl-14">
          <p className="font-body text-[15px] text-text-muted leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
