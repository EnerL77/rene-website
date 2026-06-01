const steps = [
  {
    number: "1",
    title: "Decode the problem",
    description:
      "I look past the written brief and find the real tension: What needs to be solved, what needs to be said, and what people should actually feel, understand or do.",
  },
  {
    number: "2",
    title: "Find the creative angle",
    description:
      "The best idea is rarely the obvious one. I develop campaign routes, hooks, stories and formats that make the brand easier to notice, remember and choose.",
  },
  {
    number: "3",
    title: "Make it real fast",
    description:
      "Ideas get better when they become visible. I use copy, scripts, decks, AI visuals, landing pages and prototypes to turn abstract thinking into something people can react to.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
      <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">
        Approach
      </p>
      <h2 className="text-2xl sm:text-3xl font-light text-stone-950 tracking-tight mb-4 max-w-xl">
        Less process. More progress.
      </h2>
      <p className="text-sm text-stone-500 mb-12 max-w-lg leading-relaxed">
        Useful when the brief is unclear, the idea is missing, the team is
        stuck, or the work needs to become sharper fast.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {steps.map((step, i) => (
          <div key={step.number} className="relative">
            {/* Connector line between steps (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-3 left-full w-8 h-px bg-stone-200 z-10" />
            )}
            <div className="w-8 h-8 flex items-center justify-center border border-stone-200 text-xs text-stone-400 mb-8">
              {step.number}
            </div>
            <h3 className="text-xl font-medium text-stone-950 mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
