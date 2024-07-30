import React from 'react';
import { useTranslation } from 'react-i18next';

import { GrDocumentDownload } from 'react-icons/gr';
import { FaLongArrowAltDown } from 'react-icons/fa';

import CvIta from '../assets/curriculum-ita.pdf';
import CvEng from '../assets/curriculum-eng.pdf';

import { RevealYUp, RevealYDown } from './Reveals';

function About() {
  // Traduzioni
  const { t, i18n } = useTranslation('about');

  // Determina quale curriculum scaricare in base alla lingua corrente
  const CV = i18n.language === 'it' ? CvIta : CvEng;

  return (
    <section
      id="about"
      className="w-full h-auto md:min-h-screen bg-stone-200 dark:bg-[#000051] py-20 flex items-center transition-colors duration-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1100px] w-full">
          <RevealYUp>
            <header className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00] uppercase">
                {t('title')}
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400">{t('subtitle')}</p>
            </header>
          </RevealYUp>
          <RevealYDown>
            <div className="flex items-center justify-center">
              <article className="max-w-[1100px] w-full dark:text-gray-200">
                <div className="text-3xl lg:text-4xl font-semibold md:text-center pb-6 italic">
                  <p>{t('section')}</p>
                </div>

                <div className="grid md:grid-cols-2 md:gap-8 text-lg lg:text-xl">
                  <div className="md:text-right space-y-3">
                    <p>{t('parapgraph1')}</p>
                    <p>{t('parapgraph2')}</p>
                    <p>{t('parapgraph3')}</p>
                  </div>
                  <div className="md:text-left space-y-3">
                    <p>{t('parapgraph4')}</p>
                    <p>{t('parapgraph5')}</p>
                    <p className="flex gap-2">
                      <FaLongArrowAltDown className="animate-bounce" />
                      {t('moreInfo')}
                      <FaLongArrowAltDown className="animate-bounce" />
                    </p>
                    <a href={CV} download="">
                      <button className="text-[#000051] dark:text-white dark:hover:text-[#000051] group border-2 border-[#000051] dark:border-white dark:hover:border-[#ffbb00] my-4 pl-6 pr-4 py-3 flex justify-center items-center lg:text-xl hover:bg-[#ffbb00] hover:border-[#ffbb00] hover:text-[#000051] active:scale-90 active:bg-[#b68f23] active:border-[#b68f23] duration-300 font-semibold rounded-2xl transition-all w-52">
                        {t('download')}
                        <span className="ml-2">
                          <GrDocumentDownload size={18} />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </RevealYDown>
        </div>{' '}
      </div>
    </section>
  );
}

export default About;
