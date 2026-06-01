// Cases grid — GIFs are served unoptimized so they animate.
// Titles/tags for cases 02, 05, 06, 17, 21, 30 can be filled in once content is confirmed.

const cases = [
  { file: "case-15.gif", client: "McDonald's", title: "Mein Burger", tag: "Campaign" },
  { file: "case-04.gif", client: "McDonald's", title: "The Nürnburger", tag: "Campaign" },
  { file: "case-26.gif", client: "McDonald's", title: "McSundae — Interactive OOH", tag: "Campaign" },
  { file: "case-29.gif", client: "Audi", title: "#onemillionreasons", tag: "Social Campaign" },
  { file: "case-16.gif", client: "Audi", title: "Winter Campaign", tag: "Film" },
  { file: "case-10.gif", client: "Facebook", title: "Für jeden gibt es eine Gruppe", tag: "Campaign" },
  { file: "case-11.gif", client: "Google Chrome", title: "The web is what you make of it", tag: "Campaign" },
  { file: "case-19.gif", client: "Adidas", title: "Sport Campaign", tag: "Film" },
  { file: "case-20.gif", client: "Nike", title: "World Cup", tag: "Campaign" },
  { file: "case-28.gif", client: "eBay", title: "App Launch", tag: "Digital" },
  { file: "case-22.gif", client: "Campaign", title: "Case", tag: "Film" },
  { file: "case-01.gif", client: "Campaign", title: "Art Direction", tag: "Brand" },
  { file: "case-02.gif", client: "Campaign", title: "Case", tag: "Brand" },
  { file: "case-05.gif", client: "Campaign", title: "Case", tag: "Film" },
  { file: "case-06.gif", client: "Campaign", title: "Case", tag: "Digital" },
  { file: "case-12.gif", client: "Campaign", title: "Case", tag: "Brand" },
  { file: "case-13.gif", client: "Campaign", title: "Case", tag: "Brand" },
  { file: "case-17.gif", client: "Campaign", title: "Case", tag: "Brand" },
  { file: "case-21.gif", client: "Campaign", title: "Case", tag: "Social" },
  { file: "case-30.gif", client: "Campaign", title: "Case", tag: "Film" },
  { file: "case-vorfreude.gif", client: "Campaign", title: "Case", tag: "Campaign" },
];

export default function Cases() {
  return (
    <section id="work">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto pt-20 lg:pt-28 pb-12 lg:pb-16">
        <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">
          Selected Work
        </p>
        <h2 className="text-2xl sm:text-3xl font-light text-stone-950 tracking-tight max-w-xl">
          Campaigns, concepts and digital work.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <div key={c.file} className="relative overflow-hidden bg-stone-950 aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/cases/${c.file}`}
              alt={`${c.client} — ${c.title}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
