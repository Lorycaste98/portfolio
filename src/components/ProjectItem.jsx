import React from 'react';
import { motion } from 'framer-motion';

function ProjectItem({ img, title, languages, linkApp, linkRepo }) {
  return (
    <motion.div className="md:max-w-md rounded-2xl overflow-hidden bg-white dark:bg-[#000051] border-4 border-[#000051] dark:border-white hover:border-green-500 dark:hover:border-green-500 transition-all duration-300">
      <img className="w-full h-48 object-cover" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="text-lg lg:text-xl font-semibold text-black dark:text-gray-200 mb-2">{title}</div>
        <p className="text-gray-4700 dark:text-gray-400 text-base">{languages.join(', ')}</p>
        <div className="flex gap-4">
          <a
            href={linkApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-[#000051] dark:bg-white hover:bg-blue-700 dark:hover:bg-blue-700 text-white dark:text-[#000051] dark:hover:text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 text-center"
          >
            Visita sito
          </a>
          <a
            href={linkRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-[#000051] dark:bg-white hover:bg-blue-700 dark:hover:bg-blue-700 text-white dark:text-[#000051] dark:hover:text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 text-center"
          >
            Vedi codice
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectItem;
