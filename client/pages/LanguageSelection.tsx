import React from 'react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Button } from '../components/ui/button';

export default function LanguageSelection() {
  const { currentLanguage, setCurrentLanguage, completeLanguageSelection } = useLanguage();
  const { t } = useTranslation();

  const handleLanguageSelect = (language: typeof SUPPORTED_LANGUAGES[0]) => {
    setCurrentLanguage(language);
  };

  const handleContinue = () => {
    completeLanguageSelection();
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header with logo placeholder */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F5929b9f73f214fc6a99c554fef925db0%2Fe7bf35db4d34427483935533d67c8167?format=webp&width=120" 
            alt="LinkUp KC Logo" 
            className="h-12 w-auto"
          />
        </div>
        <div className="w-10 h-10 rounded-lg"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-kc-navy mb-2">
              {t('appName')}
            </h1>
            <p className="text-lg text-kc-navy opacity-80">
              {t('selectLanguage')}
            </p>
          </div>

          <div className="space-y-2">
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`w-full flex items-center gap-3 p-3 rounded-full border-2 transition-all duration-200 text-left ${
                  currentLanguage.code === language.code
                    ? 'border-kc-navy bg-kc-navy/5 shadow-sm'
                    : 'border-gray-300 bg-white hover:border-kc-navy/50'
                }`}
                style={{ minHeight: '52px', fontSize: '16px' }}
              >
                <span className="text-xl w-6 flex justify-center">
                  {language.flag}
                </span>
                <span className="font-medium text-kc-navy flex-1">
                  {language.name}
                </span>
                {currentLanguage.code === language.code && (
                  <div className="w-4 h-4 rounded-full bg-kc-navy"></div>
                )}
              </button>
            ))}
          </div>

          <Button
            onClick={handleContinue}
            className="w-full h-12 text-base font-semibold bg-kc-gold hover:bg-kc-gold/90 text-kc-navy rounded-full"
          >
            {t('continue')}
          </Button>
        </div>
      </div>
    </div>
  );
}
