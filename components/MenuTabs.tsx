"use client";

import { useState } from "react";

const menus = {
  Frühstück: ["Hoffrühstück", "mit Brötchen, Käse, Aufschnitt und hausgemachten Kleinigkeiten", "16,90 €"],
  Mittagessen: ["Saisongericht", "regional, frisch zubereitet und wechselnd", "ab 14,90 €"],
  "Kaffee & Kuchen": ["Kuchen aus der Hofküche", "täglich frisch – dazu Kaffee nach Wahl", "ab 4,50 €"],
  Abendkarte: ["Genuss am Abend", "besondere Gerichte für einen entspannten Abend", "auf Anfrage"],
} as const;

export function MenuTabs() {
  const [active, setActive] = useState<keyof typeof menus>("Frühstück");
  const [title, description, price] = menus[active];

  return (
    <section className="menu-section wrap" id="speisekarten" aria-labelledby="menu-heading">
      <div className="section-heading"><div><p className="eyebrow">Hofküche</p><h2 id="menu-heading">Für jeden Genussmoment.</h2></div><a className="text-link" href="#reservieren">Tisch reservieren <span>→</span></a></div>
      <div className="menu-tabs" role="tablist" aria-label="Speisekarten">
        {Object.keys(menus).map((name) => <button className={name === active ? "is-active" : ""} onClick={() => setActive(name as keyof typeof menus)} role="tab" aria-selected={name === active} key={name}>{name}</button>)}
      </div>
      <div className="menu-panel">
        <div><p className="eyebrow">Auszug · {active}</p><h3>{title}</h3><p>{description}</p></div>
        <strong>{price}</strong>
      </div>
      <p className="menu-note">Ausgewählte Beispielinhalte für den Pitch. Die vollständige Speisekarte wird vor Livegang ergänzt.</p>
    </section>
  );
}
