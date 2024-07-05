import React from 'react';
import { GrSend } from 'react-icons/gr';

function Home() {
  return (
    <div id="home" className="bg-gradient-to-br from-[#000051] via-[#6d6dde] to-[#ffbb00] w-full h-screen ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-5 md:px-16 flex flex-col md:flex-row justify-center items-center h-full gap-6">
        <div className="bg-[hero-pattern]"></div>
        <div className="">
          <p className="text-yellow-300 lg:text-xl">Hi, my name is</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white">LORENZO CASTELLETTI</h1>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#8892b0] py-2 ">Front End Developer.</h2>
          <p className="text-xl lg:text-2xl py-4 max-w-[600px] text-black">
            I'm a front end developer who creates website interfaces. I'm currently focused on studying PHP and MySQL in
            order to become a full-stack developer.
          </p>
          <div>
            <a href="#contact">
              <button className="text-white group border-2 pl-6 pr-4 py-3 flex items-center lg:text-xl hover:bg-[#ffbb00] hover:border-[#ffbb00] hover:text-[#000051] hover:scale-105 active:scale-90 active:bg-[#b68f23] active:border-[#b68f23] duration-300 font-semibold rounded-2xl">
                Say Hello!
                <span>
                  <GrSend className="mx-2" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
