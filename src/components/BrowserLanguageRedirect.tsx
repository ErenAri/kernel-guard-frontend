import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  detectBrowserLanguage,
  detectLanguageFromPath,
  getStoredLanguagePreference,
  localizePath,
  setStoredLanguagePreference,
} from '../i18n/route';

export default function BrowserLanguageRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathLanguage = detectLanguageFromPath(location.pathname);

    if (pathLanguage !== 'tr') {
      setStoredLanguagePreference(pathLanguage);
      return;
    }

    const preferredLanguage = getStoredLanguagePreference() ?? detectBrowserLanguage();

    if (preferredLanguage === 'tr') {
      return;
    }

    const targetPath = localizePath(location.pathname, preferredLanguage);
    const target = `${targetPath}${location.search}${location.hash}`;

    navigate(target, { replace: true });
  }, [location.hash, location.pathname, location.search, navigate]);

  return null;
}
