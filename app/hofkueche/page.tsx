import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MenuTabs } from "@/components/MenuTabs";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hofküche | Schmücker Hof",
  description: "Frühstück, regionale Küche, Kaffee und Kuchen in der Hofküche des Schmücker Hofs in Kirchhellen.",
};

export default function HofkuechePage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Hofküche" title={<>Essen mit Genuss.<br />Zeit zum Bleiben.</>} text="Von einem entspannten Frühstück bis zu Kaffee und Kuchen: In unserer Hofküche trifft regionale Küche auf herzliche Gastfreundschaft." primaryLabel="Tisch anfragen" primaryHref="#reservieren" secondaryLabel="Speisekarten ansehen" secondaryHref="#speisekarten" />
      <section className="intro wrap page-intro"><p className="eyebrow">Unsere Küche</p><div className="intro-grid"><h2>Regional verwurzelt.<br />Saisonal gedacht.</h2><p>Wir kochen mit dem, was die Region und die Saison besonders machen. Mit ehrlichen Zutaten, liebevollen Details und einem Platz für jeden Anlass.</p></div></section>
      <MenuTabs />
      <section className="opening wrap" aria-labelledby="opening-heading"><div><p className="eyebrow">Öffnungszeiten</p><h2 id="opening-heading">Wir freuen uns<br />auf Ihren Besuch.</h2></div><div className="opening-list"><p><span>Mittwoch–Sonntag</span><strong>08:00–18:00 Uhr</strong></p><p><span>Dienstag</span><strong>Ruhetag</strong></p><small>Öffnungszeiten und Angebote bitte vor dem Livegang final prüfen.</small></div></section>
      <section className="reservation" id="reservieren"><div className="wrap reservation-grid"><div><p className="eyebrow eyebrow--light">Reservierung</p><h2>Ihr Tisch<br />ist fast bereit.</h2></div><div><p>Für Ihre Anfrage erreichen Sie uns telefonisch oder per E-Mail. Im finalen Projekt wird hier das Reservierungssystem angebunden.</p><a className="button button--cream" href="mailto:hallo@schmuecker-hof.de?subject=Tischreservierung">Tisch anfragen <span>↗</span></a></div></div></section>
      <Footer />
    </main>
  );
}
