import { Button } from "../components/ui/Button";

export function PostnatalYoga() {
  const benefits = [
    {
      icon: "/assets/Leaf.png",
      title: "Gentle movement and mobility",
    },
    {
      icon: "/assets/Dumbbell.png",
      title: "Relaxation and stress relief",
    },
    {
      icon: "/assets/Check.png",
      title: "Better body awareness",
    },
    {
      icon: "/assets/Meditation.png",
      title: "Preparation for motherhood",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-[#1d2c1d]">

      
      <section
        className="
          relative
          w-full
          h-[615px]
          sm:h-[530px]
          md:h-[550px]
          lg:h-[570px]
          overflow-hidden
        "
      >
        <img
          src="/assets/Yoga for Life - Review Post 1 (30) 1.png"
          alt="Postnatal Yoga"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-gradient-to-r
            from-transparent
            via-transparent
            to-white/10
          "
        />

   
        <div
          className="
            absolute
            top-0
            left-0
            z-20
            w-full
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1200px]
              px-6
              sm:px-8
              pt-[24px]
              md:pt-[27px]
            "
          >
            <div
              className="
                flex
                items-center
                gap-[10px]
                text-[9px]
                sm:text-[10px]
                md:text-[11px]
                font-medium
                uppercase
                tracking-[0.02em]
                text-[#263326]
              "
            >
              
            </div>
          </div>
        </div>

   
        <div className="absolute inset-0 z-10">
          <div
            className="
              mx-auto
              flex
              h-full
              w-full
              max-w-[1200px]
              items-center
              px-6
              sm:px-8
            "
          >
            <div
              className="
                ml-auto
                w-full
                sm:w-[52%]
                md:w-[51%]
                lg:w-[50%]
                max-w-[570px]
                pt-[15px]
              "
            >
              <h1
                className="
                  font-heading
                  text-[43px]
                  sm:text-[48px]
                  md:text-[55px]
                  lg:text-[60px]
                  font-medium
                  leading-[1.04]
                  text-[#19331c]
                "
              >
                Postnatal Yoga
              </h1>

              <p
                className="
                  mt-[18px]
                  font-heading
                  text-[15px]
                  sm:text-[16px]
                  md:text-[17px]
                  font-medium
                  leading-none
                  text-[#70965a]
                "
              >
                Restore. Reconnect. Rebuild.
              </p>

              <p
                className="
                  mt-[13px]
                  max-w-[500px]
                  font-body
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  leading-[1.55]
                  text-[#293829]
                "
              >
                Gentle practices designed to support your body and
                well-being after childbirth.
              </p>

              <Button
                className="
                  mt-[23px]
                  h-[47px]
                  min-w-[280px]
                  rounded-[8px]
                  bg-[#7ea65c]
                  px-7
                  text-[14px]
                  md:text-[15px]
                  font-bold
                  text-white
                  shadow-[0_3px_7px_rgba(0,0,0,0.20)]
                  hover:bg-[#6f9650]
                "
              >
                BOOK A FREE CONSULTATION
              </Button>
            </div>
          </div>
        </div>
      </section>



      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-6
            sm:px-8
            pt-[70px]
            md:pt-[76px]
            lg:pt-[80px]
            pb-[40px]
            md:pb-[45px]
          "
        >
          <div
            className="
              relative
              border-b
              border-[#b7c6ae]
              pb-[28px]
              md:pb-[31px]
            "
          >
            <h2
              className="
                font-heading
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                font-semibold
                uppercase
                leading-tight
                text-[#557448]
              "
            >
              ABOUT THE PROGRAM
            </h2>

            <p
              className="
                mt-[20px]
                md:mt-[22px]
                max-w-[850px]
                font-body
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                leading-[1.75]
                text-[#344334]
              "
            >
              Our postnatal program focuses on gradually rebuilding strength,
              mobility, core awareness, and confidence while encouraging
              mindful recovery. Gentle core and pelvic floor recovery,
              designed for the postpartum body. Safe to start once cleared
              by your doctor.
            </p>

      
            <img
              src="/assets/leaf-branch.png"
              alt=""
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-2px]
                bottom-[0px]
                z-10
                hidden
                sm:block
                w-[90px]
                md:w-[105px]
                lg:w-[115px]
                h-auto
                select-none
                object-contain
              "
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-6
            sm:px-8
            pt-[20px]
            md:pt-[25px]
            pb-[30px]
          "
        >
          <h2
            className="
              font-heading
              text-[19px]
              sm:text-[20px]
              md:text-[21px]
              font-semibold
              uppercase
              leading-tight
              text-[#557448]
            "
          >
            WHAT YOU'LL GAIN
          </h2>

          <div
            className="
              mt-[25px]
              md:mt-[28px]
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-[14px]
              md:gap-[18px]
            "
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="
                  flex
                  h-[130px]
                  md:h-[136px]
                  lg:h-[140px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  border-[#a8b4a2]
                  bg-[#f7f9f4]
                  px-4
                  text-center
                "
              >
                <img
                  src={benefit.icon}
                  alt=""
                  className="
                    mb-[11px]
                    h-[35px]
                    w-[35px]
                    md:h-[38px]
                    md:w-[38px]
                    object-contain
                  "
                />

                <p
                  className="
                    max-w-[155px]
                    font-body
                    text-[12px]
                    sm:text-[13px]
                    md:text-[14px]
                    leading-[1.5]
                    text-[#263426]
                  "
                >
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-[37px]
              md:mt-[42px]
              w-full
              border-b
              border-[#b7c6ae]
            "
          />
        </div>
      </section>

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-6
            sm:px-8
            pt-[45px]
            md:pt-[50px]
            pb-[75px]
            md:pb-[82px]
            lg:pb-[88px]
          "
        >
          <h2
            className="
              font-heading
              text-[19px]
              sm:text-[20px]
              md:text-[21px]
              font-semibold
              uppercase
              leading-tight
              text-[#557448]
            "
          >
            WHO IS IT FOR?
          </h2>

          <p
            className="
              mt-[20px]
              md:mt-[22px]
              max-w-[850px]
              font-body
              text-[13px]
              sm:text-[14px]
              md:text-[15px]
              leading-[1.75]
              text-[#344334]
            "
          >
            For new mothers looking to gently return to movement and rebuild
            their strength after childbirth, with appropriate medical
            clearance.
          </p>
        </div>
      </section>

      <section
        className="
          relative
          min-h-[345px]
          md:min-h-[370px]
          lg:min-h-[390px]
          w-full
          overflow-hidden
          bg-[#e2e9c9]
        "
      >
   
        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#d9e1ba]
              via-[#e5eacb]
              to-[#f3f2e6]
            "
          />

         
          <div
            className="
              absolute
              -bottom-[190px]
              -left-[120px]
              h-[350px]
              w-[700px]
              rotate-[-7deg]
              rounded-[50%]
              bg-white/40
            "
          />

         
          <div
            className="
              absolute
              -right-[95px]
              -top-[115px]
              h-[390px]
              w-[390px]
              rounded-full
              border-[2px]
              border-white/40
            "
          />
        </div>

      
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[345px]
            md:min-h-[370px]
            lg:min-h-[390px]
            max-w-[900px]
            flex-col
            items-center
            justify-center
            px-6
            text-center
          "
        >
          <h2
            className="
              font-heading
              text-[23px]
              sm:text-[25px]
              md:text-[28px]
              lg:text-[30px]
              font-bold
              uppercase
              leading-[1.2]
              text-[#557448]
            "
          >
            REBUILD YOUR STRENGTH WITH CONFIDENCE
          </h2>

          <p
            className="
              mt-[17px]
              max-w-[620px]
              font-body
              text-[14px]
              sm:text-[15px]
              md:text-[16px]
              leading-[1.55]
              text-[#263426]
            "
          >
            Join our Postnatal Yoga program and take a gentle step
            <br className="hidden sm:block" />
            forward in your recovery journey.
          </p>

          <Button
            className="
              mt-[27px]
              h-[47px]
              min-w-[275px]
              rounded-[8px]
              bg-[#7ea65c]
              px-8
              text-[13px]
              md:text-[14px]
              font-bold
              uppercase
              text-white
              shadow-[0_3px_8px_rgba(0,0,0,0.18)]
              hover:bg-[#6f9650]
            "
          >
            START YOUR JOURNEY →
          </Button>
        </div>
      </section>


    </main>
  );
}

export default PostnatalYoga;