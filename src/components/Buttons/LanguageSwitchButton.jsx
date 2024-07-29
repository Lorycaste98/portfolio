import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';

// COMPONENTE PER IL PULSANTE DI CAMBIO LINGUA
function LanguageSwitchButton() {
  const { i18n } = useTranslation();

  // Funzione per il cambio di lingua
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLanguage);
  };

  // Funzione per ottenere il codice della bandiera
  const getFlagCode = () => {
    return i18n.language === 'it' ? 'GB' : 'IT';
  };

  return (
    <button
      id="language-switch-button"
      type="button"
      onClick={toggleLanguage}
      className="fixed w-14 h-14 bottom-20 lg:bottom-[152px] right-3 md:right-8 rounded-full bg-[#000051] dark:bg-white text-white dark:text-[#000051] flex justify-center items-center no-transition z-[200]"
      aria-label={`Switch to ${i18n.language === 'it' ? 'English' : 'Italian'}`}
    >
      <FlagIcon code={getFlagCode()} size={24} />
    </button>
  );
}

export default LanguageSwitchButton;
