import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schmücker Hof | Genuss, Natur & besondere Momente",
  description:
    "Schmücker Hof in Kirchhellen: Hofküche, Hofmarkt, Hofplantagen und besondere Feiern.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
