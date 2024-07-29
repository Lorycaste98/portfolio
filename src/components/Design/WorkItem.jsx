import React from 'react';

function WorkItem({ period, title, details }) {
  return (
    <ul className="ml-4 flex flex-col relative border-l border-stone-200 dark:border-blue-950">
      <li className="mb-5 ml-2 cursor-auto">
        <div className="absolute w-6 h-6 bg-stone-200 dark:bg-blue-950 rounded-full mt-4 -left-3 border-[6px] border-white dark:border-blue-900 transition-colors duration-500" />
        <div className="flex flex-wrap gap-2 flex-col md:flex-row items-start md:items-center justify-start text-xs md:text-sm md:py-2">
          <h3 className="inline-block px-2 py-1 font-semibold bg-[#000051] dark:bg-stone-200 text-white dark:text-[#000051] rounded-md text-xl lg:text-2xl">
            {title}
          </h3>
          <span className="mb-4 md:my-2 lg:text-lg font-normal text-stone-400">{period.join(' - ')}</span>
        </div>
        <p className="dark:text-gray-200 text-sm md:text-base">{details}</p>
      </li>
    </ul>
  );
}

export default WorkItem;
