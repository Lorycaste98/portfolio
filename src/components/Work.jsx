import React from 'react';
import works from '../data/workData';
import WorkItem from './Design/WorkItem';
import { RevealXRight, RevealYUp } from './Reveals';
import { useTranslation } from 'react-i18next';

function Work() {
  const { t } = useTranslation('work');
  return (
    <section
      id="work"
      className="w-full h-auto md:min-h-screen bg-white dark:bg-blue-900 py-20 transition-colors duration-500 flex items-center"
      y
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1000px] w-full">
          <RevealYUp>
            <header className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00] uppercase">
                {t('title')}
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400">{t('subtitle')}</p>
            </header>
          </RevealYUp>
          <RevealXRight>
            {works.map((work, index) => (
              <article key={index} className="mb-10">
                <WorkItem
                  period={[t(work.period[0]), t(work.period[1])]}
                  title={t(work.title)}
                  details={t(work.details)}
                />
              </article>
            ))}
          </RevealXRight>
        </div>
      </div>
    </section>
  );
}

export default Work;
