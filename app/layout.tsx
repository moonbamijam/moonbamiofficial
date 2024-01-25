import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Providers from '@providers/providers';
import '@styles/globals.css';

import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';

export const metadata: Metadata = {
  title: {
    default: "Moonbami",
    template: "Moonbami | %s"
  },
  description: 'An aspiring full-stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" dark:bg-rich-black">
        <Providers >
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
