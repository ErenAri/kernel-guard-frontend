import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const normalizeNavPath = (path: string) => {
    if (path === '/') {
      return '/';
    }

    return path.endsWith('/') ? path.slice(0, -1) : path;
  };

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services/' },
    { name: t.nav.openSource, path: '/projects/' },
    { name: t.nav.completedProjects, path: '/completed-projects/' },
  ];

  const isActive = (path: string) => normalizeNavPath(location.pathname) === normalizeNavPath(path);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group hover:opacity-90 transition-opacity">
              <Logo className="scale-[0.55] origin-left" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 h-14 flex items-center text-sm transition-colors border-b-2 ${
                    isActive(link.path)
                      ? 'border-primary text-primary font-medium'
                      : 'border-transparent text-foreground hover:bg-surface'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-6 w-px bg-border mx-4"></div>
              <a
                href="https://github.com/Kernel-Guard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm"
              >
                {t.nav.github}
              </a>
              <a
                href="https://www.linkedin.com/company/kernel-guard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm"
              >
                {t.nav.linkedin}
              </a>
              
              <div className="h-6 w-px bg-border mx-2"></div>
              
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-mono uppercase"
                title="Toggle Language"
              >
                <Globe className="w-4 h-4" />
                {language}
              </button>
              
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center p-2 text-foreground hover:bg-surface focus:outline-none font-mono uppercase text-sm"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-foreground hover:bg-surface focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base ${
                  isActive(link.path)
                    ? 'text-primary bg-surface border-l-4 border-primary'
                    : 'text-foreground hover:bg-surface border-l-4 border-transparent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/Kernel-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 text-base text-foreground hover:bg-surface border-l-4 border-transparent"
            >
              {t.nav.github}
            </a>
            <a
              href="https://www.linkedin.com/company/kernel-guard/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 text-base text-foreground hover:bg-surface border-l-4 border-transparent"
            >
              {t.nav.linkedin}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
