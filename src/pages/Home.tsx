import { Link } from "react-router-dom";
import {
  Users,
  Trophy,
  Accessibility,
  HeartHandshake,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Check,
  Star,
  Compass,
  Calendar,
  Smile,
  ShieldCheck,
} from "lucide-react";

import { Button } from "../components/ui/Button";

const HERO_IMAGE = "/assets/yfl 1.png";

export function Home() {
  const stats = [
    { value: "1K+", label: "Student's Everyday", icon: Users },
    { value: "7+", label: "Award Winnings", icon: Trophy },
    { value: "4+", label: "Years of Experience", icon: Accessibility },
    { value: "100+", label: "Happy Clients", icon: HeartHandshake },
  ];

  const programs = [
    {
      title: "Weight Loss Yoga",
      description:
        "A structured program combining mindful movement and healthy habits to help you reach your goals sustainably.",
      image: "/assets/image 4.png",
    },
    {
      title: "Prenatal Yoga",
      description:
        "Build strength, ease pregnancy discomforts, and connect with your baby through breath and mindful movement.",
      image: "/assets/image 2.png",
    },
    {
      title: "Postnatal Yoga",
      description:
        "Gentle core and pelvic-floor recovery designed to support the postpartum body with care and confidence.",
      image: "/assets/image 1.png",
    },
    {
      title: "Couples Yoga",
      description:
        "Strengthen your connection through shared movement, breathing, balance, and calming partner practices.",
      image: "/assets/image 3.png",
    },
    {
      title: "Senior Yoga",
      description:
        "Accessible yoga designed to improve mobility, balance, flexibility, and everyday confidence.",
      image: "/assets/image 5.png",
    },
    {
      title: "Online Session",
      description:
        "Practice from anywhere with guided sessions designed around your schedule and personal wellness goals.",
      image: "/assets/image 6.png",
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

  const testimonials = [
    {
      rating: 5,
      text: "Yoga for Life has completely transformed my daily routine. I feel more energetic, flexible, and grounded in everything I do.",
      name: "Priya S.",
      role: "Member since 2023",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    },
    {
      rating: 5,
      text: "The instructors are genuinely supportive and attentive. Every class leaves me feeling peaceful, centered, and motivated.",
      name: "Sneha M.",
      role: "Member since 2022",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    },
    {
      rating: 5,
      text: "I joined with back stiffness and anxiety from long desk hours. Within weeks my posture improved and I regained calm focus.",
      name: "Vikram R.",
      role: "Member since 2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <main className="w-full bg-[#FCFDF9] text-[#2D3823] font-sans antialiased selection:bg-[#CCD9BE]">
      
      {/* 1. HERO SECTION */}
      <section className="home-hero relative min-h-[520px] overflow-hidden bg-[#D9CBAE] sm:min-h-[620px] lg:min-h-[700px]">
        <img src={HERO_IMAGE} alt="Woman meditating in a peaceful yoga studio" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(223,211,181,.88)_0%,rgba(223,211,181,.6)_43%,rgba(223,211,181,0)_72%)]" />
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
              Experience authentic yoga practices that strengthen your body, calm your mind,
              and inspire a healthier, more mindful way of life.
            </p>
            <Link to="/join-now">
              <Button className="rounded-xl bg-[#7EA65D] px-8 py-3.5 text-xs font-bold tracking-wide text-white shadow-md hover:bg-[#628847] transition-all inline-flex items-center gap-2 sm:px-12 sm:py-4 sm:text-sm">
                <span>START YOUR JOURNEY</span> <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="border-y border-[#DEE5D6] bg-[#F3F6EC] py-7 sm:py-9">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#D6DFCD] md:grid-cols-4 px-4 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center justify-center p-3">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E5EDDA]">
                  <Icon className="h-4 w-4 text-[#608044]" strokeWidth={1.8} />
                </div>
                <span className="font-serif text-3xl font-bold tracking-tight text-[#486331]">
                  {stat.value}
                </span>
                <span className="mt-1 text-[10px] font-semibold tracking-wider text-[#69775E] uppercase">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PROGRAMS / OUR GOALS */}
      <section className="relative bg-[#FAFCF6] px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1120px] text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#69854E]">
            OUR GOALS
          </span>
          <p className="mx-auto mt-2 max-w-[620px] text-xs leading-relaxed text-[#5F6D54]">
            Helping you build a healthier body, a calmer mind, and a more balanced life through
            personalized yoga programs for every stage of your wellness journey.
          </p>
          <h2 className="mt-3 font-serif text-2xl font-bold text-[#44602E] sm:text-3xl">
            Helping You Build a Healthier Life
          </h2>

          {/* Row 1: 4 Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.slice(0, 4).map((program) => (
              <div
                key={program.title}
                className="flex flex-col items-center rounded-2xl border border-[#DCE4D1] bg-[#EFF4E7] p-6 text-center shadow-xs transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-sm bg-white">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#405A2A]">{program.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5E6C53] flex-grow">
                  {program.description}
                </p>
                <Link to="/program" className="mt-5">
                  <Button
                    variant="outline-light"
                    className="rounded-full border-[#92AD76] bg-white px-5 py-1.5 text-[10px] font-bold tracking-wider text-[#4E6B34] hover:bg-[#5E7E41] hover:text-white"
                  >
                    EXPLORE
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Centered Cards */}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {programs.slice(4).map((program) => (
              <div
                key={program.title}
                className="w-full max-w-[260px] flex flex-col items-center rounded-2xl border border-[#DCE4D1] bg-[#EFF4E7] p-6 text-center shadow-xs transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-sm bg-white">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#405A2A]">{program.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5E6C53] flex-grow">
                  {program.description}
                </p>
                <Link to="/program" className="mt-5">
                  <Button
                    variant="outline-light"
                    className="rounded-full border-[#92AD76] bg-white px-5 py-1.5 text-[10px] font-bold tracking-wider text-[#4E6B34] hover:bg-[#5E7E41] hover:text-white"
                  >
                    EXPLORE
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-[#F5F8F0] px-6 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#69854E]">
              WHY CHOOSE YOGA FOR LIFE?
            </span>
            <h2 className="mt-2 max-w-[520px] font-sans text-xl font-bold leading-tight text-[#587B44] sm:text-2xl">
              Empowering<br className="sm:hidden" /> Every Step of Your Wellness Journey
            </h2>
            <p className="mt-3 max-w-[1020px] text-[11px] leading-[1.9] text-[#263524] sm:text-xs">
              At Yoga for Life, we believe true wellness is more than physical fitness—it is about creating balance between your body,
              mind, and everyday life. Our experienced instructors guide you through thoughtfully designed yoga practices that support
              your individual needs and wellness goals. Regular practice helps you become more aware of your body and its needs.
              Through breathing and relaxation, you learn to manage stress and create inner calm.Each class encourages consistency
              and helps you build healthier habits.With regular guidance, small changes can gradually become a part of your lifestyle.
              And because every YFL class is online, you can practice comfortably from your own home.
            </p>
            <p className="mt-1 text-[11px] font-semibold leading-relaxed text-[#263524] sm:text-xs">
              YFL is not just a yoga class—it is a simple step towards a healthier, happier and more balanced life. 🌱
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-5">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex min-h-[70px] items-center gap-3 rounded-xl border border-[#9BA895] bg-[#F4F7EF] px-5 py-3 text-left"
                >
                  <Icon className="h-5 w-5 shrink-0 text-[#759B59]" strokeWidth={2} />
                  <p className="text-[11px] leading-[1.25] text-[#2D382A]">{item.text}</p>
                </div>
              );
            })}
          </div>

          <p className="mt-7 text-center text-base font-bold text-[#587B44] sm:text-lg">
            Start where you are. Practice with purpose. Grow at your own pace.
          </p>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="bg-[#EFF4E8] px-6 py-20">
        <div className="mx-auto max-w-[1040px] text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#69854E]">
            HOW IT WORKS
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-[#425D2B] sm:text-3xl">
            Your Journey Starts in 3 Simple Steps
          </h2>
          <p className="mx-auto mt-2 max-w-[580px] text-xs text-[#5F6E54]">
            Begin your wellness journey with a simple, personalized process designed to help you find
            the right yoga program.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-6">
            <div className="w-full max-w-[310px] rounded-2xl border border-[#D5DEC9] bg-[#FAFDF7] p-7 text-center shadow-xs">
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E3ECCE] text-sm font-bold text-[#4A6734]">
                1
              </span>
              <h3 className="font-serif text-sm font-bold text-[#3E5929]">Book a Free Consultation</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#62715A]">
                Share your goals and wellness needs with our guides for a tailored assessment.
              </p>
            </div>

            <div className="hidden text-2xl text-[#9AB380] md:block">→</div>

            <div className="w-full max-w-[310px] rounded-2xl border border-[#D5DEC9] bg-[#FAFDF7] p-7 text-center shadow-xs">
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E3ECCE] text-sm font-bold text-[#4A6734]">
                2
              </span>
              <h3 className="font-serif text-sm font-bold text-[#3E5929]">Choose Your Ideal Program</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#62715A]">
                We recommend the perfect yoga path suited to your routine, health, and schedule.
              </p>
            </div>

            <div className="hidden text-2xl text-[#9AB380] md:block">→</div>

            <div className="w-full max-w-[310px] rounded-2xl border border-[#D5DEC9] bg-[#FAFDF7] p-7 text-center shadow-xs">
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E3ECCE] text-sm font-bold text-[#4A6734]">
                3
              </span>
              <h3 className="font-serif text-sm font-bold text-[#3E5929]">Start Your Yoga Journey</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#62715A]">
                Join your classes, build consistency, and experience physical and mental harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="bg-[#FAFBF7] px-6 py-20">
        <div className="mx-auto max-w-[1080px] text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#69854E]">
            TESTIMONIALS
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-[#425E2C] sm:text-3xl">
            What Our Students Say
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 text-left">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-[#DDE5D4] bg-white p-6 shadow-xs"
              >
                <div>
                  <div className="mb-3 flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#6C8A4E] text-[#6C8A4E]" />
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-[#596650]">"{t.text}"</p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-[#EEF2E7] pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-9 w-9 rounded-full object-cover border border-[#D2DDC7]"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-[#3B5426]">{t.name}</h5>
                    <span className="text-[10px] text-[#717E68]">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section id="pricing" className="bg-[#EFF4EA] px-6 py-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#69854E]">
            PRICING
          </span>
          <div className="mt-2 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-[#739450]" />
            <h2 className="font-serif text-2xl font-bold text-[#3E5929] sm:text-3xl">
              Choose the Plan That Fits Your Journey
            </h2>
            <Sparkles className="h-4 w-4 text-[#739450]" />
          </div>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
            {/* Starter */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#D3DDC7] bg-white p-7 text-center shadow-xs">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#3E5929]">Starter</h3>
                <div className="mt-4 font-serif text-3xl font-bold text-[#354D22]">₹1,499<span className="text-xs font-sans text-gray-500 font-normal"> / month</span></div>
                <ul className="mt-6 space-y-3 text-xs text-[#5D6B53]">
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#608044]" /> 3 Classes / Week</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#608044]" /> Community Support</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#608044]" /> Beginner Friendly</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#608044]" /> Group Mentoring</li>
                </ul>
              </div>
              <Button className="mt-8 w-full rounded-full border border-[#89A66D] bg-transparent py-2.5 text-xs font-bold text-[#45622F] hover:bg-[#5E7E41] hover:text-white">
                GET STARTED
              </Button>
            </div>

            {/* Popular (Highlighted Green) */}
            <div className="relative flex flex-col justify-between rounded-2xl border border-[#44602E] bg-[#4B6833] p-7 text-center text-white shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#7CA259] px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                Most Popular
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold">Popular</h3>
                <div className="mt-4 font-serif text-3xl font-bold">₹2,499<span className="text-xs font-sans text-white/80 font-normal"> / month</span></div>
                <ul className="mt-6 space-y-3 text-xs text-white/90">
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#CFE4B8]" /> 5 Classes / Week</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#CFE4B8]" /> Personalized Guidance</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#CFE4B8]" /> Nutrition Tips</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#CFE4B8]" /> Progress Tracking</li>
                </ul>
              </div>
              <Button className="mt-8 w-full rounded-full bg-white py-2.5 text-xs font-bold text-[#3C5427] hover:bg-[#EFF4E7]">
                GET STARTED
              </Button>
            </div>

            {/* Premium */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#D3DDC7] bg-white p-7 text-center shadow-xs">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#3E5929]">Premium</h3>
                <div className="mt-4 font-serif text-3xl font-bold text-[#354D22]">₹4,499<span className="text-xs font-sans text-gray-500 font-normal"> / month</span></div>
                <ul className="mt-6 space-y-3 text-xs text-[#5D6B53]">
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#608044]" /> Daily Classes</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#608044]" /> 1-on-1 Mentoring</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#608044]" /> Custom Meal Plan</li>
                  <li className="flex items-center justify-center gap-2"><Check className="h-3.5 w-3.5 text-[#608044]" /> Lifestyle Coaching</li>
                </ul>
              </div>
              <Button className="mt-8 w-full rounded-full border border-[#89A66D] bg-transparent py-2.5 text-xs font-bold text-[#45622F] hover:bg-[#5E7E41] hover:text-white">
                GET STARTED
              </Button>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="mt-12 mx-auto flex max-w-[880px] flex-col items-center justify-between gap-4 rounded-xl border border-[#D0DBC7] bg-[#FCFDF9] p-5 md:flex-row md:px-8">
            <div className="text-left">
              <h4 className="font-serif text-sm font-bold text-[#425E2D]">
                PREFER TO DISCUSS PRICING PRIVATELY?
              </h4>
              <p className="text-xs text-[#637158]">
                Contact us directly for custom schedules and individual queries.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-xs text-[#4E6040]">
              <div className="flex items-center gap-1.5 font-medium">
                <Phone size={14} className="text-[#658746]" /> +91 8870461152
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Mail size={14} className="text-[#658746]" /> hello@yogaforlife.com
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="font-bold text-[#658746]">@</span> yogaforlifeyfl
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="relative overflow-hidden bg-[#E2ECD5] bg-cover bg-center py-20 text-center" style={{ backgroundImage: "url('/assets/Weight Loss CTA Background.png')" }}>
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
          <div className="mt-7">
            <Link to="/join-now">
              <Button className="rounded-full bg-[#5C7D3C] px-8 py-3 text-xs font-bold tracking-wider text-white shadow-md hover:bg-[#49652E] inline-flex items-center gap-2">
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