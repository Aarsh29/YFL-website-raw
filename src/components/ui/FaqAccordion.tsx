import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  question: string;
  answer: string;
}

export function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[7px] border border-[#dce4d9] bg-[#f3f7f0] transition-colors duration-200 hover:border-[#cbd8c5]">
      <button
        type="button"
        className="flex min-h-[50px] w-full cursor-pointer items-center justify-between gap-4 px-3 py-2.5 text-left focus:outline-none sm:min-h-[56px] sm:px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e2edda]">
            <img src="/assets/Lotus.png" alt="" className="h-5 w-5 object-contain" />
          </span>
          <span className="font-body text-xs font-medium text-[#3f4e3c] sm:text-sm">
            {question}
          </span>
        </div>
        <ChevronDown
          className={`shrink-0 text-[#273126] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={18}
        />
      </button>

      <div
        className={`overflow-hidden px-4 transition-all duration-300 ease-in-out sm:px-16 ${isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="font-body text-xs leading-relaxed text-[#5d6b5a] sm:text-sm">{answer}</p>
      </div>
    </div>
  );
}
