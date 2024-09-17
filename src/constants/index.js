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
  Pluto,
  Platter,
  gigaverse,
  Phenom,
  clogo,
  health,
  create,
  magicbatch,

  carrent,
  
  tripguide,
  threejs,
  Plutologo,
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
    title: "Product Owner",
    icon: creator,
  },
  {
    title: "Tokenomics management",
    icon: backend,
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
    title: "Product Developer I ",
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
    title: "Associate Tech Product Manager",
    company_name: "Gigaverse pvt. ltd.",
    icon: gigaverse,
    iconBg: "#E6DEDD",
    date: "June 2021 - Dec 2022",
    points: [
      "Managed and led technical product teams in the development and execution of protocol strategies, designs, and implementations",
      "Created bespoke bots to meet the specific needs of Gigaverse and its clients in defining and launching their instances of the protocol",
      "Facilitated goal setting, planning, retrospectives, and backlog grooming to ensure project milestones and objectives attained for website code",
      "Implemented five cutting-edge projects, including the launch of a groundbreaking NFT project. Later promoted to Associate Tech Product Manager.",
    ],
  },
  {
    title: "Web3 Product Owner",
    company_name: "Platter Inc",
    icon: Platter,
    iconBg: "#383E56",
    date: "Dec 2022 - August 2023",
    points: [
      "Demonstrated expertise in developing and deploying decentralized applications (dApps) using blockchain technologies",
      "including creating smart contracts and integrating them into dApps to enable blockchain functionality",
      "Designed and developed user interfaces for dApps using web3 libraries, integrated web3 wallets, and utilized decentralized storage solutions",
      "Collaborated with designers and product managers to create user-centered experiences for dApps and integrated third-party APIs and services",
      "Developed server-side logic for dApps using back-end technologies and utilized DevOps tools and practices to deploy and manage the applications",
    ],
  },
  
  {
    title: "Technical Product manager",
    company_name: "Pluto",
    icon: Plutologo,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Played a key role in fundraising by crafting the company whitepaper, developing the pitch deck,", 
      "and securing investments from a diverse group of angel investors, including Jayanti Kanani, the founder of Polygon.",
"Led full product development and provided strategic guidance, overseeing three critical initiatives for the Blockchain team,",
 "product team and design team  contributing significantly to the company's growth.",
"Streamlined team processes through inclusive discussions, linear tasks resulting in a notable 13-point increase in team velocity,",
 "improving fast feature release each week and bringing innovation in making PRD's and pitchdecks.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "As a Product Manager, I am dedicated to delivering high-quality products that meet user needs and drive business success to the next stage of innovation and technology with highest perfection.",
    name: "Commitment to Excellence",
    
  },
  {
    testimonial:
      "Learning and adaptation are vital to my role as a Product Manager. Staying up-to-date with the latest industry trends and technologies is key to achieving product success.",
    name: "Continuous Improvement",
    
   
  },
  {
    testimonial:
      "Collaborative teamwork is at the heart of my approach to product management. I work closely with cross-functional teams to ensure our products meet strategic goals and user expectations",
    name: "Effective Collaboration",
    
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
    name: "Misfits By Pluto",
    description:
      "Aligned product development with business objectives and market demands by collaborating with cross-functional teams to define product requirements, prioritize features, and optimize smart contracts and NFT minting processes. Also, managed NFT marketplace integrations, coordinated NFT collection releases and making proper PRD's and pitchdecks for the founders",
    tags: [
      {
        name: "Web3",
        color: "blue-text-gradient",
      },
      {
        name: "NFT's and FT's",
        color: "green-text-gradient",
      },
      {
        name: "Tokenomics",
        color: "pink-text-gradient",
      },
    ],
    image: Pluto,
    source_code_link: "https://opensea.io/collection/plutomisfits",
  },
  {
    name: "Platter.fi",
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
        name: "react/Vue.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://mint-site-demo-ten.vercel.app/",
  },
  {
    name: "Create layer",
    description:
      "Built and launched a pipeline that converts all Twitter posts into NFTs, allowing users to mint them directly from the platform. This innovation drove significant engagement, helping the platform organically gain 80k followers in just one week.we built it like a farming campaign where users will like , comment and reply based on the tasks",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Thegraph",
        color: "green-text-gradient",
      },
      {
        name: "AWS/digital ocean",
        color: "pink-text-gradient",
      },
    ],
    image: create,
    source_code_link: "https://createlayer.xyz/",
  },
  {
    name: "Consciousleap",
    description:
      "Built the whole framework ad product design for the mental health startup named as consciousleap.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB/ PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://consciousleap.co/",
  },
  {
    name: "Magicbatch",
    description:
      "Desinged the main minitng website and made the whole NFT backend with staking site and tokens ditribution with the help of cron jobs and made the smart contracts for the nft minting, the NFT's are priced at 2 eth right now",
    tags: [
      {
        name: "OpenSea",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: magicbatch,
    source_code_link: "https://magicbatch.xyz/",
  },
];

export { services, technologies, experiences, testimonials, projects };
