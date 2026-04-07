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
  heroDescription: `I design and deliver production-grade AI solutions that align technology, business goals,
    and user impact. Google Developer Expert (GDE) in Cloud AI. Specializing in Agentic AI, AI Solution Architecture, and AI Product Management.
    3x Google Cloud Certified. Helping teams make the right technical and product decisions.`,
  
  // About section - Updated to match LinkedIn
  aboutParagraphs: [
    `I design and deliver production-grade AI solutions that align technology, business goals, and user impact. 
     With a background as a Machine Learning & Cloud AI Engineer, I've led end-to-end ML/AI initiatives; from 
     problem framing and architecture design to development, deployment, monitoring, and iteration.`,
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
    { value: '42', label: 'Technical Articles' },
    { value: '9+', label: 'Talks & Workshops' },
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
    title: 'Building & Deploying Multi-Agent Systems with Google ADK & Vertex AI',
    description: 'Hands-on workshop on building full-stack Multi-Agent Systems using Google ADK & Vertex AI.',
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
      'Deployment: Moving agents to Vertex AI Agent Engine',
      'Full-Stack Cloud Run: Deploying the complete React + FastAPI stack to Cloud Run',
    ],
    sessions: [
      {
        event: 'Build with AI: Masr Edition',
        date: 'May 2026',
        location: 'Egypt',
        upcoming: true,
        eventUrl: 'https://rsvp.withgoogle.com/events/build-with-ai-masr',
      },
      {
        event: 'Artificial Intelligence National Summit INSAT',
        date: 'April 2026',
        location: 'Tunis, Tunisia',
        upcoming: true,
      },
      {
        event: 'Build with AI 2026 x IWD',
        date: 'April 2026',
        location: 'Ahlen, Germany',
        upcoming: true,
        eventUrl: 'https://gdg.community.dev/events/details/google-gdg-ahlen-presents-build-with-ai-2026-x-iwd-gemini-cli-hackathon-online/',
      },
      {
        event: 'Build With AI Kraków',
        date: 'April 2026',
        location: 'Kraków, Poland',
        upcoming: true,
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
    title: 'Building Distributed Multi-Agent Systems with Google AI Stack: ADK, MCP, A2A, Vertex AI Agent Engine',
    description: 'A technical deep dive into designing autonomous, decentralized agent ecosystems using the Google AI stack. The next frontier in AI isn\'t just bigger models — it\'s distributed, collaborating agents. This code-first session examines how specialized, distributed agents collaborate to solve complex problems, covering Google ADK, A2A Protocol for agent-to-agent communication, and MCP for secure tool integration. The session showcases a distributed architecture where an orchestrator on Vertex AI Agent Engine coordinates five specialist agents on Cloud Run to generate a complete, multi-stage marketing campaign with project management tasks synced to Notion — all from a single prompt.',
    highlights: [
      'Practical guidance on agent architecture patterns, orchestration, tooling, and scaling agentic systems on Google Cloud',
      'Code-first introduction to Google ADK for agent building',
      'A2A Protocol for agent-to-agent communication',
      'Model Context Protocol (MCP) for secure tool integration',
      'Hands-on experience deploying agentic workloads to Vertex AI Agent Engine and Cloud Run',
      'Intuition to avoid the most common pitfalls in distributed agent system design',
    ],
    sessions: [],
  },
  {
    id: 'talk-distributed-multi-agent',
    emoji: '🎤',
    type: 'Talk',
    title: 'Designing & Deploying Distributed Multi-Agent Systems with Google\'s AI Stack',
    description: 'A technical talk and live demonstration on designing and deploying distributed multi-agent systems using Google\'s AI stack. Demonstrated a live system where one orchestrator on Vertex AI Agent Engine coordinates 5 specialist agents on Cloud Run to generate complete social media campaigns from a single prompt — showing how agents collaborate, delegate tasks, and scale beyond monolithic LLM applications.',
    highlights: [
      'Practical introduction to Google ADK with Gemini 2.5 Flash',
      'Agent-to-Agent (A2A) Protocol for distributed agent communication',
      'Model Context Protocol (MCP) for integrating external tools like Notion',
      'Deployment strategies for Vertex AI Agent Engine and Cloud Run',
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
