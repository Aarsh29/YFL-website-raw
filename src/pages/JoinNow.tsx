import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Target,
  MessageCircle,
  Lock,
  Check,
  Baby,
  Dumbbell,
  Flower2,
  Heart,
  Crown,
  CircleUserRound,
} from "lucide-react";

type Program = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
};

type Plan = {
  id: string;
  name: string;
  price: string;
  suffix: string;
  features: string[];
  icon: React.ElementType;
  popular?: boolean;
};

const programs: Program[] = [
  {
    id: "weight-loss",
    name: "WEIGHT LOSS YOGA",
    description:
      "Achieve your weight goals with effective yoga practices and mindful living......",
    icon: Dumbbell,
  },
  {
    id: "prenatal",
    name: "PRENATAL YOGA",
    description:
      "Safe and supportive yoga practices for a healthy pregnancy and recovery......",
    icon: Baby,
  },
  {
    id: "postnatal",
    name: "POSTNATAL YOGA",
    description:
      "Build strength, tone body and improve overall fitness and endurance......",
    icon: Flower2,
  },
  {
    id: "general",
    name: "GENERAL YOGA",
    description:
      "Enhance overall well-being with balanced yoga for body, mind, inner peace......",
    icon: Heart,
  },
  {
    id: "senior",
    name: "SENIOR YOGA",
    description:
      "Gentle and therapeutic yoga for seniors to improve mobility, strength, vitality......",
    icon: CircleUserRound,
  },
  {
    id: "private",
    name: "PRIVATE SESSION",
    description:
      "Personalized one-on-one sessions designed to meet unique goals and needs......",
    icon: User,
  },
];

const plans: Plan[] = [
  {
    id: "general-plan",
    name: "GENERAL YOGA",
    price: "₹ 1,300",
    suffix: "/month",
    icon: Flower2,
    features: [
      "5 Classes / Week",
      "Community Support",
      "Beginner Friendly",
      "Mentoring",
    ],
  },
  {
    id: "weight-loss-plan",
    name: "WEIGHT LOSS YOGA",
    price: "₹ 1,000",
    suffix: "/month",
    icon: Dumbbell,
    popular: true,
    features: [
      "3 Classes / Week",
      "Personalized Guidance",
      "Nutrition Tips",
      "Progress Tracking",
    ],
  },
  {
    id: "private-plan",
    name: "PRIVATE SESSION",
    price: "₹ 250",
    suffix: "/per class",
    icon: Crown,
    features: [
      "Customized Classes",
      "1-on-1 Mentoring",
      "Custom Meal Plan",
      "Lifestyle Habits",
    ],
  },
];

