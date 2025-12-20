import { Publication } from './types';

// ============================================
// 📚 PUBLICATIONS DATA
// ============================================
// To add a new publication, copy an object and fill in:
// - id: unique identifier
// - type: 'Conference Paper' | 'Journal Article' | 'Workshop Paper' | 'Preprint'
// - title: paper title
// - authors: author list (your name will be highlighted automatically)
// - venue: conference/journal name
// - date: publication date
// - abstract: brief description (optional)
// - links: array of { label, url } for PDF, DOI, etc.
// ============================================

export const publications: Publication[] = [
  {
    id: 'sdn-smart-home',
    type: 'Conference Paper',
    title: 'Slicing Aware QoS/QoE in Software Defined Smart Home Network',
    authors: 'Saoussen Chaabnia and Aref Meddeb',
    venue: 'IEEE/IFIP Network Operations and Management Symposium (NOMS)',
    date: 'April 2018 • Taiwan',
    abstract: 'This paper presents a novel approach to network slicing in Software Defined Networking (SDN) environments for smart home applications. We propose a QoS/QoE-aware slicing mechanism that dynamically allocates network resources based on application requirements and user experience metrics.',
    links: [
      {
        label: 'IEEE Xplore',
        url: 'https://ieeexplore.ieee.org/document/8406267',
      },
    ],
  },
  // ============================================
  // ADD YOUR NEW PUBLICATIONS BELOW
  // Copy the template and fill in your details:
  // ============================================
  // {
  //   id: 'your-paper-id',
  //   type: 'Conference Paper',
  //   title: 'Your Paper Title',
  //   authors: 'Saoussen Chaabnia, Co-Author 1, Co-Author 2',
  //   venue: 'Conference/Journal Name',
  //   date: 'Month Year • Location',
  //   abstract: 'Brief abstract of your paper.',
  //   links: [
  //     { label: 'PDF', url: 'https://...' },
  //     { label: 'DOI', url: 'https://doi.org/...' },
  //     { label: 'arXiv', url: 'https://arxiv.org/...' },
  //   ],
  // },
];
