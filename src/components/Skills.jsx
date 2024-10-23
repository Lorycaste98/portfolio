import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RevealXRight, RevealYUp, RevealXLeft } from './Reveals';
import SkillCategory from './Design/SkillCategory';

import skillsData from '../data/skillsData';

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Traduzioni
  const { t } = useTranslation('skills');

  // Funzione per filtrare le competenze in base alla categoria selezionata
  const filteredSkills =
    selectedCategory === 'all' ? skillsData : skillsData.filter((skill) => skill.category === selectedCategory);

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
          <RevealXLeft>
            <div className="p-6">
              {/* Barra di filtro */}
              <div className="mb-6 flex justify-center">
                <button
                  className={`px-4 py-2 rounded ${
                    selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory('all')}
                >
                  {t('all')}
                </button>
                <button
                  className={`px-4 py-2 ml-2 rounded ${
                    selectedCategory === 'frontend' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory('frontend')}
                >
                  Frontend
                </button>
                <button
                  className={`px-4 py-2 ml-2 rounded ${
                    selectedCategory === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory('backend')}
                >
                  Backend
                </button>
                <button
                  className={`px-4 py-2 ml-2 rounded ${
                    selectedCategory === 'altro' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory('other')}
                >
                  {t('other')}
                </button>
              </div>

              {/* Visualizzazione delle competenze filtrate */}
              <SkillCategory
                skills={filteredSkills}
                categoryTitle={t(selectedCategory === 'all' ? 'allSkills' : selectedCategory)}
              />
            </div>
          </RevealXLeft>
        </div>
      </div>
    </section>
  );
}

export default Skills;
