export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-40 px-6 lg:px-12 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.2] tracking-tight mb-12">
            Need a sharper idea, faster routes or an AI-powered creative
            workflow?
          </h2>

          <a
            href="mailto:post@renelamberti.de"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-950 text-sm tracking-wide hover:bg-accent hover:text-white transition-colors duration-200"
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
