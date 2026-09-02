import { Button } from "../components/ui/Button";

export function StrengthToning() {
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
    <div className="w-full overflow-hidden">
 
      <section className="relative w-full h-[325px] sm:h-[380px] md:h-[430px] lg:h-[500px] overflow-hidden bg-primary-50">
        <img
          src="/assets/image 3.png"
          alt="Strength & Toning"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-white/10" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
            <div className="ml-auto w-[48%] max-w-[620px] pr-0 sm:pr-4 md:pr-8 lg:pr-12">
              <h1 className="font-heading text-primary-dark font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
                Strength & Toning
              </h1>
              <p className="text-primary-600 text-base sm:text-lg md:text-xl font-medium mb-6">
                Build Strength. Tone Your Body. Move With Confidence.
              </p>
              <p className="text-primary-dark text-sm sm:text-base mb-8 max-w-md">
                A dynamic yoga program designed to improve muscular strength, endurance, and overall fitness
              </p>
              <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3">
                BOOK A FREE CONSULTATION
              </Button>
            </div>
          </div>
        </div>
      </section>

   
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-16 md:py-20">
        <div className="mb-8">
          <h2 className="font-heading text-primary-600 font-medium text-2xl md:text-3xl mb-6">
            ABOUT THE PROGRAM
          </h2>
          <p className="text-primary-dark text-base md:text-lg leading-relaxed max-w-2xl">
            Combine yoga-based movement with strength-focused practices to build a stronger, more capable body while improving flexibility and balance. Enhance muscle tone, increase flexibility, and move with greater confidence through mindful yoga training.
          </p>
        </div>
      </section>

     
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-16 md:py-20">
        <h2 className="font-heading text-primary-600 font-medium text-2xl md:text-3xl mb-12">
          WHAT YOU'LL GAIN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border border-primary-300 rounded-lg p-6 flex flex-col items-center text-center bg-white hover:shadow-md transition-shadow"
            >
              <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mb-4" />
              <p className="text-primary-dark font-medium text-base">{benefit.title}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-16 md:py-20">
        <h2 className="font-heading text-primary-600 font-medium text-2xl md:text-3xl mb-6">
          WHO IS IT FOR?
        </h2>
        <p className="text-primary-dark text-base md:text-lg leading-relaxed max-w-2xl">
          Ideal for anyone looking to become stronger, more active, and physically confident through a structured yoga practice.
        </p>
      </section>

  
      <section className="w-full bg-primary-100 py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 text-center">
          <h2 className="font-heading text-primary-600 font-semibold text-3xl md:text-4xl mb-4">
            GET STRONGER. FEEL BETTER. EVERY DAY.
          </h2>
          <p className="text-primary-dark text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join our Strength & Toning program and feel the difference in your body and mind.
          </p>
          <Button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-10 py-3 text-lg">
            START YOUR JOURNEY →
          </Button>
        </div>
      </section>
    </div>
  );
}
