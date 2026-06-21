import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Hofküche", href: "/hofkueche" },
  { label: "Hofmarkt", href: "/#hofmarkt" },
  { label: "Hofplantagen", href: "/#hofplantagen" },
  { label: "Feiern & Hochzeiten", href: "/feiern-hochzeiten" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Schmücker Hof – Startseite">
        <Image src="/images/logo.png" alt="Schmücker Hof" width={58} height={58} priority />
        <span>Schmücker Hof</span>
      </Link>
      <nav aria-label="Hauptnavigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="button button--small" href="/hofkueche#reservieren">Tisch reservieren</Link>
      <details className="mobile-nav">
        <summary aria-label="Navigation öffnen"><span /><span /><span /></summary>
        <nav aria-label="Mobile Hauptnavigation">
          {navigation.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
          <Link className="button" href="/hofkueche#reservieren">Tisch reservieren</Link>
        </nav>
      </details>
    </header>
  );
}
