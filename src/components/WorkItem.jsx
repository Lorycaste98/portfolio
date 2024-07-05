import React from 'react';

function WorkItem({ period, title, duration, details }) {
  return (
    <ul className="ml-4 flex flex-col relative border-l border-stone-200">
      <li className="mb-10 ml-2">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm py-2">
          <span className="inline-block px-2 py-1 font-semibold text-[#000051] bg-white rounded-md lg:text-lg">
            {period.join(' ')}
          </span>
          <span className="text-xl lg:text-2xl font-semibold">{title}</span>
          <span className="my-1 text-sm lg:text-base font-normal leading-none text-stone-400">{duration}</span>
        </p>
        <p className="">{details}</p>
      </li>
    </ul>
  );
}

export default WorkItem;
