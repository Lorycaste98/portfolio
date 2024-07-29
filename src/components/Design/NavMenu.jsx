import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import homeSectionsData from '../../data/homeSectionsData';

function NavMenu() {
  const { t } = useTranslation('common');

  return (
    <div className="hidden lg:flex gap-8 text-2xl font-medium cursor-pointer">
      {homeSectionsData.map((section, index) => (
        <Link
          key={index}
          to={section.to}
          smooth={true}
          duration={150}
          className="text-[#000051] dark:text-white no-transition"
        >
          {t(section.name)}
        </Link>
      ))}
    </div>
  );
}

export default NavMenu;
