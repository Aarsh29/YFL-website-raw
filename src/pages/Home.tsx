import { Link } from "react-router-dom";
import {
  Users,
  Trophy,
  Accessibility,
  HeartHandshake,
  Phone,
  Mail,
} from "lucide-react";

import { Button } from "../components/ui/Button";
import { ProgramCard } from "../components/ui/ProgramCard";
import { StepCard } from "../components/ui/StepCard";
import { TestimonialGrid } from "../components/ui/TestimonialGrid";
import { PricingCard } from "../components/ui/PricingCard";

export function Home() {
  const stats = [
    {
      value: "1K",
      label: "Student's Everyday",
      icon: Users,
    },
    {
      value: "7+",
      label: "Award Winnings",
      icon: Trophy,
    },
    {
      value: "4+",
      label: "Years of Experience",
      icon: Accessibility,
    },
    {
      value: "100+",
      label: "Happy Clients",
      icon: HeartHandshake,
    },
  ];

  const whyChooseUs = [
    {
      icon: "/assets/Users.png",
      text: "Guided by certified instructors committed to your wellness journey.",
    },
    {
      icon: "/assets/Friends.png",
      text: "Join a welcoming community that motivates & supports you.",
    },
    {
      icon: "/assets/Handmade.png",
      text: "Personalized yoga sessions designed for every fitness level.",
    },
    {
      icon: "/assets/Time Span.png",
      text: "Flexible class timings that fit into your daily lifestyle.",
    },
    {
      icon: "/assets/Meditation.png",
      text: "Improve physical strength, mental clarity, and inner balance.",
    },
    {
      icon: "/assets/Trust.png",
      text: "Experience authentic yoga rooted in tradition and mindfulness.",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#F4F7EF]">
      <section className="relative min-h-[430px] md:min-h-[500px] lg:min-h-[520px] flex items-center overflow-hidden bg-[#F4F7EF]">
        <div className="absolute inset-0">
          <img
            src="/assets/yfl 1.png"
            alt="Yoga for Life"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#F4F0DF]
              via-[#F4F0DF]/95
              via-[55%]
              to-transparent
            "
          />
        </div>

        <div
          className="
            relative
            z-10
            w-full
            max-w-[1320px]
            mx-auto
            px-6
            md:px-10
            py-16
            lg:py-20
          "
        >
          <div className="max-w-[560px]">
            <span
              className="
                font-body
                text-[10px]
                md:text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#6A8A4A]
                mb-5
                block
              "
            >
              ⟵ YOGA FOR LIFE · BALANCE. BREATHE. BLOOM. ⟶
            </span>

            <h1
              className="
                font-heading
                text-[3.5rem]
                sm:text-[4.5rem]
                md:text-[5rem]
                lg:text-[5.5rem]
                font-bold
                leading-[0.95]
                mb-6
              "
            >
              <span className="block text-[#26351D]">Find Balance.</span>

              <span className="block text-[#7FA55D]">Live Better.</span>
            </h1>

            <p
              className="
                font-body
                text-[#4D5844]
                text-sm
                md:text-base
                leading-relaxed
                mb-7
                max-w-[470px]
              "
            >
              Experience authentic yoga practices that strengthen your body,
              calm your mind, and inspire a healthier, more mindful way of life.
            </p>

            <Link to="/join-now">
              <Button
                className="
                  bg-[#7FA55D]
                  hover:bg-[#6D914D]
                  text-white
                  rounded-md
                  px-8
                  py-3
                  font-body
                  font-bold
                  text-xs
                  tracking-wide
                  shadow-md
                "
              >
                START YOUR JOURNEY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F8FAF2] border-y border-[#E8EEDD]">
        <div
          className="
            relative
            max-w-[1180px]
            mx-auto
            px-8
            md:px-12
            py-7
            md:py-8
          "
        >
          <img
            src="/assets/flag (1) 2.png"
            alt=""
            aria-hidden="true"
            className="
              absolute
              left-[-12px]
              md:left-[-35px]
              bottom-[-2px]
              w-[95px]
              md:w-[125px]
              lg:w-[145px]
              h-auto
              object-contain
              opacity-100
              pointer-events-none
              select-none
              z-20
            "
          />

          <img
            src="/assets/flag (1) 3.png"
            alt=""
            aria-hidden="true"
            className="
              absolute
              right-[-15px]
              md:right-[-35px]
              bottom-[-3px]
              w-[90px]
              md:w-[120px]
              lg:w-[140px]
              h-auto
              object-contain
              opacity-100
              pointer-events-none
              select-none
              z-20
            "
          />

          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className={`
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    min-h-[120px]
                    px-4
                    ${index !== 0 ? "border-l border-[#DDE5D2]" : ""}
                  `}
                >
                  <Icon
                    strokeWidth={2}
                    className="
                      w-9
                      h-9
                      md:w-10
                      md:h-10
                      text-[#7BA258]
                      mb-2
                    "
                  />

                  <div
                    className="
                      font-heading
                      text-[2.3rem]
                      md:text-[2.8rem]
                      leading-none
                      text-[#7BA258]
                      font-normal
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      font-body
                      text-[10px]
                      md:text-[12px]
                      text-[#26351D]
                      mt-2
                      whitespace-nowrap
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-6 md:px-10 bg-[#F4F7EF]">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span
              className="
                font-body
                text-[10px]
                md:text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#6A8A4A]
                mb-3
                block
              "
            >
              OUR FITNESS GOALS
            </span>

            <p
              className="
                font-body
                text-[#4A5740]
                text-xs
                md:text-sm
                leading-relaxed
                mb-3
              "
            >
              Helping you build a healthier body, a calmer mind, and a more
              balanced life through personalized yoga programs for every stage
              of your wellness journey.
            </p>

            <h2
              className="
                font-heading
                text-2xl
                md:text-3xl
                text-[#5E774C]
                font-bold
              "
            >
              Helping You Build a Healthier Life
            </h2>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
              md:gap-5
            "
          >
            <ProgramCard
              title="Weight loss yoga"
              description="A structured program combining movement and mindful eating guidance to help you reach your goals sustainably."
              image="/assets/image 4.png"
            />

            <ProgramCard
              title="Prenatal yoga"
              description="Build strength for labor, ease pregnancy discomforts, and connect with your baby through breath and movement."
              image="/assets/image 2.png"
            />

            <ProgramCard
              title="Postnatal yoga"
              description="Gentle core and pelvic floor recovery designed for the postpartum body."
              image="/assets/image 1.png"
            />

            <ProgramCard
              title="Strength & Toning"
              description="Enhance muscle tone, increase flexibility, and move with greater confidence."
              image="/assets/image 3.png"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-6 md:px-10 bg-white">
        <div
          className="
            max-w-[1180px]
            mx-auto
            flex
            flex-col
            lg:flex-row
            gap-10
            lg:gap-14
            items-center
          "
        >
          <div className="lg:w-[42%]">
            <span
              className="
                font-body
                text-[10px]
                md:text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#6A8A4A]
                mb-3
                block
              "
            >
              WHY CHOOSE YOGA FOR LIFE?
            </span>

            <h2
              className="
                font-heading
                text-2xl
                md:text-3xl
                text-[#5E774C]
                font-bold
                leading-tight
                mb-4
              "
            >
              Empowering
              <br />
              Every Step of Your Wellness Journey
            </h2>

            <p
              className="
                font-body
                text-[#4B5742]
                text-xs
                md:text-sm
                leading-relaxed
                mb-5
                max-w-[460px]
              "
            >
              At Yoga for Life, we believe wellness begins with balance. Our
              experienced instructors and personalized yoga programs help you
              build strength, improve flexibility, reduce stress, and embrace a
              healthier lifestyle.
            </p>

            <Link to="/about">
              <Button
                variant="outline-light"
                className="
                  text-[#6A8A4A]
                  border-[#7FA55D]
                  text-xs
                  px-6
                  py-2
                "
              >
                LEARN MORE
              </Button>
            </Link>
          </div>

          <div
            className="
              lg:w-[58%]
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
              w-full
            "
          >
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  md:p-4
                  rounded-lg
                  border
                  border-[#DCE5D3]
                  bg-[#F9FBF6]
                "
              >
                <div
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#EAF1E0]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-5 h-5 object-contain"
                  />
                </div>

                <p
                  className="
                    font-body
                    text-[10px]
                    md:text-[11px]
                    text-[#38442F]
                    leading-relaxed
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="
          relative
          overflow-hidden
          py-14
          md:py-20
          px-6
          md:px-10
          bg-[#F4F7EF]
        "
      >
        <div className="max-w-[1180px] mx-auto relative z-10">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <span
              className="
                font-body
                text-[10px]
                md:text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#6A8A4A]
                mb-3
                block
              "
            >
              HOW IT WORKS
            </span>

            <h2
              className="
                font-heading
                text-2xl
                md:text-3xl
                text-[#5E774C]
                font-bold
                mb-3
              "
            >
              Your Journey Starts in 3 Simple Steps
            </h2>

            <p
              className="
                font-body
                text-[#4B5742]
                text-xs
                md:text-sm
                leading-relaxed
              "
            >
              Begin your wellness journey with a simple, personalized process
              designed to help you find the right yoga program and achieve
              lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StepCard
              number="1"
              title="Book a Free Consultation"
              description="Share your goals, lifestyle, and wellness needs with our experienced yoga instructors for personalized guidance."
              icon="/assets/Free Consultation.png"
            />

            <StepCard
              number="2"
              title="Choose Your Ideal Program"
              description="Based on your goals, we'll recommend the perfect yoga program to support your health, fitness, and overall well-being."
              icon="/assets/Development Skill.png"
            />

            <StepCard
              number="3"
              title="Start Your Yoga Journey"
              description="Join your classes, stay consistent, and experience the benefits of a stronger body, calmer mind, and healthier lifestyle."
              icon="/assets/Sprout.png"
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="text-center max-w-[700px] mx-auto mb-10 px-6">
          <span
            className="
              font-body
              text-[10px]
              md:text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#6A8A4A]
              mb-3
              block
            "
          >
            TESTIMONIALS
          </span>

          <p
            className="
              font-body
              text-[#4B5742]
              text-xs
              md:text-sm
              mb-3
            "
          >
            Real stories from real people who have transformed their lives with
            Yoga for Life.
          </p>

          <h2
            className="
              font-heading
              text-2xl
              md:text-3xl
              text-[#5E774C]
              font-bold
            "
          >
            What Our Students Say
          </h2>
        </div>

        <TestimonialGrid />
      </section>

      <section
        id="pricing"
        className="
          relative
          py-14
          md:py-20
          px-6
          md:px-10
          bg-[#F4F7EF]
          overflow-hidden
        "
      >
        <img
          src="/assets/flag (1) 2.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            left-[-25px]
            bottom-[-20px]
            w-[130px]
            md:w-[170px]
            opacity-100
            pointer-events-none
            select-none
          "
        />

        <img
          src="/assets/flag (1) 3.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            right-[-30px]
            bottom-[-20px]
            w-[130px]
            md:w-[170px]
            opacity-100
            pointer-events-none
            select-none
          "
        />

        <div className="max-w-[1180px] mx-auto relative z-10">
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span
              className="
                font-body
                text-[10px]
                md:text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#6A8A4A]
                mb-3
                block
              "
            >
              PRICING
            </span>

            <div className="flex items-center justify-center gap-3 mb-3">
              <img
                src="/assets/flag (1) 2.png"
                alt=""
                className="
                  w-8
                  h-8
                  object-contain
                  rotate-180
                  opacity-100
                "
              />

              <h2
                className="
                  font-heading
                  text-xl
                  md:text-3xl
                  text-[#5E774C]
                  font-bold
                "
              >
                Choose the Plan That Fits Your Journey
              </h2>

              <img
                src="/assets/flag (1) 3.png"
                alt=""
                className="
                  w-8
                  h-8
                  object-contain
                  opacity-100
                "
              />
            </div>

            <p
              className="
                font-body
                text-[#4B5742]
                text-xs
                leading-relaxed
              "
            >
              Simple, flexible membership options designed to help you stay
              consistent and achieve lasting results.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-5
              items-center
              mb-10
            "
          >
            <PricingCard
              title="Starter"
              price="₹1,499"
              features={[
                "3 Classes/Week",
                "Community Support",
                "Beginner Friendly",
                "Mentoring",
              ]}
              buttonText="SELECT STARTER"
            />

            <PricingCard
              title="Popular"
              price="₹2,499"
              features={[
                "5 Classes/Week",
                "Personalized Guidance",
                "Nutrition Tips",
                "Progress Tracking",
              ]}
              isPopular={true}
              buttonText="GET STARTED"
            />

            <PricingCard
              title="Premium"
              price="₹4,499"
              features={[
                "Daily Classes",
                "1-on-1 Mentoring",
                "Custom Meal Plan",
                "Lifestyle Coaching",
              ]}
              buttonText="GO PREMIUM"
            />
          </div>

          <div
            className="
              max-w-[900px]
              mx-auto
              bg-white
              rounded-xl
              border
              border-[#D9E2CF]
              px-5
              py-5
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-5
              shadow-sm
            "
          >
            <div className="flex-1">
              <h4
                className="
                  font-heading
                  text-sm
                  md:text-base
                  text-[#5E774C]
                  font-semibold
                  mb-1
                "
              >
                PREFER TO DISCUSS PRICING PRIVATELY?
              </h4>

              <p
                className="
                  font-body
                  text-[#5D6757]
                  text-[10px]
                  md:text-xs
                  leading-relaxed
                "
              >
                We're happy to help you find the right plan for your goals.
                Contact us for personalized support.
              </p>
            </div>

            <div
              className="
                hidden
                md:block
                w-px
                h-14
                bg-[#DCE4D4]
              "
            />

            <div
              className="
                flex
                flex-col
                gap-2
                font-body
                text-[10px]
                md:text-xs
                text-[#34412C]
              "
            >
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#7BA258]" />
                +91 8870461152
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#7BA258]" />
                hello@yogaforlife.com
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-[#7BA258]">@</span>
                yogaforlifeyfl
              </div>
            </div>

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[#EAF1E0]
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <img
                src="/assets/YFL LOGO (5) 1.png"
                alt=""
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="
          relative
          overflow-hidden
          min-h-[350px]
          md:min-h-[400px]
          bg-gradient-to-r
          from-[#AFCF86]
          via-[#799C59]
          to-[#4F683A]
          px-6
          md:px-10
          py-16
          md:py-20
        "
      >
        <img
          src="/assets/flag (1) 2.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            left-[-20px]
            bottom-[-25px]
            w-[150px]
            md:w-[210px]
            lg:w-[250px]
            h-auto
            object-contain
            opacity-100
            pointer-events-none
            select-none
            z-0
          "
        />

        <img
          src="/assets/flag (1) 3.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            right-[-20px]
            top-[-25px]
            w-[180px]
            md:w-[240px]
            lg:w-[290px]
            h-auto
            object-contain
            opacity-100
            pointer-events-none
            select-none
            z-0
          "
        />

        <div
          className="
            relative
            z-10
            max-w-[1320px]
            mx-auto
          "
        >
          <div
            className="
              max-w-[650px]
              ml-0
              md:ml-[5%]
              lg:ml-[7%]
            "
          >
            <span
              className="
                block
                font-body
                text-[11px]
                md:text-[13px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#C8DFA6]
                mb-5
              "
            >
              READY TO BEGIN?
            </span>

            <h2
              className="
                font-heading
                text-white
                text-[2.5rem]
                sm:text-[3rem]
                md:text-[3.5rem]
                lg:text-[3.8rem]
                leading-[1.15]
                font-bold
                mb-7
                max-w-[680px]
              "
            >
              Every Great Journey Begins
              <br />
              with a Single Breath.
            </h2>

            <p
              className="
                font-body
                text-white
                text-sm
                md:text-base
                lg:text-lg
                leading-[1.8]
                font-medium
                max-w-[590px]
                mb-9
              "
            >
              Join a supportive community where expert guidance, mindful
              practice, and personalized programs help you become the healthiest
              version of yourself.
            </p>

            <Link to="/join-now">
              <Button
                className="
                  bg-transparent
                  hover:bg-white
                  hover:text-[#4F683A]
                  text-white
                  border
                  border-white
                  rounded-full
                  px-8
                  md:px-10
                  py-4
                  md:py-5
                  font-body
                  font-bold
                  text-xs
                  md:text-sm
                  tracking-[0.12em]
                  shadow-none
                  transition-all
                  duration-300
                "
              >
                START YOUR JOURNEY
                <span className="ml-3 text-lg">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
