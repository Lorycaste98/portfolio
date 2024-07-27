import React from 'react';
import { RiArrowUpWideFill } from 'react-icons/ri';
import socialData from '../data/socialData';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="p-6 bg-gray-700 text-white relative z-50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1240px] mx-auto">
        <div className="md:text-lg z-50">&copy; {new Date().getFullYear()} Lorenzo Castelletti</div>
        <div className="relative">
          <button className="bg-gray-700 text-white rounded-full w-28 md:w-32 h-28 md:h-32 flex items-center justify-center absolute -top-20 md:-top-[90px] -left-14 md:-left-16 cursor-auto">
            <RiArrowUpWideFill
              size={30}
              className="mb-16 md:mb-[72px] transform animate-bounce cursor-pointer"
              onClick={scrollToTop}
            />
          </button>
        </div>
        <div className="flex mt-5 md:mt-0 gap-4 md:gap-6">
          {socialData.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center text-white transition-all duration-300 hover:text-stone-400"
            >
              <div>{social.icon}</div>
              <div className="absolute -top-5 right-1/2 transform translate-x-1/2 bg-black dark:bg-white text-white dark:text-slate-800 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;