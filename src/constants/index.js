import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Event Titans',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2023 -  Present',
  },
  {
    title: 'Web Developer',
    company_name: 'FreeKenya',
    icon: coverhunt,
    iconBg: '#333333',
    date: ' 2022 - 2023',
  },
  {
    title: 'Front End Developer',
    company_name: 'Freelance',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2020 - 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Freelance',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2016 - 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Tazama',
    description: 'A netflix clone created using React and Tmdb Api.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/mashadesignworld/watch',
    demo: 'https://watch-frlz.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Kuku',
    description:
      'Poultry sales and production Web App.Laravel PHP',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/mashadesignworld/watch',
    demo: 'https://kuku.freekenyasignatures.com/',
  },
  {
    id: 'project-3',
    name: 'Lukenya resort',
    description: 'Resort website. Html, css, javascript',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/mashadesignworld/watch',
    demo: 'https://lukenyaresort.com/',
  },
  {
    id: 'project-4',
    name: 'FreeKenya',
    description: `News and Politial Party Website.Worpress`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/mashadesignworld/watch',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'FIP Capital',
    description:
      'Forex Trading Info Web App.Html, Javascript, Css.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/mashadesignworld/watch',
    demo: 'https://www.fipcapital.net/',
  },
];

export { services, technologies, experiences, projects };
