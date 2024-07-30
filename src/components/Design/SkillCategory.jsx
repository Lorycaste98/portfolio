import React from 'react';
import { useTranslation } from 'react-i18next';

function SkillCategory({ skills, categoryTitle }) {
  // Traduzioni
  const { t } = useTranslation('skills');

  return (
    <div className="border-4 border-[#000051] dark:border-white rounded-3xl px-8 sm:px-32 md:px-16 py-8 md:h-full">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-[#ffbb00] underline">{categoryTitle}</h2>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center space-x-2 hover:scale-110 duration-300 cursor-default">
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
  );
}

export default SkillCategory;
