import { Link } from "react-router-dom";
import { TestimonialGrid } from "../components/ui/TestimonialGrid";

export function Testimonials() {
  const features = [
    {
      title: "Personalized\nGuidance",
      description: "Programs tailored to your goals,\nbody, and lifestyle.",
      icon: "/assets/Handmade.png",
    },
    {
      title: "Expert\nInstructors",
      description: "Certified, experienced, and\npassionate yoga experts.",
      icon: "/assets/Meditation.png",
    },
    {
      title: "Supportive\nCommunity",
      description: "A positive and encouraging\ncommunity that inspires you.",
      icon: "/assets/Friends.png",
    },
    {
      title: "Lasting\nResults",
      description:
        "Improved strength, flexibility,\nmindfulness, and inner peace.",
      icon: "/assets/Trophy.png",
    },
  ];

  const journey = [
    {
      icon: "▦",
      title: "Join Yoga for\nLife",
      description:
        "Take the first step and become a\npart of our yoga community.",
    },
    {
      icon: "●",
      title: "Attend Personalized\nSessions",
      description:
        "Take the first step and become a\npart of our yoga community.",
    },
    {
      icon: "♥",
      title: "Build Healthy\nHabits",
      description:
        "Take the first step and become a\npart of our yoga community.",
    },
    {
      icon: "✦",
      title: "Experience Positive\nTransformation",
      description:
        "Take the first step and become a\npart of our yoga community.",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white">
      <section className="relative h-[390px] w-full overflow-hidden md:h-[485px]">
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
            from-[#f7f7dd]
            via-[#f7f7dd]/95
            to-transparent
            md:w-[68%]
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
            max-w-[1280px]
            items-center
            px-8
            md:px-12
            lg:px-16
          "
        >
          <div className="w-full max-w-[650px] pt-2">
            <h1
              className="
                font-heading
                text-[48px]
                font-bold
                leading-[0.98]
                tracking-[-0.03em]
                text-[#183b25]
                md:text-[64px]
                lg:text-[70px]
              "
            >
              <span className="block">Real Stories.</span>

              <span className="block text-[#739f5b]">
                Real Transformations.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-[620px]
                font-body
                text-[17px]
                leading-[1.55]
                text-[#263b2c]
                md:text-[19px]
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
                h-[62px]
                min-w-[295px]
                items-center
                justify-center
                rounded-[10px]
                bg-[#7da95d]
                px-8
                font-body
                text-[17px]
                font-bold
                tracking-wide
                text-white
                shadow-[0_5px_12px_rgba(65,91,48,0.18)]
                transition
                hover:bg-[#6d984f]
              "
            >
              START YOUR JOURNEY
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[610px]">
            <p
              className="
                font-body
                text-[13px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#709a58]
              "
            >
              SUCCESS STORIES FROM OUR COMMUNITY
            </p>

            <p
              className="
                mt-6
                font-body
                text-[17px]
                leading-[1.65]
                text-[#3f493e]
              "
            >
              Every journey is unique, but each story reflects the positive
              impact of consistent practice, expert guidance, and a supportive
              community.
            </p>
          </div>

          <div className="mt-12 text-center">
            <h2
              className="
                font-heading
                text-[38px]
                font-bold
                leading-tight
                text-[#739d5b]
                md:text-[42px]
              "
            >
              What Our Students Say
            </h2>
          </div>

          <div className="mt-10">
            <TestimonialGrid />
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5e9] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p
              className="
                font-body
                text-[12px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#709a58]
              "
            >
              WHY OUR STUDENTS LOVE US
            </p>

            <h2
              className="
                mt-4
                font-heading
                text-[38px]
                font-bold
                leading-tight
                text-[#739d5b]
                md:text-[42px]
              "
            >
              More Than Just Yoga
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  flex
                  flex-col
                  items-center
                  px-8
                  text-center
                  ${
                    index !== 0
                      ? "border-t border-[#b5cba5] md:border-l md:border-t-0"
                      : ""
                  }
                  pt-10
                  md:pt-0
                `}
              >
                <div
                  className="
                    flex
                    h-[76px]
                    w-[76px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#dce9cc]
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
                    mt-7
                    whitespace-pre-line
                    font-heading
                    text-[18px]
                    font-bold
                    leading-[1.05]
                    text-[#314b31]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-4
                    whitespace-pre-line
                    font-body
                    text-[13px]
                    leading-[1.45]
                    text-[#71806c]
                  "
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p
              className="
                font-body
                text-[12px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#709a58]
              "
            >
              FROM FIRST CLASS TO LASTING WELLNESS
            </p>

            <h2
              className="
                mt-4
                font-heading
                text-[38px]
                font-bold
                text-[#739d5b]
                md:text-[42px]
              "
            >
              Your Journey with Us
            </h2>
          </div>

          <div className="relative mt-16">
            <div
              className="
                absolute
                left-[12.5%]
                right-[12.5%]
                top-[42px]
                hidden
                border-t
                border-dashed
                border-[#a9c493]
                md:block
              "
            />

            <div
              className="
                relative
                grid
                grid-cols-1
                gap-12
                md:grid-cols-4
                md:gap-4
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
                      h-[84px]
                      w-[84px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#91bd70]
                      font-body
                      text-[27px]
                      font-bold
                      text-white
                    "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="
                      mt-6
                      whitespace-pre-line
                      font-heading
                      text-[18px]
                      font-bold
                      leading-[1.1]
                      text-[#334c33]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      whitespace-pre-line
                      font-body
                      text-[13px]
                      leading-[1.45]
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
            from-[#dce6bd]/90
            via-[#d5dfb3]/80
            to-[#c8d69d]/75
          "
        />

        <div
          className="
            relative
            z-10
            flex
            min-h-[430px]
            w-full
            items-center
            justify-center
            px-6
            py-20
            text-center
            md:min-h-[500px]
            lg:min-h-[540px]
          "
        >
          <div className="w-full max-w-[850px]">
            <p
              className="
                mb-5
                font-body
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#64854d]
                md:text-[13px]
              "
            >
              READY TO WRITE YOUR SUCCESS STORY?
            </p>

            <h2
              className="
                font-heading
                text-[30px]
                font-bold
                leading-[1.15]
                text-[#62834e]
                md:text-[42px]
                lg:text-[48px]
              "
            >
              READY TO WRITE YOUR SUCCESS STORY?
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-[720px]
                font-body
                text-[17px]
                leading-[1.55]
                text-[#1f2f1d]
                md:text-[21px]
                lg:text-[23px]
              "
            >
              Join Yoga for Life and experience personalized guidance,
              supportive instructors, and a wellness journey designed just for
              you.
            </p>

            <Link
              to="/join-now"
              className="
                mt-9
                inline-flex
                h-[62px]
                min-w-[395px]
                items-center
                justify-center
                rounded-[10px]
                bg-[#7da65d]
                px-10
                font-body
                text-[15px]
                font-bold
                tracking-wide
                text-white
                shadow-[0_5px_12px_rgba(70,90,50,0.25)]
                transition-all
                duration-200
                hover:bg-[#6e9551]
                hover:shadow-[0_7px_16px_rgba(70,90,50,0.3)]
              "
            >
              START YOUR JOURNEY →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
