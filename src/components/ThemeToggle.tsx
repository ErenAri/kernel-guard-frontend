import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden text-foreground/65 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-300 ${
          theme === 'dark' ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'
        }`}
      />
    </button>
  );
}
