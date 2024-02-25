import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme | null;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  getTheme: () => Theme | null;
};
export const useThemeStore = create(
  persist<ThemeContextType>(
    (set, get) => ({
      theme: null,
      getTheme: () => get().theme,
      toggleTheme: () => {
        set({
          theme: toggleTheme(get().theme!),
        });
      },
      setTheme: (theme: Theme) => {
        set({ theme: setTheme(theme) });
      },
    }),
    {
      name: "theme",
    },
  ),
);

function toggleTheme(theme: Theme): Theme {
  document.documentElement.classList.toggle("dark");
  if (theme === "light") {
    return "dark";
  } else {
    return "light";
  }
}
function setTheme(theme: string): Theme {
  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    return "light";
  } else {
    document.documentElement.classList.add("dark");
    return "dark";
  }
}
