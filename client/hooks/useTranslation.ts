import { useLanguage } from '../contexts/LanguageContext';
import { translations, Translations } from '../translations';

export function useTranslation() {
  const { currentLanguage } = useLanguage();
  
  const t = (key: keyof Translations): string => {
    const languageTranslations = translations[currentLanguage.code];
    if (!languageTranslations) {
      // Fallback to English if translation not found
      return translations.en[key] || key;
    }
    return languageTranslations[key] || translations.en[key] || key;
  };

  return { t };
}
