import { Link } from "react-router-dom";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  icon?: string;
  wide?: boolean;
  link?: string;
}

export function ProgramCard({
  title,
  description,
  image,
  icon,
  wide = false,
  link = "/join-now",
}: ProgramCardProps) {
  if (wide) {
    return (
      <div className="bg-bg-white rounded-2xl overflow-hidden shadow-sm border border-border-soft flex flex-col md:flex-row group">
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
          {icon && (
            <div className="w-16 h-16 rounded-full bg-accent-light/30 flex items-center justify-center mb-6">
              <img src={icon} alt="" className="w-8 h-8 object-contain" />
            </div>
          )}
          <h3 className="font-heading text-3xl text-primary-dark font-semibold mb-4">
            {title}
          </h3>
          <p className="font-body text-text-muted mb-8 line-clamp-3 leading-relaxed">
            {description}
          </p>
          <Link
            to={link}
            className="font-body font-bold text-accent-green uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            LEARN MORE <span>→</span>
          </Link>
        </div>
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-l-3xl md:rounded-l-[4rem] group-hover:scale-105 transition-transform duration-700"
            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary rounded-2xl p-8 flex flex-col items-center text-center group transition-transform hover:-translate-y-1 shadow-lg">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-[6px] border-white/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="font-heading text-2xl text-white font-semibold mb-4">
        {title}
      </h3>
      <p className="font-body text-white/80 text-[15px] leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <Link
        to={link}
        className="border-[1.5px] border-white/80 text-white rounded-full px-8 py-3 font-body text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors"
      >
        Learn more
      </Link>
    </div>
  );
}
