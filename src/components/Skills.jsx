import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RevealYUp, RevealXLeft } from './Reveals';
import SkillCategory from './Design/SkillCategory';

import skillsData from '../data/skillsData';

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Traduzioni
  const { t } = useTranslation('skills');

  // Funzione per filtrare le competenze in base alla categoria selezionata
  const filteredSkills =
    selectedCategory === 'all' ? skillsData : skillsData.filter((skill) => skill.category === selectedCategory);

  const categories = [
    { key: 'all', label: t('all') },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'other', label: t('other') },
  ];

  return (
    <section
      id="skills"
      className="w-full h-auto md:min-h-screen bg-white dark:bg-blue-900 py-20 lg:py-40 transition-colors duration-500 flex items-center"
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
                {/* Mappa su tutte le categorie */}
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`px-4 py-1 ml-2 rounded ${
                      selectedCategory === category.key
                        ? 'bg-[#000051] dark:bg-gray-200 text-white dark:text-[#000051]'
                        : 'bg-gray-200 dark:bg-[#000051] text-[#000051] dark:text-white'
                    }`}
                    onClick={() => setSelectedCategory(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Visualizzazione delle competenze filtrate */}
              <SkillCategory
                skills={filteredSkills}
                categoryTitle={t(selectedCategory === 'all' ? 'allSkills' : selectedCategory)}
              />
            </div>
          </RevealXLeft>
          {/* Footer per i copyright */}
          <footer className="mt-12 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Icons by{' '}
              <a href="https://devicon.dev/" target="_blank" rel="noopener noreferrer" className="underline">
                Devicon
              </a>{' '}
              &{' '}
              <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer" className="underline">
                Icons8
              </a>
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Skills;
