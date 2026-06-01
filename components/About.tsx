export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
      <p className="text-xs tracking-widest uppercase text-stone-400 mb-10">
        About
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Headline — left column */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-950 leading-[1.25] tracking-tight">
            Creative Director.
            <br />
            AI practitioner.
            <br />
            Hands-on maker.
          </h2>
        </div>

        {/* Body — right column */}
        <div className="space-y-5 text-stone-600 font-light leading-relaxed">
          <p>
            I&apos;m René Lamberti, a Berlin-based, award-winning Creative Director with 20+
            years of experience in advertising, campaigns, copywriting and brand
            storytelling. I worked for international top brands including Google, Facebook or BMW
            and leading agencies such as Jung von Matt or BBDO – developing ideas for global
            brands across tech, automotive, retail, food and lifestyle.
          </p>
          <p>
            Today, I combine senior creative judgment with hands-on AI
            workflows, rapid prototyping and vibe coding. I&apos;m useful when a
            brand needs a sharper idea, faster creative routes or a way to turn
            abstract thinking into something visible and testable.
          </p>
        </div>
      </div>

      <div className="mt-16 h-px bg-stone-100 w-full" />
    </section>
  );
}
