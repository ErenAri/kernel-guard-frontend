import { createContext, useContext, useState, type Key, type ReactNode } from 'react';
import { en } from '../translations/en';
import { tr } from '../translations/tr';
import { de } from '../translations/de';
import { ja } from '../translations/ja';
import { zhCN } from '../translations/zh-CN';

export type Language = 'en' | 'tr' | 'de' | 'ja' | 'zh-CN';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const translations: Record<Language, Translations> = {
  tr,
  en,
  de,
  ja,
  'zh-CN': zhCN,
};

interface LanguageProviderProps {
  key?: Key;
  children: ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider = ({ children, initialLanguage = 'tr' }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
