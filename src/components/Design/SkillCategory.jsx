import React from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../styles/SkillCategory.css';

function SkillCategory({ skills }) {
  // Traduzioni
  const { t } = useTranslation('skills');

  return (
    <div>
      <TransitionGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <CSSTransition
            key={index}
            timeout={300} // Durata dell'animazione
            classNames="fade" // Classi per la transizione
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-500 transform hover:scale-105 lg:flex items-center justify-around">
              {/* Icona */}
              <div className="flex justify-center mb-4 lg:mb-0">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
              </div>
              <div>
                {/* Nome della competenza */}
                <h3 className="text-lg font-semibold text-center text-black dark:text-gray-200">{skill.name}</h3>

                {/* Livello */}
                <p
                  className={`text-center font-medium ${
                    t(skill.level) === 'In corso' || t(skill.level) === 'In progress'
                      ? 'text-orange-500 italic'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {t(skill.level)}
                </p>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default SkillCategory;
