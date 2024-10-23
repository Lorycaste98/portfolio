import VeggieRecipesImg from '../assets/projects-images/project1.webp';
import PortfolioImg from '../assets/projects-images/project2.webp';
import CounterImg from '../assets/projects-images/project3.webp';
import AirEcoImg from '../assets/projects-images/project4.webp';
import NewPortfolioImg from '../assets/projects-images/project5.webp';
import ProvaLandpage from '../assets/projects-images/project6.webp';
import ProvaPalestra from '../assets/projects-images/project7.webp';

const projects = [
  {
    title: 'titleProject6',
    languages: ['React', 'Tailwind', 'Javascript'],
    image: ProvaLandpage,
    date: 'dateProject6', // set 2024
    linkApp: '',
    linkRepo: 'https://github.com/Lorycaste98/esercizio-glacom',
  },
  {
    title: 'titleProject7',
    languages: ['React', 'Tailwind', 'TypeScript'],
    image: ProvaPalestra,
    date: 'dateProject7', // set 2024
    linkApp: 'https://palestra-prova.netlify.app/',
    linkRepo: 'https://github.com/Lorycaste98/modello-palestra',
  },
  {
    title: 'titleProject1',
    languages: ['React', 'Tailwind', 'Javascript'],
    image: NewPortfolioImg,
    date: 'dateProject1', // lug 2024
    linkApp: 'https://lorenzocastelletti.netlify.app/',
    linkRepo: 'https://github.com/Lorycaste98/portfolio',
  },
  {
    title: 'titleProject2',
    languages: ['React', 'Tailwind', 'Javascript'],
    image: AirEcoImg,
    date: 'dateProject2', // giu 2024
    linkApp: 'https://aireco.netlify.app/',
    linkRepo: 'https://github.com/Lorycaste98/AirEco-App',
  },
  {
    title: 'titleProject3',
    languages: ['React', 'Tailwind', 'Javascript'],
    image: VeggieRecipesImg,
    date: 'dateProject3', // mag 2024
    linkApp: 'https://vegetaflavors.netlify.app/',
    linkRepo: 'https://github.com/Lorycaste98/Vegetarian-App-React',
  },
  {
    title: 'titleProject4',
    languages: ['HTML', 'CSS', 'Javascript'],
    image: CounterImg,
    date: 'dateProject4', // gen 2024
    linkApp: 'https://lorycaste98.github.io/counter-app/',
    linkRepo: 'https://github.com/Lorycaste98/counter-app',
  },
  {
    title: 'titleProject5',
    languages: ['HTML', 'CSS'],
    image: PortfolioImg, // dic 2023
    date: 'dateProject5',
    linkApp: 'https://lorycaste98.github.io/progetto-html-css/',
    linkRepo: 'https://github.com/Lorycaste98/progetto-html-css',
  },
];

export default projects;
