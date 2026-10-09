import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  tag: string;
  text: string;
  avatar: string;
  location?: string;
};

export const defaultTestimonials: Testimonial[] = [
  {
    name: "Anu",
    tag: "General yoga",
    text: "Hi Rakshitaa, the selection of stretches was spot on. I was so impressed by the way you gave individual attention to each and...",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    location: "USA",
  },
  {
    name: "Maheshwaran",
    tag: "General yoga",
    text: "Appreciate the different design overall and mudra practices. That supports the entire day. This week starts with gentle...",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    location: "Chennai, India",
  },
  {
    name: "Barathi",
    tag: "General yoga",
    text: "Thank you so much, Rakshitaa, for yet another excellent class. Thank you for planning and executing such a...",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    location: "Canada",
  },
  {
    name: "Sudha",
    tag: "General yoga",
    text: "The experience with YFL was nothing short of extraordinary. As a long term member of YFL I am really blessed to be part...",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    location: "Australia",
  },
  {
    name: "Sangeetha",
    tag: "Weight loss yoga",
    text: "I weighed 91.7 kg. In just 7 months, I have lost approximately 16 kg, and my clothing size dropped from 4XL to XL. I would...",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
    location: "Hosur, India",
  },
  {
    name: "Muthu Murugan",
    tag: "General yoga",
    text: "After joining YFL about five months ago, I am now completely relieved of my shoulder pain, which was once diagnosed...",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    location: "Chennai, India",
  },
  {
    name: "Shabana",
    tag: "General yoga",
    text: "My dear Rakshitaa, what a gratitude to you for coming up with amazing concepts and sequences. YFL's strength training session was exceptional. Today's class was just VERA LEVEL and full-on energy blast! You made all of us happy by activating all our cells...",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&auto=format&fit=crop&q=80",
    location: "Chennai, India",
  },
  {
    name: "Priya",
    tag: "Weight loss yoga",
    text: "Thanks for this relaxing weight loss program. It was very informative and motivating. The guidance on healthy eating, regular exercise, and...",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    location: "Hosur, India",
  },
  {
    name: "Pushparaj",
    tag: "General yoga",
    text: "Hi Rakshitaa, thank you for checking in on me regularly and pushing me when it is so hard to restart after almost 8 months off...",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
    location: "Hosur, India",
  },
  {
    name: "Preethi",
    tag: "General yoga",
    text: "Hi Rakshitaa, thank you for a beautiful and blissful session. After a long break, today's class was just VERA LEVEL and full-on energy blast...",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&auto=format&fit=crop&q=80",
    location: "USA",
  },
  {
    name: "Pavithra",
    tag: "Weight loss yoga",
    text: "Thanks for this relaxing session. After a long break, the weight loss program was very informative and motivating. The guidance on healthy eating, regular exercise, and...",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=120&auto=format&fit=crop&q=80",
    location: "Chennai, India",
  },
  {
    name: "Ahrthee",
    tag: "General yoga",
    text: "Hi Rakshitaa, thank you for checking in on me regularly and pushing me when it is so hard to restart after...",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&auto=format&fit=crop&q=80",
    location: "Tirupur, India",
  },
];

