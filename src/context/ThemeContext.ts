import { createContext } from "react";

type Theme = {
  theme: string | null;
  handleTheme(): void;
};

const initialTheme: Theme = {
  theme: null,
  handleTheme: () => {},
};

const ThemeContext = createContext<Theme>(initialTheme);

export default ThemeContext;
