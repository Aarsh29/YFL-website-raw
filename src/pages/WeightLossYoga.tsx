import { Button } from "../components/ui/Button";
import {
  CheckCircle2,
  Dumbbell,
  Heart,
  Scale,
} from "lucide-react";

export function WeightLossYoga() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Support healthy weight management",
    },
    {
      icon: Dumbbell,
      title: "Improve strength and endurance",
    },
    {
      icon: Heart,
      title: "Connect with your body",
    },
    {
      icon: Scale,
      title: "Build healthier daily habits",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white">

      
      <section className="relative w-full h-[400px] md:h-[430px] lg:h-[450px] overflow-hidden">

        <img
          src="/assets/Yoga for Life - Review Post 1 (33) 1.png"
          alt="Weight Loss Yoga"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-white/5" />

        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-0">

          <div className="h-full flex items-center">

            <div className="w-full lg:w-[52%] lg:ml-auto pt-8 md:pt-10">

              <h1 className="font-heading text-[#17351d] font-semibold leading-[1.05] text-[42px] sm:text-[48px] md:text-[56px] lg:text-[58px]">
                Weight Loss Yoga
              </h1>

              <p className="mt-4 font-heading text-[#739a58] text-xl md:text-2xl lg:text-[25px] leading-tight">
                Build Strength. Move Better. Feel Stronger.
              </p>

              <p className="mt-4 max-w-[520px] font-body text-[#263b27] text-[15px] md:text-base lg:text-[17px] leading-[1.55]">
                A mindful approach to weight management combining yoga,
                movement, and healthy lifestyle practices.
              </p>

              <div className="mt-7">
                <a href="/consultation">
                  <Button
                    className="
                      h-[48px]
                      px-7
                      md:px-8
                      rounded-md
                      bg-[#7da65c]
                      hover:bg-[#6e9650]
                      text-white
                      font-body
                      font-bold
                      text-sm
                      md:text-base
                      shadow-md
                    "
                  >
                    BOOK A FREE CONSULTATION&nbsp; →
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>


\
      <section className="w-full bg-white px-6 md:px-10 lg:px-0 pt-[52px] md:pt-[62px] lg:pt-[68px] pb-[42px]">

        <div className="max-w-[1200px] mx-auto">

          <div className="relative">

            <h2 className="
              font-heading
              text-[#5e774c]
              font-bold
              text-[21px]
              md:text-[23px]
              uppercase
              leading-tight
            ">
              About the Program
            </h2>

            <div className="mt-7 max-w-[900px]">

              <p className="
                font-body
                text-[#34432a]
                text-[15px]
                md:text-[16px]
                leading-[1.7]
              ">
                Our YFL Weight Management Program combines yoga, mindful
                movement, strength-building, breath work and healthy lifestyle
                guidance to support sustainable weight management.
              </p>

              <p className="
                mt-2
                font-body
                text-[#34432a]
                text-[15px]
                md:text-[16px]
                font-semibold
                leading-[1.6]
              ">
                No extreme routines. No quick fixes. Just consistent steps
                towards a healthier you. 🌿
              </p>

            </div>

         
            <img
              src="/assets/leaves.png"
              alt=""
              className="
                hidden
                lg:block
                absolute
                right-0
                bottom-[-8px]
                w-[125px]
                h-[125px]
                object-contain
              "
            />

          </div>

  
          <div className="mt-9 border-b border-[#d5dfcd]" />

        </div>
      </section>


      <section className="w-full bg-white px-6 md:px-10 lg:px-0 pt-[22px] pb-[42px]">

        <div className="max-w-[1200px] mx-auto">

          <h2 className="
            font-heading
            text-[#5e774c]
            font-bold
            text-[21px]
            md:text-[23px]
            uppercase
            leading-tight
          ">
            What You'll Gain
          </h2>

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            mt-8
            px-0
          ">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="
                    h-[122px]
                    md:h-[130px]
                    rounded-xl
                    bg-[#fffef0]
                    border
                    border-[#ece8c8]
                    shadow-[0_5px_10px_rgba(0,0,0,0.12)]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    px-5
                  "
                >

                  <Icon
                    size={23}
                    strokeWidth={2.5}
                    className="text-[#79a45b] mb-4"
                  />

                  <p className="
                    font-body
                    text-[#34432a]
                    text-[14px]
                    md:text-[15px]
                    leading-[1.35]
                    font-medium
                    max-w-[180px]
                  ">
                    {benefit.title}
                  </p>

                </div>
              );
            })}

          </div>

     
          <div className="mt-9 border-b border-[#d5dfcd]" />

        </div>
      </section>



      <section className="w-full bg-white px-6 md:px-10 lg:px-0 pt-[18px] pb-[54px]">

        <div className="max-w-[1200px] mx-auto">

          <h2 className="
            font-heading
            text-[#5e774c]
            font-bold
            text-[21px]
            md:text-[23px]
            uppercase
            leading-tight
          ">
            Who Is It For?
          </h2>

          <div className="mt-6 max-w-[1080px]">

            <p className="
              font-body
              text-[#34432a]
              text-[15px]
              md:text-[16px]
              leading-[1.65]
            ">
              For anyone ready to make a positive change.
            </p>

            <p className="
              font-body
              text-[#34432a]
              text-[15px]
              md:text-[16px]
              leading-[1.65]
            ">
              Whether you're starting fresh or getting back on track, you can
              begin from where you are—right from the comfort of your home.
            </p>

            <p className="
              mt-1
              font-body
              text-[#34432a]
              font-bold
              text-[15px]
              md:text-[16px]
              leading-[1.6]
            ">
              Start Where You Are. Move From Home. Transform Your Life. 🌿
            </p>

          </div>

        </div>
      </section>


      <section
        className="
          relative
          w-full
          min-h-[390px]
          md:min-h-[430px]
          lg:min-h-[455px]
          overflow-hidden
          bg-[#dce9b7]
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('/assets/Weight Loss CTA Background.png')",
        }}
      >

        {/* 
          If your CTA has a separate background image,
          replace the URL above with that image.
        */}

        <div className="absolute inset-0 bg-[#dce9b7]/35" />

        {/* Decorative soft shapes */}
        <div className="
          absolute
          -left-20
          -bottom-32
          w-[340px]
          h-[260px]
          rounded-full
          bg-white/30
        " />

        <div className="
          absolute
          -right-16
          -top-24
          w-[270px]
          h-[270px]
          rounded-full
          border
          border-white/45
        " />

        <div className="
          relative
          z-10
          min-h-[390px]
          md:min-h-[430px]
          lg:min-h-[455px]
          flex
          items-center
          justify-center
          px-6
        ">

          <div className="text-center max-w-[800px]">

            <h2 className="
              font-heading
              text-[#5e774c]
              font-bold
              uppercase
              text-[28px]
              sm:text-[32px]
              md:text-[38px]
              lg:text-[40px]
              leading-[1.15]
            ">
              Ready to Transform Your Body and Mind?
            </h2>

            <p className="
              mt-5
              font-body
              text-[#34432a]
              text-[15px]
              md:text-[17px]
              leading-[1.55]
              max-w-[620px]
              mx-auto
            ">
              Join our Weight Loss Yoga program and take the first step toward
              a healthier, stronger you
            </p>

            <div className="mt-8">

              <a href="/consultation">

                <Button
                  className="
                    min-w-[270px]
                    h-[50px]
                    px-8
                    rounded-md
                    bg-[#7da65c]
                    hover:bg-[#6e9650]
                    text-white
                    font-body
                    font-bold
                    text-sm
                    shadow-md
                  "
                >
                  START YOUR JOURNEY&nbsp; →
                </Button>

              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}