import {
  Activity,
  Brain,
  Flower2,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

import { Button } from "../components/ui/Button";

export function GeneralYoga() {
  const benefits = [
    {
      icon: Activity,
      title: "Move with Ease & improve mobility",
    },
    {
      icon: HeartPulse,
      title: "Develop Breath Control",
    },
    {
      icon: Brain,
      title: "Strengthen Mind Connection",
    },
    {
      icon: Flower2,
      title: "Nurture Inner Wellness",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-body">


      <section
        className="
          relative
          min-h-[470px]
          w-full
          overflow-hidden
          bg-[#eee8c5]
          sm:min-h-[490px]
          lg:min-h-[675px]
        "
      >


        <img
          src="/assets/mr%20sons%20(14)%201.png"
          alt=""
          aria-hidden="true"
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
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-[#eee5bd]/20
            via-transparent
            to-[#f4f3df]/10
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            min-h-[470px]
            max-w-[1240px]
            px-6
            pt-[70px]
            sm:px-8
            sm:pt-[65px]
            lg:min-h-[510px]
            lg:px-10
            xl:px-12
          "
        >


          <div
            className="
              ml-auto
              flex
              w-full
              max-w-[650px]
              flex-col
              justify-center
              pt-[75px]
              sm:pt-[70px]
              lg:pt-[65px]
              xl:pt-[60px]
            "
          >

            <h1
              className="
                font-heading
                text-[50px]
                font-medium
                leading-[1.03]
                tracking-[-0.025em]
                text-[#19351d]
                sm:text-[58px]
                md:text-[64px]
                lg:text-[70px]
                xl:text-[74px]
              "
            >
              General Yoga
            </h1>

            <p
              className="
                mt-[12px]
                font-heading
                text-[18px]
                leading-[1.15]
                text-[#71965a]
                sm:text-[19px]
                md:text-[20px]
                lg:text-[21px]
              "
            >
              Move better. Breathe deeper. Live better.
            </p>

            <p
              className="
                mt-[8px]
                max-w-[610px]
                font-body
                text-[13px]
                leading-[1.7]
                text-body-copy
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]
              "
            >
              Whether you are a beginner or an experienced practitioner,
              the program is thoughtfully structured to help you improve
              flexibility, strength, posture, balance, and inner awareness—
              one step at a time.
            </p>

            <a
              href="/consultation"
              className="mt-[18px] inline-flex"
            >
              <Button
                className="
                  flex
                  h-[40px]
                  min-w-[295px]
                  items-center
                  justify-center
                  rounded-[6px]
                  bg-link
                  px-[25px]
                  font-body
                  text-[12px]
                  font-bold
                  tracking-[0.035em]
                  text-white
                  shadow-[0_4px_8px_rgba(70,90,50,0.25)]
                  transition-all
                  duration-200
                  hover:bg-action-dark
                "
              >
                BOOK A FREE CONSULTATION

                <ArrowRight
                  className="ml-[8px] h-[15px] w-[15px]"
                  strokeWidth={2.5}
                />
              </Button>
            </a>

          </div>
        </div>
      </section>



      <section
        className="
          bg-white
          px-6
          pb-[28px]
          pt-[48px]
          sm:px-8
          sm:pb-[32px]
          sm:pt-[52px]
          lg:px-10
          lg:pb-[35px]
          lg:pt-[55px]
        "
      >

        <div
          className="
            relative
            mx-auto
            max-w-[1130px]
            border-b
            border-border-sage
            pb-[12px]
          "
        >

          <h2
            className="
              font-heading
              text-[18px]
              font-bold
              uppercase
              leading-none
              text-heading
              sm:text-[19px]
            "
          >
            About the Program
          </h2>

          <p
            className="
              mt-[16px]
              max-w-[900px]
              font-body
              text-[13px]
              leading-[1.8]
              text-[#2b3d2d]
              sm:text-[14px]
              lg:text-[15px]
            "
          >
            Our Regular Yoga Program is a holistic practice designed to
            strengthen the body, calm the mind, and create balance in
            everyday life. Through a combination of yoga asanas, mobility
            movements, pranayama, meditation, and mindful practices, each
            session supports your overall physical and mental well-being.
          </p>

          <p
            className="
              mt-[1px]
              font-body
              text-[13px]
              font-bold
              leading-[1.7]
              text-body
              sm:text-[14px]
              lg:text-[15px]
            "
          >
            One breath and one moment at a time.
          </p>


          <img
            src="/assets/Leaf.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-1px]
              right-[-5px]
              hidden
              h-[125px]
              w-[125px]
              object-contain
              sm:block
              lg:h-[135px]
              lg:w-[135px]
            "
          />

        </div>
      </section>



      <section
        className="
          bg-white
          px-6
          pb-[38px]
          pt-[4px]
          sm:px-8
          sm:pb-[45px]
          lg:px-10
        "
      >

        <div
          className="
            mx-auto
            max-w-[1130px]
            border-b
            border-[#d5dfce]
            pb-[45px]
          "
        >

          <h2
            className="
              font-heading
              text-[18px]
              font-bold
              uppercase
              text-heading
              sm:text-[19px]
            "
          >
            What You'll Gain
          </h2>

          <div
            className="
              mt-[27px]
              grid
              grid-cols-2
              gap-[17px]
              lg:grid-cols-4
            "
          >

            {benefits.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="
                  flex
                  min-h-[126px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[8px]
                  border
                  border-[#eee9ca]
                  bg-[#fffef1]
                  px-[15px]
                  py-[17px]
                  text-center
                  shadow-[0_4px_8px_rgba(0,0,0,0.13)]
                  transition-transform
                  duration-200
                  hover:-translate-y-[2px]
                "
              >

                <Icon
                  className="
                    mb-[13px]
                    h-[25px]
                    w-[25px]
                    text-[#76a25b]
                  "
                  strokeWidth={2.3}
                />

                <p
                  className="
                    max-w-[165px]
                    font-body
                    text-[11px]
                    leading-[1.45]
                    text-ink
                    sm:text-[12px]
                    lg:text-[13px]
                  "
                >
                  {title}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>



      <section
        className="
          bg-white
          px-6
          pb-[34px]
          pt-0
          sm:px-8
          sm:pb-[38px]
          lg:px-10
        "
      >

        <div className="mx-auto max-w-[1130px]">

          <h2
            className="
              font-heading
              text-[18px]
              font-bold
              uppercase
              text-heading
              sm:text-[19px]
            "
          >
            Who Is It For?
          </h2>

          <div
            className="
              mt-[17px]
              max-w-[1000px]
              font-body
              text-[13px]
              leading-[1.8]
              text-[#293c2c]
              sm:text-[14px]
              lg:text-[15px]
            "
          >

            <p>
              Beginners and experienced practitioners, Anyone looking to
              improve strength, flexibility, and mobility.
            </p>

            <p>
              People seeking better posture, balance, and body awareness.
            </p>

            <p>
              Those looking to reduce everyday stress and feel more relaxed.
            </p>

            <p className="font-bold">
              Suitable for all adults who want to make yoga a part of their
              daily wellness routine. 🌿
            </p>

          </div>
        </div>
      </section>



      <section
        className="
          relative
          min-h-[330px]
          w-full
          overflow-hidden
          bg-[#bfd584]
          sm:min-h-[350px]
          lg:min-h-[385px]
        "
      >


        <img
          src="/assets/Yoga%20for%20Life%20-%20Review%20Post%201%20(44)%201.png"
          alt=""
          aria-hidden="true"
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
            pointer-events-none
            absolute
            inset-0
            bg-[#b9d17d]/20
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
            py-[55px]
            text-center
            sm:min-h-[350px]
            lg:min-h-[385px]
          "
        >

          <div className="w-full max-w-[750px]">

            <h2
              className="
                font-heading
                text-[27px]
                font-bold
                uppercase
                leading-[1.12]
                tracking-[-0.015em]
                text-[#527145]
                sm:text-[32px]
                lg:text-[38px]
              "
            >
              Find Your Balance, Feel Your Best
            </h2>

            <p
              className="
                mx-auto
                mt-[10px]
                max-w-[630px]
                font-body
                text-[13px]
                leading-[1.65]
                text-[#263827]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              Build strength, improve flexibility, and refresh your mind
              with a balanced yoga practice for everyday well-being.
            </p>

            <a
              href="/join-now"
              className="mt-[22px] inline-flex"
            >
              <Button
                className="
                  flex
                  h-[40px]
                  min-w-[285px]
                  items-center
                  justify-center
                  rounded-[6px]
                  bg-link
                  px-[30px]
                  font-body
                  text-[11px]
                  font-bold
                  tracking-[0.04em]
                  text-white
                  shadow-[0_4px_8px_rgba(70,90,50,0.25)]
                  transition-all
                  duration-200
                  hover:bg-action-dark
                "
              >
                START YOUR JOURNEY

                <ArrowRight
                  className="ml-[8px] h-[14px] w-[14px]"
                  strokeWidth={2.5}
                />
              </Button>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}