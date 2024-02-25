"use client";
import { type FC, type ReactNode, useEffect } from "react";
import { useThemeStore } from "~/context/themeStore";

interface ThemeProviderProps {
  children: ReactNode;
}
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { setTheme, getTheme } = useThemeStore();
  useEffect(() => {
    if (getTheme()) {
      setTheme(getTheme()!);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, [getTheme, setTheme]);
  return <>{children}</>;
};

export default ThemeProvider;
