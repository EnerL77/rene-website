const capabilities = [
  {
    title: "Campaign Ideas",
    description:
      "From single-minded propositions to fully built-out creative platforms with headlines, scripts and social executions.",
    tag: "Concept",
  },
  {
    title: "Social & Performance Concepts",
    description:
      "Ideas built for the scroll — adapted across formats, tones and channels without losing the thread.",
    tag: "Social",
  },
  {
    title: "AI Visual Exploration",
    description:
      "Fast visual routes and mood directions generated with AI, directed with a senior creative eye.",
    tag: "Visual",
  },
  {
    title: "Landing Pages & Prototypes",
    description:
      "Functional pages and demos built with AI-assisted coding — from concept to clickable in hours, not weeks.",
    tag: "Build",
  },
  {
    title: "Copy & Content Systems",
    description:
      "Scalable copy frameworks, brand voice guidelines and content hierarchies that hold across every touchpoint.",
    tag: "Copy",
  },
  {
    title: "Brand Storytelling",
    description:
      "Finding the through-line: the narrative that makes a brand distinct, memorable and worth talking about.",
    tag: "Strategy",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">
        Selected Directions
      </p>
      <h2 className="text-2xl sm:text-3xl font-light text-stone-950 tracking-tight mb-16 max-w-xl">
        What the work looks like.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100">
        {capabilities.map((item) => (
          <div
            key={item.title}
            className="bg-white p-8 lg:p-10 group hover:bg-stone-50 transition-colors duration-200 flex flex-col"
          >
            <span className="inline-block text-xs tracking-widest uppercase text-accent mb-6">
              {item.tag}
            </span>
            <h3 className="text-lg font-medium text-stone-950 mb-3 group-hover:text-stone-700 transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed flex-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
