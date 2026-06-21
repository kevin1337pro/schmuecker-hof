# 06 – Technik Stack

## Empfehlung für den Pitch-Prototyp

Für den Pitch empfiehlt sich ein moderner, schneller und visuell starker Prototyp mit:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui oder eigene Komponenten
- Framer Motion für dezente Animationen
- statische Content-Dateien in TypeScript oder JSON

## Warum Next.js?

- sehr gute Performance
- moderne Entwicklerbasis
- einfache Komponentenstruktur
- ideal für Pitch-Prototypen
- später erweiterbar mit CMS
- SEO-freundlich

## Projektstruktur

```text
schmuecker-hof-website/
├── app/
│   ├── page.tsx
│   ├── erleben/page.tsx
│   ├── hofkueche/page.tsx
│   ├── hofmarkt/page.tsx
│   ├── hofplantagen/page.tsx
│   ├── feiern-hochzeiten/page.tsx
│   ├── saison-specials/page.tsx
│   ├── jobs/page.tsx
│   └── kontakt/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── CurrentHighlights.tsx
│   │   ├── ExperienceGrid.tsx
│   │   ├── SeasonCalendar.tsx
│   │   ├── MenuCards.tsx
│   │   ├── EventInquiry.tsx
│   │   ├── JobApplication.tsx
│   │   └── VisitPlanner.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Section.tsx
│       └── Container.tsx
├── content/
│   ├── navigation.ts
│   ├── highlights.ts
│   ├── menus.ts
│   ├── season.ts
│   ├── jobs.ts
│   └── pages.ts
├── public/
│   ├── images/
│   └── logo.svg
├── styles/
│   └── globals.css
└── package.json
```

## Spätere CMS-Optionen

Wenn der Schmücker Hof Inhalte selbst pflegen soll:

- WordPress als Headless CMS
- Sanity
- Strapi
- Storyblok
- Directus

Für einen klassischen Kunden, der Inhalte selbst pflegen möchte, ist WordPress am verständlichsten. Für eine hochmoderne Umsetzung ist Sanity oder Storyblok sehr gut.

## SEO-Grundlagen

Jede Seite benötigt:

- eindeutigen Title
- Meta Description
- sprechende URL
- H1 nur einmal
- strukturierte H2/H3
- lokale Keywords
- Open Graph Bild
- schnelle Ladezeit

## Performance-Ziele

- Mobile PageSpeed über 85
- Desktop PageSpeed über 90
- Bilder als WebP/AVIF
- Lazy Loading
- saubere HTML-Struktur
- keine unnötigen Animationen

## Datenschutz

Zu beachten:

- Impressum
- Datenschutz
- Cookie Consent bei externen Diensten
- Google Maps nur datenschutzkonform einbinden
- Formulare mit Datenschutz-Checkbox
- keine ungefragten Tracking-Skripte

