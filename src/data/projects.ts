import { Project } from './types';

// ============================================
// 🚀 PROJECTS DATA
// ============================================

export const projects: Project[] = [
  {
    id: 'mlops-gcp',
    emoji: '🔧',
    title: 'Production-Ready MLOps on GCP',
    description: 'Complete MLOps solution featuring Terraform IaC across dev/test/prod environments, Vertex Pipelines, CI/CD with Cloud Build, continuous training, and comprehensive monitoring.',
    tags: ['Terraform', 'Vertex AI', 'Kubeflow', 'Cloud Build', 'TensorFlow'],
    githubUrl: 'https://github.com/Saoussen-CH/production-ready-MLOps-on-GCP',
  },
  {
    id: 'customer-support-agent',
    emoji: '🤝',
    title: 'AI Customer Support Agent',
    description: 'Full-stack AI support agent with multi-agent orchestration, RAG, persistent memory, and validated refund processing. Built with Google ADK and Vertex AI.',
    tags: ['Google ADK', 'Vertex AI', 'React', 'RAG', 'Multi-Agent'],
    githubUrl: 'https://github.com/Saoussen-CH/customer-support-mas-ai',
  },
  {
    id: 'content-creation-mas',
    emoji: '✍️',
    title: 'Content Creation Multi-Agent System',
    description: 'AI-powered content generation system where a multiagent team automates blog posts, social media, and SEO from a single prompt.',
    tags: ['Google ADK', 'Vertex AI', 'FastAPI', 'React', 'Agents'],
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
    id: 'fastapi-deployment',
    emoji: '🚀',
    title: 'ML Model Deployment with FastAPI',
    description: 'Production-ready machine learning model deployment using FastAPI and Heroku, demonstrating best practices for serving ML models at scale.',
    tags: ['FastAPI', 'Heroku', 'Python', 'CI/CD'],
    githubUrl: 'https://github.com/Saoussen-CH/Deploying_a_Machine_Learning_Model_on_Heroku_with_FastAPI',
  },
  {
    id: 'fraud-detection',
    emoji: '🛡️',
    title: 'Fraud Detection System',
    description: 'Custom deep learning models with explainability for detecting fraud in telecommunication transactions, featuring autoencoder architectures.',
    tags: ['TensorFlow', 'Autoencoders', 'XAI', 'GCP'],
    githubUrl: 'https://github.com/Saoussen-CH',
  },
];
