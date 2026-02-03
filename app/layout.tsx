import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@layouts/header/Header";
import ThemesProvider from "@features/themes/themesProvider";
import Blob from "@components/bg/Blob";
import DarkGradient from "@components/bg/DarkGradient";
import "@styles/globals.css";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
    "Building things with love. I am Moonbami, pursuing a career of being a software engineer.",
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
      url: "https://github.com/moonbamijam",
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
          <Header />
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Blob />
          <DarkGradient />
        </ThemesProvider>
      </body>
    </html>
  );
}
