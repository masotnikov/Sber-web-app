import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from "@/app/providers/ThemeProvider/lib/themeContext";
import { JSX, ReactNode, useMemo, useState } from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider= ({ children } : ThemeProviderProps): JSX.Element  => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;