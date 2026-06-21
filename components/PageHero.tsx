import Image from "next/image";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assets";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({ eyebrow, title, text, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image className="hero-image" src={assetPath("/images/hof-eingang.jpg")} alt="Schmücker Hof in Kirchhellen" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="page-hero-content wrap">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-copy">{text}</p>
        <div className="hero-actions">
          <a className="button" href={primaryHref}>{primaryLabel} <span>↗</span></a>
          {secondaryLabel && secondaryHref ? <a className="text-link text-link--light" href={secondaryHref}>{secondaryLabel} <span>↓</span></a> : null}
        </div>
      </div>
    </section>
  );
}
