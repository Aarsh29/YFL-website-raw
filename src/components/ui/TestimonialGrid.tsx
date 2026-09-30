import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sudha",
    tag: "General yoga",
    text: "The experience with YFL was nothing short of extraordinary. As a long term member of YFL, I am really blessed to be part of this community.",
    avatar: "/assets/Customer.png",
  },
  {
    name: "Sangeetha",
    tag: "Weight loss yoga",
    text: "I weighed 91.7 kg. In just 7 months, I have lost approximately 16 kg, and my clothing size dropped from 4XL to XL.",
    avatar: "/assets/Ellipse 10.png",
  },
  {
    name: "Muthu Murugan",
    tag: "General yoga",
    text: "After joining YFL about five months ago, I am now completely relieved of my shoulder pain, which was once diagnosed as frozen shoulder.",
    avatar: "/assets/Customer.png",
  },
];

export function TestimonialGrid() {
  return (
    <div className="relative mx-auto max-w-[1240px] px-0 sm:px-10">
      <button
        type="button"
        aria-label="Previous testimonials"
        className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#b9d0a9] text-link transition hover:bg-primary-50 md:flex"
      >
        <ChevronLeft size={26} />
      </button>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="relative flex min-h-[280px] flex-col rounded-[12px] border border-[#99aa91] bg-[#f7f9f3] px-6 py-5 shadow-sm"
          >
            <Quote className="absolute left-7 top-5 h-8 w-8 text-accent-green" />
            <div className="mt-8 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-accent-green text-accent-green"
                />
              ))}
            </div>
            <p className="relative z-10 mt-4 flex-1 text-center font-body text-[11px] leading-[1.45] text-text-muted">
              {testimonial.text}
            </p>
            <div className="my-4 border-t border-[#d4dfcc]" />
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-border-soft bg-white">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-primary-dark">
                  {testimonial.name}
                </h4>
                <p className="font-body text-[11px] font-medium text-accent-green">
                  {testimonial.tag}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next testimonials"
        className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#b9d0a9] text-link transition hover:bg-primary-50 md:flex"
      >
        <ChevronRight size={26} />
      </button>

      <div className="mt-6 flex justify-center gap-2" aria-label="Testimonial pages">
        <span className="h-3 w-3 rounded-full bg-[#24341d]" />
        <span className="h-3 w-3 rounded-full bg-[#d5e0d0]" />
        <span className="h-3 w-3 rounded-full bg-[#d5e0d0]" />
      </div>
    </div>
  );
}
