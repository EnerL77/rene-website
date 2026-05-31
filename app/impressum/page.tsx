import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — René Lamberti",
  description: "Gesetzliche Angaben gemäß § 5 TMG.",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <main className="min-h-screen px-6 lg:px-12 py-32 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-950 transition-colors duration-200 mb-16 inline-block"
      >
        ← Zurück
      </Link>

      <h1 className="text-3xl sm:text-4xl font-light text-stone-950 tracking-tight mb-16">
        Impressum
      </h1>

      <div className="space-y-12 text-sm text-stone-600 font-light leading-relaxed">

        <section>
          <h2 className="text-xs tracking-widest uppercase text-stone-400 mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            René Lamberti<br />
            {/* BITTE ERSETZEN: */}
            Contessaweg 28a 1<br />
            14089 Berlin<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest uppercase text-stone-400 mb-4">
            Kontakt
          </h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:post@renelamberti.de"
              className="text-stone-950 hover:text-accent transition-colors duration-200"
            >
              post@renelamberti.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest uppercase text-stone-400 mb-4">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            René Lamberti<br />
            {/* BITTE ERSETZEN: */}
            Musterstraße 1<br />
            10115 Berlin
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest uppercase text-stone-400 mb-4">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-4">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest uppercase text-stone-400 mb-4">
            Haftung für Links
          </h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xs tracking-widest uppercase text-stone-400 mb-4">
            Urheberrecht
          </h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

      </div>
    </main>
  );
}
