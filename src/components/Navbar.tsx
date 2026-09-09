import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Check, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage, type Language } from '../context/LanguageContext';
import { prefetchRoute, prefetchRoutes } from '../routes/pageLoaders';
import {
  LANGUAGE_LABELS,
  SUPPORTED_LANGUAGES,
  localizePath,
  setStoredLanguagePreference,
} from '../i18n/route';
import { evidenceHomeCopy } from '../i18n/evidenceHome';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const LANGUAGE_NAMES: Record<Language, string> = {
  tr: 'Turkish',
  en: 'English',
  de: 'German',
  ja: 'Japanese',
  'zh-CN': 'Chinese',
  es: 'Spanish',
  fr: 'French',
  ko: 'Korean',
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
    if (!isExpanded) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsExpanded(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false);
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
    if (nextLanguage !== language) onChange(nextLanguage);
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
        <span className="font-mono text-sm font-medium uppercase leading-none">{LANGUAGE_LABELS[language]}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-12 z-50 w-44 overflow-hidden border border-border bg-background shadow-xl shadow-black/10 ring-1 ring-black/5 dark:shadow-black/30"
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
                  isSelected ? 'kg-action-primary' : 'bg-background text-foreground hover:bg-surface'
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="w-8 shrink-0 font-mono text-sm font-semibold uppercase">{LANGUAGE_LABELS[lang]}</span>
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
  const copy = evidenceHomeCopy[language];

  const normalizeNavPath = (path: string) => {
    if (path === '/') return '/';
    return path.endsWith('/') ? path.slice(0, -1) : path;
  };

  const navLinks = [
    {
      name: copy.nav.bpfcompat,
      path: localizePath('/projects/bpfcompat/', language),
      intent: () => import('../pages/bpfcompat/BpfcompatPage'),
    },
    {
      name: copy.nav.aegis,
      path: localizePath('/projects/aegis-bpf/', language),
      intent: () => prefetchRoute('projectDetails'),
    },
    {
      name: copy.nav.openSource,
      path: localizePath('/projects/', language),
      intent: () => prefetchRoutes(['projects', 'projectDetails']),
    },
    {
      name: copy.nav.security,
      path: localizePath('/security/', language),
      intent: () => prefetchRoute('security'),
    },
    {
      name: copy.nav.contact,
      path: localizePath('/contact/', language),
      intent: () => prefetchRoute('contact'),
    },
  ];

  const isActive = (path: string) => normalizeNavPath(location.pathname) === normalizeNavPath(path);

  const handleLanguageChange = (nextLanguage: Language) => {
    setStoredLanguagePreference(nextLanguage);
    navigate(localizePath(location.pathname, nextLanguage));
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to={localizePath('/', language)}
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Kernel Guard home"
          >
            <Logo className="scale-[0.55] origin-left" />
          </Link>

          <div className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onPointerEnter={link.intent}
                onFocus={link.intent}
                className={`flex h-14 items-center border-b-2 px-3 text-sm transition-colors ${
                  isActive(link.path)
                    ? 'border-primary font-medium text-primary'
                    : 'border-transparent text-foreground/75 hover:bg-surface hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mx-3 h-6 w-px bg-border" />
            <a
              href="https://github.com/Kernel-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
            >
              {t.nav.github}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <div className="mx-2 h-6 w-px bg-border" />
            <LanguageSwitcher language={language} onChange={handleLanguageChange} />
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <LanguageSwitcher language={language} onChange={handleLanguageChange} compact />
            <button
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center text-foreground hover:bg-surface focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-b border-border bg-background md:hidden">
          <div className="space-y-1 px-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onPointerEnter={link.intent}
                onFocus={link.intent}
                onClick={() => setIsOpen(false)}
                className={`block border-l-2 px-3 py-3 text-base ${
                  isActive(link.path)
                    ? 'border-primary bg-surface text-primary'
                    : 'border-transparent text-foreground hover:bg-surface'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/Kernel-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-l-2 border-transparent px-3 py-3 text-base text-foreground hover:bg-surface"
            >
              {t.nav.github}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
