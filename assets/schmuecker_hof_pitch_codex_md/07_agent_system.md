# 07 – Agent-System für die Umsetzung

## Idee

Wenn Codex oder ein anderer Coding-Agent agentisch arbeiten kann, sollte das Projekt in spezialisierte Rollen aufgeteilt werden. Jeder Agent hat eine klare Verantwortung, damit die Website nicht chaotisch entsteht.

## Agent 1: Project Architect

### Aufgabe

Legt Projektstruktur, technische Basis und Komponentenarchitektur fest.

### Verantwortlichkeiten

- Next.js-Projektstruktur definieren
- Komponenten sauber trennen
- Routing aufbauen
- Datenstruktur für Content entwerfen
- Wiederverwendbarkeit sicherstellen

### Output

- Projektgerüst
- Ordnerstruktur
- Basiskomponenten
- technische Konventionen

## Agent 2: Brand & Design Agent

### Aufgabe

Übersetzt die Marke Schmücker Hof in ein modernes Designsystem.

### Verantwortlichkeiten

- Farben definieren
- Typografie festlegen
- Layout-Regeln erstellen
- Button- und Card-Stile entwickeln
- responsive Design prüfen

### Output

- Design Tokens
- Tailwind-Konfiguration
- UI-Komponenten
- Beispielsektionen

## Agent 3: Content Agent

### Aufgabe

Erstellt und strukturiert die Inhalte für alle Seiten.

### Verantwortlichkeiten

- Texte in modernen Ton umschreiben
- Seiteninhalte in Content-Dateien strukturieren
- CTA-Texte entwickeln
- SEO-relevante Inhalte vorbereiten

### Output

- `content/pages.ts`
- `content/navigation.ts`
- `content/highlights.ts`
- `content/season.ts`
- Seitentexte

## Agent 4: Frontend Implementation Agent

### Aufgabe

Baut die UI-Komponenten und Seiten.

### Verantwortlichkeiten

- Header/Footer bauen
- Startseite umsetzen
- Unterseiten erstellen
- Komponenten zusammensetzen
- responsive Verhalten sichern

### Output

- fertige Seiten
- wiederverwendbare Komponenten
- mobile Optimierung

## Agent 5: Conversion Agent

### Aufgabe

Optimiert die Website für Anfragen, Reservierungen und Bewerbungen.

### Verantwortlichkeiten

- CTA-Platzierung prüfen
- Formulare gestalten
- Nutzerwege vereinfachen
- Kontaktpunkte sichtbar machen
- Sticky Mobile CTA planen

### Output

- bessere CTA-Struktur
- optimierte Formulare
- Conversion-Checkliste

## Agent 6: QA & Launch Agent

### Aufgabe

Prüft Qualität, Performance, Barrierefreiheit und Fehler.

### Verantwortlichkeiten

- Links testen
- mobile Ansicht prüfen
- Accessibility-Basics prüfen
- SEO-Metadaten prüfen
- Performance optimieren
- Build testen

### Output

- QA-Bericht
- Bugfix-Liste
- Launch-Freigabe

## Empfohlener Agenten-Ablauf

```text
1. Project Architect erstellt Basis
2. Brand & Design Agent definiert Designsystem
3. Content Agent liefert Content-Struktur
4. Frontend Agent baut Komponenten und Seiten
5. Conversion Agent optimiert Nutzerwege
6. QA Agent prüft und finalisiert
```

## Agentisches Arbeitsprinzip

Jeder Agent arbeitet nach diesem Muster:

1. Ziel verstehen
2. bestehende Dateien prüfen
3. kleine, saubere Änderungen machen
4. Build oder Tests ausführen
5. Ergebnis dokumentieren
6. nächste konkrete Aufgabe vorschlagen

## Wichtig für Codex

Codex sollte nie alles auf einmal ändern. Jede Aufgabe sollte klein und überprüfbar sein.

Gute Aufgabe:

> Erstelle die Komponente `Hero.tsx` mit Props für Headline, Subheadline, Buttons und Hintergrundbild.

Schlechte Aufgabe:

> Baue die ganze Website komplett fertig.

