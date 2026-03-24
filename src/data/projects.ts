import { Project } from './types';

// ============================================
// 🚀 PROJECTS DATA
// ============================================

export const projects: Project[] = [
  {
    id: 'adk-multiagent-production-template',
    emoji: '🤝',
    title: 'Multi-Agent Customer Support System',
    description: 'Production-ready full-stack AI support platform with hierarchical multi-agent orchestration, RAG-powered semantic search, Memory Bank for cross-session persistence, and validated refund workflows. Features Terraform IaC across dev/staging/prod, CI/CD with Cloud Build, Model Armor, 5-stage eval pipeline, and canary deployments.',
    tags: ['Google ADK', 'Vertex AI', 'React', 'FastAPI', 'RAG', 'Firestore', 'Terraform', 'Model Armor'],
    githubUrl: 'https://github.com/Saoussen-CH/adk-multiagent-production-template',
  },
  {
    id: 'ai-creative-studio',
    emoji: '🎨',
    title: 'AI Creative Studio',
    description: 'Distributed multi-agent orchestration using the A2A protocol, Vertex AI Agent Engine, Cloud Run, and Model Context Protocol (MCP) demonstrating agent-to-agent communication with remote specialist agents for end-to-end social media campaign generation, including automated task management via Notion.',
    tags: ['A2A Protocol', 'MCP', 'Vertex AI', 'Cloud Run', 'Gemini 2.5'],
    githubUrl: 'https://github.com/Saoussen-CH/ai-creative-studio-adk-a2a-mcp-vertexai-cloudrun',
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
    id: 'content-creation-mas',
    emoji: '✍️',
    title: 'Content Creation Studio',
    description: 'Full-stack AI content automation system. Multi-agent team transforms a single prompt into blog posts, social media content, newsletters, and SEO metadata across multiple channels.',
    tags: ['Google ADK', 'Gemini', 'FastAPI', 'React', 'Cloud Run'],
    githubUrl: 'https://github.com/Saoussen-CH/content_creation_mas_workshop',
  },
  {
    id: 'mlops-gcp',
    emoji: '🔧',
    title: 'Production-Ready MLOps on GCP',
    description: 'Complete MLOps solution featuring Terraform IaC across dev/test/prod environments, Vertex Pipelines, CI/CD with Cloud Build, continuous training, and comprehensive monitoring.',
    tags: ['Terraform', 'Vertex AI', 'Kubeflow', 'Cloud Build', 'TensorFlow'],
    githubUrl: 'https://github.com/Saoussen-CH/production-ready-MLOps-on-GCP',
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
