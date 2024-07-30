import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function ProjectItem({ img, title, languages, linkApp, linkRepo }) {
  // Traduzioni
  const { t } = useTranslation('projects');

  return (
    <motion.article
      className="md:max-w-md h-[400px] rounded-2xl overflow-hidden bg-white dark:bg-[#000051] border-4 border-[#000051] dark:border-white hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 flex flex-col"
      aria-labelledby={`project-title-${title}`}
    >
      <img className="w-full h-48 object-cover border-b border-[#000051]" src={img} alt={title} aria-hidden="true" />
      <div className="px-6 py-5 md:py-8 flex-1 flex flex-col justify-between">
        <header>
          <h2 id={`project-title-${title}`} className="text-lg lg:text-2xl font-semibold text-black dark:text-gray-200">
            {title}
          </h2>
        </header>
        <section>
          <p className="text-gray-700 dark:text-gray-400 md:text-lg">{languages.join(', ')}</p>
        </section>
        <footer className="flex gap-4">
          <a
            href={linkApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-[#000051] dark:bg-white hover:bg-blue-700 dark:hover:bg-blue-700 text-white dark:text-[#000051] dark:hover:text-white font-bold py-2 px-4 rounded transition-all duration-300 text-center"
          >
            {t('visiteButton')}
          </a>
          <a
            href={linkRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-[#000051] dark:bg-white hover:bg-blue-700 dark:hover:bg-blue-700 text-white dark:text-[#000051] dark:hover:text-white font-bold py-2 px-4 rounded transition-all duration-300 text-center"
          >
            {t('codeButton')}
          </a>
        </footer>
      </div>
    </motion.article>
  );
}

export default ProjectItem;
