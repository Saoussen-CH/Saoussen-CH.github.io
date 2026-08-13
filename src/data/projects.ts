import { Project } from './types';

// ============================================
// 🚀 PROJECTS DATA
// ============================================

export const projects: Project[] = [
  {
    id: 'adk-multiagent-production-template',
    emoji: '🤝',
    title: 'Production-ready Full-Stack Multi-Agent Customer Support System on GCP',
    description: 'Production-ready full-stack AI support platform with hierarchical multi-agent orchestration, RAG-powered semantic search, Memory Bank for cross-session persistence, and validated refund workflows. Features Terraform IaC across dev/staging/prod, CI/CD with Cloud Build, Model Armor, 5-stage eval pipeline, and canary deployments.',
    tags: ['Google ADK', 'Vertex AI', 'React', 'FastAPI', 'RAG', 'Firestore', 'Terraform', 'Model Armor'],
    githubUrl: 'https://github.com/Saoussen-CH/adk-multiagent-production-template',
    featured: true,
  },
  {
    id: 'mlops-gcp',
    emoji: '🔧',
    title: 'Production-Ready MLOps on GCP',
    description: 'Complete MLOps solution featuring Terraform IaC across dev/test/prod environments, Vertex Pipelines, CI/CD with Cloud Build, continuous training, and comprehensive monitoring.',
    tags: ['Terraform', 'Vertex AI', 'Kubeflow', 'Cloud Build', 'TensorFlow'],
    githubUrl: 'https://github.com/Saoussen-CH/production-ready-MLOps-on-GCP',
    featured: true,
  },
  // {
  //   id: 'customer-support-agent',
  //   emoji: '🤝',
  //   title: 'Multi-Agent Customer Support System',
  //   description: 'Production-ready full-stack AI support platform with hierarchical multi-agent orchestration, RAG-powered semantic search, Memory Bank for cross-session persistence, and validated refund workflows.',
  //   tags: ['Google ADK', 'Vertex AI', 'React', 'FastAPI', 'RAG', 'Firestore'],
  //   githubUrl: 'https://github.com/Saoussen-CH/customer-support-mas-ai',
  // },
  {
    id: 'ai-creative-studio',
    emoji: '🎨',
    title: 'AI Creative Studio',
    description: 'Distributed multimodal multi-agent system built with Google ADK, A2A protocol, Model Context Protocol (MCP), Cloud Run, and Gemini Enterprise Agent Platform Runtime. Specialist agents - Copywriter, Designer, Critic, and Project Manager - each advertise their capabilities as A2A skills, enabling the Creative Director to dynamically discover and orchestrate them to transform a single prompt into a complete social media campaign: researched captions, AI-generated visuals, quality-reviewed copy, and an automated project timeline synced to Notion.',
    tags: ['Google ADK', 'ADK Skills', 'A2A Protocol', 'MCP', 'Multimodal', 'Cloud Run', 'Gemini Enterprise Agent Platform Runtime'],
    githubUrl: 'https://github.com/Saoussen-CH/ai-creative-studio-adk-a2a-mcp-vertexai-cloudrun',
    codelabUrl: 'https://codelabs.developers.google.com/ai-creative-studio-adk-a2a',
  },
  {
    id: 'tech-digest-managed-agent',
    emoji: '📋',
    title: 'Build a Daily Tech Digest Agent with Managed Agents on the Gemini API (Codelab)',
    description: 'Starter code for the official Google Codelab published on Google Codelabs in collaboration with Mete Atamel (Developer Advocate at Google). Covers the full lifecycle of managed agents: first agent call with streaming, AGENTS.md-based customization, skills, safety hooks, environment persistence, multi-turn refinement, saving a named agent, Gmail delivery, and daily scheduling with triggers.',
    tags: ['Gemini Managed Agents API', 'Python', 'AGENTS.md', 'Hooks', 'Gmail API', 'Google Codelabs'],
    githubUrl: 'https://github.com/Saoussen-CH/tech-digest-managed-agent',
    codelabUrl: 'https://codelabs.developers.google.com/tech-digest-managed-agent',
  },
  {
    id: 'tech-digest-managed-agent-app',
    emoji: '📰',
    title: 'Tech Digest Agent (Full-Stack Web App)',
    description: 'Full-stack web app (FastAPI + React) that wraps the Gemini Managed Agents API into a complete product: configure news sources and editorial voice, trigger digest runs, watch the agent work live via SSE streaming, download the generated PDF, and refine output in multi-turn sessions. A single agent call provisions a Google-hosted Linux sandbox where the agent fetches headlines, writes editorial summaries, and generates the PDF autonomously.',
    tags: ['Gemini Managed Agents API', 'FastAPI', 'React', 'SSE', 'Python'],
    githubUrl: 'https://github.com/Saoussen-CH/tech-digest-managed-agent-app',
  },
  {
    id: 'github-issue-resolver',
    emoji: '🔧',
    title: 'Autonomous GitHub Issue Resolver',
    description: 'Fully autonomous two-agent CI/CD pipeline built on the Gemini Managed Agents API. Label a GitHub issue ai-resolve and a Resolver Agent reads it via GitHub MCP, clones the repo, traces the bug, writes a fix, runs the tests, and opens a PR. When the PR merges, a CD Agent deploys the fix to Cloud Run with canary traffic splitting, polls Cloud Monitoring MCP for error rates, and promotes or rolls back automatically. No orchestration framework, nothing to deploy: two AGENTS.md files, two SKILL.md files, and two GitHub Actions workflows.',
    tags: ['Gemini Managed Agents API', 'GitHub Actions', 'MCP', 'Cloud Run', 'Python'],
    githubUrl: 'https://github.com/Saoussen-CH/github-issue-resolver',
  },
  {
    id: 'content-creation-mas',
    emoji: '✍️',
    title: 'Content Creation Studio',
    description: 'Full-stack AI content automation system. Multi-agent team transforms a single prompt into blog posts, social media content, newsletters, and SEO metadata across multiple channels.',
    tags: ['Google ADK', 'Gemini', 'FastAPI', 'React', 'Cloud Run'],
    githubUrl: 'https://github.com/Saoussen-CH/content_creation_mas_workshop',
  },
  {
    id: 'sentiment-analysis',
    emoji: '🎬',
    title: 'Sentiment Analysis on AWS SageMaker',
    description: 'End-to-end sentiment analysis model for movie reviews using the IMDB dataset, deployed on Amazon SageMaker with full ML pipeline.',
    tags: ['AWS SageMaker', 'PyTorch', 'NLP', 'Deep Learning'],
    githubUrl: 'https://github.com/Saoussen-CH/Deploying_Sentiment_Analysis_Model_AWS_SageMaker',
  },
  {
    id: 'census-prediction',
    emoji: '🚀',
    title: 'Census Prediction Model - MLOps Pipeline',
    description: 'Complete MLOps workflow with census data classification. Features DVC + S3 for data versioning, slice-based model evaluation, GitHub Actions CI/CD, and production deployment to Heroku with FastAPI.',
    tags: ['FastAPI', 'scikit-learn', 'DVC', 'AWS S3', 'GitHub Actions'],
    githubUrl: 'https://github.com/Saoussen-CH/census_prediction_model_on_Heroku_with_FastAPI',
  },

];
