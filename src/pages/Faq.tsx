import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { Mail } from "lucide-react";

export function Faq() {
  const faqs = [
    {
      q: "Do I need prior yoga experience?",
      a: "Not at all! Our classes are designed for all levels, from complete beginners to advanced practitioners. Our instructors will guide you and offer modifications to suit your experience level.",
    },
    {
      q: "What should I bring to a yoga class?",
      a: "Just bring yourself in comfortable clothing, a water bottle, and a small towel. We provide high-quality yoga mats and props at our studio, though you are welcome to bring your own mat if you prefer.",
    },
    {
      q: "Are online classes available?",
      a: "Yes, we offer live-streamed online classes so you can practice from the comfort of your home. You will receive a link to join the session after booking.",
    },
    {
      q: "What is your cancellation policy?",
      a: "We kindly ask that you cancel at least 12 hours before your scheduled class to avoid being charged. This allows us to offer the spot to another student on the waitlist.",
    },
    {
      q: "What are your class timings?",
      a: "We offer classes throughout the day, starting as early as 6:00 AM and running until 8:00 PM. Our schedule varies slightly by program, so please check the booking portal for specific timings.",
    },
    {
      q: "How do I register for a program?",
      a: "Simply click the 'Join Now' button, select your preferred program and plan, and fill out the registration form. Our team will contact you shortly to confirm your enrollment and set up your consultation.",
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      <section className="w-full bg-primary-50">
        <div className="grid min-h-[430px] md:min-h-[500px] grid-cols-1 md:grid-cols-2">
          <div className="flex items-center px-8 py-16 md:px-12 md:py-20 lg:px-16 xl:px-20">
            <div className="w-full max-w-[560px]">
              <h1 className="font-heading text-[38px] leading-[1.08] text-secondary-900 md:text-[48px] lg:text-[52px]">
                We're Here to
                <br />
                Answer Your Questions
              </h1>

              <p className="mt-4 max-w-[500px] font-body text-[15px] leading-7 text-secondary-600 md:text-[17px]">
                Find answers to the most common questions about our yoga
                programs, classes, memberships, and more.
              </p>

              <Link to="/join-now" className="inline-block">
                <Button className="mt-6 min-w-[235px]">
                  COMPLETE REGISTRATION
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-0">
            <img
              src="/assets/Yoga for Life - Review Post 1 (20) 2.png"
              alt="Woman meditating indoors"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-10 md:px-8 md:py-16 lg:px-10">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-10 flex justify-center md:mb-12">
            <div
              className="
                flex
                w-full
                max-w-[400px]
                items-center
                justify-center
                rounded-[10px]
                bg-primary-400
                px-6
                py-3
                text-center
                font-body
                text-[13px]
                font-bold
                tracking-wide
                text-white
                shadow-sm
              "
            >
              FREQUENTLY ASKED QUESTIONS
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="
                  overflow-hidden
                  rounded-[7px]
                  border
                  border-primary-100
                  bg-primary-50
                  transition-all
                "
              >
                <FaqAccordion question={faq.q} answer={faq.a} />
              </div>
            ))}
          </div>

          <div className="mt-28 text-center md:mt-32">
            <div className="relative mx-auto mb-7 flex h-[88px] w-[88px] items-center justify-center">
              <img
                src="/assets/Leaf.png"
                alt=""
                className="absolute left-0 top-0 w-16 opacity-80 pointer-events-none"
              />

              <div className="absolute inset-0 rounded-full bg-primary-100" />

              <Mail
                className="relative z-10 h-12 w-12 text-primary-400"
                strokeWidth={1.7}
              />
            </div>

            <h2
              className="
                font-heading
                text-[28px]
                font-medium
                uppercase
                leading-tight
                text-secondary-900
                md:text-[34px]
              "
            >
              MAIL YOUR QUERIES
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[680px]
                font-body
                text-[15px]
                leading-7
                text-primary-700
                md:text-[17px]
              "
            >
              We'd love to hear from you. Send us your questions, concerns, or
              feedback and our team will get back to you soon.
            </p>

            <a href="mailto:hello@yogaforlife.com" className="inline-block">
              <Button
                className="
                  mt-6
                  min-w-[225px]
                  gap-3
                "
              >
                <Mail className="h-5 w-5" />
                hello@yogaforlife.com
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section
        className="
          relative
          overflow-hidden
          border-y
          border-primary-200
          bg-gradient-to-r
          from-primary-300
          via-primary-100
          to-white
        "
      >
        <div
          className="
            mx-auto
            grid
            min-h-[290px]
            max-w-[1200px]
            grid-cols-1
            items-center
            gap-8
            px-8
            py-12
            md:grid-cols-[1.2fr_0.8fr]
            md:px-12
            lg:px-16
          "
        >
          <div className="max-w-[570px]">
            <p
              className="
                font-body
                text-[12px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-primary-700
              "
            >
              STILL HAVE QUESTIONS?
            </p>

            <h2
              className="
                mt-4
                font-heading
                text-[28px]
                font-bold
                uppercase
                leading-tight
                text-secondary-900
                md:text-[34px]
              "
            >
              WE'RE JUST A MESSAGE AWAY
            </h2>

            <p
              className="
                mt-4
                max-w-[500px]
                font-body
                text-[15px]
                leading-7
                text-secondary-700
                md:text-[17px]
              "
            >
              Can't find what you're looking for?
              <br />
              Our team is happy to help you on your wellness journey.
            </p>

            <Link to="/join-now" className="inline-block">
              <Button className="mt-6 min-w-[235px]">
                START YOUR JOURNEY →
              </Button>
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <div
              className="
                flex
                h-[190px]
                w-[190px]
                items-center
                justify-center
                rounded-full
                bg-white/30
                p-5
              "
            >
              <img
                src="/assets/YFL LOGO (5) 2.png"
                alt="Yoga for Life"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
