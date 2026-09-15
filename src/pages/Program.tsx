import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { StepCard } from "../components/ui/StepCard";

const programs = [
  {
    title: "Weight Loss Yoga",
    description:
      "Burn calories, improve metabolism, and build healthy habits through yoga and mindful movement.",
    image: "/assets/image 4.png",
    icon: "/assets/Dumbbell.png",
    link: "/program/weight-loss-yoga",
  },
  {
    title: "Prenatal Yoga",
    description:
      "Gentle yoga practices designed to support a healthy pregnancy and prepare your body for childbirth.",
    image: "/assets/image 2.png",
    icon: "/assets/Mommy Fitness.png",
    link: "/program/prenatal-yoga",
  },
  {
    title: "Postnatal Yoga",
    description:
      "Recover safely after childbirth, rebuild strength, and restore balance with guided sessions.",
    image: "/assets/image 1.png",
    icon: "/assets/Mommy Fitness.png",
    link: "/program/postnatal-yoga",
  },
  {
    title: "General Yoga",
    description:
      "Move better, feel stronger, and live better with a balanced practice of yoga to support your everyday health.",
    image: "/assets/image 3.png",
    icon: "/assets/Yoga (1).png",
    link: "/program/general-yoga",
  },
  {
    title: "Senior Yoga",
    description:
      "Safe and mindful practices designed to support flexibility, strength, balance, and overall well-being.",
    image: "/assets/ChatGPT Image Aug 28, 2026, 04_56_39 PM 1.png",
    icon: "/assets/Yoga (1).png",
    link: "/program/general-yoga",
  },
  {
    title: "Private session",
    description:
      "Personalized one-to-one guidance designed around your needs, lifestyle, wellness goals, and practice.",
    image: "/assets/pexels-shootsaga-30945104 1.png",
    icon: "/assets/Yoga (1).png",
    link: "/consultation",
  },
];

export function Program() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative w-full h-[272px] sm:h-[380px] md:h-[430px] lg:h-[470px] overflow-hidden bg-primary-50">
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
                Every body is different, Every journey is unique.
              </p>

              <Link to="/join-now">
                <Button>EXPLORE OUR PROGRAMS</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary-100 via-primary-200 to-primary-400 px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary-700 sm:text-4xl">
              Our Yoga Programs
            </h2>

            <p className="mt-4 max-w-[1050px] font-body text-xs leading-6 text-primary-800 sm:text-base sm:leading-7">
              Whether you are starting your yoga journey, looking to become stronger, manage your weight,
              or improve your flexibility, there&apos;s a place for you at YFL.
            </p>
          </div>

          <p className="mb-7 text-center font-heading text-sm font-bold text-primary-700 sm:text-lg">
            Choose the practice that feels right for you&apos;s journey
          </p>

          <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-x-7 gap-y-10 sm:gap-x-16 sm:gap-y-14">
            {programs.map((program) => (
              <div
                key={program.title}
                className="
                  relative
                  h-[190px]
                  sm:h-[310px]
                  w-full
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-primary-500
                  bg-primary-50
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
                      left-[-55px]
                      w-[110px]
                      sm:left-[-90px]
                      sm:w-[180px]
                      bg-primary-50
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
                    w-[50%]
                    flex-col
                    px-5
                    py-4
                    sm:px-9
                    sm:py-8
                  "
                >
                  <div
                    className="
                      flex
                      h-[30px]
                      w-[30px]
                      sm:h-[50px]
                      sm:w-[50px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-primary-300
                    "
                  >
                    <img
                      src={program.icon}
                      alt=""
                      className="h-[18px] w-[18px] object-contain brightness-0 invert sm:h-[28px] sm:w-[28px]"
                    />
                  </div>

                  <h3
                    className="
                      mt-2
                      max-w-[150px]
                      sm:mt-4
                      sm:max-w-[185px]
                      font-heading
                      text-[10px]
                      sm:text-[18px]
                      font-bold
                      leading-[1.15]
                      text-[#6f994f]
                    "
                  >
                    {program.title}
                  </h3>

                  <div className="mt-1 h-[1px] w-[52px] bg-[#91ad7c] sm:mt-3 sm:w-[90px]" />

                  <p
                    className="
                      mt-2
                      max-w-[115px]
                      sm:mt-5
                      sm:max-w-[175px]
                      font-body
                      text-[8px]
                      leading-[1.25]
                      sm:text-[13px]
                      sm:leading-[1.4]
                      text-[#6f994f]
                    "
                  >
                    {program.description}
                  </p>

                  <Link
                    to={program.link}
                    className="
                      mt-2
                      sm:mt-auto
                      flex
                      w-fit
                      items-center
                      gap-3
                      border-0
                      bg-transparent
                      p-0
                      font-body
                      text-[8px]
                      sm:text-[12px]
                      font-bold
                      text-[#456d32]
                      transition-all
                      hover:gap-4
                    "
                  >
                    LEARN MORE
                    <span className="text-[14px] leading-none sm:text-[20px]">⟶</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-9 max-w-[700px]">
            <span className="font-body text-xs font-bold tracking-[0.22em] text-[#729657]">
              HOW IT WORKS
            </span>

            <h2 className="mt-3 font-heading text-2xl font-bold text-[#456536] sm:text-4xl">
              Your Journey Starts in 3 Simple Steps
            </h2>

            <p className="mt-4 font-body text-sm leading-6 text-[#596456] sm:text-base sm:leading-7">
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
          src="/assets/flag (1) 1.svg"
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
