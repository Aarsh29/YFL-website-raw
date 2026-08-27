import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  CalendarDays,
  Clock3,
  Target,
  MessageCircleQuestion,
  LockKeyhole,
  Sprout,
  Flower2,
  Crown,
} from "lucide-react";

import { Button } from "../components/ui/Button";

type FormData = {
  program: string;
  plan: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  fitnessGoals: string;
  anythingElse: string;
};

export function JoinNow() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    program: "",
    plan: "",
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    fitnessGoals: "",
    anythingElse: "",
  });

  const updateForm = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(4);
  };

  const programs = [
    {
      id: "weight-loss",
      title: "WEIGHT LOSS YOGA",
      description:
        "Achieve your weight goals with effective yoga practices and mindful living.",
      icon: "/assets/Dumbbell.png",
    },
    {
      id: "prenatal",
      title: "PRENATAL YOGA",
      description:
        "Safe and supportive yoga practices for a healthy pregnancy and recovery.",
      icon: "/assets/Mommy Fitness.png",
    },
    {
      id: "postnatal",
      title: "POSTNATAL YOGA",
      description:
        "Build strength, tone body and improve overall fitness and endurance.",
      icon: "/assets/Mommy Fitness.png",
    },
    {
      id: "strength",
      title: "STRENGTH & TONING",
      description:
        "Improve flexibility, balance and mobility for a pain free and active life.",
      icon: "/assets/Yoga (1).png",
    },
  ];

  const plans = [
    {
      id: "starter",
      title: "STARTER",
      price: "₹1,499",
      icon: Sprout,
      features: [
        "3 Classes / Week",
        "Community Support",
        "Beginner Friendly",
        "Mentoring",
      ],
    },
    {
      id: "popular",
      title: "POPULAR",
      price: "₹2,499",
      icon: Flower2,
      popular: true,
      features: [
        "5 Classes / Week",
        "Personalized Guidance",
        "Nutrition Tips",
        "Progress Tracking",
      ],
    },
    {
      id: "premium",
      title: "PREMIUM",
      price: "₹4,499",
      icon: Crown,
      features: [
        "Daily Classes",
        "1-on-1 Mentoring",
        "Custom Meal Plan",
        "Lifestyle Coaching",
      ],
    },
  ];

  const inputBase =
    "w-full h-[58px] rounded-xl border border-[#D5DDD0] bg-white px-4 pl-12 font-body text-sm text-[#34432A] placeholder:text-[#687060] outline-none transition focus:border-[#7BA258] focus:ring-1 focus:ring-[#7BA258]";

  const selectBase =
    "w-full h-[58px] rounded-xl border border-[#D5DDD0] bg-white px-4 pl-12 font-body text-sm text-[#34432A] outline-none transition focus:border-[#7BA258] focus:ring-1 focus:ring-[#7BA258]";

  return (
    <div className="min-h-screen bg-white text-[#34432A]">
      <section className="bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="flex justify-center pt-10 md:pt-14 pb-24 md:pb-32">
            <img
              src="/assets/YFL LOGO (5) 2.png"
              alt="Yoga For Life"
              className="w-[120px] h-[120px] md:w-[145px] md:h-[145px] object-contain"
            />
          </div>
        </div>
      </section>

      {step === 1 && (
        <section className="bg-white pb-20 md:pb-24">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-2 border-[#7BA258] text-[#6A8A4A] flex items-center justify-center font-body font-bold text-sm shrink-0">
                  1
                </div>

                <div>
                  <h2 className="font-heading text-lg md:text-xl font-bold text-[#5E774C]">
                    CHOOSE YOUR PROGRAM
                  </h2>

                  <p className="font-body text-sm md:text-base text-[#34432A] mt-2">
                    Select the program that best matches your goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 ml-0 md:ml-6">
              {programs.map((program) => {
                const selected = formData.program === program.id;

                return (
                  <button
                    key={program.id}
                    type="button"
                    onClick={() => updateForm("program", program.id)}
                    className={`
                      relative
                      min-h-[200px]
                      md:min-h-[225px]
                      rounded-2xl
                      border
                      p-5
                      flex
                      flex-col
                      items-center
                      text-center
                      transition-all
                      ${
                        selected
                          ? "border-[#7BA258] bg-[#F4F7EF] shadow-sm"
                          : "border-[#AEB9A5] bg-[#F7F9F4] hover:border-[#7BA258]"
                      }
                    `}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#E8EFDF] flex items-center justify-center mb-4">
                      <img
                        src={program.icon}
                        alt=""
                        className="w-7 h-7 object-contain"
                      />
                    </div>

                    <h3 className="font-heading text-[13px] md:text-sm font-bold text-[#5E774C] underline underline-offset-2">
                      {program.title}
                    </h3>

                    <div className="w-full h-px bg-[#D8E0D2] my-3" />

                    <p className="font-body text-[11px] leading-[1.35] text-[#1F261B] max-w-[180px]">
                      {program.description}
                    </p>

                    <div
                      className={`
                        mt-auto
                        w-5
                        h-5
                        rounded-full
                        border
                        flex
                        items-center
                        justify-center
                        ${
                          selected
                            ? "border-[#7BA258] bg-[#7BA258]"
                            : "border-[#7BA258] bg-transparent"
                        }
                      `}
                    >
                      {selected && (
                        <Check
                          size={12}
                          className="text-white"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end mt-10 ml-0 md:ml-6">
              <Button
                onClick={handleNext}
                disabled={!formData.program}
                className="gap-2"
              >
                NEXT STEP <ChevronRight size={17} />
              </Button>
            </div>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="bg-[#F4F7EF] py-16 md:py-20">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-2 border-[#7BA258] text-[#6A8A4A] flex items-center justify-center font-body font-bold text-sm shrink-0">
                  2
                </div>

                <div>
                  <h2 className="font-heading text-lg md:text-xl font-bold text-[#5E774C]">
                    CHOOSE YOUR PLAN
                  </h2>

                  <p className="font-body text-sm md:text-base text-[#34432A] mt-2">
                    Pick a plan that fits your schedule and lifestyle.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
              {plans.map((plan) => {
                const selected = formData.plan === plan.id;
                const Icon = plan.icon;

                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => updateForm("plan", plan.id)}
                    className={`
                      relative
                      text-left
                      min-h-[270px]
                      rounded-2xl
                      border
                      p-6
                      bg-[#F7F9F4]
                      transition-all
                      ${
                        selected
                          ? "border-[#7BA258] ring-2 ring-[#7BA258]/30"
                          : "border-[#AEB9A5] hover:border-[#7BA258]"
                      }
                    `}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7BA258] text-white rounded-full px-4 py-1 text-[10px] font-body font-bold whitespace-nowrap">
                        ★ MOST POPULAR
                      </div>
                    )}

                    <div className="flex justify-center">
                      <div className="w-11 h-11 rounded-full bg-[#E8EFDF] flex items-center justify-center">
                        <Icon
                          size={23}
                          className="text-[#7BA258]"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    <h3 className="font-heading text-xs font-bold text-[#5E774C] text-center mt-4">
                      {plan.title}
                    </h3>

                    <div className="h-px bg-[#D8E0D2] my-3" />

                    <div className="space-y-2">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#7BA258] flex items-center justify-center shrink-0">
                            <Check
                              size={10}
                              className="text-white"
                              strokeWidth={3}
                            />
                          </div>

                          <span className="font-body text-[10px] text-[#34432A]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 text-center">
                      <span className="font-heading font-bold text-sm text-[#5E774C]">
                        {plan.price}
                      </span>
                      <span className="font-body text-[9px] text-[#687060]">
                        /month
                      </span>
                    </div>

                    <div
                      className={`
                        mx-auto mt-4
                        w-5 h-5
                        rounded-full
                        border
                        flex items-center justify-center
                        ${
                          selected
                            ? "border-[#7BA258] bg-[#7BA258]"
                            : "border-[#7BA258]"
                        }
                      `}
                    >
                      {selected && (
                        <Check
                          size={12}
                          className="text-white"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between max-w-[900px] mx-auto mt-10">
              <Button
                variant="outline-light"
                onClick={handleBack}
                className="gap-2"
              >
                <ArrowLeft size={17} />
                BACK
              </Button>

              <Button
                onClick={handleNext}
                disabled={!formData.plan}
                className="gap-2"
              >
                NEXT STEP
                <ChevronRight size={17} />
              </Button>
            </div>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="mb-10">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border-2 border-[#7BA258] text-[#6A8A4A] flex items-center justify-center font-body font-bold text-sm shrink-0">
                  3
                </div>

                <div>
                  <h2 className="font-heading text-lg md:text-xl font-bold text-[#5E774C]">
                    YOUR DETAILS
                  </h2>

                  <p className="font-body text-sm md:text-base text-[#34432A] mt-2 max-w-[300px] leading-relaxed">
                    Please fill in your details to complete your registration.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-[650px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <User
                    size={21}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7BA258]"
                  />

                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => updateForm("fullName", e.target.value)}
                    placeholder="Full Name *"
                    className={inputBase}
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={21}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7BA258]"
                  />

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    placeholder="Email Address *"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <Phone
                    size={21}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7BA258]"
                  />

                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="Phone Number *"
                    className={inputBase}
                  />
                </div>

                <div className="relative">
                  <CalendarDays
                    size={21}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7BA258] pointer-events-none"
                  />

                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) =>
                      updateForm("preferredDate", e.target.value)
                    }
                    className={selectBase}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <Clock3
                    size={21}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7BA258] pointer-events-none"
                  />

                  <input
                    type="time"
                    required
                    value={formData.preferredTime}
                    onChange={(e) =>
                      updateForm("preferredTime", e.target.value)
                    }
                    className={selectBase}
                  />
                </div>

                <div className="relative">
                  <Target
                    size={21}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7BA258]"
                  />

                  <input
                    type="text"
                    required
                    value={formData.fitnessGoals}
                    onChange={(e) => updateForm("fitnessGoals", e.target.value)}
                    placeholder="Fitness Goals *"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="relative mb-6">
                <MessageCircleQuestion
                  size={21}
                  className="absolute left-4 top-5 text-[#7BA258]"
                />

                <textarea
                  rows={3}
                  value={formData.anythingElse}
                  onChange={(e) => updateForm("anythingElse", e.target.value)}
                  placeholder="Anything We Should Know? (Optional)"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#D5DDD0]
                    bg-white
                    px-4
                    pl-12
                    py-4
                    font-body
                    text-sm
                    text-[#34432A]
                    placeholder:text-[#687060]
                    outline-none
                    resize-none
                    transition
                    focus:border-[#7BA258]
                    focus:ring-1
                    focus:ring-[#7BA258]
                  "
                />
              </div>

              <Button type="submit" className="w-full h-[58px]">
                JOIN NOW
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4">
                <LockKeyhole size={13} className="text-[#6A8A4A]" />

                <p className="font-body text-xs text-[#687060]">
                  Your information is safe with us. We respect your privacy.
                </p>
              </div>
            </form>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="min-h-[500px] flex items-center justify-center bg-white px-6 py-20">
          <div className="text-center max-w-xl">
            <div className="w-24 h-24 rounded-full bg-[#E8EFDF] flex items-center justify-center mx-auto mb-7">
              <CheckCircle2 size={48} className="text-[#7BA258]" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#34432A] mb-4">
              Registration Successful!
            </h2>

            <p className="font-body text-[#687060] leading-relaxed mb-8">
              Thank you for joining Yoga For Life. We have received your
              registration details and will contact you shortly.
            </p>

            <Link to="/">
              <Button>RETURN TO HOME</Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
