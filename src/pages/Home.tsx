import { Link } from "react-router-dom";
import {
  Users,
  Accessibility,
  HeartHandshake,
  Camera,
  Crown,
  Dumbbell,
  Flower2,
  Phone,
  Mail,
  ArrowRight,
  Check,
  Compass,
  Calendar,
  Smile,
  ShieldCheck,
} from "lucide-react";

import { Button } from "../components/ui/Button";
import { defaultTestimonials, TestimonialGrid } from "../components/ui/TestimonialGrid";
import { contactDetails } from "../constants/contactDetails";

const HERO_IMAGE = "/assets/BG/Home.webp";

const pricingPlans = [
  {
    name: "GENERAL YOGA",
    price: "₹1,300",
    period: "/month",
    icon: Flower2,
    features: ["5 Classes / Week", "Community Support", "Beginner Friendly", "Mentoring"],
  },
  {
    name: "WEIGHT LOSS YOGA",
    price: "₹1,000",
    period: "/month",
    icon: Dumbbell,
    popular: true,
    features: ["3 Classes / Week", "Personalized Guidance", "Nutrition Tips", "Progress Tracking"],
  },
  {
    name: "PRIVATE SESSION",
    price: "₹250",
    period: "/per class",
    icon: Crown,
    features: ["Customized Classes", "1-on-1 Mentoring", "Custom Meal Plan", "Lifestyle Habits"],
  },
];

