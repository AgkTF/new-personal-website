import { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.theme = 'light';
    }
  }, []);

  const themeSwitcher = () => {
    setTheme(prevState => {
      if (prevState === 'dark') {
        localStorage.theme = 'light';
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        return 'light';
      } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        return 'dark';
      }
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeSwitcher,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
