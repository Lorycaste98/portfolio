import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import socialData from '../data/socialData';
import DarkModeButton from './DarkModeButton';
import DarkModeContext from '../stores/DarkModeContext';
import { GoMoon, GoSun } from 'react-icons/go';
import homeSectionsData from '../data/homeSectionsData';

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
      <DarkModeButton onClick={toggleDarkMode}>{darkMode ? <GoSun size={25} /> : <GoMoon size={25} />}</DarkModeButton>

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
          <div>
            <Link to="home" smooth={true} duration={150}>
              <img src={Logo} alt="Logo" className="w-24 cursor-pointer" />
            </Link>
          </div>

          {/* Menu */}

          <div className="hidden md:flex gap-8 text-2xl font-medium cursor-pointer ">
            {homeSectionsData.map((section, index) => (
              <Link
                key={index}
                to={section.to}
                smooth={true}
                duration={150}
                className="text-[#000051] dark:text-white no-transition"
              >
                {section.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden cursor-pointer text-gray-500" onClick={handleClick}>
            <FaBars size={30} />
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: nav ? 0 : '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-0 left-0 w-full h-full bg-slate-300 dark:bg-[#000051] flex flex-col items-center justify-center z-[999] p-4"
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
              className="w-full text-center"
            >
              {section.name}
            </Link>
          ))}
        </ul>
        <div className="flex justify-center items-center mt-12 gap-8">
          {socialData.map((social, index) => (
            <a key={index} className="text-gray-500" href={social.url} target="_blank" rel="noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Social Icons PC */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0 z-[210] overflow-x-hidden">
        <ul>
          {socialData.map((social, index) => (
            <li
              key={index}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 transition-all duration-500 ${social.colors}`}
            >
              <a
                className="flex justify-between items-center w-full text-white"
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.name} {social.icon}
              </a>
            </li>
          ))}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 transition-all duration-500 bg-[#0e76a8]">
            <Link
              className="flex justify-between items-center w-full text-white"
              to="contact"
              smooth={true}
              duration={150}
            >
              Email <BsFillPersonLinesFill size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
