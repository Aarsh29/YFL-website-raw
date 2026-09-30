import { Link } from "react-router-dom";
import { TestimonialGrid } from "../components/ui/TestimonialGrid";

export function Testimonials() {
  const features = [
    {
      title: "Personalized\nGuidance",
      description: "Programs tailored to\nyour goals, body, and\nlifestyle.",
      icon: "/assets/Lotus.png",
    },
    {
      title: "Real\nProgress",
      description: "Celebrating every small\nstep forward to big\ntransformation.",
      icon: "/assets/Lotus.png",
    },
    {
      title: "Supportive\nCommunity",
      description: "A positive and\nencouraging community\nthat inspires you.",
      icon: "/assets/Lotus.png",
    },
    {
      title: "Expert\nInstructors",
      description: "Certified, experienced,\nand passionate yoga\nexperts.",
      icon: "/assets/Lotus.png",
    },
  ];

  const journey = [
    {
      icon: "/assets/Yoga.png",
      title: "Connect With\nYFL",
      description:
        "Discover the practice that\nsuits you with the right YFL\nprogram to begin your yoga\njourney with confidence.",
    },
    {
      icon: "/assets/Yoga.png",
      title: "Practice With\nPurpose",
      description:
        "Take the first step and\nbecome a part of our\nyoga community.",
    },
    {
      icon: "/assets/Yoga.png",
      title: "Progress With\nConsistency",
      description:
        "Take the first step and\nbecome a part of our\nyoga community.",
    },
    {
      icon: "/assets/Yoga.png",
      title: "Thrive Beyond the\nMat",
      description:
        "Take the first step and\nbecome a part of our\nyoga community.",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white">
      <section
        className="
          relative
          h-[560px]
          w-full
          overflow-hidden
          sm:h-[600px]
          lg:h-[672px]
        "
      >
        <img
          src="/assets/instructor-placeholder.png"
          alt="Yoga practice"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            inset-y-0
            left-0
            z-[1]
            w-full
            bg-gradient-to-r
            from-[#f6efd9]
            via-[#f6efd9]/95
            via-[55%]
            to-transparent
            lg:w-[67%]
          "
        />

        <div
          className="
            relative
            z-[2]
            mx-auto
            flex
            h-full
            w-full
            max-w-[1120px]
            items-center
            px-6
            sm:px-8
            lg:px-0
          "
        >
          <div
            className="
              w-full
              max-w-[520px]
              pt-2
              lg:max-w-[500px]
            "
          >
            <p
              className="
                mb-5
                font-body
                text-[12px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-heading-green
                sm:text-[20px]
              "
            >
              YOGA FOR LIFE · BALANCE, BREATHE, BLOOM.
            </p>

            <h1
              className="
                font-heading
                text-[48px]
                font-bold
                leading-[0.96]
                tracking-[-0.035em]
                text-[#243a25]
                sm:text-[56px]
                lg:text-[58px]
              "
            >
              <span className="block">
                Real Stories.
              </span>

              <span className="block text-link">
                Real Transformations.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-[500px]
                font-body
                text-[100px]
                leading-[1.65]
                text-[#354333]
                sm:text-[16px]
              "
            >
              Discover how Yoga for Life has helped individuals improve their
              health, build confidence, and find lasting balance through
              personalized yoga programs.
            </p>

            <Link
              to="/join-now"
              className="
                mt-8
                inline-flex
                h-[48px]
                min-w-[260px]
                items-center
                justify-center
                rounded-[8px]
                bg-link
                px-8
                font-body
                text-[12px]
                font-bold
                tracking-[0.07em]
                text-white
                shadow-[0_5px_14px_rgba(65,91,48,0.20)]
                transition-all
                duration-200
                hover:bg-[#62874d]
                hover:shadow-[0_8px_18px_rgba(65,91,48,0.28)]
              "
            >
              START YOUR JOURNEY
              <span className="ml-3 text-[17px] leading-none">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="
          bg-white
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-[58px]
        "
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="max-w-[610px]">
            <p
              className="
                font-body
                text-[11px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-link
                sm:text-[12px]
              "
            >
              SUCCESS STORIES FROM OUR COMMUNITY
            </p>

            <p
              className="
                mt-4
                font-body
                text-[14px]
                leading-[1.65]
                text-[#40503e]
                sm:text-[15px]
              "
            >
              Every journey is unique, but each story reflects the positive
              impact of consistent practice, expert guidance, and a supportive
              community.
            </p>
          </div>

          <div className="mt-8 text-center">
            <h2
              className="
                font-heading
                text-[30px]
                font-bold
                leading-tight
                text-heading-green
                sm:text-[34px]
                lg:text-[36px]
              "
            >
              What Our Students Say
            </h2>
          </div>

          <div className="mt-8">
            <TestimonialGrid />
          </div>
        </div>
      </section>

      <section
        className="
          bg-[#f2f6ed]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-[48px]
        "
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center">
            <p
              className="
                font-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-link
                sm:text-[11px]
              "
            >
              WHY OUR STUDENTS LOVE US
            </p>

            <h2
              className="
                mt-2
                font-heading
                text-[29px]
                font-bold
                leading-tight
                text-heading-green
                sm:text-[34px]
              "
            >
              More Than Just Yoga
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  flex
                  flex-col
                  items-center
                  px-6
                  text-center
                  ${
                    index !== 0
                      ? "border-t border-[#b8cbaa] pt-8 md:border-l md:border-t-0 md:pt-0"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-[70px]
                    w-[70px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#dce8d4]
                  "
                >
                  <img
                    src={feature.icon}
                    alt=""
                    className="h-[38px] w-[38px] object-contain"
                  />
                </div>

                <h3
                  className="
                    mt-5
                    whitespace-pre-line
                    font-heading
                    text-[16px]
                    font-bold
                    leading-[1.05]
                    text-[#3c5738]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-3
                    whitespace-pre-line
                    font-body
                    text-[11px]
                    leading-[1.45]
                    text-[#687363]
                  "
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="
          bg-white
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-[48px]
        "
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center">
            <p
              className="
                font-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-link
                sm:text-[11px]
              "
            >
              FROM YOUR FIRST MINDFUL BREATH TO A LIFESTYLE OF LASTING
              WELLNESS.
            </p>

            <h2
              className="
                mt-2
                font-heading
                text-[29px]
                font-bold
                text-heading-green
                sm:text-[34px]
              "
            >
              Your Path to a Better You
            </h2>
          </div>

          <div className="relative mt-10 sm:mt-12">
            <div
              className="
                absolute
                left-[12.5%]
                right-[12.5%]
                top-[34px]
                hidden
                border-t
                border-[#9eb889]
                md:block
              "
            />

            <div
              className="
                relative
                grid
                grid-cols-1
                gap-10
                md:grid-cols-4
                md:gap-3
              "
            >
              {journey.map((item) => (
                <div
                  key={item.title}
                  className="
                    relative
                    z-[1]
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-[68px]
                      w-[68px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#dce8d4]
                    "
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="h-[42px] w-[42px] object-contain"
                    />
                  </div>

                  <h3
                    className="
                      mt-5
                      whitespace-pre-line
                      font-heading
                      text-[15px]
                      font-bold
                      leading-[1.1]
                      text-[#334c33]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      whitespace-pre-line
                      font-body
                      text-[11px]
                      leading-[1.5]
                      text-[#788277]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <img
          src="/assets/instructor-meera.png"
          alt="Yoga meditation"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#dce6bd]/95
            via-[#d5dfb3]/88
            to-[#c8d69d]/78
          "
        />

        <div
          className="
            absolute
            right-[-30px]
            top-1/2
            hidden
            h-[330px]
            w-[330px]
            -translate-y-1/2
            rounded-full
            border-[3px]
            border-white/25
            md:block
          "
        />

        <div
          className="
            relative
            z-10
            flex
            min-h-[330px]
            w-full
            items-center
            justify-center
            px-6
            py-16
            text-center
            sm:min-h-[360px]
            lg:min-h-[320px]
          "
        >
          <div className="w-full max-w-[760px]">
            <h2
              className="
                font-heading
                text-[27px]
                font-bold
                leading-[1.15]
                text-[#62834e]
                sm:text-[34px]
                lg:text-[35px]
              "
            >
              READY TO WRITE YOUR SUCCESS STORY?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[620px]
                font-body
                text-[14px]
                leading-[1.6]
                text-[#30412e]
                sm:text-[16px]
              "
            >
              Join Yoga for Life and experience personalized guidance,
              supportive instructors, and a wellness journey designed just for
              you.
            </p>

            <Link
              to="/join-now"
              className="
                mt-7
                inline-flex
                h-[44px]
                w-full
                max-w-[310px]
                items-center
                justify-center
                rounded-[6px]
                bg-[#78a05b]
                px-8
                font-body
                text-[12px]
                font-bold
                tracking-[0.08em]
                text-white
                shadow-[0_5px_12px_rgba(70,90,50,0.25)]
                transition-all
                duration-200
                hover:bg-[#688d4f]
                hover:shadow-[0_7px_16px_rgba(70,90,50,0.3)]
              "
            >
              START YOUR JOURNEY
              <span className="ml-2 text-[16px]">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}