export function Home() {
  const stats = [
    { value: "50+", label: "Active Students", icon: Users },
    { value: "5+", label: "Years of Experience", icon: Accessibility },
    { value: "200+", label: "Happy Clients", icon: HeartHandshake },
    { value: "100%", label: "Community Support", icon: HeartHandshake },
  ];

  const programs = [
    {
      title: "Weight Loss Yoga",
      route: "/program/weight-loss-yoga",
      description:
        "A structured program combining movement and mindful eating guidance to help you reach your goals sustainably.",
      image: "/assets/image 4.png",
    },
    {
      title: "Prenatal Yoga",
      route: "/program/prenatal-yoga",
      description:
        "Build strength for labor, ease pregnancy discomforts, and connect with your baby through breath and movement.",
      image: "/assets/image 2.png",
    },
    {
      title: "Postnatal Yoga",
      route: "/program/postnatal-yoga",
      description:
        "Gentle core and pelvic-floor recovery, designed for the postpartum body and safe to start once cleared by your doctor.",
      image: "/assets/image 1.png",
    },
    {
      title: "General Yoga",
      route: "/program/general-yoga",
      description:
        "Build a strong foundation through mindful movement, breathwork, meditation, and relaxation.",
      image: "/assets/image 3.png",
    },
    {
      title: "Senior Yoga",
      route: "/program/senior-yoga",
      description:
        "Gentle, safe practice designed to support mobility, balance, strength, and confidence at home.",
      image: "/assets/pexels-ray-lei-2809836-13849242 1.png",
    },
    {
      title: "Private Session",
      route: "/program/private-session",
      description:
        "Personalized one-to-one guidance designed around your individual goals, lifestyle, and needs.",
      image: "/assets/ChatGPT Image Aug 28, 2026, 04_56_39 PM 1.png",
    },
  ];

  const whyChooseUs = [
    {
      icon: Compass,
      text: "Your focus is on creating habits you can carry into everyday life.",
    },
    {
      icon: Users,
      text: "Join a welcoming community that motivates & supports you.",
    },
    {
      icon: Smile,
      text: "Personalized yoga sessions designed to meet you where you are.",
    },
    {
      icon: Calendar,
      text: "Working with body, mind, breath & lifestyle not just the physical practice.",
    },
    {
      icon: HeartHandshake,
      text: "Improve physical strength, mental clarity, and inner balance.",
    },
    {
      icon: ShieldCheck,
      text: "Experience authentic yoga rooted in tradition and mindfulness.",
    },
  ];

  return (
    <main className="w-full bg-[#FCFDF9] text-[#2D3823] font-sans antialiased selection:bg-[#CCD9BE]">
      
      <section className="home-hero relative min-h-[520px] overflow-hidden bg-[#D9CBAE] sm:min-h-[620px] lg:min-h-[700px]">
        <img src={HERO_IMAGE} alt="Woman meditating in a peaceful yoga studio" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(223,211,181,.88)_0%,rgba(223,211,181,.6)_43%,rgba(223,211,181,0)_72%)] lg:hidden" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1320px] items-center px-6 py-20 sm:min-h-[620px] sm:px-10 lg:min-h-[700px] lg:px-24">
          <div className="z-10 max-w-[610px] text-left">
            <span className="mb-5 inline-block text-[10px] font-semibold tracking-[0.18em] text-[#3D5A2B] uppercase sm:text-xs">
              YOGA FOR LIFE · BALANCE. BREATHE. BLOOM.
            </span>
            <h1 className="mb-5 font-serif text-[46px] leading-[1.02] tracking-tight text-[#1B2A15] sm:text-[62px] lg:text-[78px]">
              Find Balance.<br />
              <span className="font-normal italic text-[#628343]">Live Better.</span>
            </h1>
            <p className="mb-8 max-w-[500px] text-sm leading-relaxed text-[#24331D] sm:text-lg">
              Start your journey towards a stronger body, a calmer mind, and a
              healthier life.
            </p>
            <Link to="/join-now">
              <Button className="rounded-xl bg-[#7EA65D] px-8 py-3.5 text-xs font-bold tracking-wide text-white shadow-md hover:bg-[#628847] transition-all inline-flex items-center gap-2 sm:px-12 sm:py-4 sm:text-sm">
                <span>START YOUR JOURNEY</span> <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#DEE5D6] bg-[#F3F6EC] py-7 sm:py-9">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#D6DFCD] md:grid-cols-4 px-4 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
                <div key={stat.label} className="flex flex-col items-center justify-center p-3 sm:p-5">
                <div className="mb-2 flex h-9 w-9 items-center justify-center text-accent-strong sm:h-11 sm:w-11">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.2} />
                </div>
                <span className="font-serif text-3xl font-bold tracking-tight text-[#486331] sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs font-semibold tracking-wider text-[#69775E] uppercase">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative bg-[#F8FAF3] px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep">
            OUR GOALS
          </span>
          <p className="mx-auto mt-2 max-w-[620px] text-xs leading-relaxed text-[#5F6D54]">
            At YFL Yoga for Life, we believe wellness is not a destination. It
            is a journey of small, consistent choices that create meaningful
            change.
          </p>
          <h2 className="mt-3 font-serif text-2xl font-bold text-[#44602E] sm:text-3xl">
            Helping You Build a Healthier Life
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="flex flex-col items-center rounded-[10px] border border-[#DCE4D1] bg-[#EFF4E7] p-5 text-center shadow-[0_2px_5px_rgba(55,75,43,0.16)] transition hover:-translate-y-1 hover:shadow-md sm:p-6 lg:p-7"
              >
                <div className="mb-5 h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-white shadow-sm">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#405A2A]">{program.title}</h3>
                <p className="mt-3 flex-grow pb-4 text-sm leading-relaxed text-[#5E6C53]">
                  {program.description}
                </p>
                <Link to={program.route} className="mt-4 w-full">
                  <Button
                    variant="outline-light"
                    className="h-9 w-full rounded-[5px] border-[#92AD76] bg-white px-3 py-1 text-xs font-bold tracking-wider text-[#4E6B34] hover:bg-forest-strong hover:text-white"
                  >
                    EXPLORE <ArrowRight aria-hidden="true" className="ml-1 inline h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-white px-6 py-12 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent-deep">
              WHY CHOOSE YOGA FOR LIFE?
            </span>
            <h2 className="mt-2 max-w-[560px] font-sans text-xl font-bold leading-tight text-[#587B44] sm:text-2xl">
              Empowering<br className="sm:hidden" /> Every Step of Your Wellness Journey
            </h2>
            <p className="mt-3 max-w-[1020px] text-xs leading-[1.9] text-[#263524] sm:text-sm">
              At Yoga for Life, we believe true wellness is more than physical
              fitness. It is about creating balance between your body, mind,
              and everyday life. Our experienced instructors guide you through
              thoughtfully designed yoga practices that support your
              individual needs and wellness goals. Regular practice helps you
              become more aware of your body and its needs. Through breathing
              and relaxation, you learn to manage stress and create inner calm.
              Each class encourages consistency and helps you build healthier
              habits. With regular guidance, small changes can gradually
              become part of your lifestyle. Because every YFL class is online,
              you can practice comfortably from your own home.
            </p>
            <p className="mt-1 text-xs font-semibold leading-relaxed text-[#263524] sm:text-sm">
              YFL is not just a yoga class. It is a simple step towards a
              healthier, happier, and more balanced life.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-5">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex min-h-[70px] items-center gap-3 rounded-[8px] border border-[#9BA895] bg-[#F4F7EF] px-5 py-3 text-left"
                >
                  <Icon className="h-5 w-5 shrink-0 text-[#759B59]" strokeWidth={2} />
                  <p className="text-xs leading-[1.35] text-[#2D382A]">{item.text}</p>
                </div>
              );
            })}
          </div>

          <p className="mt-7 text-center text-base font-bold text-[#587B44] sm:text-lg">
            Start where you are. Practice with purpose. Grow at your own pace.
          </p>
        </div>
      </section>

      <section className="bg-[#F3F6EC] px-6 py-12 sm:py-14">
        <div className="mx-auto max-w-[1040px]">
          <div className="max-w-[430px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-deep">
            HOW IT WORKS
            </span>
            <p className="mt-3 max-w-[310px] text-xs leading-relaxed text-[#5F6E54]">
              Begin your wellness journey with a simple, personalized process
              designed to help you find the right yoga program and achieve
              lasting results.
            </p>
          </div>
          <h2 className="mx-auto mt-7 text-center font-serif text-xl font-bold text-[#425D2B] sm:text-2xl">
            Your Journey Starts in 3 Simple Steps
          </h2>

          <div className="relative mt-9 grid grid-cols-1 items-center justify-items-center gap-7 md:grid-cols-3 md:gap-12">
            <div className="relative z-10 w-full max-w-[310px] rounded-[9px] border border-[#aebba4] bg-[#f7faef] p-5 text-center">
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E3ECCE] text-[#4A6734]">
                <Calendar aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="font-serif text-xs font-bold uppercase text-forest">Book a Free Consultation</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#62715A]">
                Share your goals and wellness needs with our guides for a tailored assessment.
              </p>
            </div>

            <div className="absolute left-[21%] right-[21%] top-1/2 hidden border-t border-[#83a36c] md:block" />

            <div className="relative z-10 w-full max-w-[310px] rounded-[9px] border border-[#aebba4] bg-[#f7faef] p-5 text-center">
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E3ECCE] text-[#4A6734]">
                <Compass aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="font-serif text-xs font-bold uppercase text-forest">Choose Your Ideal Program</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#62715A]">
                We recommend the perfect yoga path suited to your routine, health, and schedule.
              </p>
            </div>

            <div className="relative z-10 w-full max-w-[310px] rounded-[9px] border border-[#aebba4] bg-[#f7faef] p-5 text-center">
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E3ECCE] text-[#4A6734]">
                <HeartHandshake aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="font-serif text-xs font-bold uppercase text-forest">Start Your Yoga Journey</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#62715A]">
                Join your classes, build consistency, and experience physical and mental harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFBF7] px-6 py-20">
        <div className="mx-auto max-w-[1080px] text-center">
          <div className="mx-auto flex items-center justify-center gap-2.5">
            <h2 className="border-b border-[#aebba4] px-1 pb-1 font-heading text-[22px] font-bold uppercase leading-none text-[#455f37] sm:text-[24px]">
              Testimonials
            </h2>
          </div>
          <p className="mx-auto mt-3 max-w-[470px] font-body text-[13px] leading-[1.65] text-[#485744] sm:text-[14px]">
            Real stories from real people who have transformed their lives with
            Yoga for Life.
          </p>
          <h3 className="mt-4 font-heading text-[21px] font-bold leading-tight text-[#66884d] sm:text-[22px]">
            What Our Students Say
          </h3>

          <div className="mt-10">
            <TestimonialGrid testimonials={defaultTestimonials} />
          </div>
        </div>
      </section>

      <section id="pricing" className="relative isolate overflow-hidden bg-[#F4F7EF] px-5 pb-[60px] pt-12 sm:px-8">
        <div className="relative z-10 mx-auto max-w-[920px] text-center">
          <p className="font-heading text-[16px] font-bold text-[#4a6636]">PRICING</p>
          <p className="mx-auto mt-3 max-w-[400px] font-body text-[12px] leading-[1.8] text-[#5f6d56]">
            Simple, flexible membership options designed to help you stay
            consistent and achieve lasting results.
          </p>

          <div className="relative mx-auto mt-6 flex w-fit items-center justify-center gap-2 px-1 pb-2">
            <span aria-hidden="true" className="absolute bottom-0 left-7 right-7 h-px bg-[#aebba4]" />
            <img
              src="/assets/Yoga for Life - Review Post 1 (25) 1.png"
              alt=""
              aria-hidden="true"
              className="relative z-10 h-[22px] w-[30px] -scale-x-100 object-contain"
            />
            <h2 className="relative z-10 bg-[#F4F7EF] px-1 font-heading text-[20px] font-bold leading-tight text-[#4b6938] sm:text-[23px]">
              Choose the Plan That Fits Your Journey
            </h2>
            <img
              src="/assets/Yoga for Life - Review Post 1 (25) 1.png"
              alt=""
              aria-hidden="true"
              className="relative z-10 h-[22px] w-[30px] object-contain"
            />
          </div>

          <div className="mx-auto mt-10 grid max-w-[556px] grid-cols-1 items-stretch gap-3 min-[500px]:grid-cols-3 min-[500px]:gap-8">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <article
                  key={plan.name}
                  className="relative flex min-h-[290px] flex-col rounded-[10px] border border-[#d6dfcc] bg-[#fbfff5] px-4 pb-9 pt-5 text-center shadow-[0_2px_5px_rgba(48,67,37,0.12)]"
                >
                  {plan.popular && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#6f984f] px-3 py-1 font-body text-[10px] font-bold uppercase text-white">
                      Most Popular
                    </span>
                  )}
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e5eedc] text-[#54743e]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-1.5 font-heading text-xs font-bold text-[#486438]">
                    {plan.name}
                  </h3>
                  <ul className="mt-2.5 flex-1 space-y-1 border-t border-[#e2e9dc] pt-2 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-1.5 font-body text-xs leading-tight text-[#485344]">
                        <Check aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full bg-[#79a45a] p-[2px] text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 border-t border-[#e2e9dc] pt-2 font-heading text-sm font-bold text-[#405b30]">
                    {plan.price}<span className="ml-1 font-body text-xs font-normal text-[#727d6d]">{plan.period}</span>
                  </p>
                  <Link to="/join-now" className="mt-2 inline-flex w-full">
                    <Button className="h-9 w-full rounded-[6px] bg-[#6f984f] px-2 py-1 text-xs font-bold text-white shadow-[0_2px_4px_rgba(54,76,39,0.2)] hover:bg-[#5f8542]">
                      GET STARTED <ArrowRight aria-hidden="true" className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="relative mx-auto mt-[54px] flex min-h-[134px] max-w-[556px] flex-col items-center gap-4 rounded-[9px] border border-[#ccd7c2] bg-[#f8fbf4] px-4 py-6 text-left min-[500px]:flex-row min-[500px]:gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5eedc] text-[#789b56]">
              <Phone aria-hidden="true" className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-heading text-xs font-bold text-[#587545]">
                PREFER TO DISCUSS PRICING PRIVATELY?
              </h3>
              <p className="mt-1 font-body text-xs leading-relaxed text-[#56624e]">
                We&apos;re happy to help you find the right plan for your goals.
                Contact us for personalized support.
              </p>
            </div>
            <div className="grid w-full gap-2 border-t border-[#d7e0d0] pt-3 font-body text-xs text-[#4e6040] min-[500px]:w-[170px] min-[500px]:shrink-0 min-[500px]:border-l min-[500px]:border-t-0 min-[500px]:pl-7 min-[500px]:pt-0">
              <a href={contactDetails.phoneHref} className="inline-flex cursor-pointer items-center gap-1.5 hover:text-[#315326]">
                <Phone aria-hidden="true" className="h-3 w-3 text-[#658746]" /> {contactDetails.phoneDisplay}
              </a>
              <a href={`mailto:${contactDetails.email}`} className="inline-flex cursor-pointer items-center gap-1.5 hover:text-[#315326]">
                <Mail aria-hidden="true" className="h-3 w-3 text-[#658746]" /> {contactDetails.email}
              </a>
              <a href={contactDetails.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex cursor-pointer items-center gap-1.5 hover:text-[#315326]">
                <Camera aria-hidden="true" className="h-3 w-3 text-[#658746]" /> {contactDetails.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative isolate flex min-h-[320px] items-center justify-center overflow-hidden bg-[#EAF2D8] bg-cover bg-right px-5 py-12 text-center sm:bg-center"
        style={{ backgroundImage: "url('/assets/BG/HomeCta.webp')" }}
      >
        <div className="relative z-10 mx-auto max-w-[620px] px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5A793F]">
            READY TO BEGIN?
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#28381C] sm:text-4xl">
            Every Great Journey Begins with a{" "}
            <span className="italic text-[#547537]">Single Breath.</span>
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-[#566747]">
            Join a supportive community where expert guidance, mindful practice, and personalized
            programs help you become the healthiest version of yourself.
          </p>
          <div className="mt-6">
            <Link to="/join-now">
              <Button className="inline-flex items-center gap-2 rounded-[6px] bg-[#5C7D3C] px-8 py-3 text-xs font-bold tracking-wider text-white shadow-md hover:bg-[#49652E]">
                <span>START YOUR JOURNEY</span> <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;