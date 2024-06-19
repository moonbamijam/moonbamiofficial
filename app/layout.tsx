import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@components/header/Header";
import ThemesProvider from "@providers/themesProvider";
import SmallGridLines from "@components/bg/SmallGridLines";
import NavMenuBtn from "@components/buttons/NavMenuBtn";
import "@styles/globals.css";

const inter = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Moonbami",
    template: "Moonbami | %s",
  },
  description:
    "Pursuing a career for being a developer. Still a novice, but making progress on a daily basis.",
  manifest: "/manifest.json",
  keywords: [
    "moonbami",
    "portfolio",
    "dev-portfolio",
    "developer",
    "jam moonbami",
  ],
  authors: [
    { name: "Jam Moonbami" },
    {
      name: "Jam Moonbami",
      url: "https://github.com/MoonbamiOfficial",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemesProvider>
          <SmallGridLines />
          <Header />
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <NavMenuBtn />
        </ThemesProvider>
      </body>
    </html>
  );
}
