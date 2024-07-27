import React from 'react';
import skillsData from '../data/skillsData';
import { RevealXRight, RevealYUp, RevealXLeft } from './Reveals';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation('skills');

  return (
    <section
      id="skills"
      className="w-full h-auto md:h-screen bg-white dark:bg-blue-900 py-20 transition-colors duration-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1100px] w-full">
          <RevealYUp>
            <div className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00] uppercase">
                {t('title')}
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400">{t('subtitle')}</p>
            </div>
          </RevealYUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-4">
            <RevealXLeft>
              <div className="border-4 border-[#000051] dark:border-white rounded-3xl px-8 sm:px-32 md:px-16 py-8">
                <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-[#ffbb00] underline">
                  Front End
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 ">
                  {skillsData.frontEnd.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 hover:scale-110 duration-300 cursor-default"
                    >
                      <div className="w-8 flex-shrink-0">
                        <img src={skill.icon} alt={skill.name} />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-semibold text-black dark:text-gray-200">{skill.name}</h3>
                        <span
                          className={`text-md font-medium ${
                            t(skill.level) === 'In corso' || t(skill.level) === 'In progress'
                              ? 'text-orange-500 italic'
                              : 'text-gray-400 dark:text-gray-500'
                          }`}
                        >
                          {t(skill.level)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealXLeft>

            <RevealXRight>
              <div className="border-4 border-[#000051] dark:border-white rounded-3xl px-8 sm:px-32 md:px-16 py-8 md:h-full">
                <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-[#ffbb00] underline">
                  Back End
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                  {skillsData.backEnd.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2  hover:scale-110 duration-300 cursor-default"
                    >
                      <div className="w-8 flex-shrink-0">
                        <img src={skill.icon} alt={skill.name} />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-semibold text-black dark:text-gray-200">{skill.name}</h3>
                        <span
                          className={`text-md font-medium ${
                            t(skill.level) === 'In corso' || t(skill.level) === 'In progress'
                              ? 'text-orange-500 italic'
                              : 'text-gray-400 dark:text-gray-500'
                          }`}
                        >
                          {t(skill.level)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealXRight>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
