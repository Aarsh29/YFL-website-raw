import { Button } from "../components/ui/Button";

export function About() {
  const instructors = [
    {
      name: "Kiruthika Devi R",
      role: "WELLNESS EXPERT",
      specialty: "Prenatal & Postnatal Yoga Instructor",
      desc: "With over 3 years of experience and RPYT Certified Yoga Trainer, making yoga accessible, enjoyable, and life-changing for everyone.",
      image: "/assets/WhatsApp Image 2026-09-03 at 15.00.33 1.png",
      stats: [
        {
          label: "Prenatal",
          sub: "Specialist",
          icon: "/assets/Meditation.png",
        },
        {
          label: "8+ Years",
          sub: "Experience",
          icon: "/assets/Natural Food.png",
        },
        {
          label: "Women's",
          sub: "Wellness",
          icon: "/assets/Lotus.png",
        },
      ],
    },
    {
      name: "Rakshitaa R",
      role: "LEAD YOGA INSTRUCTOR",
      specialty: "Yoga Expert",
      desc: "She has completed her M.Sc Diploma in Yoga Teacher Training and is an RYT 200 and RPYT Certified Yoga Trainer with 6 years of experience.",
      image: "/assets/WhatsApp Image 2026-09-03 at 18.59.48 1.png",
      stats: [
        {
          label: "Holistic",
          sub: "Wellness",
          icon: "/assets/Meditation.png",
        },
        {
          label: "6+ Years",
          sub: "Experience",
          icon: "/assets/Natural Food.png",
        },
        {
          label: "Flexibility",
          sub: "Expert",
          icon: "/assets/Lotus.png",
        },
      ],
    },
    {
      name: "SRAVANI S",
      role: "YOGA TRAINER",
      specialty: "Mindfulness Coach",
      desc: "She has completed her Intermediate Teachers’ Training Course (500 Hours) in Yoga, gaining understanding of mindfulness yoga.",
      image: "/assets/pexels-karola-g-4498516 1.png",
      stats: [
        {
          label: "Mindfulness",
          sub: "Coach",
          icon: "/assets/Meditation.png",
        },
        {
          label: "2+ Years",
          sub: "Experience",
          icon: "/assets/Natural Food.png",
        },
        {
          label: "Wellness",
          sub: "Expert",
          icon: "/assets/Lotus.png",
        },
      ],
    },
  ];

  const storyImages = [
    "/assets/Mask group.png",
    "/assets/Mask group (1).png",
    "/assets/Mask group (2).png",
    "/assets/Mask group (3).png",
  ];

  const storyCollage = (reverse = false) => {
    const positions = reverse
      ? [
          "bottom-0 left-1/2 -translate-x-1/2 translate-y-[12%]",
          "top-1/2 right-0 translate-x-[12%] -translate-y-1/2",
          "top-1/2 left-0 -translate-x-[12%] -translate-y-1/2",
          "top-0 left-1/2 -translate-x-1/2 -translate-y-[12%]",
        ]
      : [
          "top-0 left-1/2 -translate-x-1/2 -translate-y-[12%]",
          "top-1/2 left-0 -translate-x-[12%] -translate-y-1/2",
          "top-1/2 right-0 translate-x-[12%] -translate-y-1/2",
          "bottom-0 left-1/2 -translate-x-1/2 translate-y-[12%]",
        ];

    return (
      <div className="relative mx-auto h-[210px] w-[210px] sm:h-[245px] sm:w-[245px] lg:h-[270px] lg:w-[270px]">
        {storyImages.map((image, index) => (
          <div
            key={`${image}-${reverse}`}
            className={`
              absolute
              h-[78px]
              w-[78px]
              rotate-45
              overflow-hidden
              rounded-[15px]
              border-[5px]
              border-[#F4F7EE]
              bg-white
              shadow-sm
              sm:h-[88px]
              sm:w-[88px]
              lg:h-[100px]
              lg:w-[100px]
              lg:rounded-[18px]
              ${positions[index]}
            `}
          >
            <img
              src={image}
              alt=""
              className="
                h-[150%]
                w-[150%]
                max-w-none
                -translate-x-[15%]
                -translate-y-[15%]
                -rotate-45
                object-cover
              "
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="w-full overflow-hidden bg-[#F7F9F2]">

      <section className="bg-white">
        <div
          className="
            mx-auto
            grid
            max-w-[1180px]
            grid-cols-1
            items-center
            gap-4
            px-7
            py-10
            sm:px-10
            md:grid-cols-[0.92fr_1.08fr]
            md:gap-3
            md:py-12
            lg:px-12
            lg:py-14
          "
        >
          <div className="relative z-10">
            <h1
              className="
                font-heading
                text-[38px]
                leading-[0.98]
                font-medium
                text-primary-600
                sm:text-[44px]
                md:text-[48px]
                lg:text-[52px]
              "
            >
              <span className="block">Yoga Refined.</span>
              <span className="block">Mind Restored.</span>
            </h1>

            <p
              className="
                mt-5
                max-w-[430px]
                font-body
                text-[13px]
                font-medium
                leading-[1.65]
                text-primary-800
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              Discover our story, our mission, and the values that inspire us
              to help people live healthier, more balanced lives through the
              practice of yoga.
            </p>

            <Button
              className="
                mt-5
                h-[38px]
                min-w-[180px]
                rounded-[6px]
                px-5
                text-[11px]
                font-bold
                tracking-wide
                shadow-md
              "
            >
              MEET OUR INSTRUCTORS
              <span className="ml-2 text-[15px]">→</span>
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/assets/Yoga for Life - Review Post 1 (12) 1.png"
              alt="Yoga For Life"
              className="
                block
                w-full
                max-w-[672px]
                object-contain
                mix-blend-multiply
              "
            />
          </div>
        </div>
      </section>

      <section
        className="
          relative
          overflow-hidden
          bg-[#F1F5E9]
          px-7
          py-12
          sm:px-10
          md:py-16
          lg:px-12
        "
      >
        <img
          src="/assets/leaves.png"
          alt=""
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            w-[65px]
            opacity-75
            sm:w-[85px]
            md:w-[105px]
          "
        />

        <div
          className="
            mx-auto
            grid
            max-w-[1080px]
            grid-cols-1
            items-center
            gap-12
            md:grid-cols-2
            md:gap-10
            lg:gap-14
          "
        >
          <div>
            {storyCollage()}

            <div className="mx-auto mt-9 max-w-[400px]">
              <span
                className="
                  block
                  font-body
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.08em]
                  text-primary-600
                  sm:text-[11px]
                "
              >
                YOGA REIMAGINED FOR REAL LIFE
              </span>

              <p
                className="
                  mt-3
                  font-body
                  text-[11px]
                  font-medium
                  leading-[1.65]
                  text-primary-800
                  sm:text-[12px]
                "
              >
                It is about how you feel when you wake up.
                <br />
                How you breathe when life gets stressful.
                <br />
                How you care for your body and
                <br />
                How you quiet your mind
                <br />
                And how consciously you choose to live.
                <br />
                At YFL, we bring yoga beyond the mat and into everyday life.
              </p>

              <h3
                className="
                  mt-4
                  font-body
                  text-[13px]
                  font-bold
                  text-primary-600
                  sm:text-[14px]
                "
              >
                Move, Breathe, Restore, Transform
              </h3>
            </div>
          </div>

          <div className="text-center">
            <span
              className="
                block
                font-body
                text-[10px]
                font-black
                uppercase
                tracking-[0.12em]
                text-primary-600
                sm:text-[11px]
              "
            >
              OUR STORY
            </span>

            <p
              className="
                mx-auto
                mt-4
                max-w-[380px]
                font-body
                text-[10px]
                font-medium
                leading-[1.7]
                text-primary-800
                sm:text-[11px]
                md:text-[12px]
              "
            >
              YFL began in Nov 2021 with a simple belief - Yoga should not be
              limited to the mat. It should become a part of everyday life.
              What started as a passion for helping people move better, breathe
              better & feel better has grown into a journey of transformation,
              Connection & mindful living. Since our beginning in 2021, over 200
              participants have benefited from YFL journey, each with their own
              goals, challenges and stories of transformation.
            </p>

            <div className="mt-8">
              {storyCollage(true)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-7 py-12 sm:px-10 md:py-16">
        <div className="mx-auto max-w-[850px]">
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="text-primary-500">❧</span>

            <h2
              className="
                font-heading
                text-[15px]
                font-bold
                tracking-wide
                text-primary-600
                sm:text-[17px]
              "
            >
              OUR MISSION & VISION
            </h2>

            <span className="text-primary-500">❧</span>
          </div>

          <div
            className="
              grid
              grid-cols-1
              justify-items-center
              gap-8
              sm:grid-cols-2
              sm:gap-10
            "
          >
            <div
              className="
                relative
                flex
                h-[245px]
                w-full
                max-w-[235px]
                flex-col
                items-center
                rounded-[10px]
                border
                border-primary-400
                bg-[#F4F7EE]
                px-5
                py-4
                text-center
              "
            >
              <div
                className="
                  absolute
                  -top-5
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E0EBD5]
                "
              >
                <img
                  src="/assets/Goal.png"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
              </div>

              <div className="mt-8 flex w-full items-center gap-2">
                <div className="h-px flex-1 bg-primary-soft" />
                <span className="text-[7px] font-medium text-primary">
                  OUR
                </span>
                <div className="h-px flex-1 bg-primary-soft" />
              </div>

              <h3
                className="
                  mt-1
                  font-heading
                  text-[18px]
                  font-bold
                  tracking-wide
                  text-primary-mid
                "
              >
                MISSION
              </h3>

              <p
                className="
                  mt-2
                  max-w-[185px]
                  font-body
                  text-[8px]
                  font-medium
                  leading-[1.55]
                  text-text-body
                  sm:text-[9px]
                "
              >
                To make yoga simple, accessible and meaningful part of
                everyday life. listening is it about taking time for yourself,
                to your body, finding becoming a inner peace and little better
                everyday.
              </p>

              <div className="mt-auto">
                <img
                  src="/assets/Yoga for Life - Review Post 1 (14) 1 (1).png"
                  alt=""
                  className="h-10 w-10 object-contain mix-blend-multiply"
                />
              </div>
            </div>

            <div
              className="
                relative
                flex
                h-[245px]
                w-full
                max-w-[235px]
                flex-col
                items-center
                rounded-[10px]
                border
                border-primary-400
                bg-[#F4F7EE]
                px-5
                py-4
                text-center
              "
            >
              <div
                className="
                  absolute
                  -top-5
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E0EBD5]
                "
              >
                <img
                  src="/assets/Eye.png"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
              </div>

              <div className="mt-8 flex w-full items-center gap-2">
                <div className="h-px flex-1 bg-primary-soft" />
                <span className="text-[7px] font-medium text-primary">
                  OUR
                </span>
                <div className="h-px flex-1 bg-primary-soft" />
              </div>

              <h3
                className="
                  mt-1
                  font-heading
                  text-[18px]
                  font-bold
                  tracking-wide
                  text-primary-mid
                "
              >
                VISION
              </h3>

              <p
                className="
                  mt-2
                  max-w-[185px]
                  font-body
                  text-[8px]
                  font-medium
                  leading-[1.55]
                  text-text-body
                  sm:text-[9px]
                "
              >
                To inspire a healthier world, one mindful life at a time, our
                vision is to grow YFL into a trusted wellness community where
                every person feels empowered to take charge of their health,
                embrace balance and become their better self.
              </p>

              <div className="mt-auto">
                <img
                  src="/assets/Yoga for Life - Review Post 1 (16) 1.png"
                  alt=""
                  className="h-10 w-10 object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>

          <p
            className="
              mt-5
              text-center
              font-body
              text-[9px]
              font-bold
              tracking-wide
              text-primary-600
            "
          >
            YFL - FIND YOUR BALANCE LIVE YOUR LIFE.
          </p>
        </div>
      </section>

      <section className="bg-[#F1F5E9] px-6 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-8">
            <span
              className="
                block
                font-heading
                text-[10px]
                font-bold
                tracking-[0.1em]
                text-primary-600
              "
            >
              OUR TEAM
            </span>

            <h2
              className="
                mt-2
                font-heading
                text-[24px]
                font-bold
                text-primary-600
                sm:text-[28px]
              "
            >
              Meet Our Instructors
            </h2>

            <p
              className="
                mt-3
                max-w-[930px]
                font-body
                text-[10px]
                font-medium
                leading-[1.7]
                text-primary-800
                sm:text-[11px]
              "
            >
              Our certified instructors are passionate about helping you
              achieve your wellness goals. With years of experience and a
              personalized approach, they create a supportive environment
              where every student can grow with confidence.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-3
              md:gap-6
            "
          >
            {instructors.map((instructor) => (
              <div
                key={instructor.name}
                className="
                  relative
                  flex
                  min-h-[355px]
                  flex-col
                  overflow-hidden
                  rounded-[11px]
                  border
                  border-primary-400
                  bg-[#F8FAF3]
                  shadow-[0_3px_8px_rgba(72,95,45,0.08)]
                "
              >
                <img
                  src="/assets/Leaf.png"
                  alt=""
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    z-0
                    h-[65px]
                    w-[65px]
                    object-contain
                    opacity-20
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    flex-col
                    items-center
                    px-4
                    pt-6
                    text-center
                  "
                >
                  <div
                    className="
                      relative
                      mb-3
                      h-[80px]
                      w-[80px]
                      rounded-full
                      border-[2px]
                      border-primary-400
                      bg-white
                      p-[3px]
                    "
                  >
                    <div className="h-full w-full overflow-hidden rounded-full">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div
                      className="
                        absolute
                        bottom-[-3px]
                        right-[-8px]
                        flex
                        h-[28px]
                        w-[28px]
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-white
                        bg-[#789C59]
                      "
                    >
                      <img
                        src="/assets/Lotus.png"
                        alt=""
                        className="h-4 w-4 object-contain brightness-0 invert"
                      />
                    </div>
                  </div>

                  <h3
                    className="
                      font-heading
                      text-[15px]
                      font-bold
                      leading-tight
                      text-primary-600
                    "
                  >
                    {instructor.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      font-body
                      text-[7px]
                      font-bold
                      tracking-wide
                      text-text
                    "
                  >
                    ★ {instructor.role}
                  </p>

                  <div
                    className="
                      mt-3
                      rounded-[5px]
                      bg-primary-100
                      px-3
                      py-1.5
                      text-[7px]
                      font-medium
                      text-primary-900
                    "
                  >
                    {instructor.specialty}
                  </div>

                  <div
                    className="
                      mt-3
                      w-full
                      rounded-[7px]
                      bg-[#E7EED9]
                      px-3
                      py-3
                    "
                  >
                    <p
                      className="
                        font-body
                        text-[7px]
                        font-medium
                        leading-[1.45]
                        text-primary-700
                      "
                    >
                      {instructor.desc}
                    </p>
                  </div>
                </div>

                <div className="relative mt-auto">
                  <div
                    className="
                      absolute
                      left-0
                      top-[-22px]
                      z-10
                      h-[32px]
                      w-full
                      pointer-events-none
                    "
                  >
                    <svg
                      viewBox="0 0 500 100"
                      preserveAspectRatio="none"
                      className="h-full w-full"
                    >
                      <path
                        d="
                          M 0 8
                          C 75 62, 125 78, 205 52
                          C 285 25, 320 12, 375 28
                          C 425 42, 460 60, 500 65
                          L 500 100
                          L 0 100
                          Z
                        "
                        fill="#DCE8BD"
                      />
                    </svg>
                  </div>

                  <div
                    className="
                      relative
                      z-20
                      bg-[#DCE8BD]
                      px-2
                      pb-4
                      pt-4
                    "
                  >
                    <div className="grid grid-cols-3 divide-x divide-primary-400">
                      {instructor.stats.map((stat, statIdx) => (
                        <div
                          key={statIdx}
                          className="
                            flex
                            flex-col
                            items-center
                            text-center
                          "
                        >
                          <div
                            className="
                              mb-1
                              flex
                              h-[27px]
                              w-[27px]
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-primary-400
                              bg-[#EDF3E5]
                            "
                          >
                            <img
                              src={stat.icon}
                              alt=""
                              className="h-3.5 w-3.5 object-contain"
                            />
                          </div>

                          <span
                            className="
                              font-heading
                              text-[6px]
                              leading-tight
                              text-body-secondary
                            "
                          >
                            {stat.label}
                          </span>

                          <span
                            className="
                              font-heading
                              text-[6px]
                              leading-tight
                              text-body-secondary
                            "
                          >
                            {stat.sub}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-[#D3E8C2]
          via-[#B4D99D]
          to-[#DCEBCB]
          px-6
          py-12
          sm:px-8
          md:py-16
        "
      >
        <img
          src="/assets/flag (1) 3.svg"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-10px]
            top-[-5px]
            z-0
            w-[105px]
            opacity-60
            md:w-[145px]
          "
        />

        <img
          src="/assets/flag (1) 2.svg"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-10px]
            left-[-10px]
            z-0
            w-[100px]
            opacity-60
            md:w-[135px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1050px]
            grid-cols-1
            items-center
            gap-8
            md:grid-cols-[1fr_1fr]
            md:gap-10
          "
        >
          <div className="flex flex-col items-center">
            <div
              className="
                w-full
                max-w-[600px]
                overflow-hidden
                rounded-[6px]
                shadow-[0_8px_20px_rgba(30,45,20,0.18)]
              "
            >
              <img
                src="/assets/Yoga for Life - Review Post 1 (17) 1.png"
                alt="Woman meditating in nature"
                className="block h-auto w-full object-cover"
              />
            </div>

            <Button
              className="
                mt-4
                h-[32px]
                w-full
                max-w-[280px]
                rounded-[5px]
                border
                border-accent
                px-4
                text-[8px]
                font-bold
                tracking-wide
                shadow-md
              "
            >
              START YOUR JOURNEY
              <span className="ml-2">→</span>
            </Button>
          </div>

          <div className="text-center md:text-left">
            <p
              className="
                font-body
                text-[8px]
                font-black
                uppercase
                tracking-[0.08em]
                text-[#26351D]
                sm:text-[9px]
              "
            >
              BEGIN YOUR WELLNESS JOURNEY TODAY
            </p>

            <h2
              className="
                mt-2
                font-heading
                text-[18px]
                font-bold
                leading-tight
                text-[#17220E]
                sm:text-[21px]
              "
            >
              Discover the Difference.
            </h2>

            <h3
              className="
                font-heading
                text-[17px]
                font-bold
                leading-tight
                text-primary-600
                sm:text-[20px]
              "
            >
              Start Your{" "}
              <span className="italic font-medium text-[#789C59]">
                Journey.
              </span>
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-[370px]
                font-body
                text-[9px]
                font-medium
                leading-[1.65]
                text-[#30402A]
                sm:text-[10px]
                md:mx-0
              "
            >
              Learn more than just yoga—become part of a supportive community
              dedicated to helping you build strength, find balance, and embrace
              a healthier lifestyle. Take the first step toward lasting wellness
              with expert guidance and personalized programs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}