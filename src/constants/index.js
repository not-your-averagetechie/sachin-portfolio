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
  phone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "teaching",
    title: "Teaching",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Headline metrics — the highlight reel
export const stats = [
  { value: "$1B+", label: "Total volume", sub: "fully on-chain" },
  { value: "$1M+", label: "Daily volume", sub: "2,000+ active markets" },
  { value: "30k+", label: "Users scaled to", sub: "from 1,000" },
  { value: "100%ile", label: "GMAT", sub: "CAT 98.7%ile" },
];

// AI models orbiting the hero — the toolkit of an AI PM
export const aiModels = [
  { name: "Claude", vendor: "Anthropic", color: "#D97757" },
  { name: "Fable 5", vendor: "Anthropic", color: "#B600A8" },
  { name: "GPT-5.4", vendor: "OpenAI", color: "#10A37F" },
  { name: "Gemini", vendor: "Google", color: "#4E8CF9" },
];

// Numbered services list (white section)
export const aiServices = [
  {
    number: "01",
    name: "AI Product Strategy",
    description:
      "Turning frontier-model capability into shipped product — model selection, eval loops, and roadmaps that compound instead of demo.",
  },
  {
    number: "02",
    name: "Agentic Workflows",
    description:
      "Designing multi-agent systems, RAG pipelines and tool-use flows that move real business metrics — 70-80% conversion lifts, not slideware.",
  },
  {
    number: "03",
    name: "Markets & Web3 Infra",
    description:
      "CLOB matching engines, tokenomics and prediction markets — scaled from 1,000 to 30,000+ users past $1B+ in on-chain volume, $1M+ of it every day.",
  },
  {
    number: "04",
    name: "Growth & GTM",
    description:
      "Proprietary growth-hacking frameworks, KOL ecosystems and protocol partnerships that take products from 0 → 1 → N.",
  },
  {
    number: "05",
    name: "Design → MVP",
    description:
      "From PRD to pixel — rapid prototyping with modern stacks to validate the bet before committing engineering.",
  },
];

// Featured projects for the sticky-stack cards (matched into `projects` below by name).
// `video` plays as the card's primary media; `shots` are supporting screenshots
// loaded from /public/shots — any file that isn't there yet is simply skipped,
// so dropping images in later needs no code change.
export const featuredProjectNames = [
  {
    name: "ATLAS",
    category: "Agentic Trading · Forkast",
    stat: "1,000+ users in the first 10 days · Covered by The Block",
    video: "/media/atlas-agent.mp4",
    shots: ["/shots/atlas-1.png", "/shots/atlas-2.png"],
  },
  {
    name: "Forkast.gg",
    category: "AI × Prediction Markets",
    stat: "$1B+ total volume · $1M+ daily · fully on-chain",
    video: "/media/forkast.mp4",
    shots: ["/shots/forkast-1.png", "/shots/forkast-2.png"],
  },
  {
    name: "Buddi",
    category: "Voice-First AI",
    stat: "Shipped on iOS, Windows & desktop",
    video: "/media/buddi.mp4",
    shots: ["/shots/buddi-1.png", "/shots/buddi-2.png"],
  },
  {
    name: "UGC.fun",
    category: "Consumer Web3",
    stat: "Content = Money · 24h reward cycles",
    shots: ["/shots/ugc-1.png", "/shots/ugc-2.png"],
  },
  {
    name: "BLOCKMEN",
    category: "Founder · Blockchain × AI",
    stat: "Consultancy for prediction markets — automated & intelligent",
    video: "/media/blockmen.mp4",
    shots: ["/shots/blockmen-1.png", "/shots/blockmen-2.png"],
  },
];

