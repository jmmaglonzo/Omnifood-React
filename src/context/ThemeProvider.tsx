import { useEffect, useState, ReactNode } from "react";
import ThemeContext from "./ThemeContext";

interface ThemeProps {
  children: ReactNode;
}
function ThemeProvider({ children }: ThemeProps) {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string | null>(savedTheme || null);
  const [debouncedTheme, setDebouncedTheme] = useState<string | null>(theme);
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(savedTheme || (prefersDarkMode ? "dark" : "light"));
  }, [savedTheme]);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTheme(debouncedTheme);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [debouncedTheme]);

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setDebouncedTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