export function TestimonialGrid({
  testimonials = defaultTestimonials,
}: {
  testimonials?: Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(testimonials.length);
  const [visibleCards, setVisibleCards] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slides = [...testimonials, ...testimonials, ...testimonials];
  const pageCount = Math.ceil(testimonials.length / visibleCards);
  const activePage =
    ((Math.floor((activeIndex - testimonials.length) / visibleCards) % pageCount) + pageCount) %
    pageCount;

  useEffect(() => {
    const updateVisibleCards = () => {
      const nextVisibleCards = window.matchMedia("(min-width: 768px)").matches ? 3 : 1;
      setVisibleCards((current) => current === nextVisibleCards ? current : nextVisibleCards);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => index + visibleCards);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [visibleCards]);

  useEffect(() => {
    setTransitionEnabled(false);
    setActiveIndex(testimonials.length);
  }, [testimonials.length, visibleCards]);

  useEffect(() => {
    if (!transitionEnabled) {
      const frame = window.requestAnimationFrame(() => setTransitionEnabled(true));
      return () => window.cancelAnimationFrame(frame);
    }
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (activeIndex >= testimonials.length + pageCount * visibleCards) {
      setTransitionEnabled(false);
      setActiveIndex(testimonials.length);
    } else if (activeIndex < testimonials.length) {
      setTransitionEnabled(false);
      setActiveIndex(testimonials.length + (pageCount - 1) * visibleCards);
    }
  };

  const move = (direction: number) => {
    setTransitionEnabled(true);
    setActiveIndex((index) => index + direction * visibleCards);
  };

  return (
    <div className="relative mx-auto max-w-[880px]">
      <button
        type="button"
        aria-label="Previous testimonials"
        onClick={() => move(-1)}
        className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#d0dac8] bg-[#f5f7f2] text-[#91ad79] transition hover:bg-[#eaf0e4] md:flex"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="mx-auto w-full max-w-[760px] overflow-hidden">
        <div
          aria-live="polite"
          className={`flex ${transitionEnabled ? "transition-transform duration-500 ease-in-out" : "transition-none"}`}
          onTransitionEnd={handleTransitionEnd}
          style={{
            width: `${(slides.length / visibleCards) * 100}%`,
            transform: `translateX(-${(activeIndex * 100) / slides.length}%)`,
          }}
        >
          {slides.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              aria-hidden={index < activeIndex || index >= activeIndex + visibleCards}
              className="shrink-0 px-2 md:px-3"
              style={{ width: `${100 / slides.length}%` }}
            >
              <article className="relative flex h-[258px] flex-col rounded-[15px] border border-[#aeb8a8] bg-[#f0f4eb] px-4 py-3.5 sm:px-5">
                <Quote aria-hidden="true" className="h-5 w-5 fill-[#739450] text-[#739450]" />
                <div className="mt-1 flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-hidden="true"
                      className="h-3 w-3 fill-[#789b56] text-[#789b56]"
                    />
                  ))}
                </div>
                <p className="mt-2 line-clamp-5 flex-1 text-center font-body text-sm leading-[1.55] text-[#394334]">
                  {testimonial.text}
                </p>
                <div className="mt-2 border-t border-[#d4dfcc]" />
                <div className="mt-2 flex min-h-[56px] items-center gap-2">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white bg-white">
                    <img
                      src={testimonial.avatar}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="truncate font-heading text-sm font-bold uppercase leading-tight text-[#68864c]">
                      {testimonial.name}
                    </h4>
                    <p className="truncate font-heading text-xs leading-tight text-[#789b56]">
                      {testimonial.tag}
                    </p>
                    {testimonial.location && (
                      <p className="truncate font-body text-xs leading-tight text-[#596354]">
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </div>
                <Quote
                  aria-hidden="true"
                  className="absolute bottom-2 right-3 h-4 w-4 rotate-180 fill-[#739450] text-[#739450]"
                />
              </article>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Next testimonials"
        onClick={() => move(1)}
        className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#d0dac8] bg-[#f5f7f2] text-[#91ad79] transition hover:bg-[#eaf0e4] md:flex"
      >
        <ChevronRight size={20} />
      </button>

      <div className="mt-5 flex justify-center gap-2" aria-label="Testimonial pages">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show testimonials page ${index + 1}`}
            aria-current={activePage === index ? "true" : undefined}
            onClick={() => {
              setTransitionEnabled(true);
              setActiveIndex(testimonials.length + index * visibleCards);
            }}
            className={`h-3 w-3 cursor-pointer rounded-full ${activePage === index ? "bg-[#24341d]" : "bg-[#d5e0d0]"}`}
          />
        ))}
      </div>
    </div>
  );
}
