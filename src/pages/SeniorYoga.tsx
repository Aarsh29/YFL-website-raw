import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Camera,
  Clock3,
  Activity,
  Scale,
  HeartPulse,
  Dumbbell,
} from "lucide-react";

import { Button } from "../components/ui/Button";

export function SeniorYoga({ embedded = false }: { embedded?: boolean }) {
  const benefits = [
    {
      icon: Activity,
      title: "Improved Flexibility & Mobility",
    },
    {
      icon: Scale,
      title: "Better Balance & Stability",
    },
    {
      icon: HeartPulse,
      title: "Calmer Mind & Better Relaxation",
    },
    {
      icon: Dumbbell,
      title: "Strength and Vitality",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-body">
      {!embedded && (
        <>


      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_5px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex h-[68px] w-full max-w-[1320px] items-center justify-between px-6 sm:px-8 lg:px-10">


          <a
            href="/"
            className="flex h-full items-center"
          >
            <img
              src="/assets/logo.png"
              alt="Yoga For Life"
              className="h-[62px] w-auto object-contain"
            />
          </a>


          <nav className="hidden items-center gap-[30px] lg:flex">
            <a
              href="/"
              className="font-body text-[13px] text-body transition-colors hover:text-link"
            >
              Home
            </a>

            <a
              href="/about"
              className="font-body text-[13px] text-body transition-colors hover:text-link"
            >
              About
            </a>

            <a
              href="/program"
              className="font-body text-[13px] text-body transition-colors hover:text-link"
            >
              Program
            </a>

            <a
              href="/testimonials"
              className="font-body text-[13px] text-body transition-colors hover:text-link"
            >
              Testimonials
            </a>

            <a
              href="/contact"
              className="font-body text-[13px] text-body transition-colors hover:text-link"
            >
              Contact
            </a>

            <a
              href="/faq"
              className="font-body text-[13px] text-body transition-colors hover:text-link"
            >
              FAQ
            </a>
          </nav>


          <a
            href="/join-now"
            className="hidden lg:inline-flex"
          >
            <Button
              className="
                h-[38px]
                min-w-[115px]
                rounded-[7px]
                bg-link
                px-[22px]
                font-body
                text-[12px]
                font-bold
                tracking-[0.03em]
                text-white
                shadow-[0_3px_7px_rgba(70,90,50,0.2)]
                hover:bg-action-dark
              "
            >
              JOIN NOW
            </Button>
          </a>


          <a
            href="/join-now"
            className="lg:hidden"
          >
            <Button
              className="
                h-[36px]
                rounded-[6px]
                bg-link
                px-[17px]
                font-body
                text-[11px]
                font-bold
                text-white
              "
            >
              JOIN NOW
            </Button>
          </a>

        </div>
      </header>
        </>
      )}



      <section
        className="
          relative
          min-h-[470px]
          w-full
          overflow-hidden
          bg-[#e9f0d5]
          sm:min-h-[500px]
          lg:min-h-[610px]
        "
      >


        <img
          src="/assets/ChatGPT Image Aug 28, 2026, 02_25_17 PM 1.png"
          alt="Senior woman practicing yoga"
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
            from-[#b6ce83]/10
            via-transparent
            to-[#ffffff]/30
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            min-h-[470px]
            max-w-[1320px]
            px-6
            pt-[25px]
            sm:min-h-[500px]
            sm:px-8
            lg:min-h-[650px]
            lg:px-10
          "
        >


          <div
            className="
              ml-auto
              flex
              w-full
              max-w-[700px]
              flex-col
              justify-center
              pt-[55px]
              sm:pt-[65px]
              lg:pt-[75px]
              xl:pt-[80px]
            "
          >

            <h1
              className="
                font-heading
                text-[45px]
                font-medium
                leading-[1.02]
                tracking-[-0.035em]
                text-[#19351d]
                sm:text-[54px]
                md:text-[62px]
                lg:text-[68px]
                xl:text-[72px]
              "
            >
              Senior Yoga
            </h1>

            <p
              className="
                mt-[13px]
                font-heading
                text-[18px]
                leading-[1.2]
                text-[#71965a]
                sm:text-[21px]
                md:text-[23px]
                lg:text-[25px]
              "
            >
              Gentle movement. Greater confidence. Greater living
            </p>

            <p
              className="
                mt-[12px]
                max-w-[630px]
                font-body
                text-[14px]
                leading-[1.7]
                text-body-copy
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
              "
            >
              Senior Yoga is a gentle way to keep your body active, flexible,
              and strong. With mindful breathing and relaxation, it brings
              calmness to the mind and body.
            </p>

            <a
              href="/consultation"
              className="mt-[25px] inline-flex"
            >
              <Button
                className="
                  flex
                  h-[42px]
                  min-w-[310px]
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
                  className="ml-[9px] h-[16px] w-[16px]"
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
          pb-[30px]
          pt-[52px]
          sm:px-8
          sm:pb-[35px]
          sm:pt-[58px]
          lg:px-10
          lg:pb-[38px]
          lg:pt-[65px]
        "
      >

        <div
          className="
            relative
            mx-auto
            max-w-[1130px]
            border-b
            border-border-sage
            pb-[15px]
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
              mt-[20px]
              max-w-[1000px]
              font-body
              text-[13px]
              leading-[1.8]
              text-[#2b3d2d]
              sm:text-[14px]
              lg:text-[15px]
            "
          >
            Our Senior Yoga Program is specially designed for older adults
            to help you move better, feel stronger and live with greater ease.
            Gentle and mindful practices support flexibility, mobility,
            balance, strength and overall well-being.
          </p>

          <p
            className="
              mt-[2px]
              max-w-[950px]
              font-body
              text-[13px]
              font-bold
              leading-[1.8]
              text-body
              sm:text-[14px]
              lg:text-[15px]
            "
          >
            Every class is conducted online, so you can practice comfortably
            and safely from the comfort of your own home. 🌿
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
              lg:h-[140px]
              lg:w-[140px]
            "
          />

        </div>
      </section>



      <section
        className="
          bg-white
          px-6
          pb-[45px]
          pt-[2px]
          sm:px-8
          sm:pb-[55px]
          lg:px-10
          lg:pb-[65px]
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
            What You'll Gain
          </h2>



          <div
            className="
              mt-[28px]
              grid
              grid-cols-2
              gap-[20px]
              lg:grid-cols-4
            "
          >

            {benefits.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="
                  flex
                  min-h-[145px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[10px]
                  border
                  border-[#eee9ca]
                  bg-[#fffef1]
                  px-[15px]
                  py-[20px]
                  text-center
                  shadow-[0_5px_9px_rgba(0,0,0,0.16)]
                  transition-transform
                  duration-200
                  hover:-translate-y-[3px]
                "
              >

                <Icon
                  className="
                    mb-[15px]
                    h-[31px]
                    w-[31px]
                    text-[#76a25b]
                  "
                  strokeWidth={2}
                />

                <p
                  className="
                    max-w-[175px]
                    font-body
                    text-[11px]
                    font-medium
                    leading-[1.5]
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

          <div className="mt-[50px] border-b border-border-sage" />

        </div>
      </section>



      <section
        className="
          bg-white
          px-6
          pb-[48px]
          pt-[0px]
          sm:px-8
          sm:pb-[55px]
          lg:px-10
          lg:pb-[60px]
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
              mt-[28px]
              max-w-[1080px]
              font-body
              text-[13px]
              leading-[1.8]
              text-[#293c2c]
              sm:text-[14px]
              lg:text-[15px]
            "
          >

            <p>
              Ideal for seniors who want to stay active, flexible, strong and
              independent.
            </p>

            <p>
              Whether you are new to yoga or have practiced before, the
              sessions can be adapted to your comfort and ability.
            </p>

            <p className="font-bold">
              Join from home. Move at your pace. Feel the difference. 🌿
            </p>

          </div>

        </div>
      </section>



      <section
        className="
          relative
          min-h-[350px]
          w-full
          overflow-hidden
          bg-[#c9dc91]
          sm:min-h-[390px]
          lg:min-h-[440px]
        "
      >


        <img
          src="/assets/senior-yoga-cta.png"
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
            relative
            z-10
            flex
            min-h-[350px]
            w-full
            items-center
            justify-center
            px-6
            py-[60px]
            text-center
            sm:min-h-[390px]
            lg:min-h-[440px]
          "
        >

          <div className="w-full max-w-[760px]">

            <h2
              className="
                font-heading
                text-[26px]
                font-bold
                uppercase
                leading-[1.15]
                tracking-[-0.015em]
                text-[#527145]
                sm:text-[32px]
                lg:text-[38px]
              "
            >
              Age Gracefully, Live Fully
            </h2>

            <p
              className="
                mx-auto
                mt-[12px]
                max-w-[650px]
                font-body
                text-[13px]
                leading-[1.7]
                text-[#263827]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Discover the power of yoga to improve flexibility, build
              strength, and enhance your well-being at every stage of life.
            </p>

            <a
              href="/join-now"
              className="mt-[30px] inline-flex"
            >
              <Button
                className="
                  flex
                  h-[42px]
                  min-w-[300px]
                  items-center
                  justify-center
                  rounded-[6px]
                  bg-link
                  px-[30px]
                  font-body
                  text-[12px]
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
                  className="ml-[9px] h-[15px] w-[15px]"
                  strokeWidth={2.5}
                />
              </Button>
            </a>

          </div>
        </div>
      </section>


      {!embedded && (
        <>

      <footer className="bg-white">

        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-1
            gap-[40px]
            px-6
            py-[55px]
            sm:px-8
            lg:grid-cols-[1.7fr_0.8fr_0.8fr_1.2fr]
            lg:gap-[55px]
            lg:px-10
            lg:py-[65px]
          "
        >


          <div className="text-center lg:text-left">

            <img
              src="/assets/logo.png"
              alt="Yoga For Life"
              className="
                mx-auto
                h-[105px]
                w-auto
                object-contain
                lg:mx-0
              "
            />

            <div
              className="
                mt-[8px]
                flex
                items-center
                justify-center
                gap-[10px]
                text-[9px]
                font-bold
                tracking-[0.05em]
                text-heading
                lg:justify-start
              "
            >
              <span>━━</span>
              <span>YOGA FOR LIFE - BALANCE. BREATHE. BLOOM.</span>
              <span>━━</span>
            </div>

            <p
              className="
                mx-auto
                mt-[15px]
                max-w-[320px]
                font-body
                text-[12px]
                leading-[1.7]
                text-heading
                lg:mx-0
              "
            >
              Helping you build strength, balance, and inner peace through
              authentic yoga.
            </p>

          </div>



          <div>

            <h3
              className="
                font-heading
                text-[12px]
                font-bold
                uppercase
                text-heading
              "
            >
              Quick Links
            </h3>

            <div className="mt-[18px] flex flex-col gap-[11px]">

              <a
                href="/"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Home
              </a>

              <a
                href="/about"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                About
              </a>

              <a
                href="/testimonials"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Testimonials
              </a>

              <a
                href="/contact"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Contact
              </a>

              <a
                href="/join-now"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Join Now
              </a>

            </div>

          </div>



          <div>

            <h3
              className="
                font-heading
                text-[12px]
                font-bold
                uppercase
                text-heading
              "
            >
              Programs
            </h3>

            <div className="mt-[18px] flex flex-col gap-[11px]">

              <a
                href="/program/weight-loss"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Weight Loss
              </a>

              <a
                href="/program/prenatal"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Prenatal
              </a>

              <a
                href="/program/postnatal"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Postnatal
              </a>

              <a
                href="/program/general-yoga"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                General yoga
              </a>

              <a
                href="/program/senior-yoga"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Senior yoga
              </a>

              <a
                href="/program/private-sessions"
                className="font-body text-[12px] text-heading hover:text-link"
              >
                Private sessions
              </a>

            </div>

          </div>



          <div>

            <h3
              className="
                font-heading
                text-[12px]
                font-bold
                uppercase
                text-heading
              "
            >
              Contact
            </h3>

            <div className="mt-[18px] flex flex-col gap-[14px]">

              <div className="flex items-start gap-[10px]">

                <MapPin
                  className="mt-[2px] h-[14px] w-[14px] shrink-0 text-link"
                  strokeWidth={2}
                />

                <span className="font-body text-[12px] leading-[1.4] text-heading">
                  Hosur , Tamil Nadu
                </span>

              </div>


              <div className="flex items-start gap-[10px]">

                <Phone
                  className="mt-[2px] h-[14px] w-[14px] shrink-0 text-link"
                  strokeWidth={2}
                />

                <span className="font-body text-[12px] leading-[1.5] text-heading">
                  +91 8870461152
                  <br />
                  +91 9876044683
                </span>

              </div>


              <div className="flex items-center gap-[10px]">

                <Mail
                  className="h-[14px] w-[14px] shrink-0 text-link"
                  strokeWidth={2}
                />

                <a
                  href="mailto:hello@yogaforlife.com"
                  className="font-body text-[12px] text-heading"
                >
                  hello@yogaforlife.com
                </a>

              </div>


              <div className="flex items-center gap-[10px]">

                <Camera
                  className="h-[14px] w-[14px] shrink-0 text-link"
                  strokeWidth={2}
                />

                <span className="font-body text-[12px] text-heading">
                  yogaforlifeyf
                </span>

              </div>


              <div className="flex items-center gap-[10px]">

                <Clock3
                  className="h-[14px] w-[14px] shrink-0 text-link"
                  strokeWidth={2}
                />

                <span className="font-body text-[12px] text-heading">
                  Mon–Sat
                </span>

              </div>

            </div>

          </div>

        </div>



        <div
          className="
            border-t
            border-[#e1e7dc]
            px-6
            py-[20px]
            text-center
          "
        >
          <p
            className="
              font-body
              text-[10px]
              text-heading
              sm:text-[11px]
            "
          >
            © Creaviatechnologies.com All Rights Reserved.
            Privacy Policy • Terms & Conditions
          </p>
        </div>

      </footer>
        </>
      )}

    </main>
  );
}