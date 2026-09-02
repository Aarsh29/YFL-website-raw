import { Button } from "../components/ui/Button";
import {
  Leaf,
  Dumbbell,
  Heart,
  PersonStanding,
} from "lucide-react";

export function PrenatalYoga() {
  const benefits = [
    {
      icon: Leaf,
      title: "Gentle movement and mobility",
    },
    {
      icon: Dumbbell,
      title: "Relaxation and stress relief",
    },
    {
      icon: Heart,
      title: "Better body awareness",
    },
    {
      icon: PersonStanding,
      title: "Preparation for motherhood",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white text-[#253725]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#f8f6ed]">

        {/* Hero background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8efd9]/70 via-[#f8f6ed]/30 to-[#f8f6ed]/10" />

          {/* Decorative soft circle */}
          <div className="absolute left-[8%] top-[12%] h-[360px] w-[360px] rounded-full border border-[#cfd8bd]/60" />

          <div className="absolute left-[13%] top-[19%] h-[300px] w-[300px] rounded-full bg-[#e9efdd]/50" />
        </div>

        {/* Breadcrumb */}
        <div className="relative z-20 mx-auto max-w-[1280px] px-8 pt-6 lg:px-12">
          <div className="flex items-center gap-3 font-body text-[12px] uppercase tracking-wide text-[#354633]">
            <span>Home</span>
            <span>›</span>
            <span>Programs</span>
            <span>›</span>
            <span>Prenatal Yoga</span>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1280px] items-center px-8 lg:px-12">

          {/* Woman */}
          <div className="absolute bottom-0 left-0 flex w-[49%] items-end justify-center">

            <img
              src="/assets/Yoga for Life - Review Post 1 (29) 1.png"
              alt="Prenatal Yoga"
              className="
                relative
                z-10
                h-[390px]
                w-auto
                object-contain
                md:h-[430px]
                lg:h-[470px]
              "
            />

            {/* soft background circle */}
            <div
              className="
                absolute
                bottom-[15px]
                left-[12%]
                h-[330px]
                w-[330px]
                rounded-full
                bg-[#e5ecd8]/80
              "
            />
          </div>

          {/* Hero text */}
          <div className="ml-auto w-[51%] max-w-[610px] pb-8 pl-8">

            <h1
              className="
                font-heading
                text-[48px]
                font-semibold
                leading-[1.05]
                tracking-[-0.025em]
                text-[#17351d]
                md:text-[58px]
                lg:text-[68px]
              "
            >
              Prenatal Yoga
            </h1>

            <p
              className="
                mt-5
                font-heading
                text-[20px]
                leading-[1.35]
                text-[#7da65c]
                md:text-[23px]
              "
            >
              Move Gently. Breathe Deeply. Prepare Confidently.
            </p>

            <p
              className="
                mt-4
                max-w-[500px]
                font-body
                text-[16px]
                leading-[1.65]
                text-[#2f3d30]
                md:text-[18px]
              "
            >
              Safe and supportive yoga practices designed to help you stay
              active and comfortable during pregnancy.
            </p>

            <div className="mt-7">
              <a href="/consultation">
                <Button
                  className="
                    h-[52px]
                    rounded-lg
                    bg-[#7da65c]
                    px-8
                    font-body
                    text-[15px]
                    font-bold
                    tracking-wide
                    text-white
                    shadow-[0_6px_14px_rgba(83,112,65,0.25)]
                    transition-all
                    hover:bg-[#6e9650]
                  "
                >
                  BOOK A FREE CONSULTATION
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT THE PROGRAM
      ========================================================= */}
      <section className="relative w-full bg-white px-8 py-[70px] lg:px-12">

        <div className="relative mx-auto max-w-[1200px]">

          <h2
            className="
              font-heading
              text-[24px]
              font-bold
              uppercase
              leading-tight
              text-[#5c7648]
            "
          >
            About the Program
          </h2>

          <div className="mt-6 max-w-[1000px]">

            <p
              className="
                font-body
                text-[16px]
                leading-[1.8]
                text-[#34432a]
                md:text-[17px]
              "
            >
              Our prenatal program focuses on gentle movement, breathing,
              relaxation, and body awareness to support your changing body
              throughout pregnancy. Build strength for labor, ease pregnancy
              discomforts, and connect with your baby through breath and
              movement.
            </p>

          </div>

  
          <img
            src="/assets/leaves.png"
            alt=""
            className="
              pointer-events-none
              absolute
              bottom-[-8px]
              right-0
              hidden
              h-[150px]
              w-[150px]
              object-contain
              lg:block
            "
          />

      
          <div className="mt-7 h-px w-full bg-[#cfdac5]" />
        </div>
      </section>

      <section className="w-full bg-white px-8 pb-[58px] pt-[0px] lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <h2
            className="
              font-heading
              text-[24px]
              font-bold
              uppercase
              leading-tight
              text-[#5c7648]
            "
          >
            What You'll Gain
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="
                    flex
                    h-[132px]
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#d5ddd0]
                    bg-[#fbfbed]
                    px-5
                    shadow-[0_5px_12px_rgba(50,65,40,0.12)]
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:shadow-[0_8px_18px_rgba(50,65,40,0.16)]
                  "
                >
                  <div className="flex w-full flex-col items-center justify-center text-center">

                    <div className="mb-4 flex h-[34px] w-[34px] items-center justify-center text-[#78a05a]">
                      <Icon
                        size={25}
                        strokeWidth={2.2}
                      />
                    </div>

                    <p
                      className="
                        max-w-[175px]
                        font-body
                        text-[14px]
                        font-medium
                        leading-[1.4]
                        text-[#263526]
                        md:text-[15px]
                      "
                    >
                      {benefit.title}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

          
          <div className="mt-7 h-px w-full bg-[#d9e0d4]" />
        </div>
      </section>

      <section className="w-full bg-white px-8 pb-[65px] pt-[0px] lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <h2
            className="
              font-heading
              text-[24px]
              font-bold
              uppercase
              leading-tight
              text-[#5c7648]
            "
          >
            Who Is It For?
          </h2>

          <div className="mt-5 max-w-[1000px]">

            <p
              className="
                font-body
                text-[16px]
                leading-[1.8]
                text-[#34432a]
                md:text-[17px]
              "
            >
              Designed for expectant mothers seeking gentle, mindful movement
              during pregnancy, subject to appropriate medical guidance.
            </p>

          </div>
        </div>
      </section>

  
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#dce7c5]
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('/assets/Yoga for Life - Review Post 1 (33) 1.png')",
        }}
      >

        
        <div className="absolute inset-0 bg-[#dce7c5]/30" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[375px]
            max-w-[1280px]
            items-center
            justify-center
            px-6
            py-16
            text-center
            md:min-h-[420px]
          "
        >

          <div className="max-w-[720px]">

            <h2
              className="
                font-heading
                text-[34px]
                font-bold
                uppercase
                leading-[1.15]
                tracking-[-0.02em]
                text-[#5c7648]
                md:text-[43px]
              "
            >
              Begin Your Prenatal Yoga Journey
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[620px]
                font-body
                text-[17px]
                leading-[1.65]
                text-[#293829]
                md:text-[19px]
              "
            >
              Join our Prenatal Yoga program and support your body and mind
              through this beautiful journey.
            </p>

            <div className="mt-8">

              <a href="/consultation">
                <Button
                  className="
                    h-[50px]
                    min-w-[285px]
                    rounded-lg
                    bg-[#7da65c]
                    px-8
                    font-body
                    text-[14px]
                    font-bold
                    tracking-wide
                    text-white
                    shadow-[0_6px_16px_rgba(80,110,60,0.25)]
                    transition-all
                    hover:bg-[#6e9650]
                  "
                >
                  START YOUR JOURNEY →
                </Button>
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}