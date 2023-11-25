import { FC, ReactNode, createContext, useState } from "react";

type Props = { 
  children: ReactNode
}

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light'
});

export const ThemeProvider:FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
