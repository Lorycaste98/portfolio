import React from 'react';
import socialData from '../../data/socialData';

function SocialIcons() {
  return (
    <nav
      className="hidden md:flex absolute flex-col top-[40%] left-0 z-[210] overflow-x-hidden"
      aria-label="Social media links"
    >
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
              aria-label={social.name}
            >
              {social.name} {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialIcons;
