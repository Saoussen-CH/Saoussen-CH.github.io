import { Certification, Education, Experience, SocialLink, Talk } from './types';

// ============================================
// 👤 PROFILE DATA
// ============================================

export const profile = {
  name: 'Saoussen Chaabnia',
  title: 'AI Solutions Engineer • Agentic AI • AI Product Management',
  tagline: 'Designing production-grade AI solutions that align technology, business goals, and user impact',
  email: 'saoussen.chaabnia.pro@gmail.com',
  location: 'Tunisia',
  availability: 'Open to Consulting & Speaking',
  
  // Hero section
  heroDescription: `I design and ship production-grade AI solutions, from architecture to deployment. Helping teams make the right technical and product decisions that drive real business outcomes.`,
  
  // About section - Updated to match LinkedIn
  aboutParagraphs: [
    `I design and deliver production-grade AI solutions that align technology, business goals, and user impact.`,
    `That tech-business-impact mindset shapes everything I build. With a background as a Machine Learning & Cloud AI
     Engineer, I've led end-to-end ML/AI initiatives: from problem framing and architecture design to development,
     deployment, monitoring, and iteration.`,
    `My work spans AI solution architecture, MLOps, and applied Generative AI, with hands-on experience in
     Vertex AI, cloud-native pipelines, and LLM-based systems. I've collaborated with product owners, engineering
     teams, and leadership to translate business needs into scalable AI products.`,
    `Today, my focus is on Agentic AI, AI Solution Architecture, and AI Product Management, helping teams make
     the right technical and product decisions, balance feasibility and impact, and bring AI products responsibly
     to market.`,
  ],

  // Stats
  stats: [
    { value: 'GDE', label: 'Google Developer Expert', featured: true },
    { value: '3x', label: 'GCP Certified' },
    { value: '100+', label: 'Certificates' },
    { value: '30', label: 'Articles' },
    { value: '11+', label: 'Talks & Workshops' },
  ],
};

// ============================================
// 🎓 CERTIFICATIONS
// ============================================

export const certifications: Certification[] = [
  {
    id: 'gcp-ml',
    emoji: '🎓',
    title: 'Professional Machine Learning Engineer',
    provider: 'Google Cloud',
    date: 'Re-certified 2026 • Re-certified 2024 • Certified 2021',
    url: 'https://www.credly.com/badges/5455aac3-c76a-4795-bba5-89b3ae70c7f3/public_url',
  },
  {
    id: 'gcp-architect',
    emoji: '☁️',
    title: 'Professional Cloud Architect',
    provider: 'Google Cloud',
    date: 'Re-certified 2026 • Certified 2023',
    url: 'https://www.credly.com/badges/d80051f3-19d3-456f-837c-2fd35de59e91/public_url'
  },
  {
    id: 'gcp-data',
    emoji: '📊',
    title: 'Professional Data Engineer',
    provider: 'Google Cloud',
    date: 'Re-certified 2025 • Re-certified 2023 • Certified 2021',
    url: 'https://www.credly.com/badges/cf4559f6-49c3-4c78-82d2-f3466a679c24/public_url'
  },
  {
    id: 'tensorflow',
    emoji: '🧠',
    title: 'TensorFlow Developer Certificate',
    provider: 'TensorFlow',
    date: '2021',
    url: 'https://www.credential.net/65ca5eb5-12ac-43c2-b481-485d1f4b75e5?_ga=2.241349570.1579956952.1651915290-1207102324.1650243670#gs.z70n1k',
  },
  {
    id: 'pm',
    emoji: '📋',
    title: 'Project Management Professional',
    provider: 'Google',
    date: '2024',
    url: 'https://www.credly.com/badges/3f310cc0-418c-4a46-a75d-be51f9ec5c42/public_url'
    
  },
  {
    id: 'complete-list-100+-certifications',
    emoji: '🏆',
    title: 'Complete list of 100+ Certifications',
    provider: 'Google,IBM, Udacity, Coursera etc',
    date: '2018 - 2026',
    url: 'https://github.com/Saoussen-CH/Portfolio_of_Courses_and_Certificates'
  },
];

// ============================================
// 💼 EXPERIENCE
// ============================================

