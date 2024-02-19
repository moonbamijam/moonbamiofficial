'use client'

import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="dark" disableTransitionOnChange>
      { children }
    </ThemeProvider>
  )
}

export default Providers