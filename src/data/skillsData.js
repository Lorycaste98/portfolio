import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaAngular, FaJava } from 'react-icons/fa';
import { RiTailwindCssFill, RiFirebaseFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';

const skillsData = {
  frontEnd: [
    { name: 'HTML', level: 'Intermediate', icon: <FaHtml5 size={30} />, color: '#e34c26' },
    { name: 'CSS', level: 'Intermediate', icon: <FaCss3Alt size={30} />, color: '#264de4' },
    { name: 'JavaScript', level: 'Intermediate', icon: <FaJsSquare size={30} />, color: '#f0db4f' },
    { name: 'Tailwind', level: 'Intermediate', icon: <RiTailwindCssFill size={30} />, color: '#06b6d4' },
    { name: 'TypeScript', level: 'Intermediate', icon: <BiLogoTypescript size={35} />, color: '#3178c6' },
    { name: 'React', level: 'Intermediate', icon: <FaReact size={30} />, color: '#61dafb' },
    { name: 'Angular', level: 'Beginner', icon: <FaAngular size={30} />, color: '#c3002f' },
  ],
  backEnd: [
    { name: 'Node.js', level: 'Beginner', icon: <FaNodeJs size={30} />, color: '#68a063' },
    { name: 'Firebase', level: 'Work in progress', icon: <RiFirebaseFill size={30} />, color: '#FFA611' },
    { name: 'Java', level: 'Work in progress', icon: <FaJava size={30} />, color: '#f89820' },
    { name: 'MySQL', level: 'Work in progress', icon: <GrMysql size={30} />, color: '#00758F' },
  ],
};

export default skillsData;
