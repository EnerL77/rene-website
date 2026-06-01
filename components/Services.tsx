const services = [
  {
    number: "01",
    title: "Campaign Concepts",
    description:
      "Big ideas, campaign platforms, headlines, scripts, social ideas and integrated creative concepts.",
  },
  {
    number: "02",
    title: "AI-powered Content Creation",
    description:
      "Fast development of visual routes, social assets, copy variations, content formats and campaign territories using modern AI tools.",
  },
  {
    number: "03",
    title: "Creative AI Workflows",
    description:
      "Helping brands and agencies use AI in a way that improves creative quality, not just output volume.",
  },
  {
    number: "04",
    title: "Rapid Prototyping / Vibe Coding",
    description:
      "Turning ideas into landing pages, clickable demos, product prototypes and proof-of-concepts with AI-assisted coding workflows.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section label */}
      <p className="text-xs tracking-widest uppercase text-stone-400 mb-12">
        Services
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-100">
        {services.map((service) => (
          <div
            key={service.number}
            className="bg-white p-10 lg:p-14 group hover:bg-stone-950 transition-colors duration-300"
          >
            <span className="block text-xs tracking-widest text-stone-300 group-hover:text-stone-600 mb-8 transition-colors duration-300">
              {service.number}
            </span>
            <h3 className="text-xl font-medium text-stone-950 group-hover:text-white mb-4 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-stone-500 group-hover:text-stone-400 leading-relaxed transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
