"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const moments = [
  {
    eyebrow: "Am Morgen",
    title: "Zeit für ein gutes Frühstück.",
    text: "Langsam ankommen, gemeinsam genießen und den Tag genau richtig beginnen.",
    action: "Frühstück entdecken",
    href: "/hofkueche#speisekarten",
    note: "Hofküche · Mittwoch bis Sonntag",
  },
  {
    eyebrow: "In der Saison",
    title: "Direkt vom Feld in Ihren Moment.",
    text: "Erdbeeren, Selbstpflücken und kleine Genussmomente, die nach Sommer schmecken.",
    action: "Saison erleben",
    href: "/#hofplantagen",
    note: "Jetzt aktuell · Erdbeerzeit",
  },
  {
    eyebrow: "Für besondere Tage",
    title: "Ein Anlass mit Atmosphäre.",
    text: "Vom ersten Glas bis zum letzten Tanz: Feiern, die sich ganz nach Ihnen anfühlen.",
    action: "Feier planen",
    href: "/feiern-hochzeiten#anfrage",
    note: "Persönlich geplant · Unverbindlich anfragen",
  },
] as const;

type HofMomentsProps = { image: string };

export function HofMoments({ image }: HofMomentsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = moments[activeIndex];

  return (
    <section className="hof-moments" aria-labelledby="moments-heading">
      <div className="wrap hof-moments-grid">
        <div className="moments-nav">
          <p className="eyebrow eyebrow--light">Ihr Moment auf dem Hof</p>
          <h2 id="moments-heading">Was darf es<br />heute sein?</h2>
          <div className="moments-options" role="tablist" aria-label="Hofmomente auswählen">
            {moments.map((moment, index) => (
              <button className={index === activeIndex ? "is-active" : ""} key={moment.eyebrow} role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)}>
                <span>0{index + 1}</span>{moment.eyebrow}
              </button>
            ))}
          </div>
        </div>
        <div className="moment-stage" role="tabpanel" aria-live="polite">
          <div className="moment-image"><Image src={image} alt="Erdbeerzeit auf dem Schmücker Hof" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
          <div className="moment-orbit moment-orbit--one" aria-hidden="true">✦</div>
          <div className="moment-orbit moment-orbit--two" aria-hidden="true">●</div>
          <div className="moment-content" key={active.eyebrow}>
            <p className="eyebrow">{active.eyebrow}</p>
            <h3>{active.title}</h3>
            <p>{active.text}</p>
            <Link className="text-link" href={active.href}>{active.action} <span>→</span></Link>
          </div>
          <p className="moment-note">{active.note}</p>
        </div>
      </div>
    </section>
  );
}
