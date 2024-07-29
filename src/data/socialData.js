import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialData = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lorenzo-castelletti/',
    icon: <FaLinkedin size={25} />,
    colors: 'bg-[#0e76a8]',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lorycastelletti/',
    icon: <FaInstagram size={25} />,
    colors: 'bg-gradient-to-r from-[#fcaf45] to-[#c13584]',
  },
  // {
  //   name: 'Spotify',
  //   url: 'https://open.spotify.com/user/21recw65jk3fvspadgve6ciui',
  //   icon: <FaSpotify size={25} />,
  //   colors: 'bg-[#1DB954]',
  // },
  {
    name: 'GitHub',
    url: 'https://github.com/Lorycaste98',
    icon: <FaGithub size={25} />,
    colors: 'bg-[#2b3137]',
  },
];

export default socialData;
