import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type Theme, STORAGE_KEY } from "./theme";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "standard",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === "comic" ? "comic" : "standard";
    } catch {
      return "standard";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "comic") {
      root.setAttribute("data-theme", "comic");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () =>
    setTheme(t => (t === "standard" ? "comic" : "standard"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
