export function StatsBar() {
  const stats = [
    { icon: "/assets/Users.png", number: "1K", label: "Student's Everyday" },
    { icon: "/assets/Trophy.png", number: "7+", label: "Award Winnings" },
    {
      icon: "/assets/Meditation.png",
      number: "4+",
      label: "Years of Experience",
    },
    { icon: "/assets/Trust.png", number: "100+", label: "Happy Clients" },
  ];

  return (
    <section className="bg-bg-cream py-16 px-6 md:px-10 relative overflow-hidden">
      <img
        src="/assets/Leaf.png"
        alt=""
        className="absolute top-0 right-0 w-48 opacity-10 pointer-events-none"
      />
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 divide-x divide-border-soft/50 relative z-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <div className="w-16 h-16 rounded-full bg-accent-light/30 flex items-center justify-center mb-4">
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="font-heading text-4xl text-primary-dark font-bold mb-2">
              {stat.number}
            </h3>
            <p className="font-body text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
