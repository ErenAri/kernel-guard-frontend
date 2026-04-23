import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { prefetchRoute, prefetchRoutes } from '../routes/pageLoaders';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--color-dark-bg)] text-[var(--color-dark-fg)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="inline-block group hover:opacity-90 transition-opacity">
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
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/"
                  onPointerEnter={() => prefetchRoutes(['projects', 'projectDetails'])}
                  onFocus={() => prefetchRoutes(['projects', 'projectDetails'])}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.nav.openSource}
                </Link>
              </li>
              <li>
                <Link
                  to="/completed-projects/"
                  onPointerEnter={() => prefetchRoutes(['completedProjects', 'completedProjectDetails'])}
                  onFocus={() => prefetchRoutes(['completedProjects', 'completedProjectDetails'])}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.nav.completedProjects}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase">{t.footer.connect}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:iletisim@kernelguard.net"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  iletisim@kernelguard.net
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
              <li>
                <a
                  href="https://www.linkedin.com/company/kernel-guard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  {t.nav.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link
              to="/terms/"
              onPointerEnter={() => prefetchRoute('terms')}
              onFocus={() => prefetchRoute('terms')}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.terms}
            </Link>
            <Link
              to="/privacy/"
              onPointerEnter={() => prefetchRoute('privacy')}
              onFocus={() => prefetchRoute('privacy')}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to="/cookies/"
              onPointerEnter={() => prefetchRoute('cookies')}
              onFocus={() => prefetchRoute('cookies')}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
