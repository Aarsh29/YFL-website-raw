import { Link } from "react-router-dom";
import { Button } from "./Button";

interface SplitCTAProps {
  kicker: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageLeft?: boolean;
  imageSrc?: string;
  bgGradient?: boolean;
  badge?: string;
}

export function SplitCTA({
  kicker,
  title,
  description,
  buttonText = "START YOUR JOURNEY →",
  buttonLink = "/join-now",
  imageLeft = true,
  imageSrc,
  bgGradient = false,
  badge,
}: SplitCTAProps) {
  const textContent = (
    <div
      className={`p-12 md:p-24 flex flex-col justify-center ${imageLeft ? "items-end text-right" : "items-start text-left"}`}
    >
      <span className="font-body text-[13px] font-bold uppercase tracking-[0.2em] text-accent-light mb-6 block">
        {kicker}
      </span>
      <h2 className="font-heading text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
        {title.split(". ").map((part, i, arr) => (
          <span key={i} className={i % 2 === 0 ? "font-bold" : "font-medium"}>
            {part}
            {i !== arr.length - 1 ? ". " : ""}
          </span>
        ))}
      </h2>
      <p className="font-body text-white/90 text-[17px] leading-relaxed mb-10 max-w-lg">
        {description}
      </p>
      <Link to={buttonLink}>
        <Button variant="outline-dark">{buttonText}</Button>
      </Link>
    </div>
  );

  return (
    <section
      className={`w-full ${bgGradient ? "bg-gradient-to-r from-primary-dark to-primary" : "bg-primary"}`}
    >
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {imageLeft ? (
          <>
            <div className="md:w-1/2 h-[300px] md:h-auto relative">
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/90 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent block md:hidden" />
            </div>
            <div className="md:w-1/2">{textContent}</div>
          </>
        ) : (
          <>
            <div className="md:w-1/2 relative z-10 order-2 md:order-1">
              {textContent}
            </div>
            <div className="md:w-1/2 h-[300px] md:h-auto relative order-1 md:order-2">
              {badge && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-48 h-48 rounded-full border-4 border-white/20 flex items-center justify-center bg-primary/40 backdrop-blur-sm">
                    <span className="font-heading text-2xl text-white text-center font-bold px-4">
                      {badge}
                    </span>
                  </div>
                </div>
              )}
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/90 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90 block md:hidden" />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
