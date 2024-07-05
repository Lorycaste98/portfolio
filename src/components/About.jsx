import React from 'react';
import CV from '../assets/CURRICULUM.pdf';
import { GrDocumentDownload } from 'react-icons/gr';

function About() {
  return (
    <div id="about" className="w-full h-screen bg-[#000051] text-gray-300 py-5">
      <div className="flex flex-col justify-center items-center w-full h-full px-5 md:px-16">
        <div className="max-w-[1000px] w-full">
          <div className="md:text-center pb-8">
            <h2 className="text-4xl lg:text-6xl font-bold inline border-b-4 border-[#ffbb00]">ABOUT</h2>
            <p className="mt-4 lg:text-xl">My Introduction</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 mt-6">
          <div className="md:text-right text-3xl lg:text-5xl font-bold">
            <p>Hi I'm Lorenzo, nice to meet you.</p>
            <p>Please take a moment to check out my personal website</p>
          </div>
          <div>
            <p className="text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi laborum nobis quis laboriosam earum ut
              odio, perspiciatis vitae dignissimos, explicabo cumque. Culpa fugiat illo eligendi, reprehenderit sapiente
              sequi doloribus magnam enim optio amet, quaerat sed exercitationem sit alias? Sed debitis tempora cumque
              accusamus ducimus exercitationem unde atque sit numquam voluptatum!
            </p>
            <a
              href={CV}
              download=""
              className="text-white w-40 group border-2 pl-6 pr-4 py-3 flex items-center lg:text-xl hover:bg-[#ffbb00] hover:border-[#ffbb00] hover:text-[#000051] hover:scale-105 active:scale-90 active:bg-[#b68f23] active:border-[#b68f23] duration-300 font-semibold rounded-2xl my-6"
            >
              Download CV
              <span className="ml-2">
                <GrDocumentDownload size={18} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
