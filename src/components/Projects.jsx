import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projectsData';
import { RevealYUp, RevealYDown } from './Reveals';
import Slider from 'react-slick';

function Projects() {
  // Configurazione del carosello
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="w-full md:min-h-screen bg-stone-200 dark:bg-[#000051] pt-20 pb-[100px] md:py-40 flex items-center transition-colors duration-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1100px] w-full">
          <RevealYUp>
            <div className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00]">
                PROGETTI
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400">I miei progetti più recenti</p>
            </div>
          </RevealYUp>
          <RevealYDown>
            <div className="w-[70%] md:w-[85%] mx-auto">
              <Slider {...settings}>
                {projects.map((project, index) => (
                  <div key={index} className="px-4">
                    <ProjectItem
                      img={project.image}
                      title={project.title}
                      languages={project.languages}
                      linkApp={project.linkApp}
                      linkRepo={project.linkRepo}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </RevealYDown>
        </div>
      </div>
    </section>
  );
}

export default Projects;
