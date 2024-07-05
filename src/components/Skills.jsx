import React from 'react';
import skillsData from '../data/skillsData';

function Skills() {
  return (
    <section id="skills" className="w-full h-auto md:h-screen text-[#000051] py-40">
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1000px] w-full">
          <div className="md:text-center pb-8">
            <h2 className="text-4xl lg:text-6xl font-bold inline border-b-4 border-[#ffbb00]">SKILLS</h2>
            <p className="mt-4 lg:text-xl">My technical level</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 lg:mt-6 mx-4">
            <div className="border-4 border-[#000051] rounded-3xl px-8 sm:px-32 md:px-16 py-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-[#ffbb00]">
                FrontEnd Developer
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 ">
                {skillsData.frontEnd.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 hover:scale-110 duration-300 cursor-default">
                    <div className="icon-container w-8 flex-shrink-0" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className={`${skill.level === 'Work in progress' ? 'text-orange-500' : ''}`}>
                      <h3 className="text-lg lg:text-xl font-semibold">{skill.name}</h3>
                      <span
                        className={`text-md font-medium ${
                          skill.level === 'Work in progress' ? 'text-orange-500 italic' : 'text-gray-500'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-4 border-[#000051]  rounded-3xl px-8 sm:px-32 md:px-16 py-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-[#ffbb00]">BackEnd Developer</h2>

              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {skillsData.backEnd.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2  hover:scale-110 duration-300 cursor-default">
                    <div className="icon-container w-8 flex-shrink-0" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className={`${skill.level === 'Work in progress' ? 'text-orange-500' : ''}`}>
                      <h3 className="text-lg lg:text-xl font-semibold">{skill.name}</h3>
                      <span
                        className={`text-md font-medium ${
                          skill.level === 'Work in progress' ? 'text-orange-500 italic' : 'text-gray-500'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
