import type { Language } from '../context/LanguageContext';

type LocalizedText = Partial<Record<Language, string>> & {
  en?: string;
  tr?: string;
};

export function localizedText(value: LocalizedText, language: Language): string {
  return value[language] ?? value.en ?? value.tr ?? '';
}
