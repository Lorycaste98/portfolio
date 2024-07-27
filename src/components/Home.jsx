import React from 'react';
import { GrSend } from 'react-icons/gr';
import Slider from 'react-slick';
import RevealHome from './Reveals';
import imgData from '../data/imgData';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import socialData from '../data/socialData';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Home() {
  const { t } = useTranslation('home');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="relative">
      <RevealHome>
        <section
          id="home"
          className="relative bg-gradient-to-br dark:bg-gradient-to-br from-slate-100 dark:from-[#000051] via-cyan-300 dark:via-[#6d6dde] to-lime-400 dark:to-[#ffbb00] w-full h-auto xl:h-screen transition-all duration-500 pt-40 pb-20"
        >
          {/* Container */}
          <div className="max-w-[1240px] mx-auto px-5 md:px-16 flex flex-col md:flex-row justify-center items-center h-full gap-6">
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <div className="relative w-80 h-80 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-[#000051] overflow-hidden">
                    <Slider {...settings} className="w-full h-full">
                      {imgData.map((img, index) => (
                        <div key={index} className="w-full h-full flex items-center justify-center">
                          <img src={img.src} alt={t(img.name)} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-[#000051] dark:text-gray-100 transition-colors duration-500">
                  LORENZO CASTELLETTI
                </h1>
                <h2 className="text-3xl lg:text-5xl font-bold italic text-[#8892b0] py-2">{t('role')}</h2>
                <div className="text-xl lg:text-2xl py-4 max-w-[600px] text-black dark:text-gray-200 space-y-2 transition-colors duration-500">
                  <p>{t('phrase1')}</p>
                  <p>{t('phrase2')}</p>
                  <p>{t('phrase3')}</p>
                  <p>{t('phrase4')}</p>
                </div>
                <div>
                  <Link to="contact" smooth={true} duration={150} className="transition-colors duration-500 ">
                    <button className="text-[#000051] dark:text-white dark:hover:text-[#000051] group border-2 border-[#000051] dark:border-white dark:hover:border-[#ffbb00] pl-6 pr-4 py-3 flex justify-center items-center lg:text-xl hover:bg-[#ffbb00] hover:border-[#ffbb00] hover:text-[#000051] active:scale-90 active:bg-[#b68f23] active:border-[#b68f23] duration-500 font-semibold rounded-2xl transition-all w-40j ustify-center w-40">
                      {t('writeButton')}
                      <span>
                        <GrSend className="mx-2" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealHome>
      {/* Social Icons PC */}
      <div className="hidden md:flex absolute flex-col top-[35%] left-0 z-[210] overflow-x-hidden">
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
    </div>
  );
}

export default Home;
