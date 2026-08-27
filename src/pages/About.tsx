import { Button } from "../components/ui/Button";

export function About() {
  const instructors = [
    {
      name: "Ananya Sharma",
      role: "LEAD YOGA INSTRUCTOR",
      specialty: "Certified Prenatal Yoga Instructor",
      desc: "8+ years of experience in Hatha and Vinyasa Yoga. She believes in making yoga accessible, enjoyable, and life-changing for everyone.",
      image: "/assets/instructor-ananya.png",
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
      name: "Meera Iyer",
      role: "PRENATAL & WELLNESS EXPERT",
      specialty: "Strength & Yoga Expert",
      desc: "Certified prenatal yoga instructor with 6+ years of experience. She supports women at every stage of pregnancy and beyond, with care and compassion.",
      image: "/assets/instructor-meera.png",
      stats: [
        {
          label: "Core",
          sub: "Training",
          icon: "/assets/Meditation.png",
        },
        {
          label: "6+ Years",
          sub: "Experience",
          icon: "/assets/Natural Food.png",
        },
        {
          label: "Inner",
          sub: "Balance",
          icon: "/assets/Lotus.png",
        },
      ],
    },

    {
      name: "Aruna Das",
      role: "MEDITATION & MINDFULNESS COACH",
      specialty: "Meditation & Mindfulness Coach",
      desc: "Guides students in meditation, breathwork, and mindfulness practices to bring balance, clarity, and inner peace. Specializes in strength yoga.",
      image: "/assets/hero-yoga-studio.png",
      stats: [
        {
          label: "Strength",
          sub: "Trainer",
          icon: "/assets/Meditation.png",
        },
        {
          label: "Flexibility",
          sub: "Expert",
          icon: "/assets/Natural Food.png",
        },
        {
          label: "Holistic",
          sub: "Wellness",
          icon: "/assets/Lotus.png",
        },
      ],
    },
  ];

  return (
    <div className="overflow-hidden bg-[#F4F7EF]">
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#F4F7EF]">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-5/12 relative z-10">
            <h1 className="font-heading text-[4.5rem] md:text-[5.5rem] font-bold leading-[1] mb-6">
              <span className="block text-[#6A8A4A]">Yoga Refined.</span>

              <span className="block text-[#6A8A4A]">Mind Restored.</span>
            </h1>

            <p className="font-body text-[#3F4F30] font-semibold text-lg leading-relaxed mb-10 max-w-md">
              Discover our story, our mission, and the values that inspire us to
              help people live healthier, more balanced lives through the
              practice of yoga.
            </p>

            <Button className="bg-[#799C59] hover:bg-[#608044] text-white rounded-md px-8 py-4 font-bold text-sm tracking-widest shadow-md">
              MEET OUR INSTRUCTORS
            </Button>
          </div>

          <div className="md:w-7/12 flex justify-center relative z-0">
            <img
              src="/assets/Yoga for Life - Review Post 1 (12) 1.png"
              alt="Yoga For Life"
              className="w-full max-w-2xl object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 md:px-10 bg-[#F4F7EF] relative">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          <div className="md:w-1/2 relative h-[300px] lg:h-[500px] flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[360px] lg:h-[360px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[15%] w-28 h-28 lg:w-40 lg:h-40 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg transform rotate-45 border-6 lg:border-8 border-[#F4F7EF] bg-white">
                <img
                  src="/assets/Mask group.png"
                  alt=""
                  className="w-[150%] h-[150%] max-w-none -translate-x-[15%] -translate-y-[15%] -rotate-45 object-cover"
                />
              </div>

              <div className="absolute top-1/2 left-0 -translate-x-[15%] -translate-y-1/2 w-28 h-28 lg:w-40 lg:h-40 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg transform rotate-45 border-6 lg:border-8 border-[#F4F7EF] bg-white">
                <img
                  src="/assets/Mask group (1).png"
                  alt=""
                  className="w-[150%] h-[150%] max-w-none -translate-x-[15%] -translate-y-[15%] -rotate-45 object-cover"
                />
              </div>

              <div className="absolute top-1/2 right-0 translate-x-[15%] -translate-y-1/2 w-28 h-28 lg:w-40 lg:h-40 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg transform rotate-45 border-6 lg:border-8 border-[#F4F7EF] bg-white">
                <img
                  src="/assets/Mask group (2).png"
                  alt=""
                  className="w-[150%] h-[150%] max-w-none -translate-x-[15%] -translate-y-[15%] -rotate-45 object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] w-28 h-28 lg:w-40 lg:h-40 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg transform rotate-45 border-6 lg:border-8 border-[#F4F7EF] bg-white">
                <img
                  src="/assets/Mask group (3).png"
                  alt=""
                  className="w-[150%] h-[150%] max-w-none -translate-x-[15%] -translate-y-[15%] -rotate-45 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 text-right relative z-10 md:pr-4 lg:pr-10">
            <span className="font-body text-xs font-black uppercase tracking-[0.2em] text-[#5E774C] mb-6 block">
              OUR STORY
            </span>

            <p className="font-body text-sm lg:text-base text-[#3F4F30] font-medium lg:font-semibold leading-relaxed md:pl-12 lg:pl-20 text-right">
              Yoga for Life was founded with a simple vision—make the benefits
              of yoga accessible to everyone. We believe that true wellness
              comes from nurturing both the body and the mind. Through authentic
              yoga practices, mindful breathing, and compassionate guidance, we
              help individuals build healthier habits and achieve lasting
              balance in their everyday lives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-6 md:px-10 bg-white relative border-y border-[#E6ECD9]">
        <div className="max-w-[1320px] mx-auto">
          <span className="font-heading text-xl md:text-2xl font-bold text-[#6A8A4A] tracking-wide block mb-12 md:mb-14">
            OUR MISSION & VISION
          </span>

          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
            <div className="w-full max-w-[300px] h-[330px] bg-[#F4F7EF] rounded-[1rem] border border-[#789C59] px-7 py-5 flex flex-col items-center text-center relative shadow-sm">
              <div className="absolute -top-8 bg-[#F4F7EF] border border-[#789C59] w-16 h-16 rounded-full flex items-center justify-center">
                <img
                  src="/assets/Goal.png"
                  alt=""
                  className="w-7 h-7 object-contain"
                />
              </div>

              <div className="flex items-center justify-center gap-4 w-full mt-12 mb-3">
                <div className="h-px bg-[#D8E4CC] flex-1" />

                <span className="text-[11px] font-medium text-[#799C59]">
                  OUR
                </span>

                <div className="h-px bg-[#D8E4CC] flex-1" />
              </div>

              <h3 className="font-heading text-[1.7rem] text-[#5E774C] font-bold mb-3 tracking-wide">
                MISSION
              </h3>

              <p className="font-body text-[#3F4F30] text-[12px] leading-[1.5] font-medium max-w-[245px]">
                To inspire healthier lifestyles by offering accessible,
                personalized yoga programs that support physical strength,
                mental clarity, and emotional well-being.
              </p>

              <div className="mt-auto">
                <img
                  src="/assets/Yoga for Life - Review Post 1 (14) 1 (1).png"
                  alt=""
                  className="w-16 h-16 object-contain mix-blend-multiply"
                />
              </div>
            </div>

            <div className="w-full max-w-[300px] h-[330px] bg-[#F4F7EF] rounded-[1rem] border border-[#789C59] px-7 py-5 flex flex-col items-center text-center relative shadow-sm">
              <div className="absolute -top-8 bg-[#F4F7EF] border border-[#789C59] w-16 h-16 rounded-full flex items-center justify-center">
                <img
                  src="/assets/Eye.png"
                  alt=""
                  className="w-7 h-7 object-contain"
                />
              </div>

              <div className="flex items-center justify-center gap-4 w-full mt-12 mb-3">
                <div className="h-px bg-[#D8E4CC] flex-1" />

                <span className="text-[11px] font-medium text-[#799C59]">
                  OUR
                </span>

                <div className="h-px bg-[#D8E4CC] flex-1" />
              </div>

              <h3 className="font-heading text-[1.7rem] text-[#5E774C] font-bold mb-3 tracking-wide">
                VISION
              </h3>

              <p className="font-body text-[#3F4F30] text-[12px] leading-[1.5] font-medium max-w-[245px]">
                To create a community where people of all ages can embrace yoga
                as a lifelong journey to inner peace. We strive to inspire
                positive lifestyle changes through mindful practice and
                compassionate guidance.
              </p>

              <div className="mt-auto">
                <img
                  src="/assets/Yoga for Life - Review Post 1 (16) 1.png"
                  alt=""
                  className="w-16 h-16 object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#F4F7EF]">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-12">
            <span className="font-heading text-sm md:text-base font-bold text-[#6A8A4A] tracking-[0.15em] block mb-3">
              OUR TEAM
            </span>

            <h2 className="font-heading text-[2.5rem] md:text-[3rem] text-[#6A8A4A] font-bold mb-5">
              Meet Our Instructors
            </h2>

            <p className="font-body text-[#2F3B24] text-base md:text-lg font-medium leading-relaxed max-w-[1200px]">
              Our certified instructors are passionate about helping you achieve
              your wellness goals. With years of experience and a personalized
              approach, they create a supportive environment where every student
              can grow with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {instructors.map((instructor) => (
              <div
                key={instructor.name}
                className="
                  relative
                  overflow-hidden
                  flex
                  flex-col
                  bg-[#F5FAED]
                  border-[2px]
                  border-[#A9C48E]
                  rounded-[1.5rem]
                  min-h-[730px]
                  shadow-[0_3px_10px_rgba(72,95,45,0.08)]
                "
              >
                <img
                  src="/assets/Leaf.png"
                  alt=""
                  className="
                    absolute
                    top-0
                    right-0
                    w-[120px]
                    h-[120px]
                    object-contain
                    opacity-20
                    pointer-events-none
                    z-0
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    flex-col
                    items-center
                    text-center
                    px-7
                    pt-10
                  "
                >
                  <div className="relative mb-5">
                    <div
                      className="
                        w-[205px]
                        h-[205px]
                        rounded-full
                        border-[3px]
                        border-[#A9C48E]
                        bg-white
                        p-[5px]
                        shadow-sm
                      "
                    >
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div
                      className="
                        absolute
                        bottom-1
                        right-0
                        translate-x-[18%]
                        translate-y-[5%]
                        w-[62px]
                        h-[62px]
                        rounded-full
                        bg-[#79A653]
                        border-[3px]
                        border-white
                        flex
                        items-center
                        justify-center
                        shadow-sm
                      "
                    >
                      <img
                        src="/assets/Lotus.png"
                        alt=""
                        className="w-10 h-10 object-contain brightness-0 invert"
                      />
                    </div>
                  </div>

                  <h3
                    className="
                      font-heading
                      text-[2.15rem]
                      md:text-[2.25rem]
                      text-[#6A8A4A]
                      font-bold
                      leading-none
                      mb-2
                    "
                  >
                    {instructor.name}
                  </h3>

                  <p
                    className="
                      font-body
                      text-[14px]
                      font-medium
                      text-[#26321D]
                      tracking-wide
                      mb-5
                    "
                  >
                    {instructor.role}
                  </p>

                  <div
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      bg-[#E5EFD1]
                      text-[#2F3B24]
                      px-5
                      py-2
                      rounded-full
                      text-[13px]
                      font-medium
                      shadow-sm
                      mb-5
                    "
                  >
                    <span className="text-[#79A653] text-[17px] leading-none">
                      ★
                    </span>

                    <span>{instructor.specialty}</span>
                  </div>

                  <div
                    className="
                      w-[calc(100%-10px)]
                      bg-[#E8F0D5]
                      rounded-[1rem]
                      px-6
                      py-5
                      mb-6
                    "
                  >
                    <p
                      className="
                        font-body
                        text-[#56614A]
                        text-[15px]
                        leading-[1.45]
                        font-medium
                      "
                    >
                      {instructor.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-auto relative">
                  <div
                    className="
                      absolute
                      left-0
                      top-[-52px]
                      w-full
                      h-[75px]
                      z-10
                      pointer-events-none
                    "
                  >
                    <svg
                      viewBox="0 0 500 100"
                      preserveAspectRatio="none"
                      className="w-full h-full"
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
                      px-5
                      pt-8
                      pb-7
                    "
                  >
                    <div className="grid grid-cols-3 divide-x divide-[#A9C48E]">
                      {instructor.stats.map((stat, statIdx) => (
                        <div
                          key={statIdx}
                          className="
                            flex
                            flex-col
                            items-center
                            text-center
                            px-2
                          "
                        >
                          <div
                            className="
                              w-[54px]
                              h-[54px]
                              rounded-full
                              border-[2px]
                              border-[#A9C48E]
                              bg-[#E8F0D5]
                              flex
                              items-center
                              justify-center
                              mb-3
                            "
                          >
                            <img
                              src={stat.icon}
                              alt=""
                              className="w-7 h-7 object-contain"
                            />
                          </div>

                          <span
                            className="
                              font-heading
                              text-[16px]
                              text-[#34432A]
                              leading-tight
                            "
                          >
                            {stat.label}
                          </span>

                          <span
                            className="
                              font-heading
                              text-[16px]
                              text-[#34432A]
                              leading-tight
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
          min-h-[650px]
          md:min-h-[680px]
          bg-gradient-to-r
          from-[#B9D995]
          via-[#86A963]
          to-[#4F683A]
          px-6
          md:px-10
          py-20
          md:py-24
        "
      >
        <img
          src="/assets/flag (1) 3.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            z-[1]
            pointer-events-none
            select-none
            top-[-10px]
            right-[-5px]
            w-[150px]
            sm:w-[175px]
            md:w-[205px]
            lg:w-[235px]
            xl:w-[260px]
            h-auto
            object-contain
          "
        />

        <img
          src="/assets/flag (1) 2.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            z-[1]
            pointer-events-none
            select-none
            bottom-[-10px]
            left-[-10px]
            w-[125px]
            sm:w-[150px]
            md:w-[175px]
            lg:w-[195px]
            xl:w-[220px]
            h-auto
            object-contain
          "
        />

        <div
          className="
            relative
            z-10
            max-w-[1320px]
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >
          <div className="flex flex-col items-center lg:items-start">
            <div
              className="
                w-full
                max-w-[735px]
                overflow-hidden
                shadow-[0_20px_45px_rgba(30,45,20,0.30)]
              "
            >
              <img
                src="/assets/Yoga for Life - Review Post 1 (17) 1.png"
                alt="Woman meditating in nature"
                className="
                  block
                  w-full
                  h-auto
                  object-cover
                "
              />
            </div>

            <Button
              className="
                mt-10
                w-full
                max-w-[550px]
                h-[72px]
                bg-[#7FA55D]
                hover:bg-[#6F914F]
                text-white
                border
                border-[#A8C487]
                rounded-[14px]
                font-body
                font-bold
                text-base
                tracking-wide
                shadow-[0_12px_25px_rgba(40,60,25,0.25)]
              "
            >
              START YOUR JOURNEY
              <span className="ml-3 text-xl">→</span>
            </Button>
          </div>

          <div
            className="
              relative
              z-10
              text-center
              lg:text-left
              max-w-[620px]
              mx-auto
              lg:mx-0
            "
          >
            <h2
              className="
                font-heading
                text-[#17220E]
                text-[2.4rem]
                md:text-[3rem]
                lg:text-[3.2rem]
                leading-[1.15]
                font-extrabold
                uppercase
                tracking-wide
                mb-8
              "
            >
              BEGIN YOUR WELLNESS
              <br />
              JOURNEY TODAY
            </h2>

            <h3
              className="
                font-heading
                text-[#17220E]
                text-[2rem]
                md:text-[2.7rem]
                lg:text-[3rem]
                leading-[1.15]
                font-bold
                mb-8
              "
            >
              Discover the Difference.
              <br />
              Start Your{" "}
              <span
                className="
                  text-white
                  italic
                  font-light
                  tracking-wide
                "
              >
                Journey.
              </span>
            </h3>

            <p
              className="
                font-body
                text-white
                text-base
                md:text-lg
                leading-[1.9]
                font-medium
                max-w-[570px]
                mx-auto
                lg:mx-0
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
    </div>
  );
}
