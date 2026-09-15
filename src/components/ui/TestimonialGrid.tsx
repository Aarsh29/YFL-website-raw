import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    tag: "Weight loss yoga",
    text: "Yoga for Life has completely changed my daily routine. I feel more energetic, flexible, and mentally calm than ever before.",
    avatar: "/assets/Customer.png",
  },
  {
    name: "Ananya",
    tag: "Prenatal yoga",
    text: "The instructors are incredibly supportive, and every session feels personalized. I've gained strength, confidence, and inner peace.",
    avatar: "/assets/Ellipse 10.png",
  },
  {
    name: "Meena",
    tag: "Strength & Toning",
    text: "I joined as a beginner and immediately felt welcomed. The classes are easy to follow, and I've noticed a huge improvement in my flexibility.",
    avatar: "/assets/Customer.png",
  },
];

export function TestimonialGrid() {
  return (
    <div className="relative mx-auto max-w-[1240px] px-0 sm:px-10">
      <button
        type="button"
        aria-label="Previous testimonials"
        className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#b9d0a9] text-[#709a58] transition hover:bg-primary-50 md:flex"
      >
        <ChevronLeft size={26} />
      </button>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="relative flex min-h-[310px] flex-col rounded-[16px] border border-[#99aa91] bg-[#f7f9f3] px-7 py-6 shadow-sm"
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
            <p className="relative z-10 mt-4 flex-1 text-center font-body text-[13px] leading-[1.45] text-text-muted">
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
                <h4 className="font-heading text-base font-bold text-primary-dark">
                  {testimonial.name}
                </h4>
                <p className="font-body text-xs font-medium text-accent-green">
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
        className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#b9d0a9] text-[#709a58] transition hover:bg-primary-50 md:flex"
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
