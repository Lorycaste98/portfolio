import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

import { RevealYUp, RevealYDown } from './Reveals';
import ProjectItem from './Design/ProjectItem';

import projects from '../data/projectsData';

function Projects() {
  // Traduzioni
  const { t } = useTranslation('projects');

  // Impostazioni Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
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
            <header className="md:text-center pb-8">
              <h2 className="text-4xl lg:text-6xl text-[#000051] dark:text-gray-100 font-bold inline border-b-4 border-[#ffbb00] uppercase">
                {t('title')}
              </h2>
              <p className="mt-4 lg:text-xl text-gray-400" role="contentinfo">
                {t('subtitle')}
              </p>
            </header>
          </RevealYUp>
          <RevealYDown>
            <article className="max-w-[1100px] w-full dark:text-gray-200">
              <div className="text-3xl lg:text-4xl font-semibold md:text-center pb-6 italic max-w-[900px] mx-auto">
                <p>{t('section')}</p>
              </div>
              <div className="w-[70%] md:w-[85%] mx-auto">
                <Slider {...settings} aria-label={t('projectsSlider')}>
                  {projects.map((project, index) => (
                    <div key={index} className="px-4">
                      <ProjectItem
                        img={project.image}
                        title={t(project.title)}
                        date={t(project.date)}
                        languages={project.languages}
                        linkApp={project.linkApp}
                        linkRepo={project.linkRepo}
                        aria-label={t(`${project.title} project`)}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </article>
          </RevealYDown>
        </div>
      </div>
    </section>
  );
}

export default Projects;
