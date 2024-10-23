import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LuExternalLink } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa6';

function ProjectItem({ img, title, date, languages, linkApp, linkRepo }) {
  // Traduzioni
  const { t } = useTranslation('projects');

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group my-4 h-[420px] relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-stone-500"
      aria-labelledby={`project-title-${title}`}
    >
      {/* Overlay gradiente sull'immagine al hover */}
      <div className="relative h-56 overflow-hidden">
        {/* Data in alto a destra con stile discreto */}
        <div className="absolute top-2 right-2 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
          {date}
        </div>
        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img className="h-full w-full object-cover border-b-2" src={img} alt={`${title}`} aria-hidden="true" />

        {/* Tag linguaggi */}
        <div className="absolute bottom-0 left-0 right-0 p-4 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm font-medium bg-black/30 text-white backdrop-blur-sm rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <header className="mb-4">
          <h2 id={`project-title-${title}`} className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h2>
        </header>

        {/* Bottoni con icone e hover effects */}
        <div className="mt-auto flex flex-col gap-3">
          <a
            href={linkApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 py-2 rounded-lg bg-[#000051] dark:bg-white text-white dark:text-[#000051] font-medium hover:bg-blue-800 dark:hover:bg-blue-800 dark:hover:text-white transition-all duration-200 active:scale-95"
          >
            <LuExternalLink size={25} />
            <span>{t('visiteButton')}</span>
          </a>

          <a
            href={linkRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 py-2 rounded-lg bg-[#000051] dark:bg-white text-white dark:text-[#000051] font-medium hover:bg-blue-800 dark:hover:bg-blue-800 dark:hover:text-white transition-all duration-200 active:scale-95"
          >
            <FaCode size={25} />
            <span>{t('codeButton')}</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectItem;
