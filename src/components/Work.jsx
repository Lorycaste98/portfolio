import React from 'react';
import works from '../data/workData';
import WorkItem from './WorkItem';

function Work() {
  return (
    <section id="work" className="w-full h-auto md:h-screen bg-[#000051] text-gray-300 py-40">
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1000px] w-full">
          <div className="md:text-center pb-8">
            <h2 className="text-4xl lg:text-6xl font-bold inline border-b-4 border-[#ffbb00]">WORK</h2>
            <p className="mt-4 lg:text-xl">My work experience</p>
          </div>
          {works.map((work, index) => (
            <WorkItem
              key={index}
              period={work.period}
              title={work.title}
              duration={work.duration}
              details={work.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
