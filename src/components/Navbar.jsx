import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaSpotify } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full h-[120px] flex justify-between items-center px-5 md:px-8 text-gray-300 bg-[#000051] z-[1000]">
        <div>
          <a href="#home">
            <img src={Logo} alt="Logo" style={{ width: '100px' }} />
          </a>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-2xl font-semibold">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden px-4 z-20 cursor-pointer">
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? 'hidden'
              : `absolute top-0 left-0 w-full h-screen bg-[#000051]/90 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
                  nav ? '-translate-x-0' : 'translate-x-full'
                }`
          }
        >
          <a onClick={handleClick} href="#home" className="py-6 text-3xl font-semibold">
            Home
          </a>
          <a onClick={handleClick} href="#about" className="py-6 text-3xl font-semibold">
            About
          </a>
          <a onClick={handleClick} href="#skills" className="py-6 text-3xl font-semibold">
            Skills
          </a>
          <a onClick={handleClick} href="#projects" className="py-6 text-3xl font-semibold">
            Projects
          </a>
          <a onClick={handleClick} href="#work" className="py-6 text-3xl font-semibold">
            Work
          </a>
          <a onClick={handleClick} href="#contact" className="py-6 text-3xl font-semibold">
            Contact
          </a>

          {/* Social Icons */}
          <div className="flex gap-6 translate-y-40 ">
            <a href="/">
              <FaLinkedin size={30} />
            </a>
            <a href="/">
              <FaInstagram size={30} />
            </a>
            <a href="/">
              <FaSpotify size={30} />
            </a>
            <a href="/">
              <FaGithub size={30} />
            </a>
            <a onClick={handleClick} href="#contact">
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0 z-10">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-500 bg-[#0e76a8] ">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-500 bg-gradient-to-r from-[#fcaf45] to-[#c13584]">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Instagram <FaInstagram size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-500 bg-[#1DB954] ">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Spotify <FaSpotify size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-500 bg-[#2b3137]">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              GitHub <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-500 bg-[#0e76a8]">
            <a className="flex justify-between items-center w-full text-gray-300" href="#contact">
              Email <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
