import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden border border-border bg-background text-foreground hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <Sun 
          className={`absolute w-5 h-5 transition-all duration-500 ease-in-out ${
            theme === 'dark' ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <Moon 
          className={`absolute w-5 h-5 transition-all duration-500 ease-in-out ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
          }`} 
        />
      </div>
    </button>
  );
}
