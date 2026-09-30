import { Button } from "../components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <section
        className="
          relative
          w-full
          h-[380px]
          sm:h-[710px]
          lg:h-[672px]
          overflow-hidden
        "
      >
        <img
          src="/assets/hero-yoga-studio.png"
          alt="Yoga studio"
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
            from-[#f4e9c8]/95
            via-[#f4e9c8]/75
            to-transparent
          "
        />

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
            px-8
            sm:px-10
            lg:px-12
            xl:px-16
          "
        >
          <div className="w-full max-w-[620px]">
            <h1
              className="
                font-heading
                text-[#304333]
                font-bold
                text-[360px]
                leading-[1.08]
                tracking-[-0.025em]
                sm:text-[430px]
                lg:text-[90px]
              "
            >
              Let's Begin Your Wellness
              <br />
              Journey Together.
            </h1>

            <p
              className="
                mt-4
                max-w-[550px]
                font-body
                text-[#263a29]
                text-[14px]
                leading-[1.65]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Have questions about our yoga classes or programs. We're here to
              help. Contact us today and take the first step toward a healthier,
              more balanced life!
            </p>

            <a href="#contact-form" className="inline-block">
              <Button
                className="
                  mt-5
                  h-[42px]
                  min-w-[285px]
                  rounded-[7px]
                  text-[13px]
                  font-bold
                  tracking-wide
                  shadow-[0_4px_10px_rgba(70,90,50,0.18)]
                "
              >
                GET IN TOUCH →
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="
          w-full
          bg-white
          px-6
          py-16
          sm:px-8
          sm:py-18
          lg:px-10
          lg:py-[76px]
        "
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:pr-[38px]">
              <span
                className="
                  block
                  font-body
                  text-[11px]
                  font-bold
                  tracking-[0.08em]
                  text-[#668c52]
                "
              >
                WE'RE HERE TO HELP
              </span>

              <h2
                className="
                  mt-2
                  font-heading
                  text-[#4e7044]
                  text-[26px]
                  font-bold
                  leading-tight
                  sm:text-[28px]
                "
              >
                Contact Information
              </h2>

              <p
                className="
                  mt-3
                  max-w-[500px]
                  font-body
                  text-[#384736]
                  text-[13px]
                  leading-[1.75]
                  sm:text-[14px]
                "
              >
                Have a question or need guidance? Connect with our team using
                any of the methods below, and we'll get back to you as soon as
                possible.
              </p>

              <div className="mt-8 space-y-4">
                <div
                  className="
                    flex
                    min-h-[72px]
                    items-center
                    gap-4
                    rounded-[8px]
                    border
                    border-border-soft
                    bg-surface-soft
                    px-4
                    py-3
                  "
                >
                  <div
                    className="
                      flex
                      h-[45px]
                      w-[45px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-surface-sage
                    "
                  >
                    <MapPin
                      size={21}
                      strokeWidth={2}
                      className="text-accent"
                    />
                  </div>

                  <div>
                    <h4
                      className="
                        font-body
                        text-[12px]
                        font-semibold
                        text-body-deep
                      "
                    >
                      Visit Us
                    </h4>

                    <p
                      className="
                        mt-1
                        font-body
                        text-[11px]
                        leading-[1.45]
                        text-muted
                      "
                    >
                      Hosur, Krishnagiri, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    min-h-[72px]
                    items-center
                    gap-4
                    rounded-[8px]
                    border
                    border-border-soft
                    bg-surface-soft
                    px-4
                    py-3
                  "
                >
                  <div
                    className="
                      flex
                      h-[45px]
                      w-[45px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-surface-sage
                    "
                  >
                    <Phone
                      size={21}
                      strokeWidth={2}
                      className="text-accent"
                    />
                  </div>

                  <div>
                    <h4
                      className="
                        font-body
                        text-[12px]
                        font-semibold
                        text-body-deep
                      "
                    >
                      Call Us
                    </h4>

                    <p
                      className="
                        mt-1
                        font-body
                        text-[11px]
                        leading-[1.5]
                        text-muted
                      "
                    >
                      +91 8870461152
                      <br />
                      +91 9976044683
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    min-h-[72px]
                    items-center
                    gap-4
                    rounded-[8px]
                    border
                    border-border-soft
                    bg-surface-soft
                    px-4
                    py-3
                  "
                >
                  <div
                    className="
                      flex
                      h-[45px]
                      w-[45px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-surface-sage
                    "
                  >
                    <Mail
                      size={21}
                      strokeWidth={2}
                      className="text-accent"
                    />
                  </div>

                  <div>
                    <h4
                      className="
                        font-body
                        text-[12px]
                        font-semibold
                        text-body-deep
                      "
                    >
                      Email Us
                    </h4>

                    <p
                      className="
                        mt-1
                        font-body
                        text-[11px]
                        text-muted
                      "
                    >
                      hello@yogaforlife.com
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    min-h-[72px]
                    items-center
                    gap-4
                    rounded-[8px]
                    border
                    border-border-soft
                    bg-surface-soft
                    px-4
                    py-3
                  "
                >
                  <div
                    className="
                      flex
                      h-[45px]
                      w-[45px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-surface-sage
                    "
                  >
                    <Clock
                      size={21}
                      strokeWidth={2}
                      className="text-accent"
                    />
                  </div>

                  <div>
                    <h4
                      className="
                        font-body
                        text-[12px]
                        font-semibold
                        text-body-deep
                      "
                    >
                      Working Days
                    </h4>

                    <p
                      className="
                        mt-1
                        font-body
                        text-[11px]
                        leading-[1.5]
                        text-muted
                      "
                    >
                      Mon–Sat
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
                hidden
                lg:block
                w-px
                self-stretch
                bg-[#b8cda9]
                mx-[18px]
              "
            />

            <div
              className="
                mt-14
                w-full
                lg:mt-0
                lg:w-1/2
                lg:pl-[38px]
              "
            >
              <span
                className="
                  block
                  font-body
                  text-[11px]
                  font-bold
                  tracking-[0.08em]
                  text-[#668c52]
                "
              >
                SEND US A MESSAGE
              </span>

              <h2
                className="
                  mt-2
                  font-heading
                  text-[#4e7044]
                  text-[26px]
                  font-bold
                  leading-tight
                  sm:text-[28px]
                "
              >
                Message Your Information
              </h2>

              <p
                className="
                  mt-3
                  font-body
                  text-[#384736]
                  text-[13px]
                  leading-[1.75]
                  sm:text-[14px]
                "
              >
                Fill out the form below, and our team will get back to you
                shortly.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 w-full"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="
                      h-[43px]
                      w-full
                      rounded-[7px]
                      border
                      border-border-soft
                      bg-surface-soft
                      px-4
                      font-body
                      text-[11px]
                      text-body-deep
                      placeholder:text-muted
                      focus:border-accent
                      focus:outline-none
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="
                      h-[43px]
                      w-full
                      rounded-[7px]
                      border
                      border-border-soft
                      bg-surface-soft
                      px-4
                      font-body
                      text-[11px]
                      text-body-deep
                      placeholder:text-muted
                      focus:border-accent
                      focus:outline-none
                    "
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="
                    mt-4
                    h-[43px]
                    w-full
                    rounded-[7px]
                    border
                    border-border-soft
                    bg-surface-soft
                    px-4
                    font-body
                    text-[11px]
                    text-body-deep
                    placeholder:text-muted
                    focus:border-accent
                    focus:outline-none
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="
                    mt-4
                    h-[43px]
                    w-full
                    rounded-[7px]
                    border
                    border-border-soft
                    bg-surface-soft
                    px-4
                    font-body
                    text-[11px]
                    text-body-deep
                    placeholder:text-muted
                    focus:border-accent
                    focus:outline-none
                  "
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="
                    mt-4
                    min-h-[94px]
                    w-full
                    resize-none
                    rounded-[7px]
                    border
                    border-border-soft
                    bg-surface-soft
                    px-4
                    py-3
                    font-body
                    text-[11px]
                    text-body-deep
                    placeholder:text-muted
                    focus:border-accent
                    focus:outline-none
                  "
                />

                <Button
                  type="submit"
                  className="
                    mt-5
                    h-[40px]
                    w-full
                    rounded-[6px]
                    text-[14px]
                    font-bold
                    tracking-wide
                    shadow-[0_4px_9px_rgba(70,90,50,0.20)]
                  "
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
          relative
          min-h-[330px]
          w-full
          overflow-hidden
          sm:min-h-[360px]
          lg:min-h-[395px]
        "
      >
        <img
          src="/assets/Untitled design (3) 1.png"
          alt=""
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
            bg-white/55
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
            py-14
            text-center
            sm:min-h-[360px]
            lg:min-h-[395px]
          "
        >
          <div className="w-full max-w-[760px]">
            <p
              className="
                font-body
                text-[11px]
                font-bold
                tracking-[0.08em]
                text-[#1f321f]
                sm:text-[12px]
              "
            >
              READY TO CONNECT?
            </p>

            <h2
              className="
                mt-5
                font-heading
                text-[25px]
                font-bold
                leading-[1.15]
                text-[#62834e]
                sm:text-[31px]
                lg:text-[34px]
              "
            >
              TAKE THE FIRST STEP TOWARDS
              <br />
              BETTER HEALTH
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[620px]
                font-body
                text-[14px]
                leading-[1.65]
                text-body-deep
                sm:text-[15px]
              "
            >
              We're here to help you find the right practice for your needs.
              Connect with us and take the first step towards a healthier,
              stronger, and more balanced you.
            </p>

            <p
              className="
                mt-5
                font-body
                text-[12px]
                font-semibold
                text-[#243523]
                sm:text-[13px]
              "
            >
              Online Yoga • Personal Guidance • Practice From Anywhere
            </p>

            <a href="/join-now" className="inline-block">
              <Button
                className="
                  mt-6
                  h-[42px]
                  min-w-[285px]
                  rounded-[6px]
                  text-[12px]
                  font-bold
                  tracking-[0.07em]
                  shadow-[0_4px_10px_rgba(70,90,50,0.22)]
                "
              >
                START YOUR JOURNEY →
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}