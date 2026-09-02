import { Button } from "../components/ui/Button";
import { Activity, Brain, Flower2, Wind } from "lucide-react";

export function GeneralYoga() {
  const benefits = [
    {
      icon: Activity,
      title: "Move with Ease & improve mobility",
    },
    {
      icon: Wind,
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
    <div className="w-full bg-[#f7f3ee] text-[#1d2d22]">
      <section className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-0">
        <div className="relative overflow-hidden bg-[#f4efe7]">
          <div className="absolute left-0 top-0 h-full w-[120px] md:w-[180px] bg-gradient-to-r from-[#e7efe0]/80 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-[140px] md:w-[220px] bg-gradient-to-l from-[#e3ead6]/80 to-transparent" />

          <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8 lg:px-0 pt-4 md:pt-5">
            <div className="flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[#3b4d3d] opacity-80">
              <span>Home</span>
              <span>›</span>
              <span>Programs</span>
              <span>›</span>
              <span>General Yoga</span>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-4 pb-6 pt-6 md:px-8 lg:flex-row lg:px-0 lg:pb-0 lg:pt-0">
            <div className="relative w-full lg:w-[48%]">
              <div className="absolute left-[-20px] bottom-[-18px] h-[200px] w-[200px] rounded-full border border-[#d2dbc7] bg-[#edf3e8]/80 opacity-80" />
              <img
                src="/assets/Weight Loss Yoga.png"
                alt="General Yoga"
                className="relative z-10 mx-auto h-[280px] w-auto object-contain md:h-[360px] lg:h-[420px]"
              />
            </div>

            <div className="w-full px-2 pb-6 lg:w-[52%] lg:max-w-[560px] lg:px-0 lg:pb-10">
              <h1 className="font-heading text-[42px] leading-none tracking-[-0.04em] text-[#1d2d22] sm:text-[52px] md:text-[62px] lg:text-[72px]">
                General Yoga
              </h1>

              <p className="mt-5 max-w-[500px] font-heading text-[18px] leading-[1.4] text-[#3b4d3d] sm:text-[20px] md:text-[23px]">
                Move better. Breathe deeper. Live better.
              </p>

              <p className="mt-4 max-w-[500px] font-body text-[14px] leading-[1.7] text-[#2f3e32] sm:text-[15px] md:text-[16px]">
                Whether you are a beginner or an experienced practitioner, the
                program is thoughtfully structured to help you improve
                flexibility, strength, posture, balance, and inner awareness—
                one step at a time.
              </p>

              <div className="mt-8">
                <a href="/consultation">
                  <Button
                    className="
                      h-[46px]
                      min-w-[250px]
                      rounded-md
                      bg-[#7da65c]
                      px-7
                      font-body
                      text-sm
                      font-bold
                      tracking-wide
                      text-white
                      shadow-[0_8px_18px_rgba(98,126,74,0.20)]
                      transition-all
                      hover:bg-[#6e9650]
                    "
                  >
                    BOOK A FREE CONSULTATION →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f3ee] px-4 pb-[42px] pt-[56px] md:px-8 lg:px-0">
        <div className="mx-auto max-w-[1200px] relative">
          <h2 className="font-heading text-[22px] font-bold uppercase leading-tight text-[#5c7648] md:text-[24px]">
            About the Program
          </h2>

          <div className="mt-6 max-w-[980px]">
            <p className="font-body text-[15px] leading-[1.8] text-[#2a3d2f] md:text-[16px]">
              Our Regular Yoga Program is a holistic practice designed to
              strengthen the body, calm the mind, and create balance in everyday
              life. Through a combination of yoga asanas, mobility movements,
              pranayama, meditation, and mindful practices, each session supports
              your overall physical and mental well-being. One breath and one
              moment at a time.
            </p>
          </div>

          <img
            src="/assets/Leaf.png"
            alt=""
            className="absolute right-0 top-0 hidden h-[140px] w-[140px] object-contain opacity-80 lg:block"
          />
        </div>
      </section>

      <section className="w-full bg-[#f7f3ee] px-4 pb-[42px] pt-[8px] md:px-8 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-heading text-[22px] font-bold uppercase leading-tight text-[#5c7648] md:text-[24px]">
            What You'll Gain
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="flex h-[132px] items-center justify-center rounded-xl border border-[#dfe5d7] bg-[#f0f4ea] px-4 py-4 shadow-[0_3px_12px_rgba(49,66,40,0.06)]"
                >
                  <div className="flex w-full items-center gap-3 md:gap-4">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#dfe9d0] text-[#5b7b48]">
                      <Icon size={20} className="stroke-[2.2]" />
                    </div>
                    <p className="font-body text-[14px] leading-[1.4] text-[#2b3d2f] md:text-[15px]">
                      {benefit.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f3ee] px-4 py-[18px] md:px-8 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-heading text-[22px] font-bold uppercase leading-tight text-[#5c7648] md:text-[24px]">
            Who Is It For?
          </h2>

          <div className="mt-5 max-w-[980px]">
            <p className="font-body text-[15px] leading-[1.7] text-[#2a3d2f] md:text-[16px]">
              Beginners and experienced practitioners. Anyone looking to improve
              strength, flexibility, and mobility. People seeking better posture,
              balance, and body awareness. Those looking to reduce everyday
              stress and feel more relaxed. Suitable for all adults who want to
              make yoga a part of their daily wellness routine.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 w-full bg-[#dfe9cf] px-4 py-[52px] md:px-8 lg:px-0 md:py-[68px]">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.25),_transparent_55%)]" />
          <div className="absolute left-[-100px] bottom-[-150px] h-[420px] w-[420px] rounded-full border border-white/35 opacity-60" />
          <div className="absolute right-[-120px] top-[-100px] h-[430px] w-[430px] rounded-full border border-white/35 opacity-60" />

          <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
            <h2 className="font-heading text-[32px] leading-[1.1] tracking-[-0.04em] text-[#4f6b43] md:text-[42px] lg:text-[50px]">
              Find Your Balance, Feel Your Best
            </h2>

            <p className="mt-4 font-body text-[16px] leading-[1.6] text-[#2d3b2d] md:text-[18px]">
              Build strength, improve flexibility, and refresh your mind with a
              balanced yoga practice for everyday well-being.
            </p>

            <div className="mt-8">
              <a href="/consultation">
                <Button
                  className="
                    h-[48px]
                    min-w-[230px]
                    rounded-md
                    bg-[#7da65c]
                    px-7
                    font-body
                    text-sm
                    font-bold
                    tracking-wide
                    text-white
                    shadow-[0_8px_18px_rgba(98,126,74,0.18)]
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
