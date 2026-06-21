import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const worlds = [
  { id: "hofkueche", href: "/hofkueche", number: "01", title: "Hofküche", text: "Frühstück, regionale Küche, Kaffee und Kuchen – mit Zeit zum Genießen.", link: "Speisekarten entdecken" },
  { id: "hofmarkt", href: "/#hofmarkt", number: "02", title: "Hofmarkt", text: "Frisch vom Feld, aus der Region und liebevoll für Sie ausgewählt.", link: "Im Hofmarkt stöbern" },
  { id: "hofplantagen", href: "/#hofplantagen", number: "03", title: "Hofplantagen", text: "Was die Saison besonders macht, wächst direkt vor unserer Haustür.", link: "Saison erleben" },
  { id: "feiern", href: "/feiern-hochzeiten", number: "04", title: "Feiern", text: "Ein besonderer Rahmen für Hochzeiten, Feste und gemeinsame Erinnerungen.", link: "Feier planen" },
];

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-image" src="/images/hof-eingang.jpg" alt="Eingang des Schmücker Hofs" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="eyebrow eyebrow--light">Willkommen in Kirchhellen</p>
          <h1 id="hero-title">Genuss, Natur<br />und besondere Momente.</h1>
          <p className="hero-copy">Der Schmücker Hof ist Ihr regionaler Erlebnisort für gute Küche, frische Produkte und Anlässe, die in Erinnerung bleiben.</p>
          <div className="hero-actions">
            <a className="button" href="#reservieren">Tisch reservieren <span>↗</span></a>
            <a className="text-link text-link--light" href="#erleben">Den Hof erleben <span>↓</span></a>
          </div>
        </div>
        <aside className="season-card">
          <p className="eyebrow">Jetzt auf dem Hof</p>
          <p className="season-card-title">Die Erdbeerzeit ist da.</p>
          <p>Frisch im Hofmarkt und zum Selbstpflücken.</p>
          <a href="#hofplantagen">Mehr erfahren <span>→</span></a>
        </aside>
      </section>

      <section className="intro wrap" id="erleben">
        <p className="eyebrow">Mehr als ein Hof</p>
        <div className="intro-grid">
          <h2>Ein Ort, der nach Zuhause schmeckt.</h2>
          <p>Seit Generationen verbinden wir ländliche Atmosphäre mit echter Gastfreundschaft. Heute ist der Schmücker Hof ein Ort zum Einkaufen, Genießen, Feiern und Entdecken – für die ganze Region.</p>
        </div>
      </section>

      <section className="worlds wrap" aria-labelledby="worlds-title">
        <div className="section-heading">
          <div><p className="eyebrow">Entdecken</p><h2 id="worlds-title">Vier Welten. Ein Hof.</h2></div>
          <a className="text-link" href="#besuch">Alles auf einen Blick <span>→</span></a>
        </div>
        <div className="world-grid">
          {worlds.map((world) => (
            <article className="world-card" id={world.id} key={world.title}>
              <p className="world-number">{world.number}</p>
              <h3>{world.title}</h3>
              <p>{world.text}</p>
              <a href={world.href}>{world.link} <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="reservation" id="reservieren">
        <div className="wrap reservation-grid">
          <div><p className="eyebrow eyebrow--light">Hofküche</p><h2>Heute schon<br />genießen?</h2></div>
          <div><p>Ob entspanntes Frühstück, eine kurze Auszeit oder ein Abend mit Freunden: Wir freuen uns auf Ihren Besuch.</p><a className="button button--cream" href="mailto:hallo@schmuecker-hof.de">Tisch anfragen <span>↗</span></a></div>
        </div>
      </section>

      <section className="visit wrap" id="besuch">
        <div><p className="eyebrow">Besuch planen</p><h2>Einfach ankommen.<br />Länger bleiben.</h2></div>
        <div className="visit-details">
          <div><p className="detail-label">Öffnungszeiten</p><p>Mittwoch–Sonntag<br /><strong>08:00–18:00 Uhr</strong></p><small>Dienstag ist Ruhetag.</small></div>
          <div><p className="detail-label">Adresse</p><p>Schmücker Hof 1<br /><strong>46244 Bottrop-Kirchhellen</strong></p><a className="text-link" href="mailto:hallo@schmuecker-hof.de">Anfahrt anfragen <span>→</span></a></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
