import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { StepCard } from "../components/ui/StepCard";

const programs = [
  {
    title: "Weight Loss Yoga",
    description:
      "A structured program combining movement and mindful eating guidance to help you reach your goals sustainably.",
    image: "/assets/image 4.png",
    icon: "/assets/Dumbbell.png",
  },
  {
    title: "Prenatal Yoga",
    description:
      "Build strength for labor, ease pregnancy discomforts, and connect with your baby through breath and movement.",
    image: "/assets/image 2.png",
    icon: "/assets/Mommy Fitness.png",
  },
  {
    title: "Postnatal Yoga",
    description:
      "Gentle core and pelvic floor recovery designed for the postpartum body.",
    image: "/assets/image 1.png",
    icon: "/assets/Mommy Fitness.png",
  },
  {
    title: "Strength & Toning",
    description:
      "Enhance muscle tone, increase flexibility, and move with greater confidence.",
    image: "/assets/image 3.png",
    icon: "/assets/Yoga (1).png",
  },
];

export function Program() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative w-full h-[325px] sm:h-[380px] md:h-[430px] lg:h-[470px] overflow-hidden bg-[#f2f7e8]">
        <img
          src="/assets/Untitled design (2) 1.png"
          alt="Yoga program"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-gradient-to-r
            from-transparent
            via-transparent
            to-white/10
          "
        />

        <div
          className="
            absolute
            inset-0
            flex
            items-center
          "
        >
          <div
            className="
              w-full
              max-w-[1400px]
              mx-auto
              px-6
              sm:px-10
              md:px-14
              lg:px-20
              xl:px-24
            "
          >
            <div
              className="
                ml-auto
                w-[48%]
                max-w-[620px]
                pr-0
                sm:pr-4
                md:pr-8
                lg:pr-12
              "
            >
              <h1
                className="
                  font-heading
                  text-primary-dark
                  font-medium
                  leading-[1.08]
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[56px]
                  xl:text-[62px]
                  mb-4
                "
              >
                <span className="block">Find the Right Yoga</span>

                <span className="block">Program for You</span>
              </h1>

              <p
                className="
                  font-body
                  text-[#33402d]
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  max-w-[520px]
                  mb-6
                "
              >
                Personalized programs designed to help you move better, feel
                stronger, and live healthier.
              </p>

              <Link to="/join-now">
                <Button>EXPLORE OUR PROGRAMS</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#e9f5d9] via-[#c4dda3] to-[#94bd68] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#587d42] sm:text-4xl">
              Our Yoga Programs
            </h2>

            <p className="mt-5 max-w-[1050px] font-body text-base leading-7 text-[#42533a]">
              Discover a range of thoughtfully designed yoga programs tailored
              to support your unique wellness goals. Whatever your goal, we have
              a program that's right for you.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className="
                  relative
                  h-[335px]
                  w-full
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#71965a]
                  bg-[#f7faf1]
                  shadow-[0_8px_22px_rgba(58,86,43,0.18)]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    absolute
                    inset-y-0
                    right-0
                    w-[56%]
                  "
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover object-center"
                  />

                  <div
                    className="
                      absolute
                      inset-y-0
                      left-[-115px]
                      w-[230px]
                      bg-[#f7faf1]
                    "
                    style={{
                      borderRadius: "0 50% 50% 0 / 0 50% 50% 0",
                    }}
                  />
                </div>

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    w-[58%]
                    flex-col
                    px-7
                    py-7
                    sm:px-8
                    sm:py-8
                  "
                >
                  <div
                    className="
                      flex
                      h-[60px]
                      w-[60px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#91b86d]
                    "
                  >
                    <img
                      src={program.icon}
                      alt=""
                      className="h-[34px] w-[34px] object-contain brightness-0 invert"
                    />
                  </div>

                  <h3
                    className="
                      mt-4
                      max-w-[230px]
                      font-heading
                      text-[21px]
                      font-bold
                      leading-[1.15]
                      text-[#6f994f]
                    "
                  >
                    {program.title}
                  </h3>

                  <div className="mt-3 h-[1px] w-[90px] bg-[#91ad7c]" />

                  <p
                    className="
                      mt-5
                      max-w-[205px]
                      font-body
                      text-[15px]
                      leading-[1.45]
                      text-[#6f994f]
                    "
                  >
                    {program.description}
                  </p>

                  <button
                    type="button"
                    className="
                      mt-auto
                      flex
                      w-fit
                      items-center
                      gap-3
                      border-0
                      bg-transparent
                      p-0
                      font-body
                      text-[14px]
                      font-bold
                      text-[#456d32]
                      transition-all
                      hover:gap-4
                    "
                  >
                    LEARN MORE
                    <span className="text-[22px] leading-none">⟶</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 max-w-[700px]">
            <span className="font-body text-xs font-bold tracking-[0.22em] text-[#729657]">
              HOW IT WORKS
            </span>

            <h2 className="mt-4 font-heading text-3xl font-bold text-[#456536] sm:text-4xl">
              Your Journey Starts in 3 Simple Steps
            </h2>

            <p className="mt-5 font-body text-base leading-7 text-[#596456]">
              Begin your wellness journey with a simple, personalized process
              designed to help you find the right yoga program and achieve
              lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StepCard
              number="1"
              title="Book a Free Consultation"
              description="Share your goals, lifestyle, and wellness needs with our experienced yoga instructors for personalized guidance."
              icon="/assets/Time Span.png"
            />

            <StepCard
              number="2"
              title="Choose Your Ideal Program"
              description="Based on your goals, we'll recommend the perfect yoga program to support your health, fitness, and overall well-being."
              icon="/assets/Floating Guru (2).png"
            />

            <StepCard
              number="3"
              title="Start Your Yoga Journey"
              description="Join your classes, stay consistent, and experience the benefits of a stronger body, a calmer mind, and a healthier lifestyle."
              icon="/assets/Sprout.png"
            />
          </div>
        </div>
      </section>

      <section
        className="
          relative
          overflow-hidden
          py-20
          md:py-24
          px-6
          md:px-10
          bg-gradient-to-r
          from-[#b9d99b]
          to-[#729d51]
          text-center
        "
      >
        <img
          src="/assets/Yoga for Life - Review Post 1 (14) 1 (1).png"
          alt=""
          className="
            absolute
            bottom-0
            left-0
            w-28
            md:w-40
            opacity-200
            pointer-events-none
          "
        />

        <img
          src="/assets/flag (1) 1.png"
          alt=""
          className="
            absolute
            bottom-0
            right-0
            w-28
            md:w-50
            opacity-100
            scale-x-[1]
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-[800px] mx-auto">
          <h2
            className="
              font-heading
              text-2xl
              md:text-4xl
              text-primary-dark
              font-bold
              leading-tight
              mb-6
            "
          >
            YOUR JOURNEY TO A HEALTHIER,
            <br className="hidden md:block" />
            HAPPIER YOU STARTS TODAY
          </h2>

          <p
            className="
              font-body
              text-white
              text-sm
              md:text-base
              leading-relaxed
              max-w-[650px]
              mx-auto
              mb-8
            "
          >
            Take the first step toward better health with personalized yoga
            programs, expert guidance, and a supportive community. Whether
            you're a beginner or experienced, we're here to help you grow
            stronger in body and mind.
          </p>

          <Link to="/join-now">
            <Button variant="outline-dark">START YOUR JOURNEY →</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
