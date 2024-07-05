import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projectsData';

function Projects() {
  return (
    <section id="projects" className="w-full h-auto md:h-screen bg-[#000051] text-gray-300 py-40">
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1000px] w-full">
          <div className="md:text-center pb-8">
            <h2 className="text-4xl lg:text-6xl font-bold inline border-b-4 border-[#ffbb00]">PROJECTS</h2>
            <p className="mt-4 lg:text-xl">Most recent works</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mx-4">
            {projects.map((project, index) => (
              <ProjectItem
                img={project.image}
                title={project.title}
                key={index}
                languages={project.languages}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
