import { Link } from "react-router-dom";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { ArrowRight } from "lucide-react";

export function Faq() {
  const faqs = [
    {
      q: "Do I need prior yoga experience?",
      a: "Not at all! Our classes are designed for all levels, from complete beginners to advanced practitioners. Our instructors will guide you and offer modifications to suit your experience level.",
    },
    {
      q: "What should I bring to a yoga class?",
      a: "Just bring yourself in comfortable clothing, a water bottle, and a small towel. We provide high-quality yoga mats and props at our studio, though you are welcome to bring your own mat if you prefer.",
    },
    {
      q: "Are the classes live or pre-recorded?",
      a: "We offer both live and pre-recorded yoga sessions. Live sessions allow you to practice with our instructors and receive guidance in real time, while pre-recorded classes give you the flexibility to practice whenever it is convenient for you.",
    },
    {
      q: "Can I join from another city or country?",
      a: "Yes. Our online programs allow students to participate from different cities and countries. You can practice from anywhere as long as you have a stable internet connection.",
    },
    {
      q: "Can I join a program after the month has started?",
      a: "Yes. You can contact our team to check availability and join an ongoing program. We will help you understand the sessions and guide you through the best way to get started.",
    },
    {
      q: "How do I register for a program?",
      a: "Simply click the 'Join Now' button, select your preferred program and plan, and fill out the registration form. Our team will contact you shortly to confirm your enrollment and set up your consultation.",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-[#304333]">

      <section className="relative h-[640px] w-full overflow-hidden sm:h-[655px] lg:h-[670px]">

        <img
          src="/assets/Yoga for Life - Review Post 1 (20) 2.png"
          alt="Yoga for Life"
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
            from-[#f2e7c4]/95
            via-[#f2e7c4]/80
            via-[55%]
            to-transparent
          "
        />

        <div className="absolute inset-0 bg-[#eadfbd]/10" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-[1240px]
            items-center
            px-13
            sm:px-10
            lg:px-12
            xl:px-16
          "
        >
          <div className="w-full max-w-[560px]">

            <h1
              className="
                font-heading
                text-[34px]
                font-medium
                leading-[1.04]
                tracking-[-0.025em]
                text-[#263c2b]
                sm:text-[40px]
                lg:text-[44px]
                xl:text-[45px]
              "
            >
              We're Here to
              <br />
              Answer Your Questions
            </h1>

            <p
              className="
                mt-[14px]
                max-w-[485px]
                font-body
                text-[13px]
                leading-[1.65]
                text-[#334432]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              Find answers to the most common questions about our yoga
              programs, classes, memberships, and more.
            </p>

            <Link
              to="/join-now"
              className="
                mt-[18px]
                inline-flex
                h-[39px]
                min-w-[257px]
                items-center
                justify-center
                rounded-[6px]
                bg-link
                px-6
                font-body
                text-[11px]
                font-bold
                tracking-[0.07em]
                text-white
                shadow-[0_4px_9px_rgba(70,90,50,0.22)]
                transition-all
                duration-200
                hover:bg-action-dark
              "
            >
              COMPLETE REGISTRATION

              <ArrowRight
                className="ml-2 h-[14px] w-[14px]"
                strokeWidth={2.2}
              />
            </Link>

          </div>
        </div>
      </section>


      <section
        className="
          bg-white
          px-5
          pb-[70px]
          pt-[35px]
          sm:px-8
          sm:pb-[85px]
          sm:pt-[40px]
          lg:px-10
          lg:pb-[105px]
          lg:pt-[35px]
        "
      >
        <div className="mx-auto max-w-[1080px]">

          <div className="mb-[28px] flex justify-center">
            <div
              className="
                flex
                h-[42px]
                w-full
                max-w-[425px]
                items-center
                justify-center
                rounded-[6px]
                bg-link
                px-5
                text-center
                font-body
                text-[12px]
                font-bold
                tracking-[0.07em]
                text-white
                shadow-[0_3px_7px_rgba(70,90,50,0.15)]
              "
            >
              FREQUENTLY ASKED QUESTIONS
            </div>
          </div>


          <div className="space-y-[12px]">

            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="
                  overflow-hidden
                  rounded-[7px]
                  border
                  border-[#dce4d9]
                  bg-[#f3f7f0]
                  transition-all
                  duration-200
                  hover:border-[#cbd8c5]
                "
              >
                <FaqAccordion
                  question={faq.q}
                  answer={faq.a}
                />
              </div>
            ))}

          </div>


          <section
            className="
              mt-[100px]
              w-full
              bg-white
              pb-[10px]
              pt-[5px]
              text-center
              sm:mt-[110px]
              lg:mt-[115px]
            "
          >
            <div
              className="
                mx-auto
                flex
                w-full
                max-w-[850px]
                flex-col
                items-center
              "
            >

              <div
                className="
                  relative
                  mb-[17px]
                  h-[105px]
                  w-[180px]
                "
              >

                <div
                  className="
                    absolute
                    right-[12px]
                    top-[4px]
                    flex
                    h-[92px]
                    w-[92px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#dce8d4]
                  "
                >

                  <div
                    className="
                      relative
                      h-[47px]
                      w-[59px]
                    "
                  >

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-[2px]
                        bg-link
                      "
                    />

                    <div
                      className="
                        absolute
                        left-[5px]
                        right-[5px]
                        top-[4px]
                        h-[34px]
                        overflow-hidden
                      "
                    >
                      <div
                        className="
                          absolute
                          left-1/2
                          top-[-12px]
                          h-[38px]
                          w-[38px]
                          -translate-x-1/2
                          rotate-45
                          border-b-[4px]
                          border-r-[4px]
                          border-white
                        "
                      />
                    </div>

                    <div
                      className="
                        absolute
                        bottom-[5px]
                        left-[7px]
                        right-[7px]
                        h-[2px]
                        bg-white/75
                      "
                    />

                  </div>
                </div>
              </div>


              <h2
                className="
                  font-heading
                  text-[28px]
                  font-medium
                  uppercase
                  leading-[1.15]
                  tracking-[-0.015em]
                  text-[#263a29]
                  sm:text-[30px]
                  lg:text-[31px]
                "
              >
                MAIL YOUR QUERIES
              </h2>


              <p
                className="
                  mt-[10px]
                  max-w-[720px]
                  px-3
                  font-body
                  text-[13px]
                  font-normal
                  leading-[1.7]
                  text-[#4c5c4b]
                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                We'd love to hear from you. Send us your questions, concerns,
                or feedback and
                <br className="hidden sm:block" />
                our team will get back to you soon.
              </p>


              <a
                href="mailto:hello@yogaforlife.com"
                className="
                  mt-[22px]
                  flex
                  h-[34px]
                  w-[328px]
                  items-center
                  justify-center
                  gap-[14px]
                  rounded-[5px]
                  bg-link
                  px-5
                  font-body
                  text-[13px]
                  font-medium
                  text-white
                  shadow-[0_3px_8px_rgba(55,75,45,0.20)]
                  transition-all
                  duration-200
                  hover:bg-[#62894e]
                  hover:shadow-[0_4px_10px_rgba(55,75,45,0.25)]
                "
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[22px] w-[22px]"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="M3 7l9 6 9-6" />
                </svg>

                <span>
                  hello@yogaforlife.com
                </span>

              </a>

            </div>
          </section>

        </div>
      </section>


      <section
        className="
          relative
          min-h-[350px]
          w-full
          overflow-hidden
          sm:min-h-[370px]
          lg:min-h-[395px]
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#b7d78d]
            via-[#c8e4a5]
            to-[#a7ce78]
          "
        />

        <div
          className="
            absolute
            -left-[120px]
            bottom-[-110px]
            h-[300px]
            w-[500px]
            rotate-[-12deg]
            rounded-[50%]
            bg-white/15
            blur-[2px]
          "
        />

        <div
          className="
            absolute
            -right-[140px]
            top-[-90px]
            h-[310px]
            w-[450px]
            rotate-[12deg]
            rounded-[50%]
            bg-white/15
            blur-[2px]
          "
        />

        <div
          className="
            absolute
            bottom-[-70px]
            left-[18%]
            h-[180px]
            w-[600px]
            rotate-[5deg]
            rounded-[50%]
            border-[18px]
            border-white/10
          "
        />

        <div
          className="
            absolute
            right-[12%]
            top-[-65px]
            h-[170px]
            w-[450px]
            rotate-[-8deg]
            rounded-[50%]
            border-[14px]
            border-white/10
          "
        />


        <div
          className="
            absolute
            right-[6%]
            top-1/2
            hidden
            h-[175px]
            w-[175px]
            -translate-y-1/2
            items-center
            justify-center
            opacity-70
            lg:flex
          "
        >
          <img
            src="/assets/YFL LOGO (5) 2.png"
            alt="Yoga For Life"
            className="h-full w-full object-contain"
          />
        </div>


        <div
          className="
            absolute
            bottom-[17px]
            left-[5%]
            hidden
            h-[90px]
            w-[90px]
            opacity-30
            lg:block
          "
        >
          <img
            src="/assets/YFL LOGO (5) 2.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>


        <div
          className="
            relative
            z-10
            flex
            min-h-[350px]
            w-full
            items-center
            justify-center
            px-6
            py-14
            text-center
            sm:min-h-[370px]
            lg:min-h-[395px]
          "
        >
          <div className="w-full max-w-[620px]">

            <p
              className="
                font-body
                text-[11px]
                font-bold
                uppercase
                tracking-[0.09em]
                text-[#263c25]
                sm:text-[12px]
              "
            >
              STILL HAVE QUESTIONS?
            </p>


            <h2
              className="
                mt-[17px]
                font-heading
                text-[26px]
                font-bold
                uppercase
                leading-[1.12]
                text-[#31462e]
                sm:text-[31px]
                lg:text-[33px]
              "
            >
              WE'RE JUST A MESSAGE AWAY
            </h2>


            <p
              className="
                mx-auto
                mt-[10px]
                max-w-[470px]
                font-body
                text-[13px]
                leading-[1.65]
                text-[#334630]
                sm:text-[14px]
              "
            >
              Can't find what you're looking for?
              <br />
              Our team is happy to help you on your wellness
              <br className="hidden sm:block" />
              journey.
            </p>


            <Link
              to="/join-now"
              className="
                mt-[22px]
                inline-flex
                h-[38px]
                min-w-[260px]
                items-center
                justify-center
                rounded-[5px]
                bg-link
                px-6
                font-body
                text-[11px]
                font-bold
                tracking-[0.07em]
                text-white
                shadow-[0_4px_9px_rgba(70,90,50,0.22)]
                transition-all
                duration-200
                hover:bg-action-dark
              "
            >
              START YOUR JOURNEY

              <ArrowRight
                className="ml-2 h-[14px] w-[14px]"
                strokeWidth={2.2}
              />
            </Link>

          </div>
        </div>

      </section>

    </main>
  );
}