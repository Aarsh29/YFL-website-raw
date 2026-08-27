import { Quote, Star } from "lucide-react";

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
    <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-bg-cream rounded-2xl p-8 relative shadow-sm border border-border-soft"
          >
            <Quote className="text-accent-light/30 w-12 h-12 absolute top-6 right-6" />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-accent-green text-accent-green"
                />
              ))}
            </div>
            <p className="font-body text-text-muted leading-relaxed mb-8 relative z-10 italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-border-soft">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div>
                <h4 className="font-heading text-lg text-primary-dark font-bold">
                  {testimonial.name}
                </h4>
                <p className="font-body text-xs text-accent-green font-medium uppercase tracking-wider">
                  {testimonial.tag}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