export const experiences: Experience[] = [
  {
    id: 'freelance',
    startDate: '2023',
    endDate: 'Present',
    title: 'AI Solution Engineer/Architect & Consultant',
    company: 'Independent',
    location: 'Remote',
    highlights: [
      'Designing production-grade AI solutions aligned with business goals and user impact',
      'Architecting Agentic AI systems and multi-agent orchestration solutions',
      'Advising on AI product strategy, feasibility assessment, and responsible AI deployment',
      'Building LLM-based systems with RAG, vector search, and cloud-native pipelines',
      'Sharing knowledge through Medium articles, GitHub projects, and speaking engagements',
    ],
  },
  {
    id: 'sofrecom',
    startDate: '2019',
    endDate: '2022',
    title: 'Machine Learning Engineer',
    company: 'Sofrecom (Orange Innovation)',
    location: 'Tunisia',
    highlights: [
      'Led end-to-end ML/AI initiatives from problem framing to deployment and monitoring',
      'Designed and optimized ETL/ELT pipelines with PySpark, extending data processing from 1 day to 1 year',
      'Developed data pipelines that reduced technician intervention costs by 10%',
      'Architected fraud detection ML project on GCP with MLOps best practices',
      'Collaborated with product owners and leadership to translate business needs into scalable AI products',
      'Team lead of 4 engineers, coordinating project tasks and communication',
      'Co-founded AI circle promoting Data and AI best practices',
      'Mentored 17+ engineering interns and conducted technical hiring interviews',
    ],
  },
  {
    id: 'sofrecom-intern',
    startDate: '2019',
    endDate: '2019',
    title: 'Data Scientist Intern',
    company: 'Sofrecom (Orange Labs Services)',
    location: 'Tunisia',
    highlights: [
      'Designed POC that demonstrated efficacy to warrant production conversion',
      'Architected custom deep learning models using autoencoders for fraud detection',
      'Engineered dynamic, auto-generated model framework using subclassing techniques',
      'Leveraged feature-attribution from latent space for model interpretability',
    ],
  },
];

// ============================================
// 🛠️ SKILLS
// ============================================

/*   export const skills: Skill[] = [
    {
      category: 'AI Solution Architecture',
      emoji: '🏗️',
      items: ['Solution Design', 'System Architecture', 'Technical Strategy', 'Feasibility Assessment', 'AI Product Management', 'Responsible AI'],
    },
    {
      category: 'Agentic AI',
      emoji: '🤖',
      items: ['Google ADK', 'LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Multi-Agent Systems', 'Agent Orchestration', 'Tool Use'],
    },
    {
      category: 'Generative AI & LLMs',
      emoji: '✨',
      items: ['Gemini', 'GPT-4', 'Claude', 'Llama', 'Mistral', 'RAG', 'Vector Search', 'Prompt Engineering', 'Fine-tuning', 'LLMOps'],
    },
    {
      category: 'MLOps & Cloud',
      emoji: '☁️',
      items: ['Vertex AI', 'GCP (Expert)', 'AWS', 'Kubeflow', 'MLflow', 'TFX', 'Terraform', 'Docker', 'CI/CD', 'Cloud-Native Pipelines'],
    },
    {
      category: 'Machine Learning',
      emoji: '🧠',
      items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'XGBoost', 'Deep Learning', 'NLP', 'Computer Vision', 'Model Deployment'],
    },
    {
      category: 'Data & Programming',
      emoji: '💻',
      items: ['Python', 'SQL', 'Apache Spark', 'BigQuery', 'FastAPI', 'TypeScript', 'React', 'Data Pipelines'],
    },
  ]; */

// ============================================
// 🎓 EDUCATION
// ============================================

export const education: Education[] = [
  {
    id: 'iot-master',
    years: '2019 — 2020',
    degree: 'Professional Master in IoT Systems',
    school: 'High Institute for ICT of Hammam Sousse',
    rank: '🏆 Rank: 1 / 27',
  },
  {
    id: 'telecom-master',
    years: '2013 — 2017',
    degree: 'Master in Telecommunication Engineering',
    school: 'National School of Engineering of Sousse',
  },
  {
    id: 'cs-degree',
    years: '2012 — 2015',
    degree: 'Engineering Degree in Applied Computer Science',
    school: 'National School of Engineering of Sousse',
  },
  {
    id: 'bachelor',
    years: '2010 — 2012',
    degree: 'Bachelor in Mathematics and Physics',
    school: 'Preparatory Institute for Engineering Studies of Monastir',
  },
];

