import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from "./themeContext";
import { useContext } from "react";

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme (): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);

  };
  return { theme, toggleTheme };
}