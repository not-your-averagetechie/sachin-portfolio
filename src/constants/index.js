import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  
  Platter,
  gigaverse,
  Phenom,
  Clogo,

  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web3 Developer",
    icon: web,
  },
  {
    title: "MERN stack",
    icon: mobile,
  },
  {
    title: "Full stack developer",
    icon: backend,
  },
  {
    title: "web3 Growth hacker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product Developer",
    company_name: "PhenomPeople Inc.",
    icon: Phenom,
    iconBg: "#383E56",
    date: "Januaury 2022 - April 2022",
    points: [
      "Conducted in-depth business discussions with senior management and provided key market data from various sources to inform business decisions",
      "Built charts and graphs to visualize data and met the operational data needs of the marketing team ",
      "Conducted thorough business analysis using tools such as MySql, Python, Beautifulsoup, and Numpy to identify ",
      "System connections and develop new bot scripts, procedures, and guidelines",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Gigaverse pvt. ltd.",
    icon: gigaverse,
    iconBg: "#E6DEDD",
    date: "May 2022 - dec 2022",
    points: [
      "Managed and led technical product teams in the development and execution of protocol strategies, designs, and implementations",
      "Created bespoke bots to meet the specific needs of Gigaverse and its clients in defining and launching their instances of the protocol",
      "Facilitated goal setting, planning, retrospectives, and backlog grooming to ensure project milestones and objectives attained for website code",
      
    ],
  },
  {
    title: "Full stack web3 Developer",
    company_name: "Platter",
    icon: Platter,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Demonstrated expertise in developing and deploying decentralized applications (dApps) using blockchain technologies",
      "including creating smart contracts and integrating them into dApps to enable blockchain functionality",
      "Designed and developed user interfaces for dApps using web3 libraries, integrated web3 wallets, and utilized decentralized storage solutions",
      "Collaborated with designers and product managers to create user-centered experiences for dApps and integrated third-party APIs and services",
      "Developed server-side logic for dApps using back-end technologies and utilized DevOps tools and practices to deploy and manage the applications",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Consciousleap TM",
    icon: Clogo,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      " As a tech lead, I oversaw the development of a full website and application from scratch",
       "managing a team of three developers and setting coding standard and best practices",
       "I facilitated communication between team members, managed workloads, conducted code reviews",
      "and provided mentorship, resulting in a successful launch of the project on time and within budge",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "As a software developer, I value delivering high-quality code that meets user needs.",
    name: "Commitment to quality",
    
  },
  {
    testimonial:
      "Learning is important to me as a software developer in order to stay up-to-date with the latest technologies.",
    name: "Continuous learning",
    
   
  },
  {
    testimonial:
      "Collaborating effectively with others is a key aspect of my approach to software development.",
    name: "Collaboration",
    
  },
];

const projects = [
  {
    name: "Criptic web3 app  ",
    description:
      "Criptic is a Web3 NFT Crypto Dashboard Template built with `React`, `NextJS`, `TypeScript`, and `Tailwind CSS`.This template promises to deliver an interface for the metaverse business that is quick and easy to set up! it has  easy-to-understand documentation so that it can be installed with ease. It has web3 MetaMask authentication support with Rinkeby testnet",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/TradingElixir/Platter-frontend",
  },
  {
    name: "Python bots scripting",
    description:
      "Developed several Telegram marketing bots under Gigaverse to automate customer conversion and connect them with relevant services, Utilized MS Excel-sheet with Python and Numpy embedded application to create the bots ,Implemented web scraping scripts to collect relevant WhatsApp data for targeted marketing using technologies like Selenium and Beautiful Soup (BS4)",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://drive.google.com/drive/u/0/folders/1ix9UfJBrwNem24FoEDI3ADAxnRMbVd5Q",
  },
  {
    name: "Platter alpha Product",
    description:
      "Developed a portfolio DApp from scratch using MERN stack, providing an intuitive interface for users to manage their cryptocurrency , enabling users to track their holdings across multiple platforms in one place . Developed a backend API using Node.js and Express to fetch real-time market data and user account balances, optimizing the DApp for performance",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "moralisAPI",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/TradingElixir/Platter-frontend-nextjs",
  },
];

export { services, technologies, experiences, testimonials, projects };