const services = [
  {
    title: "AI & Web3 Product Head",
    icon: web,
  },
  {
    title: "Agentic AI Architect",
    icon: mobile,
  },
  {
    title: "AI Professor & Trainer",
    icon: creator,
  },
  {
    title: "Growth & Tokenomics",
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
  // icon-less pills — rendered as text chips
  { name: "Python" },
  { name: "Solidity" },
  { name: "Solana" },
  { name: "Next.js" },
  { name: "PostgreSQL" },
  { name: "GoLang" },
  { name: "AWS" },
  { name: "TensorFlow" },
  { name: "PyTorch" },
  { name: "LangChain" },
  { name: "Hugging Face" },
  { name: "Scikit-learn" },
  { name: "OpenCV" },
  { name: "Pandas" },
  { name: "n8n", preserveCase: true },
  { name: "Mixpanel" },
];

const experiences = [
  {
    title: "Product Head, AI & Operations",
    company_name: "Forkast.gg",
    icon: forkast,
    iconBg: "#383E56",
    date: "June 2025 - Present · New York (Remote)",
    points: [
      "Shipped ATLAS, a no-code agentic trading harness for prediction markets — pick a strategy, set risk, deploy in seconds, and the agent trades 24/7 while earning through daily quests. Covered by The Block.",
      "Led product and built a fast order-matching engine (CLOB), scaling users from 1,000 to 30,000+ across 2,000+ active markets.",
      "Direct daily operations for 2,000+ active markets — liquidity management, order book health, CLOB/AMM market-making strategies and ecosystem fund management.",
      "Head the CFTC license division including security protocols and document preparation; led a $3M seed raise as part of a $12M post-SAFE round led by Arbitrum Ventures.",
      "Scaled the platform past $1B+ in cumulative on-chain volume — now clearing $1M+ daily — via proprietary growth-hacking frameworks and protocol collaborations with Myriad, SX Bet and Ronin Wallet.",
      "Launched TVT League — a two-week Trader vs Trader ranked competition powered by Arbitrum with a $3,500 USDC prize pool and dual volume/PnL leaderboards.",
    ],
  },
  {
    title: "AI Professor — AI for Businesses",
    company_name: "Dr. D. Y. Patil B-School",
    icon: dyp,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present · Pune, India (On-site)",
    points: [
      "Visiting faculty heading the Department of Artificial Intelligence.",
      "Architect MBA and PGDM curriculum specialising in Agentic AI, GenAI and AI Security.",
      "Direct capstone projects and research initiatives, and run intensive workshops including Saturday masterclasses and weekday extra sessions.",
      "Run Faculty Development Programmes so other educators can teach AI in HRM, business analytics, finance and operations.",
    ],
  },
  {
    title: "Founder",
    company_name: "BLOCKMEN",
    iconText: "B",
    iconBg: "#18011F",
    date: "Feb 2026 - Present · Bangalore, India",
    points: [
      "Founded theblockmen.com — a blockchain × AI consultancy for prediction markets, automated and intelligent.",
      "Bringing the best talent for blockchain and AI to teams shipping in the space.",
    ],
  },
  {
    title: "Technical Product Manager, AI & Web3 (acting Head of Product)",
    company_name: "Pluto",
    icon: Plutologo,
    iconBg: "#383E56",
    date: "Sept 2023 - June 2025 · Dubai (Hybrid)",
    points: [
      "Orchestrated the release of three NFT collections and tokens (Gigav, Aptos), generating a minimum of $200k in initial sales, with marketing synchronized to product availability.",
      "Spearheaded fundraising by crafting the whitepaper and pitch deck, securing investment from Polygon Ventures and Jungle Ventures.",
      "Architected Blaster AI on TensorFlow, PyTorch, GenAI, Scikit-learn, LangChain, Hugging Face, NLTK, NumPy and Pandas — lifting lead conversion to 70-80%.",
      "Engineered LinkedIn_AI, an agent that automates personalised job applications at scale.",
      "Shipped two dApps — ugc.fun and Creator Buds — while serving as acting Head of Product; both powered by CREATE technology.",
      "Ran sprints, release dashboards and PRD sign-off with the CEO; measured core KPIs using Mixpanel.",
      "Collaborated with KOLs, exchanges and services to hold liquidity and maintain token stability.",
    ],
  },
  {
    title: "Web3 Product Owner",
    company_name: "Platter Inc.",
    icon: Platter,
    iconBg: "#383E56",
    date: "April 2022 - August 2023 · Bangalore, India",
    points: [
      "Promoted from lead developer to Product Owner.",
      "Built and maintained 2 Web3 dApps (Platter.fi, Zerion.io) with a 5L+ user base and $2M+ revenue.",
      "Designed dApp interfaces with web3 libraries and wallet integrations, and ran backend plus DevOps.",
      "Led technical product teams on protocol strategy and built bespoke bots for Gigaverse and its clients.",
      "Led token operations including distribution planning, public sales, utility and staking-based airdrops, plus KOL, exchange and launchpad partnerships.",
    ],
  },
  {
    title: "Product Developer I",
    company_name: "PhenomPeople Inc.",
    icon: Phenom,
    iconBg: "#383E56",
    date: "April 2021 - March 2022 · Hyderabad, India",
    points: [
      "Business analysis and data work with MySQL, Python, BeautifulSoup and NumPy.",
      "Built MERN-stack visual applications, charts and dashboards for the marketing team.",
    ],
  },
];

// Education, credentials and test scores
export const education = [
  {
    school: "Harvard Business School",
    program: "Executive Education — AI for Leaders & Business Analytics",
    detail:
      "Post-graduate course on how AI is reshaping modern business structures, and the core principles and architecture of AI-native organisations.",
    date: "Sept 2025 - Dec 2025",
    grade: "Grade 10",
  },
  {
    school: "Pune University",
    program: "B.E. Information Technology",
    detail:
      "Front-end development, Python and systems foundations that became the technical base for product leadership.",
    date: "Aug 2017 - Aug 2021",
    grade: "9.89 CGPA",
  },
];

export const testScores = [
  { label: "GMAT", value: "100%ile", year: "2025" },
  { label: "CAT", value: "98.7%ile", year: "" },
  { label: "JEE Advanced", value: "AIR 11854", year: "" },
  { label: "JEE Mains", value: "85", year: "" },
];

// Teaching — AI department leadership at DY Patil
export const teaching = {
  role: "AI Professor (AI for Businesses) · Head, Department of Artificial Intelligence",
  school: "Dr. D. Y. Patil B-School, Pune",
  since: "Visiting faculty since May 2025",
  intro:
    "I architect the MBA and PGDM AI curriculum — Agentic AI, GenAI and AI Security — supervise capstones, and run Faculty Development Programmes so other professors can teach AI in HRM, analytics, finance and operations. Everything I give my students, I publish free.",
  highlights: [
    {
      title: "Curriculum architecture",
      body: "MBA & PGDM specialisations in Agentic AI, GenAI and AI Security, plus Saturday masterclasses and weekday intensives.",
    },
    {
      title: "Faculty Development Programmes",
      body: "Upskilling other educators to teach AI across HRM, business analytics, finance and operations.",
    },
    {
      title: "Open resources, not gated courses",
      body: "An 18+ page beginner-to-agent n8n guide (242 comments) and a 60-lecture crash course on n8n, ElevenLabs and vibe coding — priced at $500, then released free.",
    },
  ],
  capstones: [
    {
      student: "Ani Jain",
      program: "MBA Finance",
      project: "ESG Insight Dashboard",
      body: "Live dashboard visualising and analysing sustainability metrics across ten entities at an average ESG score of 74.1, with rating distribution analysis.",
    },
    {
      student: "Ashay Sonwane",
      program: "Business Analytics",
      project: "AI-Driven Customer Intelligence Dashboard",
      body: "RFM analysis plus K-Means clustering segmenting customers into Champions, Loyal, Potential Loyalists and At-Risk — Python/Flask, Pandas, NumPy, Scikit-learn, Chart.js and PostgreSQL.",
    },
    {
      student: "Abhijeet Shukla",
      program: "Business Analytics PGDM",
      project: "Real-Estate Analytics Dashboard",
      body: "100+ properties and a $30M+ portfolio across three regions, comparing single-family versus condo revenue and price per square foot.",
    },
  ],
};

const testimonials = [
  {
    testimonial:
      "Products should ship, not demo. Whether it's a CLOB matching engine or an agentic trading harness, I hold the bar at production quality — real users, real volume, real regulatory scrutiny.",
    name: "Commitment to Excellence",
  },
  {
    testimonial:
      "The fastest way to understand a frontier is to teach it. Leading an AI department while shipping AI products keeps both sharp — and everything I give my students, I publish free rather than gate.",
    name: "Continuous Improvement",
  },
  {
    testimonial:
      "When we launched ATLAS I named every engineer on the team individually. Cross-functional work only compounds when credit is public and specific — that's how I lead product.",
    name: "Effective Collaboration",
  },
];

const projects = [
  {
    name: "ATLAS",
    description:
      "No-code agentic trading for prediction markets, built at Forkast — pick a strategy, set risk, deploy in seconds. The agent trades 24/7.",
    highlights: [
      {
        label: "Own harness",
        body: "Custom model layer + runtime skill registry — quoting, hedging, risk limits.",
      },
      {
        label: "Cross-venue",
        body: "Polymarket, Forkast & Kalshi via one normalised interface.",
      },
      {
        label: "AI layer",
        body: "LLM planner with tool-calling, backtests and evals.",
      },
      {
        label: "Infra",
        body: "AWS + GCP, Kubernetes agent workers, autoscaling.",
      },
    ],
    tags: [
      { name: "Agentic AI", color: "blue-text-gradient" },
      { name: "Prediction Markets", color: "green-text-gradient" },
      { name: "Kubernetes", color: "pink-text-gradient" },
      { name: "AWS / GCP", color: "blue-text-gradient" },
      { name: "LLM Planner", color: "green-text-gradient" },
    ],
    gradient: "linear-gradient(135deg, #18011F 0%, #B600A8 45%, #7621B0 100%)",
    glyph: "ATLAS",
    source_code_link: "https://forkast.gg/agent",
  },
  {
    name: "Buddi",
    description:
      "A voice-first AI interview coach I built end to end and shipped on iPhone, Windows and desktop — real-time speech-to-speech coaching that listens, pushes back and remembers your past sessions. Product, model pipeline and distribution: the kind of thing an AI product manager should be able to ship alone.",
    tags: [
      { name: "Voice AI", color: "blue-text-gradient" },
      { name: "iOS / Windows", color: "green-text-gradient" },
      { name: "LLM Agents", color: "pink-text-gradient" },
    ],
    gradient: "linear-gradient(135deg, #0B1F2A 0%, #10A37F 55%, #4E8CF9 100%)",
    glyph: "BUDDI",
    source_code_link: "https://buddi.theblockmen.com",
  },
  {
    name: "BLOCKMEN",
    description:
      "My consultancy at the intersection of blockchain × AI. I help teams design and ship prediction markets — market mechanics, liquidity, tokenomics and the agentic layer on top — built on everything I learned scaling Forkast past $1B in on-chain volume. Founded Feb 2026, open-sourced under MIT.",
    tags: [
      { name: "Founder", color: "blue-text-gradient" },
      { name: "Consultancy", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    gradient: "linear-gradient(135deg, #14171B 0%, #39414A 50%, #BE4C00 100%)",
    glyph: "BLOCKMEN",
    source_code_link: "https://theblockmen.com/",
  },
  {
    name: "Forkast.gg",
    description:
      "The on-chain prediction market I run product for — scaled from 1,000 to 30,000+ traders, past $1B+ in cumulative volume, now clearing $1M+ every day.",
    highlights: [
      {
        label: "Market infra",
        body: "CLOB matching engine + AMM liquidity across 2,000+ live markets.",
      },
      {
        label: "AI-first",
        body: "Agentic trading (ATLAS), AI market curation and risk tooling.",
      },
      {
        label: "0 → $1B",
        body: "Growth frameworks + partnerships with Myriad, SX Bet, Ronin.",
      },
    ],
    tags: [
      { name: "On-Chain", color: "blue-text-gradient" },
      { name: "CLOB", color: "green-text-gradient" },
      { name: "Agentic AI", color: "pink-text-gradient" },
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
    source_code_link: "https://ugc.fun",
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
    gradient: "linear-gradient(135deg, #04121F 0%, #0A66C2 55%, #4E8CF9 100%)",
    glyph: "LinkedIn AI Agent",
    pattern: "workflow",
    patternAccent: "#9FD0FF",
    source_code_link: "https://github.com/not-your-averagetechie/Linkedin_AI/tree/main",
  },
  {
    name: "awesome-n8n-templates",
    description:
      "The curated automation template library that pairs with my 18+ page beginner-to-agent n8n guide — step-by-step automations with no coding required, AI agent workflows with chat triggers, memory and tool use, and real-world production use cases. 2,000+ battle-tested workflows, published free.",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "Automation", color: "green-text-gradient" },
      { name: "Open Source", color: "pink-text-gradient" },
    ],
    gradient: "linear-gradient(135deg, #1A1020 0%, #6D28D9 50%, #EA4B71 100%)",
    glyph: "n8n · 2,000+ workflows",
    pattern: "workflow",
    patternAccent: "#FF8FA8",
    source_code_link:
      "https://github.com/not-your-averagetechie/awesome-n8n-templates",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sachin-yadav-web3/",
    display: "5,622 followers · in/sachin-yadav-web3",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/not-your-averagetechie",
    display: "100 repositories · not-your-averagetechie",
  },
  {
    name: "X / Twitter",
    iconText: "𝕏",
    link: "https://x.com/5ach1n_Er",
    display: "@5ach1n_Er",
  },
  {
    name: "Email",
    iconText: "@",
    link: "mailto:sachin11061998@gmail.com",
    display: "sachin11061998@gmail.com",
  },
  {
    name: "Phone / WhatsApp / BOTIM",
    icon: phone,
    iconInvert: true, // phone.svg ships dark — flip it for the dark theme
    link: "tel:+917057480940",
    display: "+91 7057480940",
  },
];

export { services, technologies, experiences, testimonials, projects, socialLinks };
