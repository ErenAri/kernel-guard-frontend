import { Github, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { localizePath } from '../i18n/route';
import { prefetchRoute, prefetchRoutes } from '../routes/pageLoaders';
import { enterprisePages, type EnterprisePageKey } from '../data/enterprisePages';
import { SITE_EMAILS, mailto } from '../config/site';
import { footerGrowthCopy } from '../i18n/growthContent';
import Logo from './Logo';

export default function Footer() {
  const { language, t } = useLanguage();
  const enterpriseLinks: EnterprisePageKey[] = ['security', 'engineering', 'status', 'changelog'];
  const growthCopy = footerGrowthCopy[language];

  return (
    <footer className="bg-[var(--color-dark-bg)] text-[var(--color-dark-fg)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <Link to={localizePath('/', language)} className="inline-block group hover:opacity-90 transition-opacity">
              <Logo dark className="scale-[0.65] origin-left" />
            </Link>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed mt-4">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase">{t.footer.discover}</h3>
            <ul className="space-y-4">
              <li>
                <Link to={localizePath('/', language)} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath('/projects/', language)}
                  onPointerEnter={() => prefetchRoutes(['projects', 'projectDetails'])}
                  onFocus={() => prefetchRoutes(['projects', 'projectDetails'])}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.nav.openSource}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath('/completed-projects/', language)}
                  onPointerEnter={() => prefetchRoutes(['completedProjects', 'completedProjectDetails'])}
                  onFocus={() => prefetchRoutes(['completedProjects', 'completedProjectDetails'])}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.nav.completedProjects}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath('/articles/', language)}
                  onPointerEnter={() => prefetchRoute('articles')}
                  onFocus={() => prefetchRoute('articles')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {growthCopy.articles}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath('/contact/', language)}
                  onPointerEnter={() => prefetchRoute('contact')}
                  onFocus={() => prefetchRoute('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase">{t.footer.connect}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={mailto(SITE_EMAILS.contact)}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {SITE_EMAILS.contact}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kernel-Guard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  {t.nav.github}
                </a>
              </li>

            </ul>
          </div>
          <div className="md:col-span-4 border-t border-gray-800 pt-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
              {enterpriseLinks.map((key) => (
                <li key={key}>
                  <Link
                    to={localizePath(`/${key}/`, language)}
                    onPointerEnter={() => prefetchRoute(key)}
                    onFocus={() => prefetchRoute(key)}
                    className="hover:text-white transition-colors"
                  >
                    {enterprisePages[language].links[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link
              to={localizePath('/terms/', language)}
              onPointerEnter={() => prefetchRoute('terms')}
              onFocus={() => prefetchRoute('terms')}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.terms}
            </Link>
            <Link
              to={localizePath('/privacy/', language)}
              onPointerEnter={() => prefetchRoute('privacy')}
              onFocus={() => prefetchRoute('privacy')}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to={localizePath('/cookies/', language)}
              onPointerEnter={() => prefetchRoute('cookies')}
              onFocus={() => prefetchRoute('cookies')}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.cookies}
            </Link>
            <div className="w-px h-4 bg-gray-800 self-center hidden sm:block"></div>
            <Link
              to="/admin"
              className="hover:text-white transition-colors flex items-center gap-1.5"
              title="Admin Login"
            >
              <Lock className="w-3.5 h-3.5" />
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
