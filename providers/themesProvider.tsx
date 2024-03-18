"use client";

import { ThemeProvider } from "next-themes";

const ThemesProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemesProvider;
