import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';

function LanguageSwitchButton() {
  const { i18n } = useTranslation();
  const [languageLoaded, setLanguageLoaded] = useState(false);

  useEffect(() => {
    // Assicuriamoci che la lingua sia stata rilevata prima di visualizzare il pulsante
    const handleLanguageChange = () => {
      setLanguageLoaded(true);
    };

    // Aggiungi un listener per quando la lingua è stata cambiata
    i18n.on('languageChanged', handleLanguageChange);

    // Se la lingua è già stata rilevata, imposta subito il flag
    if (i18n.language) {
      setLanguageLoaded(true);
    }

    // Pulizia del listener quando il componente viene smontato
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Funzione per il cambio di lingua
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLanguage);
  };

  // Funzione per ottenere il codice della bandiera
  const getFlagCode = () => {
    return i18n.language === 'it' ? 'GB' : 'IT'; // Mostra la bandiera della lingua da cambiare
  };

  if (!languageLoaded) {
    return null; // Non renderizzare il pulsante fino a quando la lingua non è stata rilevata
  }

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
