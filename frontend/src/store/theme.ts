import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => {
        set({ theme });
        updateDOMTheme(theme);
      },
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        set({ theme: newTheme });
        updateDOMTheme(newTheme);
      },
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          updateDOMTheme(state.theme);
        }
      },
    }
  )
);

function updateDOMTheme(theme: Theme) {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}

