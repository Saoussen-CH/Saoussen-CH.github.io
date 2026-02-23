import { Certification, Education, Experience, Skill, SocialLink, Talk } from './types';

// ============================================
// 👤 PROFILE DATA
// ============================================

export const profile = {
  name: 'Saoussen Chaabnia',
  title: 'AI Solution Engineer • Agentic AI • AI Product',
  tagline: 'Designing production-grade AI solutions that align technology, business goals, and user impact',
  email: 'saoussen.chaabnia.pro@gmail.com',
  location: 'Tunisia',
  availability: 'Open for Consulting',
  
  // Hero section
  heroDescription: `I design and deliver production-grade AI solutions that align technology, business goals, 
    and user impact. Specializing in Agentic AI, AI Solution Architecture, and AI Product Management. 
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
    { value: '3x', label: 'GCP Certified' },
    { value: '100+', label: 'Courses Completed' },
    { value: '29', label: 'Technical Articles' },
    { value: '3', label: 'Technical Talks & Workshops' },
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
    date: '2019 • Top 3% of 10,000',
    url: 'mailto:'
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

export const skills: Skill[] = [
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
];

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
    id: 'aicd-mahdia-2026',
    emoji: '🛠️',
    type: 'Workshop',
    title: 'New Agentic Frontier: Multi-Agent Systems with Google ADK & Vertex AI Design Considerations',
    event: 'AICD - Mahdia 2026',
    date: 'February 2026',
    location: 'Mahdia, Tunisia',
    sessionizeUrl: 'https://sessionize.com/s/saoussen-chaabnia/building-and-deploying-multi-agent-systems-with-ad/160854',
    description: 'Hands-on workshop teaching participants how to build, orchestrate, and deploy multi-agent AI systems using Google\'s Agent Development Kit (ADK) and Vertex AI Agent Engine. Structured around 10 progressive Jupyter notebooks concluding with a full-stack capstone project deployed to Google Cloud.',
    highlights: [
      'Build and orchestrate multi-agent AI systems with Google ADK',
      'Create custom tools and coordinate agent teams powered by Gemini models',
      'Choose between LLM-driven and workflow-driven design patterns (Sequential, Parallel, Iterative)',
      'Navigate agent architecture trade-offs: Sub-agents vs. Agent as a Tool',
      'Implement callbacks, observability, and guardrails for production readiness',
      'Master session management, state, artifacts, and short-term vs. long-term memory',
      'Deploy production-ready full-stack AI systems on Google Cloud (Agent Engine + Cloud Run)',
    ],
  },
  {
    id: 'devfest-ahlen-2025',
    emoji: '🎤',
    type: 'Talk',
    title: 'Designing & Deploying Distributed Multi-Agent Systems with Google\'s AI Stack',
    event: 'DevFest Ahlen 2025',
    date: 'December 2025',
    location: 'Ahlen, Germany',
    eventUrl: 'https://gdg.community.dev/events/details/google-gdg-ahlen-presents-devfest-ahlen-2025-location-nrw-ahlen-schuhfabrik-ev-7-konigstrasse/',
    description: 'A technical talk and live demonstration on designing and deploying distributed multi-agent systems using Google\'s AI stack. Demonstrated a live system where one orchestrator on Vertex AI Agent Engine coordinates 5 specialist agents on Cloud Run to generate complete and complex social media campaigns from a single prompt, showing how agents collaborate, delegate tasks, and scale beyond monolithic LLM applications.',
    highlights: [
      'Practical introduction to Google ADK for agent development with Gemini 2.5 Flash',
      'Agent-to-Agent (A2A) Protocol for distributed agent communication',
      'Model Context Protocol (MCP) for integrating external tools like Notion',
      'Deployment strategies for Vertex AI Agent Engine and Cloud Run',
      'Attendees learned to build scalable, distributed AI systems with working code examples',
      'Understanding of A2A Protocol and MCP and how they work together for sophisticated agentic systems',
      'Practical guidance on architecture patterns, tooling, and production considerations on Google Cloud',
    ],
  },
  {
    id: 'devfest-fusion-2025',
    emoji: '🛠️',
    type: 'Workshop',
    title: 'Building Production-Ready Multi-Agent AI Systems with Google ADK',
    event: 'DevFest Fusion 4.0 2025',
    date: 'December 2025',
    location: 'Tunis, Tunisia',
    eventUrl: 'https://gdg.community.dev/events/details/google-gdg-monastir-presents-devfest-fusion-40-2025/',
    description: 'A hands-on workshop teaching attendees how to build production-ready multi-agent AI systems using Google\'s Agent Development Kit (ADK) and Vertex AI Agent Engine. Participants learned to create and orchestrate AI agents powered by Gemini models, build custom tools, and implement sequential, iterative, and parallel workflows.',
    highlights: [
      '8 progressive Jupyter notebooks culminating in a capstone project',
      'Full-stack Content Creation Studio automating blog posts, social media content, email newsletters, and SEO metadata',
      'Deployed systems to Google Cloud using Agent Engine and Cloud Run with React/FastAPI stack',
      'Participants left with practical skills to design, build, and deploy multi-agent systems for real-world automation use cases',
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
