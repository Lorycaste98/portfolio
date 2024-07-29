import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { FaTimes } from 'react-icons/fa';
import { GoMoon, GoSun } from 'react-icons/go';

import LanguageSwitchButton from '../Buttons/LanguageSwitchButton';
import DarkModeButton from '../Buttons/DarkModeButton';

import homeSectionsData from '../../data/homeSectionsData';
import socialData from '../../data/socialData';

function MobileMenu({ nav, handleClick, darkMode, toggleDarkMode }) {
  const { t } = useTranslation('common');

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: nav ? 0 : '-100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-full bg-slate-300 dark:bg-[#000051] flex flex-col items-center justify-center z-[1002] p-4"
    >
      <button className="absolute top-10 right-8 text-3xl text-gray-500" onClick={handleClick} aria-label="Close menu">
        <FaTimes />
      </button>
      <ul className="flex flex-col items-center gap-10 text-3xl font-medium text-[#000051] dark:text-white">
        {homeSectionsData.map((section, index) => (
          <Link
            key={index}
            to={section.to}
            smooth={true}
            duration={150}
            onClick={handleClick}
            className="w-full text-center cursor-pointer"
          >
            {t(section.name)}
          </Link>
        ))}
      </ul>
      <div className="flex justify-center items-center mt-12 gap-8">
        {socialData.map((social, index) => (
          <a
            key={index}
            className="relative group flex items-center justify-center text-gray-500 transition-all duration-300 hover:text-stone-800"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <div>{social.icon}</div>
            <div className="absolute top-7 right-1/2 transform translate-x-1/2 bg-black dark:bg-white text-white dark:text-slate-800 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {social.name}
            </div>
          </a>
        ))}
      </div>
      <LanguageSwitchButton />
      <DarkModeButton onClick={toggleDarkMode}>{darkMode ? <GoSun size={25} /> : <GoMoon size={25} />}</DarkModeButton>
    </motion.div>
  );
}

export default MobileMenu;
