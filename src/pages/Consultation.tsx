import { Button } from "../components/ui/Button";
import { Phone, Flower2 } from "lucide-react";

export function Consultation() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <section className="relative w-full h-[420px] md:h-[430px] lg:h-[440px] overflow-hidden">
      
        <img
          src="/assets/ChatGPT Image Aug 28, 2026, 05_01_17 PM 1.png"
          alt="Yoga for Life"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#e7d79c]/85 via-[#e7d79c]/55 to-transparent" />
        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="h-full flex items-center">
            <div className="w-full lg:w-[53%] pt-4">
              <h1
                className="
                  font-heading
                  text-[#17351d]
                  font-semibold
                  leading-[1.08]
                  text-[38px]
                  sm:text-[46px]
                  md:text-[52px]
                  lg:text-[54px]
                  max-w-[560px]
                "
              >
                Let's Find the Right Yoga Journey for You
              </h1>

              <p
                className="
                  mt-5
                  font-body
                  text-[#233821]
                  text-base
                  md:text-[17px]
                  leading-[1.55]
                  max-w-[530px]
                "
              >
                Not sure where to begin? Talk to our yoga experts and discover
                a practice that fits your goals, lifestyle, and experience
                level.
              </p>

              <div className="mt-7">
                <a href="#consultation-form">
                  <Button
                    className="
                      h-[54px]
                      min-w-[310px]
                      px-8
                      bg-[#7da65c]
                      hover:bg-[#6e9650]
                      text-white
                      text-[15px]
                      font-bold
                      rounded-[7px]
                      shadow-md
                    "
                  >
                    COMPLETE REGISTRATION&nbsp; →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="consultation-form"
        className="w-full bg-white py-[68px] md:py-[72px] lg:py-[78px] px-6"
      >
        <div className="max-w-[865px] mx-auto">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1fr_270px]
              border
              border-[#c7cfc0]
              rounded-[8px]
              overflow-hidden
              bg-white
            "
          >
           
            <div className="px-8 py-9 md:px-10 md:py-10 lg:px-10 lg:py-11">
              <h2
                className="
                  font-heading
                  text-[#6d9455]
                  font-bold
                  text-[27px]
                  md:text-[29px]
                  leading-tight
                  mb-2
                "
              >
                BOOK YOUR FREE CONSULTATION
              </h2>

              <p
                className="
                  font-body
                  text-[#273624]
                  text-[15px]
                  md:text-[16px]
                  leading-[1.65]
                  max-w-[560px]
                  mb-7
                "
              >
                Find out the form below and our team will get in touch with you
                to schedule your free consultation
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full"
              >
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="
                      h-[60px]
                      w-full
                      px-4
                      rounded-[8px]
                      border
                      border-[#d5d9d2]
                      bg-white
                      font-body
                      text-[14px]
                      text-[#273624]
                      placeholder:text-[#273624]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#7da65c]
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="
                      h-[60px]
                      w-full
                      px-4
                      rounded-[8px]
                      border
                      border-[#d5d9d2]
                      bg-white
                      font-body
                      text-[14px]
                      text-[#273624]
                      placeholder:text-[#273624]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#7da65c]
                    "
                  />
                </div>

            
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="
                      h-[60px]
                      w-full
                      px-4
                      rounded-[8px]
                      border
                      border-[#d5d9d2]
                      bg-white
                      font-body
                      text-[14px]
                      text-[#273624]
                      placeholder:text-[#273624]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#7da65c]
                    "
                  />

                  <input
                    type="date"
                    className="
                      h-[60px]
                      w-full
                      px-4
                      rounded-[8px]
                      border
                      border-[#d5d9d2]
                      bg-white
                      font-body
                      text-[14px]
                      text-[#273624]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#7da65c]
                    "
                  />
                </div>

        
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <select
                    className="
                      h-[60px]
                      w-full
                      px-4
                      rounded-[8px]
                      border
                      border-[#d5d9d2]
                      bg-white
                      font-body
                      text-[14px]
                      text-[#273624]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#7da65c]
                    "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Preferred Time? *
                    </option>
                    <option value="6-8am">6:00 AM - 8:00 AM</option>
                    <option value="9-11am">9:00 AM - 11:00 AM</option>
                    <option value="12-2pm">12:00 PM - 2:00 PM</option>
                    <option value="3-5pm">3:00 PM - 5:00 PM</option>
                    <option value="6-8pm">6:00 PM - 8:00 PM</option>
                  </select>

                  <select
                    className="
                      h-[60px]
                      w-full
                      px-4
                      rounded-[8px]
                      border
                      border-[#d5d9d2]
                      bg-white
                      font-body
                      text-[14px]
                      text-[#273624]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#7da65c]
                    "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      How Did You Hear About Us *
                    </option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend Referral</option>
                    <option value="ad">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <select
                  className="
                    h-[60px]
                    w-full
                    px-4
                    mb-3
                    rounded-[8px]
                    border
                    border-[#d5d9d2]
                    bg-white
                    font-body
                    text-[14px]
                    text-[#273624]
                    focus:outline-none
                    focus:ring-1
                    focus:ring-[#7da65c]
                  "
                  defaultValue=""
                >
                  <option value="" disabled>
                    What Would You Like Help With? *
                  </option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="prenatal">Prenatal Yoga</option>
                  <option value="postnatal">Postnatal Yoga</option>
                  <option value="strength">Strength & Toning</option>
                  <option value="general">General Wellness</option>
                  <option value="other">Other</option>
                </select>

                {/* Message */}
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="
                    w-full
                    h-[115px]
                    px-4
                    py-4
                    mb-4
                    rounded-[8px]
                    border
                    border-[#d5d9d2]
                    bg-white
                    font-body
                    text-[14px]
                    text-[#273624]
                    placeholder:text-[#273624]
                    resize-none
                    focus:outline-none
                    focus:ring-1
                    focus:ring-[#7da65c]
                  "
                />

                <div className="flex items-center gap-3 mb-5">
                  <input
                    type="checkbox"
                    id="terms"
                    className="
                      w-[39px]
                      h-[39px]
                      rounded-[7px]
                      border
                      border-[#d5d9d2]
                      accent-[#7da65c]
                      cursor-pointer
                      shrink-0
                    "
                  />

                  <label
                    htmlFor="terms"
                    className="
                      font-body
                      text-[13px]
                      md:text-[14px]
                      text-[#273624]
                      leading-[1.5]
                    "
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#7da65c] hover:underline"
                    >
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#7da65c] hover:underline"
                    >
                      terms & conditions.
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    h-[55px]
                    bg-[#7da65c]
                    hover:bg-[#6e9650]
                    text-white
                    font-body
                    font-bold
                    text-[15px]
                    rounded-[7px]
                    shadow-md
                    transition-colors
                  "
                >
                  BOOK A FREE CONSULTATION&nbsp; →
                </button>
              </form>
            </div>

     
            <aside className="bg-[#e5eddd] border-l border-[#c7cfc0] px-7 py-9">
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="/assets/ChatGPT Image Aug 28, 2026, 04_56_39 PM 1.png"
                  alt="Yoga for Life"
                  className="
                    w-[170px]
                    h-[220px]
                    object-cover
                    rounded-[9px]
                    shadow-md
                  "
                />
              </div>

              <div className="mt-[82px] space-y-6">
                {[
                  "Journey With Us.",
                  "YFL Stories",
                  "Program Overview",
                  "Q&A Session",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="flex items-center gap-4 w-full text-left"
                  >
                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-[38px]
                        h-[38px]
                        rounded-full
                        bg-[#c5ddb4]
                        shrink-0
                      "
                    >
                      <Flower2
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#7da65c]"
                      />
                    </span>

                    <span
                      className="
                        font-body
                        text-[14px]
                        text-[#273624]
                      "
                    >
                      {item}
                    </span>
                  </button>
                ))}
              </div>

              
              <div className="mt-[42px]">
                <p
                  className="
                    font-body
                    text-[13px]
                    font-semibold
                    text-[#273624]
                    mb-6
                  "
                >
                  Need immediate assistance?
                </p>

                <p
                  className="
                    font-body
                    text-[13px]
                    text-[#273624]
                    mb-4
                  "
                >
                  Call or WhatsApp us
                </p>

                <a
                  href="tel:+918870461152"
                  className="
                    flex
                    items-center
                    gap-2
                    font-body
                    text-[14px]
                    font-semibold
                    text-[#7da65c]
                    hover:text-[#6e9650]
                  "
                >
                  <Phone size={16} />
                  +91 8870461152
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}