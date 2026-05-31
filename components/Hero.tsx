import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

        {/* Text */}
        <div>
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-10">
            20+ years in advertising, digital and brand creation
          </p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-stone-950 leading-[1.05] tracking-tight mb-8">
            Creative Direction
            <br />
            <span className="italic">for the AI age.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl leading-relaxed mb-12 font-light">
            Campaigns, content and prototypes — built with senior creative
            thinking and AI-powered workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-stone-950 text-white text-sm tracking-wide hover:bg-stone-800 transition-colors duration-200"
            >
              Let's Talk
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-stone-300 text-stone-950 text-sm tracking-wide hover:border-stone-950 transition-colors duration-200"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden">
            <Image
              src="/rene-profilbild.webp"
              alt="René Lamberti"
              fill
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border border-stone-200 -z-10 hidden lg:block" />
        </div>

      </div>

      <div className="mt-20 h-px bg-stone-100 w-full" />
    </section>
  );
}
