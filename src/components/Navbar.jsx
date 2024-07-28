import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { FaBars, FaTimes } from 'react-icons/fa';
import { GoMoon, GoSun } from 'react-icons/go';

import socialData from '../data/socialData';
import DarkModeButton from './DarkModeButton';
import DarkModeContext from '../stores/DarkModeContext';
import homeSectionsData from '../data/homeSectionsData';
import LanguageSwitchButton from './LanguageSwitchButton';

import LogoLight from '../assets/logo-blue.webp';
import LogoNight from '../assets/logo-white.webp';
import LogoScrittaLight from '../assets/logo-scritta-blue.webp';
import LogoScrittaNight from '../assets/logo-scritta-white.webp';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const { t } = useTranslation('common');

  const handleClick = () => {
    setNav(!nav);
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const progressStyle = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  return (
    <header className={`${darkMode ? 'dark' : ''} fixed w-full top-0 z-[1000]`}>
      <div className="hidden lg:flex items-center gap-4">
        <LanguageSwitchButton />
        <DarkModeButton onClick={toggleDarkMode}>
          {darkMode ? <GoSun size={25} /> : <GoMoon size={25} />}
        </DarkModeButton>
      </div>

      <motion.div
        style={{
          scaleX: progressStyle,
          background: 'blue',
          transformOrigin: 'left',
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '5px',
          zIndex: 1001,
        }}
        animate={{ y: hidden ? 0 : '112px' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`bg-slate-100 dark:bg-blue-950 z-[998] transition-colors duration-500`}
      >
        <div className="flex justify-between items-center px-8 md:mx-auto h-28 ">
          <div className="flex items-end">
            <Link to="home" smooth={true} duration={150} className="flex items-end">
              <img src={darkMode ? LogoNight : LogoLight} alt="Logo" className="w-20 md:w-28 cursor-pointer lg:ml-16" />
              <div className="ml-2">
                <img
                  src={darkMode ? LogoScrittaNight : LogoScrittaLight}
                  alt="Logo scritta"
                  className="hidden xl:block w-52 mb-5"
                />
              </div>
            </Link>
          </div>

          {/* Menu */}

          <div className="hidden lg:flex gap-8 text-2xl font-medium cursor-pointer ">
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

          <div className="lg:hidden cursor-pointer text-gray-500" onClick={handleClick}>
            <FaBars size={30} />
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: nav ? 0 : '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-0 left-0 w-full h-full bg-slate-300 dark:bg-[#000051] flex flex-col items-center justify-center z-[1002] p-4"
      >
        <button className="absolute top-10 right-8 text-3xl text-gray-500" onClick={handleClick}>
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
            >
              <div>{social.icon}</div>
              <div className="absolute top-7 right-1/2 transform translate-x-1/2 bg-black dark:bg-white text-white dark:text-slate-800 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </div>
            </a>
          ))}
        </div>
        <LanguageSwitchButton />
        <DarkModeButton onClick={toggleDarkMode}>
          {darkMode ? <GoSun size={25} /> : <GoMoon size={25} />}
        </DarkModeButton>
      </motion.div>
    </header>
  );
}

export default Navbar;
