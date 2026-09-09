import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Check, ChevronDown, ExternalLink, Globe, Menu, X } from 'lucide-react';
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

function LanguageSwitcher({
  language,
  onChange,
  compact = false,
}: {
  language: Language;
  onChange: (language: Language) => void;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const pointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', pointer);
    document.addEventListener('keydown', keyboard);
    return () => {
      document.removeEventListener('pointerdown', pointer);
      document.removeEventListener('keydown', keyboard);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className={`inline-flex h-9 items-center justify-center gap-1.5 px-2 text-xs text-foreground/65 transition-colors hover:text-foreground ${
          compact ? 'min-w-14' : 'min-w-16'
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="font-mono font-medium uppercase">{LANGUAGE_LABELS[language]}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-11 z-50 w-44 overflow-hidden border border-border bg-background shadow-xl shadow-black/10"
        >
          {SUPPORTED_LANGUAGES.map((lang) => {
            const selected = lang === language;
            return (
              <button
                key={lang}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setOpen(false);
                  if (!selected) onChange(lang);
                }}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                  selected ? 'bg-surface text-foreground' : 'text-foreground/70 hover:bg-surface hover:text-foreground'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="w-8 font-mono text-xs font-semibold uppercase">{LANGUAGE_LABELS[lang]}</span>
                  <span>{LANGUAGE_NAMES[lang]}</span>
                </span>
                {selected ? <Check className="h-3.5 w-3.5 text-primary" /> : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const copy = evidenceHomeCopy[language];

  const normalize = (path: string) => (path === '/' ? '/' : path.replace(/\/$/, ''));

  const links = [
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

  const switchLanguage = (next: Language) => {
    setStoredLanguagePreference(next);
    navigate(localizePath(location.pathname, next));
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/82 backdrop-blur-xl">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link
            to={localizePath('/', language)}
            className="flex items-center transition-opacity hover:opacity-75"
            aria-label="Kernel Guard home"
          >
            <Logo className="scale-[0.48] origin-left" />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = normalize(location.pathname) === normalize(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onPointerEnter={link.intent}
                  onFocus={link.intent}
                  className={`px-3 py-2 text-xs transition-colors ${
                    active ? 'font-medium text-foreground' : 'text-foreground/62 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="https://github.com/Kernel-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1 px-3 py-2 text-xs text-foreground/62 transition-colors hover:text-foreground"
            >
              {t.nav.github}
              <ExternalLink className="h-3 w-3" />
            </a>

            <LanguageSwitcher language={language} onChange={switchLanguage} />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <LanguageSwitcher language={language} onChange={switchLanguage} compact />
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-9 w-9 items-center justify-center text-foreground/70 hover:text-foreground"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onPointerEnter={link.intent}
                onFocus={link.intent}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-border/70 py-3 text-sm text-foreground/75 last:border-b-0 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
