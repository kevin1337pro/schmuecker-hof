import type { Metadata } from "next";
import { EventInquiry } from "@/components/EventInquiry";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Feiern & Hochzeiten | Schmücker Hof",
  description: "Hochzeiten, private Feiern und Firmenfeste in besonderer Atmosphäre auf dem Schmücker Hof.",
};

const occasions = [
  ["Hochzeiten", "Vom ersten Kennenlernen bis zum letzten Tanz: Wir geben Ihrem Tag den passenden Rahmen."],
  ["Private Feiern", "Geburtstag, Jubiläum oder Familienfest – persönlich geplant und entspannt gefeiert."],
  ["Firmenfeiern", "Raus aus dem Alltag, zusammenkommen und gute Gespräche an einem besonderen Ort führen."],
];

export default function FeiernHochzeitenPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Feiern & Hochzeiten" title={<>Momente, die<br />bleiben.</>} text="Zwischen ländlicher Atmosphäre, stilvollem Kaminsaal und charmantem Innenhof entsteht Raum für besondere Erinnerungen." primaryLabel="Feier anfragen" primaryHref="#anfrage" secondaryLabel="Unsere Räume entdecken" secondaryHref="#raeume" />
      <section className="intro wrap page-intro"><p className="eyebrow">Ihr Anlass</p><div className="intro-grid"><h2>Besonders feiern.<br />Ganz bei sich sein.</h2><p>Ob Hochzeit, Familienfest oder Firmenevent: Wir verbinden persönliche Begleitung mit einem Ort, der seinen eigenen Charakter mitbringt.</p></div></section>
      <section className="rooms" id="raeume"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">Räume & Atmosphäre</p><h2>Der passende Rahmen.</h2></div></div><div className="room-grid"><article className="room-card room-card--blue"><p className="eyebrow eyebrow--light">01 · Stilvoll</p><h3>Der Kaminsaal</h3><p>Wärme, Ruhe und ein eleganter Rahmen für Feste mit besonderem Anspruch.</p></article><article className="room-card room-card--sand"><p className="eyebrow">02 · Unter freiem Himmel</p><h3>Der Innenhof</h3><p>Offen, entspannt und voller Atmosphäre – perfekt für einen Empfang oder lange Sommerabende.</p></article><article className="room-card room-card--green"><p className="eyebrow eyebrow--light">03 · Persönlich</p><h3>Individuell geplant</h3><p>Menü, Ablauf und Raumgefühl entwickeln wir gemeinsam passend zu Ihrem Anlass.</p></article></div></div></section>
      <section className="occasions wrap"><p className="eyebrow">Was Sie feiern möchten</p><div className="occasion-grid">{occasions.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="inquiry-section" id="anfrage"><div className="wrap inquiry-grid"><div><p className="eyebrow">Unverbindlich anfragen</p><h2>Erzählen Sie uns<br />von Ihrem Fest.</h2><p>Wir melden uns persönlich bei Ihnen und besprechen die Möglichkeiten für Ihren Wunschtermin.</p></div><EventInquiry /></div></section>
      <Footer />
    </main>
  );
}
