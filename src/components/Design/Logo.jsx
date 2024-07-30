import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import LogoLight from '../../assets/logos/logo-blue.webp';
import LogoNight from '../../assets/logos/logo-white.webp';
import LogoScrittaLight from '../../assets/logos/logo-scritta-blue.webp';
import LogoScrittaNight from '../../assets/logos/logo-scritta-white.webp';

function Logo({ darkMode }) {
  // Traduzioni
  const { t } = useTranslation('common');

  return (
    <Link to="home" smooth={true} duration={150} className="flex items-end">
      <img src={darkMode ? LogoNight : LogoLight} alt="Logo" className="w-20 md:w-28 cursor-pointer lg:ml-16" />
      <div className="ml-2">
        <img
          src={darkMode ? LogoScrittaNight : LogoScrittaLight}
          alt={t('logoAlt')}
          className="hidden xl:block w-52 mb-5"
        />
      </div>
    </Link>
  );
}

export default Logo;
