# 08 – Aufgabenpakete für Codex

## Phase 1: Projektbasis

### Task 1.1 – Next.js-Projekt prüfen oder anlegen

Ziel:

Ein sauberes Next.js-Projekt mit TypeScript und Tailwind CSS.

Akzeptanzkriterien:

- Projekt startet lokal
- TypeScript ist aktiv
- Tailwind ist aktiv
- `app/page.tsx` existiert
- globale Styles sind vorhanden

### Task 1.2 – Grundstruktur anlegen

Lege diese Ordner an:

```text
components/layout
components/sections
components/ui
content
public/images
```

Akzeptanzkriterien:

- Ordnerstruktur vorhanden
- keine ungenutzten Demo-Dateien

## Phase 2: Designsystem

### Task 2.1 – Design Tokens definieren

Lege Farben, Abstände und Typografie in Tailwind oder CSS Variablen an.

Akzeptanzkriterien:

- Primärfarbe Schmücker Blau vorhanden
- Creme, Grün, Beere, Sand und Textfarbe vorhanden
- globale Typografie eingerichtet

### Task 2.2 – UI-Basiskomponenten erstellen

Komponenten:

- Button
- Container
- Section
- Card

Akzeptanzkriterien:

- Komponenten sind wiederverwendbar
- Varianten für primary, secondary, ghost
- responsive Abstände

## Phase 3: Layout

### Task 3.1 – Header bauen

Bestandteile:

- Logo
- Navigation
- CTA „Tisch reservieren“
- Mobile Menü

Akzeptanzkriterien:

- Desktop und Mobile funktionieren
- aktive Links optional vorbereitet
- Header wirkt hochwertig

### Task 3.2 – Footer bauen

Bestandteile:

- Adresse
- Kontakt
- Navigation
- Öffnungszeiten
- Social Links
- Impressum/Datenschutz

Akzeptanzkriterien:

- Footer ist informativ
- auf Mobile gut lesbar

## Phase 4: Startseite

### Task 4.1 – Hero Section

Baue `Hero.tsx`.

Props:

- eyebrow
- headline
- subheadline
- image
- primaryCta
- secondaryCta

Akzeptanzkriterien:

- großer emotionaler Einstieg
- CTA sichtbar
- responsive

### Task 4.2 – Aktuell auf dem Hof

Baue `CurrentHighlights.tsx`.

Akzeptanzkriterien:

- 3 bis 6 Highlight-Karten
- Titel, Beschreibung, Link
- saisonaler Charakter

### Task 4.3 – Vier Welten Grid

Baue `ExperienceGrid.tsx`.

Karten:

- Hofküche
- Hofmarkt
- Hofplantagen
- Feiern

Akzeptanzkriterien:

- Bild, Titel, Text, Button
- Hover-Effekt
- mobile 1 Spalte, Desktop 4 Spalten

## Phase 5: Unterseiten

### Task 5.1 – Hofküche-Seite

Inhalte:

- Hero
- Speisekarten
- Öffnungszeiten
- Reservierungs-CTA
- Galerieplatzhalter

### Task 5.2 – Hofmarkt-Seite

Inhalte:

- Hero
- aktuelle Saisonprodukte
- Produktgruppen
- Präsentkorb-CTA
- Öffnungszeiten

### Task 5.3 – Hofplantagen-Seite

Inhalte:

- Hero
- Ernte & Saison
- Selbstpflücken
- Erdbeer-Drive-In
- FAQ

### Task 5.4 – Feiern & Hochzeiten-Seite

Inhalte:

- luxuriöser Hero
- Kaminsaal
- Innenhof
- Hochzeiten
- Firmenfeiern
- Anfrageformular

### Task 5.5 – Jobs-Seite

Inhalte:

- Arbeitgeberpositionierung
- offene Bereiche
- Benefits
- Kurzbewerbungsformular

### Task 5.6 – Kontakt-Seite

Inhalte:

- Adresse
- Telefon
- Mail
- Öffnungszeiten
- Maps-Platzhalter
- Kontaktformular

## Phase 6: Formulare

### Task 6.1 – EventInquiry-Komponente

Felder:

- Name
- E-Mail
- Telefon
- Art der Feier
- Wunschtermin
- Gästezahl
- Nachricht
- Datenschutz

### Task 6.2 – JobApplication-Komponente

Felder:

- Name
- Telefon
- E-Mail
- Bereich
- Verfügbarkeit
- Nachricht
- Datenschutz

## Phase 7: Qualität

### Task 7.1 – SEO-Metadaten

Für jede Seite:

- Title
- Description
- Open Graph Daten

### Task 7.2 – Mobile Check

Prüfe:

- Navigation
- Hero
- Karten
- Formulare
- Footer

### Task 7.3 – Build Check

Führe aus:

```bash
npm run build
npm run lint
```

Akzeptanzkriterien:

- keine Buildfehler
- keine kritischen Lintfehler

