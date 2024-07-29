import React from 'react';
import skillsData from '../data/skillsData';
import { RevealXRight, RevealYUp, RevealXLeft } from './Reveals';
import { useTranslation } from 'react-i18next';
import SkillCategory from './Design/SkillCategory';

function Skills() {
  const { t } = useTranslation('skills');

  return (
    <section
      id="skills"
      className="w-full h-auto md:min-h-screen bg-white dark:bg-blue-900 py-20 transition-colors duration-500 flex items-center"
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
          <article className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4">
            <RevealXLeft>
              <SkillCategory skills={skillsData.frontEnd} categoryTitle="Front End" />
            </RevealXLeft>

            <RevealXRight>
              <SkillCategory skills={skillsData.backEnd} categoryTitle="Back End" />
            </RevealXRight>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;
