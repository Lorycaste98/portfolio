import React from 'react';
import works from '../data/workData';
import WorkItem from './WorkItem';
import { RevealXRight, RevealYUp } from './Reveals';

function Work() {
  return (
    <section
      id="work"
      className="w-full h-auto bg-white dark:bg-blue-900 py-20 md:py-40 transition-colors duration-500"
      y
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1000px] w-full">
          <RevealYUp>
            <div className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00]">
                ESPERIENZE
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400">La mia formazione</p>
            </div>
          </RevealYUp>
          <RevealXRight>
            {works.map((work, index) => (
              <WorkItem key={index} period={work.period} title={work.title} details={work.details} />
            ))}
          </RevealXRight>
        </div>
      </div>
    </section>
  );
}

export default Work;
