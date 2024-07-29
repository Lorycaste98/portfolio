import React, { useContext, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

import { FaBars } from 'react-icons/fa';
import { GoMoon, GoSun } from 'react-icons/go';

import Logo from './Design/Logo';
import NavMenu from './Design/NavMenu';
import MobileMenu from './Design/MobileMenu';
import LanguageSwitchButton from './Buttons/LanguageSwitchButton';
import DarkModeButton from './Buttons/DarkModeButton';

import DarkModeContext from '../stores/DarkModeContext';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

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
        className="bg-slate-100 dark:bg-blue-950 z-[998] transition-colors duration-500"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center px-8 md:mx-auto h-28">
          <Logo darkMode={darkMode} />
          <NavMenu />
          <button
            className="lg:hidden cursor-pointer text-gray-500"
            onClick={handleClick}
            aria-label="Toggle navigation menu"
          >
            <FaBars size={30} />
          </button>
        </div>
      </motion.nav>

      <MobileMenu nav={nav} handleClick={handleClick} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
}

export default Navbar;