export function JoinNow() {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    goals: "",
    notes: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedProgram) {
      alert("Please choose a program.");
      return;
    }

    if (!selectedPlan) {
      alert("Please choose a plan.");
      return;
    }

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.goals
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    navigate("/join-success");
  };

  return (
    <main className="min-h-screen w-full bg-white text-ink-strong">
      <section className="px-5 pt-10 sm:pt-14 md:pt-16">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center text-center">
          <img
            src="/assets/YFL LOGO (5) 2.png"
            alt="Yoga For Life"
            className="h-[95px] w-[95px] object-contain sm:h-[110px] sm:w-[110px] md:h-[125px] md:w-[125px]"
          />

          <h1
            className="
              mt-7
              font-heading
              text-[31px]
              font-bold
              leading-[1.08]
              text-[#182818]
              sm:text-[38px]
              md:text-[46px]
            "
          >
            START YOUR YOGA JOURNEY
          </h1>

          <p
            className="
              mt-3
              max-w-[900px]
              font-body
              text-[11px]
              uppercase
              tracking-[0.03em]
              text-[#303c2c]
              sm:text-[12px]
              md:text-[13px]
            "
          >
            CHOOSE YOUR PROGRAM, SELECT A PLAN, AND SHARE YOUR DETAILS. TO
            BEGIN YOUR JOURNEY WITH YOGA FOR LIFE.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 pt-16 sm:px-8 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-[1180px]">
          <StepHeading
            number="1"
            title="CHOOSE YOUR PROGRAM"
            description="Select the program that best matches your goals."
          />

          <div className="mx-auto mt-7 grid max-w-[1050px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.slice(0, 4).map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                selected={selectedProgram === program.id}
                onSelect={() => setSelectedProgram(program.id)}
              />
            ))}
          </div>

          <div className="mx-auto mt-4 grid max-w-[525px] grid-cols-1 gap-4 sm:grid-cols-2">
            {programs.slice(4).map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                selected={selectedProgram === program.id}
                onSelect={() => setSelectedProgram(program.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7ed] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <StepHeading
            number="2"
            title="CHOOSE YOUR PLAN"
            description="Pick a plan that fits your schedule and lifestyle."
          />

          <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-1 gap-8 md:grid-cols-3 md:gap-7">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                selected={selectedPlan === plan.id}
                onSelect={() => setSelectedPlan(plan.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-20 sm:px-8 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-[1180px]">
          <StepHeading
            number="3"
            title="YOUR DETAILS"
            description="Please fill in your details to complete your registration."
          />

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 w-full max-w-[700px]"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-icon"
                  size={19}
                  strokeWidth={2}
                />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="
                    h-[49px]
                    w-full
                    rounded-[6px]
                    border
                    border-border-control
                    bg-surface-input
                    pl-11
                    pr-4
                    font-body
                    text-[13px]
                    text-ink-strong
                    outline-none
                    transition
                    placeholder:text-placeholder
                    focus:border-focus
                    focus:ring-1
                    focus:ring-focus
                  "
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-red-500">
                  *
                </span>
              </div>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-icon"
                  size={19}
                  strokeWidth={2}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="
                    h-[49px]
                    w-full
                    rounded-[6px]
                    border
                    border-border-control
                    bg-surface-input
                    pl-11
                    pr-4
                    font-body
                    text-[13px]
                    text-ink-strong
                    outline-none
                    transition
                    placeholder:text-placeholder
                    focus:border-focus
                    focus:ring-1
                    focus:ring-focus
                  "
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-red-500">
                  *
                </span>
              </div>

              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-icon"
                  size={19}
                  strokeWidth={2}
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="
                    h-[49px]
                    w-full
                    rounded-[6px]
                    border
                    border-border-control
                    bg-surface-input
                    pl-11
                    pr-4
                    font-body
                    text-[13px]
                    text-ink-strong
                    outline-none
                    transition
                    placeholder:text-placeholder
                    focus:border-focus
                    focus:ring-1
                    focus:ring-focus
                  "
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-red-500">
                  *
                </span>
              </div>

              <div className="relative">
                <Target
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-icon"
                  size={19}
                  strokeWidth={2}
                />

                <input
                  type="text"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="Body & Mind Goals"
                  required
                  className="
                    h-[49px]
                    w-full
                    rounded-[6px]
                    border
                    border-border-control
                    bg-surface-input
                    pl-11
                    pr-4
                    font-body
                    text-[13px]
                    text-ink-strong
                    outline-none
                    transition
                    placeholder:text-placeholder
                    focus:border-focus
                    focus:ring-1
                    focus:ring-focus
                  "
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-red-500">
                  *
                </span>
              </div>

              <div className="relative sm:col-span-2">
                <MessageCircle
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-icon"
                  size={19}
                  strokeWidth={2}
                />

                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Anything We Should Know? (Optional)"
                  className="
                    h-[49px]
                    w-full
                    rounded-[6px]
                    border
                    border-border-control
                    bg-surface-input
                    pl-11
                    pr-4
                    font-body
                    text-[13px]
                    text-ink-strong
                    outline-none
                    transition
                    placeholder:text-placeholder
                    focus:border-focus
                    focus:ring-1
                    focus:ring-focus
                  "
                />
              </div>
            </div>

            <button
              type="submit"
              className="
                mt-7
                flex
                h-[48px]
                w-full
                items-center
                justify-center
                rounded-[6px]
                bg-[#6c984d]
                px-6
                font-body
                text-[13px]
                font-bold
                tracking-wide
                text-white
                shadow-sm
                transition
                hover:bg-[#5f8a43]
                active:scale-[0.99]
              "
            >
              JOIN NOW →
            </button>

            <div className="mt-8 flex items-center justify-center gap-2">
              <Lock
                size={13}
                strokeWidth={2}
                className="text-[#71935d]"
              />

              <p className="font-body text-[12px] text-[#687260]">
                Your information is safe with us. We respect your privacy
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#e7ece1] bg-white px-6 pb-5 pt-14 sm:px-10 md:pt-16">
        <div
          className="
            mx-auto
            grid
            max-w-[1120px]
            grid-cols-1
            gap-12
            md:grid-cols-[1.6fr_0.8fr_0.9fr_1.1fr]
            md:gap-8
          "
        >
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex">
              <img
                src="/assets/YFL LOGO (5) 2.png"
                alt="Yoga For Life"
                className="mx-auto h-[105px] w-[105px] object-contain md:mx-0"
              />
            </Link>

            <div className="mt-3 flex items-center justify-center gap-2 md:justify-start">
              <span className="h-px w-5 bg-[#789963]" />

              <p className="font-heading text-[10px] font-semibold tracking-wide text-heading-secondary">
                YOGA FOR LIFE · BALANCE. BREATHE. BLOOM.
              </p>

              <span className="h-px w-5 bg-[#789963]" />
            </div>

            <p className="mx-auto mt-4 max-w-[285px] font-body text-[12px] leading-5 text-[#65705e] md:mx-0">
              Helping you build strength, balance, and inner peace through
              authentic yoga.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-[11px] font-bold uppercase text-[#587448]">
              QUICK LINKS
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About" />
              <FooterLink to="/testimonials" label="Testimonials" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/join-now" label="Join Now" />
            </div>
          </div>

          <div>
            <h3 className="font-heading text-[11px] font-bold uppercase text-[#587448]">
              PROGRAMS
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <FooterLink to="/weight-loss-yoga" label="Weight Loss" />
              <FooterLink to="/prenatal-yoga" label="Prenatal" />
              <FooterLink to="/postnatal-yoga" label="Postnatal" />
              <FooterLink to="/general-yoga" label="General yoga" />
              <FooterLink to="/senior-yoga" label="Senior yoga" />
              <FooterLink to="/program/private-session" label="Private sessions" />
            </div>
          </div>

          <div>
            <h3 className="font-heading text-[11px] font-bold uppercase text-[#587448]">
              CONTACT
            </h3>

            <div className="mt-4 flex flex-col gap-3 font-body text-[11px] text-[#65705e]">
              <p>📍 Hosur, Tamil Nadu</p>

              <p className="leading-4">
                ☎ +91 8870461152
                <br />
                &nbsp;&nbsp;&nbsp; +91 9976044683
              </p>

              <p>✉ hello@yogaforlife.com</p>

              <p>◎ yogaforlifeyf1</p>

              <p>◷ Mon–Sat</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1120px] border-t border-[#9ba49a] pt-5 text-center">
          <p className="font-body text-[10px] text-[#687260]">
            © Creavitechologies.com All Rights Reserved.
            <span className="mx-1">Privacy Policy</span> •{" "}
            <span className="ml-1">Terms & Conditions</span>
          </p>
        </div>
      </footer>
    </main>
  );
}


function StepHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="
          mt-0.5
          flex
          h-[25px]
          w-[25px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border-2
          border-[#80a765]
          font-body
          text-[13px]
          font-bold
          text-[#719858]
        "
      >
        {number}
      </div>

      <div>
        <h2
          className="
            font-heading
            text-[15px]
            font-bold
            leading-6
            text-heading-secondary
            sm:text-[16px]
          "
        >
          {title}
        </h2>

        <p className="font-body text-[14px] leading-6 text-[#354130] sm:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}


function ProgramCard({
  program,
  selected,
  onSelect,
}: {
  program: Program;
  selected: boolean;
  onSelect: () => void;
}) {
  const Icon = program.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        group
        relative
        flex
        min-h-[195px]
        w-full
        flex-col
        items-center
        rounded-[9px]
        border
        px-5
        pb-5
        pt-6
        text-center
        transition-all
        duration-200
        ${
          selected
            ? "border-focus bg-[#f3f8ed] shadow-[0_3px_10px_rgba(76,105,60,0.12)]"
            : "border-[#cbd5c4] bg-[#f8faf6] hover:border-[#93b27d] hover:bg-[#f3f8ed]"
        }
      `}
    >
      <div
        className={`
          flex
          h-[50px]
          w-[50px]
          items-center
          justify-center
          rounded-full
          transition
          ${
            selected
              ? "bg-[#dce9d3] text-focus"
              : "bg-[#e6eedf] text-focus"
          }
        `}
      >
        <Icon size={25} strokeWidth={1.8} />
      </div>

      <h3
        className="
          mt-4
          font-heading
          text-[12px]
          font-bold
          leading-5
          text-heading-secondary
        "
      >
        {program.name}
      </h3>

      <p
        className="
          mt-3
          max-w-[190px]
          font-body
          text-[10px]
          leading-[1.45]
          text-[#354130]
        "
      >
        {program.description}
      </p>

      <div
        className={`
          mt-auto
          flex
          h-[20px]
          w-[20px]
          items-center
          justify-center
          rounded-full
          border
          ${
            selected
              ? "border-focus bg-focus"
              : "border-[#9cbd86] bg-transparent"
          }
        `}
      >
        {selected && <Check size={12} className="text-white" />}
      </div>
    </button>
  );
}


function PlanCard({
  plan,
  selected,
  onSelect,
}: {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
}) {
  const Icon = plan.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        relative
        flex
        min-h-[255px]
        w-full
        flex-col
        rounded-[10px]
        border
        px-5
        pb-5
        pt-6
        text-left
        transition-all
        ${
          selected
            ? "border-[#6e984f] bg-[#f4fbea] shadow-[0_4px_10px_rgba(67,95,52,0.18)]"
            : "border-[#d5dfce] bg-[#f7fff0] shadow-[0_2px_5px_rgba(70,90,60,0.12)] hover:border-[#8eae78]"
        }
      `}
    >
      {plan.popular && (
        <span
          className="
            absolute
            -top-3
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            rounded-full
            bg-[#6f984f]
            px-3
            py-1
            font-body
            text-[8px]
            font-bold
            uppercase
            tracking-wide
            text-white
          "
        >
          ★ MOST POPULAR
        </span>
      )}

      <div className="flex justify-center">
        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#dfecd6] text-[#63874d]">
          <Icon size={21} strokeWidth={1.7} />
        </div>
      </div>

      <h3 className="mt-3 text-center font-heading text-[11px] font-bold text-heading-secondary">
        {plan.name}
      </h3>

      <div className="mt-4 h-px w-full bg-[#dce5d6]" />

      <ul className="mt-3 flex flex-col gap-2">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 font-body text-[10px] leading-4 text-[#44513d]"
          >
            <Check
              size={12}
              strokeWidth={3}
              className="mt-[1px] shrink-0 text-[#6f9b52]"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-3 text-center">
        <span className="font-heading text-[12px] font-bold text-[#49613e]">
          {plan.price}
        </span>

        <span className="font-body text-[9px] text-[#5d6958]">
          {plan.suffix}
        </span>
      </div>

      <div className="mt-4 flex justify-center">
        <div
          className={`
            flex
            h-[19px]
            w-[19px]
            items-center
            justify-center
            rounded-full
            border
            ${
              selected
                ? "border-focus bg-focus"
                : "border-[#9cbd86]"
            }
          `}
        >
          {selected && <Check size={11} className="text-white" />}
        </div>
      </div>
    </button>
  );
}


function FooterLink({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  return (
    <Link
      to={to}
      className="
        font-body
        text-[11px]
        text-[#65705e]
        transition-colors
        hover:text-[#557946]
      "
    >
      {label}
    </Link>
  );
}