// ============================================
// 🎤 TALKS & WORKSHOPS
// ============================================

export const talks: Talk[] = [
  {
    id: 'workshop-multi-agent-adk',
    emoji: '🛠️',
    type: 'Workshop',
    title: 'Build a Full-Stack Multi-Agent App with Google ADK & Gemini Enterprise Agent Platform',
    description: 'Hands-on workshop on building full-stack Multi-Agent Systems using Google ADK & the Gemini Enterprise Agent Platform.',
    highlights: [
      'First Agent: Creating your first AI agent with Google ADK',
      'Custom Tools: Building specialized tools to extend agent capabilities',
      'Agent Teams: Coordinating multiple agents working together',
      'Choosing the Right Architecture: Architecture Patterns and exploring design trade-offs balancing Cost, Latency, and Safety (remember, every agent hop is an extra LLM call!)',
      'Sequential Workflows: Building deterministic pipelines for fixed steps',
      'Iterative Workflows: Creating quality improvement loops with LoopAgent',
      'Parallel Workflows: Using ParallelAgent for independent sub-tasks',
      'Callbacks, Context, Memory, Observability : Sessions/state, artifacts, memory and ADK\'s LoggingPlugin',
      'Capstone Project: Building the complete Content Creation Studio',
      'Deployment: Moving agents to Gemini Enterprise Agent Platform Runtime (formerly Vertex AI Agent Engine)',
      'Full-Stack Cloud Run: Deploying the complete React + FastAPI stack to Cloud Run',
    ],
    sessions: [
      {
        event: 'AI DevCamp · Build with AI',
        date: 'May 2026',
        location: 'London, UK',
        eventUrl: 'https://www.linkedin.com/posts/aidevcamp-gdglondon-googleadk-ugcPost-7455880299827060736-nofS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACyn6mwBjRC3IaJeItlnRqhYpqi5EhPCmbU',
      },
      {
        event: 'Build with AI: Masr Edition',
        date: 'May 2026',
        location: 'Egypt',
        upcoming: true,
        eventUrl: 'https://www.linkedin.com/posts/gdgdamanhour_we-are-pleased-to-announce-that-as-part-activity-7454913487564103681-vrQv?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyn6mwBjRC3IaJeItlnRqhYpqi5EhPCmbU',
      },
      {
        event: 'Artificial Intelligence National Summit INSAT',
        date: 'April 2026',
        location: 'Tunis, Tunisia',
        eventUrl: 'https://www.linkedin.com/posts/ains4-ieeeabrcomputerabrsocietyabrinsatabrsbc-share-7454259067952304129-gyCb?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyn6mwBjRC3IaJeItlnRqhYpqi5EhPCmbU',
      },
      {
        event: 'Build with AI 2026 x IWD',
        date: 'April 2026',
        location: 'Ahlen, Germany',
        eventUrl: 'https://gdg.community.dev/events/details/google-gdg-ahlen-presents-build-with-ai-2026-x-iwd-gemini-cli-hackathon-online/',
      },
      {
        event: 'Build With AI Kraków',
        date: 'April 2026',
        location: 'Kraków, Poland',
        eventUrl: 'https://gdg.community.dev/events/details/google-gdg-krakow-presents-build-with-ai-3-multi-agent-systems-with-adk-online-workshop/',
      },
      {
        event: 'RAMATECH 4.0 2026',
        date: 'March 2026',
        location: 'Tunis, Tunisia',
        eventUrl: 'https://www.linkedin.com/posts/gdg-beja_ramatech-gdgbeja-devnass-activity-7435957433782587392-qh_B?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyn6mwBjRC3IaJeItlnRqhYpqi5EhPCmbU',
      },
      {
        event: 'AI COMMUNITY DAYS - Mahdia 2026',
        date: 'February 2026',
        location: 'Mahdia, Tunisia',
        eventUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7427717944765210625/',
      },
      {
        event: 'DevFest Fusion 4.0 2025',
        date: 'December 2025',
        location: 'Tunis, Tunisia',
        eventUrl: 'https://gdg.community.dev/events/details/google-gdg-monastir-presents-devfest-fusion-40-2025/',
      },
    ],
  },
  {
    id: 'workshop-distributed-multi-agent-stack',
    emoji: '🚀',
    type: 'Workshop',
    title: 'Building Multimodal Multi-Agent Systems with Google\'s Full Agent Stack: From ADK & Skills to A2A, MCP, Cloud Run & Gemini Enterprise Agent Platform Runtime',
    description: 'This code-first workshop walks you through building AI Creative Studio - a distributed multi-agent system where six specialized AI agents collaborate to produce a complete Instagram marketing campaign from a single prompt. You will implement every agent yourself: a Brand Strategist that searches the web for real-time insights, a Copywriter powered by ADK Skills for on-demand platform knowledge, a Designer that bridges a text agent to a Gemini image model via a custom tool, a Critic that uses Pydantic structured output to enforce review quality, a Project Manager that integrates Notion through MCP, and a Creative Director orchestrator that sequences all five specialists and handles the quality control loop.',
    highlights: [
      'Build LLM agents with Google ADK - system instructions, built-in tools, and FunctionTools',
      'Package reusable agent knowledge with ADK Skills (SkillToolset) to keep prompts lean',
      'Bridge a text agent to an image generation model via a custom async tool',
      'Enforce structured output from Gemini using Pydantic response_schema',
      'Connect agents to external APIs without custom glue code using MCP (Notion integration)',
      'Turn any agent into a network-callable service with the A2A protocol',
      'Orchestrate distributed agents with RemoteA2aAgent and AgentTool',
      'Keep long multi-agent workflows within context limits using context compaction',
      'Deploy specialist agents as Cloud Run microservices and host the orchestrator on Agent Engine',
      'Build a quality control loop where the Critic triggers automatic revision before delivery',
      'Intuition to avoid the most common pitfalls in distributed agent system design: context passing, output contracts, retry handling, and context compaction',
    ],
    sessions: [
      {
        event: 'TechFest 1.0 · Build with AI',
        date: 'May 2026',
        location: 'Monastir, Tunisia',
        eventUrl: 'https://gdg.community.dev/events/details/google-gdg-monastir-presents-techfest-10-buildwithai-workshop-saoussen-chaabnia/',
      },
    ],
  },
  {
    id: 'talk-distributed-multi-agent',
    emoji: '🎤',
    type: 'Talk',
    title: 'Designing & Deploying Distributed Multi-Agent Systems with Google\'s AI Stack',
    description: 'A technical talk and live demonstration on designing and deploying distributed multi-agent systems using Google\'s AI stack. Demonstrated a live system where one orchestrator on Gemini Enterprise Agent Platform Runtime (formerly Vertex AI Agent Engine) coordinates 5 specialist agents on Cloud Run to generate complete social media campaigns from a single prompt — showing how agents collaborate, delegate tasks, and scale beyond monolithic LLM applications.',
    highlights: [
      'Practical introduction to Google ADK with Gemini 2.5 Flash',
      'Agent-to-Agent (A2A) Protocol for distributed agent communication',
      'Model Context Protocol (MCP) for integrating external tools like Notion',
      'Deployment strategies for Gemini Enterprise Agent Platform Runtime (formerly Vertex AI Agent Engine) and Cloud Run',
      'Architecture patterns, tooling, and production considerations on Google Cloud',
    ],
    sessions: [
      {
        event: 'AI COMMUNITY DAYS - Tunis 2026',
        date: 'May 2026',
        location: 'Tunis, Tunisia',
        upcoming: true,
        eventUrl: 'https://aicommunitydays.ai/events/tunis-2026?tab=speakers',
      },
      {
        event: 'DevFest Ahlen 2025',
        date: 'December 2025',
        location: 'Ahlen, Germany',
        eventUrl: 'https://gdg.community.dev/events/details/google-gdg-ahlen-presents-devfest-ahlen-2025-location-nrw-ahlen-schuhfabrik-ev-7-konigstrasse/',
      },
    ],
  },
];

// ============================================
// 🔗 SOCIAL LINKS
// ============================================

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/saoussen-chaabnia/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/Saoussen-CH', icon: 'github' },
  { name: 'Medium', url: 'https://medium.com/@saoussen.chaabnia', icon: 'medium' },
  { name: 'Substack', url: 'https://substack.com/@saoussenchaabnia', icon: 'substack' },
  { name: 'Sessionize', url: 'https://sessionize.com/saoussen-chaabnia/', icon: 'sessionize' },
];

export const calendlyLink = {
  name: 'Schedule a Call',
  url: 'https://calendly.com/saoussen-chaabnia-pro/',
  icon: 'calendar'
};
