import { Button } from "../components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="w-full bg-white">
      <section className="w-full bg-bg-cream relative overflow-hidden min-h-[550px] md:min-h-[700px]">
        <img
          src="/assets/hero-yoga-studio.png"
          alt="Yoga studio"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-100 bg-white/30" />

        <div className="relative z-10 w-full h-full flex items-center">
          <div className="w-full max-w-[650px] px-8 sm:px-12 lg:px-16 xl:px-24">
            <h1 className="font-heading text-primary-dark font-bold leading-[1.1] text-[52px] sm:text-[64px] lg:text-[72px] xl:text-[80px] mb-8">
              Let's Begin Your Wellness Journey Together.
            </h1>

            <p className="font-body text-text-dark text-base sm:text-lg lg:text-[18px] leading-[1.6] max-w-[620px] mb-10">
              Have questions about our yoga classes, programs, or memberships?
              We're here to help. Contact us today and take the first step
              toward a healthier, more balanced life!
            </p>

            <a href="#contact-form">
              <Button className="min-w-[280px] h-14 text-base">
                GET IN TOUCH
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="w-full bg-white py-16 md:py-20 lg:py-24 px-6 sm:px-10 lg:px-12"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-16">
              <span className="block font-body text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-accent-green mb-4">
                WE'RE HERE TO HELP
              </span>

              <h2 className="font-heading text-primary-dark font-bold text-[30px] sm:text-[34px] lg:text-[38px] leading-tight mb-5">
                Contact Information
              </h2>

              <p className="font-body text-text-muted text-[15px] sm:text-[16px] leading-[1.7] max-w-[520px] mb-8">
                Have a question or need guidance? Connect with our team using
                any of the methods below, and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-border-soft bg-bg-cream/60">
                  <div className="w-11 h-11 rounded-full bg-accent-light/30 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent-green" />
                  </div>

                  <div>
                    <h4 className="font-body text-sm font-semibold text-primary-dark mb-1">
                      Visit Us
                    </h4>

                    <p className="font-body text-xs sm:text-[13px] text-text-muted leading-[1.4]">
                      123 Wellness Street,
                      <br />
                      Chennai, Tamil Nadu 600001
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-border-soft bg-bg-cream/60">
                  <div className="w-11 h-11 rounded-full bg-accent-light/30 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent-green" />
                  </div>

                  <div>
                    <h4 className="font-body text-sm font-semibold text-primary-dark mb-1">
                      Call Us
                    </h4>

                    <p className="font-body text-xs sm:text-[13px] text-text-muted">
                      +91 8870461152
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-border-soft bg-bg-cream/60">
                  <div className="w-11 h-11 rounded-full bg-accent-light/30 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent-green" />
                  </div>

                  <div>
                    <h4 className="font-body text-sm font-semibold text-primary-dark mb-1">
                      Email Us
                    </h4>

                    <p className="font-body text-xs sm:text-[13px] text-text-muted">
                      hello@yogaforlife.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-border-soft bg-bg-cream/60">
                  <div className="w-11 h-11 rounded-full bg-accent-light/30 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-accent-green" />
                  </div>

                  <div>
                    <h4 className="font-body text-sm font-semibold text-primary-dark mb-1">
                      Working Hours
                    </h4>

                    <p className="font-body text-xs sm:text-[13px] text-text-muted leading-[1.4]">
                      Mon–Sat: 6:00 AM–8:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-px bg-[#cdd8c5] self-stretch mx-4 xl:mx-8" />

            <div className="w-full lg:w-1/2 mt-14 lg:mt-0 lg:pl-8 xl:pl-10">
              <span className="block font-body text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-accent-green mb-4">
                SEND US A MESSAGE
              </span>

              <h2 className="font-heading text-primary-dark font-bold text-[30px] sm:text-[34px] lg:text-[38px] leading-tight mb-5">
                Message Your Information
              </h2>

              <p className="font-body text-text-muted text-[15px] sm:text-[16px] leading-[1.7] mb-8">
                Fill out the form below, and our team will get back to you
                shortly.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="sr-only">Full Name</label>

                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="
                        w-full
                        h-[42px]
                        px-4
                        rounded-lg
                        bg-bg-cream/60
                        border
                        border-border-soft
                        font-body
                        text-sm
                        text-text-dark
                        placeholder:text-text-muted
                        focus:outline-none
                        focus:border-accent-green
                      "
                    />
                  </div>

                  <div>
                    <label className="sr-only">Email Address</label>

                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="
                        w-full
                        h-[42px]
                        px-4
                        rounded-lg
                        bg-bg-cream/60
                        border
                        border-border-soft
                        font-body
                        text-sm
                        text-text-dark
                        placeholder:text-text-muted
                        focus:outline-none
                        focus:border-accent-green
                      "
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="sr-only">Phone Number</label>

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="
                      w-full
                      h-[42px]
                      px-4
                      rounded-lg
                      bg-bg-cream/60
                      border
                      border-border-soft
                      font-body
                      text-sm
                      text-text-dark
                      placeholder:text-text-muted
                      focus:outline-none
                      focus:border-accent-green
                    "
                  />
                </div>

                <div className="mb-4">
                  <label className="sr-only">Subject</label>

                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="
                      w-full
                      h-[42px]
                      px-4
                      rounded-lg
                      bg-bg-cream/60
                      border
                      border-border-soft
                      font-body
                      text-sm
                      text-text-dark
                      placeholder:text-text-muted
                      focus:outline-none
                      focus:border-accent-green
                    "
                  />
                </div>

                <div className="mb-5">
                  <label className="sr-only">Your Message</label>

                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="
                      w-full
                      min-h-[120px]
                      px-4
                      py-3
                      rounded-lg
                      bg-bg-cream/60
                      border
                      border-border-soft
                      font-body
                      text-sm
                      text-text-dark
                      placeholder:text-text-muted
                      focus:outline-none
                      focus:border-accent-green
                      resize-none
                    "
                  />
                </div>

                <Button type="submit" className="w-full h-[48px]">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 sm:px-10 lg:px-12 pb-16 md:pb-20">
        <div className="max-w-[1240px] mx-auto">
          <div
            className="
              flex
              flex-col
              md:flex-row
              rounded-2xl
              overflow-hidden
              border
              border-border-soft
              bg-bg-cream/60
            "
          >
            <div className="w-full md:w-[44%] lg:w-[46%] px-8 sm:px-10 lg:px-12 py-10 md:py-12 flex items-center">
              <div>
                <span className="block font-body text-[11px] font-bold tracking-[0.2em] text-accent-green mb-4">
                  FIND US
                </span>

                <h2 className="font-heading text-primary-dark font-bold text-[30px] sm:text-[34px] leading-tight mb-5">
                  Visit Our Studio
                </h2>

                <p className="font-body text-text-muted text-[14px] sm:text-[15px] leading-[1.6] max-w-[390px] mb-7">
                  Experience Yoga for Life in a peaceful and welcoming
                  environment. We look forward to meeting you
                </p>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="text-accent-green shrink-0 mt-0.5"
                  />

                  <p className="font-body text-text-dark text-xs sm:text-[13px] leading-[1.5]">
                    123 Wellness Street,
                    <br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[56%] lg:w-[54%] h-[300px] md:h-[300px] lg:h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yoga for Life location"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden min-h-[340px] md:min-h-[380px]">
        <img
          src="/assets/Untitled design (3) 1.png"
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        <div className="absolute inset-100 bg-white/65" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-16 md:py-20">
          <div className="max-w-[620px]">
            <span className="block font-body text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-primary-dark mb-5">
              READY TO CONNECT?
            </span>

            <h2 className="font-heading text-primary-dark font-bold text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1] mb-6">
              TAKE THE FIRST STEP TOWARD
              <br />
              BETTER HEALTH
            </h2>

            <p className="font-body text-text-dark text-[15px] sm:text-[17px] leading-[1.6] max-w-[570px] mb-8">
              Join Yoga for Life and let our expert instructors guide you on a
              personalized journey to strength, balance, and well-being.
            </p>

            <a href="/join-now">
              <Button className="min-w-[205px]">START YOUR JOURNEY →</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
