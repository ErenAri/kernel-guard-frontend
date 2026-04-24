import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function readInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  try {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
  } catch {
    // localStorage access can throw in sandboxed iframes; fall through to system preference.
  }

  if (typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage errors.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
