interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 border border-border-soft flex flex-col relative group hover:shadow-lg transition-all duration-300">
      <div className="absolute top-6 right-8 font-heading text-6xl text-accent-light/20 font-bold pointer-events-none select-none">
        {number}
      </div>
      <div className="w-16 h-16 rounded-full bg-accent-light/30 flex items-center justify-center mb-6">
        <img src={icon} alt="" className="w-8 h-8 object-contain" />
      </div>
      <h3 className="font-heading text-2xl text-primary-dark font-semibold mb-4 pr-12">
        {title}
      </h3>
      <p className="font-body text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
