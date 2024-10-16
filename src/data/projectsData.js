import VeggieRecipesImg from '../assets/projects-images/project1.webp';
import PortfolioImg from '../assets/projects-images/project2.webp';
import CounterImg from '../assets/projects-images/project3.webp';
import AirEcoImg from '../assets/projects-images/project4.webp';
import NewPortfolioImg from '../assets/projects-images/project5.webp';

const projects = [
  {
    title: 'titleProject1',
    languages: ['React', 'Tailwind'],
    image: NewPortfolioImg,
    linkApp: 'https://aireco.netlify.app/',
    linkRepo: 'https://github.com/Lorycaste98/portfolio',
  },
  {
    title: 'titleProject2',
    languages: ['React', 'Tailwind'],
    image: AirEcoImg,
    linkApp: 'https://aireco.netlify.app/',
    linkRepo: 'https://github.com/Lorycaste98/AirEco-App',
  },
  {
    title: 'titleProject3',
    languages: ['React', 'Tailwind'],
    image: VeggieRecipesImg,
    linkApp: 'https://vegetaflavors.netlify.app/',
    linkRepo: 'https://github.com/Lorycaste98/Vegetarian-App-React',
  },
  {
    title: 'titleProject4',
    languages: ['HTML', 'CSS', 'Javascript'],
    image: CounterImg,
    linkApp: 'https://lorycaste98.github.io/counter-app/',
    linkRepo: 'https://github.com/Lorycaste98/counter-app',
  },
  {
    title: 'titleProject5',
    languages: ['HTML', 'CSS'],
    image: PortfolioImg,
    linkApp: 'https://lorycaste98.github.io/progetto-html-css/',
    linkRepo: 'https://github.com/Lorycaste98/progetto-html-css',
  },
];

export default projects;
