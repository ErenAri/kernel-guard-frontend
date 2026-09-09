import { Github, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { localizePath } from '../i18n/route';
import { prefetchRoute, prefetchRoutes } from '../routes/pageLoaders';
import { SITE_EMAILS, mailto } from '../config/site';
import { evidenceHomeCopy } from '../i18n/evidenceHome';
import Logo from './Logo';

export default function Footer() {
  const { language, t } = useLanguage();
  const copy = evidenceHomeCopy[language];

  return (
    <footer className="mt-auto bg-[var(--color-dark-bg)] text-[var(--color-dark-fg)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6 md:col-span-2">
            <Link
              to={localizePath('/', language)}
              className="inline-block transition-opacity hover:opacity-90"
            >
              <Logo dark className="scale-[0.65] origin-left" />
            </Link>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400">
              {copy.footerDescription}
            </p>
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px] text-gray-500">
              <span className="border border-gray-800 px-2.5 py-1.5">Linux</span>
              <span className="border border-gray-800 px-2.5 py-1.5">eBPF</span>
              <span className="border border-gray-800 px-2.5 py-1.5">Runtime security</span>
              <span className="border border-gray-800 px-2.5 py-1.5">Compatibility evidence</span>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white">
              {copy.products.eyebrow}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to={localizePath('/projects/bpfcompat/', language)}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  BPFCompat
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath('/projects/aegis-bpf/', language)}
                  onPointerEnter={() => prefetchRoute('projectDetails')}
                  onFocus={() => prefetchRoute('projectDetails')}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  AegisBPF
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath('/projects/', language)}
                  onPointerEnter={() => prefetchRoutes(['projects', 'projectDetails'])}
                  onFocus={() => prefetchRoutes(['projects', 'projectDetails'])}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {copy.nav.openSource}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Kernel-Guard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t.nav.github}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white">
              Trust &amp; contact
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to={localizePath('/security/', language)}
                  onPointerEnter={() => prefetchRoute('security')}
                  onFocus={() => prefetchRoute('security')}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {copy.nav.security}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath('/status/', language)}
                  onPointerEnter={() => prefetchRoute('status')}
                  onFocus={() => prefetchRoute('status')}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath('/changelog/', language)}
                  onPointerEnter={() => prefetchRoute('changelog')}
                  onFocus={() => prefetchRoute('changelog')}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <a
                  href={mailto(SITE_EMAILS.contact)}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_EMAILS.contact}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kernel-Guard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <Link
              to={localizePath('/terms/', language)}
              onPointerEnter={() => prefetchRoute('terms')}
              onFocus={() => prefetchRoute('terms')}
              className="transition-colors hover:text-gray-300"
            >
              {t.footer.terms}
            </Link>
            <Link
              to={localizePath('/privacy/', language)}
              onPointerEnter={() => prefetchRoute('privacy')}
              onFocus={() => prefetchRoute('privacy')}
              className="transition-colors hover:text-gray-300"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to={localizePath('/cookies/', language)}
              onPointerEnter={() => prefetchRoute('cookies')}
              onFocus={() => prefetchRoute('cookies')}
              className="transition-colors hover:text-gray-300"
            >
              {t.footer.cookies}
            </Link>
            <Link
              to="/admin"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
              title="Admin Login"
            >
              <Lock className="h-3.5 w-3.5" />
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
