import type { Metadata } from 'next';
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
    <html lang="en">
      <body className="bg-rich-black">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
