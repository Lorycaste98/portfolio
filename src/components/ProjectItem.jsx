import React from 'react';

function ProjectItem({ img, title, languages, link }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#ffbb00]/50 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ffbb00]">
      <img src={img} alt={title} className="rounded-xl group-hover:opacity-10 duration-300 opacity-70" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg text-[#000051] font-bold tracking-wider text-center whitespace-nowrap">{title}</h3>
        <p className="text-[#000051] font-medium text-center">{languages.join(', ')}</p>
        <a href={link} target="_blank" rel="noreferrer" className="flex justify-center">
          <button className="mt-2 text-center px-5 py-1 rounded-lg border-2 border-[#000051] text-gray-700 font-bold cursor-pointer text-lg hover:bg-[#000051] hover:text-[#ffbb00]">
            Visit
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
