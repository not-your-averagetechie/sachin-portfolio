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
  blaster,    // Add new image import
  ugc,        // Add new image import
  linkedin,   // Add new image import
  github,     // Add new image import
  forkast,    // Add forkast logo
  dyp,        // Add dyp logo
  forkastProject,
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
    title: "Web3 & AI Specialist",
    icon: web,
  },
  {
    title: "Tech Product Manager",
    icon: mobile,
  },
  {
    title: "Growth hacking strategies",
    icon: creator,
  },
  {
    title: "Design & Development - MVP",
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
    title: "Product Manager, Operations (Web3 & AI)",
    company_name: "Forkast",
    icon: forkast,
    iconBg: "#383E56",
    date: "June 2025 - Present, NewYork,USA",
    points: [
      "Led product and built fast order-matching engine (CLOB), scaling users from 1,000 to 120,000+.",
      "Direct daily operations for 1000+ active markets, overseeing liquidity management, order book health, CLOB market making (AMM) strategies, and ecosystem fund management.",
      "Heading CFTC license division including security protocols, document preparation, and led a 3M seed raise as part of a 12M post-SAFE round led by Arbitrum ventures.",
      "Drove platform volume to 50k+ USD daily within just 8 months through proprietary growth-hacking frameworks and strategic protocol collaborations with Myriad, SX Bet, and Ronin Wallet.",
    ],
  },
  {
    title: "AI Trainer at corporates and business colleges",
    company_name: "AI Trainer",
    icon: dyp,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - Present, Pune, India",
    points: [
      "Delivered high-level AI training programs for corporate leadership and business colleges.",
      "Lead the Department of Artificial Intelligence at DY-PATIL B-SCHOOL,Pune.",
    ],
  },
  {
    title: "Technical Product Manager",
    company_name: "Pluto",
    icon: Plutologo,
    iconBg: "#383E56",
    date: "Sept 2023 - May 2025",
    points: [
      "Orchestrated the release of three NFT collections and tokens (Gigav , Aptos ), generating a minimum of 200k usd in initial sales; ensured marketing efforts were synchronized with product availability, and launching another token in upcoming months for CREATE.",
      "Spearheaded fundraising efforts by crafting the company's whitepaper, developing a compelling pitch deck, and securing investments from major investors like polygon ventures and jungle ventures.",
      "Optimized product design, gather feedback, and measure core KPIs using Mixpanel.",
      "Managed sprints, oversaw post-release updates, created release metrics dashboards on Mixpanel, and collaborated with the CEO on finalizing the PRD and design flow, while also addressing roadblocks in UI/UX and technical implementation.",
      "Successfully launched two recent dApps in the last 3 months (ugc.fun and creator buds) while serving as acting Head of Product, which are now planned for integration with chains to increase visibility and user adoption; both platforms are powered by CREATE technology.",
      "Collaborated with KOLs for influencing and educating masses, and worked with exchanges and services to ensure liquidity and maintain token stability.",
    ],
  },
  {
    title: "Web3 Product Owner",
    company_name: "Platter Inc.",
    icon: Platter,
    iconBg: "#383E56",
    date: "April 2022 - August 2023, Bangalore,INDIA",
    points: [
      "Built and maintained 2 Web3 dApps (Platter.fi, Zerion.io) with 5l+ user base now and 2M+ revenue",
      "Led token operations including distribution planning, public sales, and launching utility, and staking-based airdrops, Also did partnerships with KOLs, exchanges, launchpads for token launch.",
    ],
  },
  {
    title: "Product Developer I",
    company_name: "PhenomPeople Inc.",
    icon: Phenom,
    iconBg: "#383E56",
    date: "April 2021 - March 2022,Hyderabad,INDIA",
    points: [
      "Developed visual applications using the MERN stack, enhancing reporting for the marketing team.",
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
    name: "Forkast.gg",
    description:
      "Flagship trading platform doing 60k+ USD daily volume in trades. Led product and built fast order-matching engine (CLOB), scaling users from 1,000 to 120,000+. Built a fast, scalable CLOB engine and ecosystem for 1000+ active markets. Trusted by thousands of users. Read more at forkast.gg.",
    tags: [
      { name: "Web3", color: "blue-text-gradient" },
      { name: "CLOB", color: "green-text-gradient" },
      { name: "Trading", color: "pink-text-gradient" },
    ],
    image: forkastProject,
    source_code_link: "https://forkast.gg/",
  },
  {
    name: "UGC.fun",
    description:
      "Developed and launched UGC.Fun, an innovative platform that monetizes community-generated content through a unique trading mechanism. Implemented a 24-hour reward cycle where content creators earn based on engagement, creating a self-sustaining ecosystem where 'Content = Money'. Designed platform architecture for fund deposits and automated daily rewards.",
    tags: [
      { name: "Web3", color: "blue-text-gradient" },
      { name: "Smart Contracts", color: "green-text-gradient" },
      { name: "DeFi", color: "pink-text-gradient" },
    ],
    image: ugc,
    source_code_link: "https://beta.ugc.fun/",
  },
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
    source_code_link: "https://x.com/createlayer",
  },
  {
    name: "Consciousleap",
    description:
      "Built the whole framework and product design for the mental health startup named as consciousleap. Designed the whole architecture and therapy booking services and automatic schedulings",
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
    source_code_link: "https://opensea.io/collection/magicbatch",
  },
  {
    name: "Blaster AI",
    description:
      "Developed an advanced AI system using TensorFlow, PyTorch, OpenCV, Scikit-learn, LangChain, Hugging Face, NLTK, NumPy, and Pandas that generates highly specialized prompts for lead generation, resulting in 70-80% conversion success rates compared to traditional methods.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "PyTorch",
        color: "pink-text-gradient",
      },
    ],
    image: blaster,
    source_code_link: "https://github.com/not-your-averagetechie/blaster.ai-GenAI-",
  },
  {
    name: "LinkedIn AI Agent",
    description:
      "Created a cutting-edge AI tool that revolutionizes job search by automating the application process on LinkedIn, enabling personalized applications at scale. The system intelligently identifies relevant positions, customizes application materials, and manages the entire workflow, giving users a competitive advantage in rapidly changing job markets.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Automation",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/not-your-averagetechie/Linkedin_AI/tree/main",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/not-your-averagetechie",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sachin-yadav-web3/",
  },
  {
    name: "Phone/ Whatsapp / BOTIM",
    icon: mobile,
    link: "tel:+917057480940",
    display: "+91 7057480940",
  },
];

export { services, technologies, experiences, testimonials, projects, socialLinks };
