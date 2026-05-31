import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, Lock, ChevronDown, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { prefetchRoutes, type PrefetchRoute } from '../routes/pageLoaders';
import {
  LANGUAGE_LABELS,
  SUPPORTED_LANGUAGES,
  localizePath,
  setStoredLanguagePreference,
} from '../i18n/route';
import type { Language } from '../context/LanguageContext';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const LANGUAGE_NAMES: Record<Language, string> = {
  tr: 'Turkish',
  en: 'English',
  de: 'German',
  ja: 'Japanese',
  'zh-CN': 'Chinese',
};

interface LanguageSwitcherProps {
  language: Language;
  onChange: (language: Language) => void;
  compact?: boolean;
}

function LanguageSwitcher({ language, onChange, compact = false }: LanguageSwitcherProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  const selectLanguage = (nextLanguage: Language) => {
    setIsExpanded(false);
    if (nextLanguage !== language) {
      onChange(nextLanguage);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsExpanded((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={isExpanded}
        aria-label="Select language"
        className={`inline-flex h-10 items-center justify-center gap-2 border border-border bg-background text-foreground transition-colors hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50 ${
          compact ? 'w-20 px-2' : 'min-w-[104px] px-3'
        }`}
      >
        <Globe className="h-4 w-4 shrink-0" />
        <span className="font-mono text-sm font-medium uppercase leading-none">
          {LANGUAGE_LABELS[language]}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {isExpanded && (
        <div
          role="listbox"
          aria-label="Languages"
          className={`absolute right-0 top-12 z-50 w-44 overflow-hidden border border-border bg-background shadow-xl shadow-black/10 ring-1 ring-black/5 dark:shadow-black/30 ${
            compact ? 'right-0' : ''
          }`}
        >
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang === language;

            return (
              <button
                key={lang}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => selectLanguage(lang)}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition-colors ${
                  isSelected
                    ? 'bg-primary text-white'
                    : 'bg-background text-foreground hover:bg-surface'
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="w-8 shrink-0 font-mono text-sm font-semibold uppercase">
                    {LANGUAGE_LABELS[lang]}
                  </span>
                  <span className="truncate text-sm">{LANGUAGE_NAMES[lang]}</span>
                </span>
                {isSelected && <Check className="h-4 w-4 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const normalizeNavPath = (path: string) => {
    if (path === '/') {
      return '/';
    }

    return path.endsWith('/') ? path.slice(0, -1) : path;
  };

  const baseNavLinks: Array<{ name: string; path: string; prefetch: readonly PrefetchRoute[] }> = [
    { name: t.nav.home, path: '/', prefetch: ['home'] },
    {
      name: t.nav.services,
      path: '/services/',
      prefetch: ['services', 'secureFrontend', 'hardenedBackend', 'dataProtection', 'highPerformance'],
    },
    { name: t.nav.openSource, path: '/projects/', prefetch: ['projects', 'projectDetails'] },
    {
      name: t.nav.completedProjects,
      path: '/completed-projects/',
      prefetch: ['completedProjects', 'completedProjectDetails'],
    },
    { name: t.nav.contact, path: '/contact/', prefetch: ['contact'] },
  ];
  const navLinks = baseNavLinks.map((link) => ({
    ...link,
    path: localizePath(link.path, language),
  }));

  const isActive = (path: string) => normalizeNavPath(location.pathname) === normalizeNavPath(path);

  const handleLanguageChange = (nextLanguage: Language) => {
    setStoredLanguagePreference(nextLanguage);
    const target = localizePath(location.pathname, nextLanguage);
    navigate(target);
  };

  const handleLinkIntent = (routes: readonly PrefetchRoute[]) => {
    prefetchRoutes(routes);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to={localizePath('/', language)} className="flex items-center group hover:opacity-90 transition-opacity">
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
                  onPointerEnter={() => handleLinkIntent(link.prefetch)}
                  onFocus={() => handleLinkIntent(link.prefetch)}
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

              
              <div className="h-6 w-px bg-border mx-2"></div>
              
              <LanguageSwitcher language={language} onChange={handleLanguageChange} />
              
              <div className="ml-2 flex items-center gap-2">
                <ThemeToggle />
                <Link
                  to="/admin"
                  className="inline-flex items-center justify-center w-10 h-10 border border-border bg-background text-foreground hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                  title="Admin Login"
                >
                  <Lock className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/admin"
              className="inline-flex items-center justify-center w-10 h-10 border border-border bg-background text-foreground hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              title="Admin Login"
            >
              <Lock className="w-5 h-5" />
            </Link>
            <LanguageSwitcher language={language} onChange={handleLanguageChange} compact />
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
                onPointerEnter={() => handleLinkIntent(link.prefetch)}
                onFocus={() => handleLinkIntent(link.prefetch)}
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

          </div>
        </div>
      )}
    </nav>
  );
}
