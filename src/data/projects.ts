// src/data/projects.ts
import graminImg from '../assets/projects/gramin-card.png';
import smartsupportImg from '../assets/projects/smartsupport-card.png';
import windowsImg from '../assets/projects/windowsnew.png';
import stockeaseImg from '../assets/projects/stockeasenew.png';
import mindmitraImg from '../assets/projects/mindmitranew.png';
import codearenaImg from '../assets/projects/codearenanew.png';

export interface Project {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl: string | null;
  codeUrl: string | null;
  badge: string | null;
  color: string; // dominant accent for this card
  image: string; // single real screenshot
}

export const projects: Project[] = [
  {
    id: 'gramin',
    number: '01',
    category: 'AI Civic Platform',
    name: 'Gramin Sahayak',
    description: 'AI civic platform for rural India with multilingual voice/text chatbot. Selected Top 100 of 1 Lakh nationwide for AWS × Hack2skill "AI for Bharat". Bridges the digital divide so rural citizens can effortlessly discover and apply for government schemes in their own language.',
    tech: ['AI Chatbot', 'AWS', 'React', 'Node.js', 'Gemini API'],
    liveUrl: 'https://graminsahayak.vercel.app/',
    codeUrl: 'https://github.com/cheerlashamith/graminsahayak',
    badge: '🏆 Top 100 / 1 Lakh',
    color: '#FF9900',
    image: graminImg,
  },
  {
    id: 'smartsupport',
    number: '02',
    category: 'AI SaaS',
    name: 'SmartSupport',
    description: 'AI customer support triage system that auto-classifies tickets using vector search and the Gemini API. Reduces ticket resolution time by 40% through intelligent routing, real-time summarisation, and a self-improving knowledge base.',
    tech: ['Gemini API', 'Vector Search', 'FastAPI', 'React'],
    liveUrl: 'https://jarvis-ai1111.netlify.app/',
    codeUrl: 'https://github.com/cheerlashamith/jarvis/',
    badge: null,
    color: '#4361ee',
    image: smartsupportImg,
  },
  {
    id: 'windows11',
    number: '03',
    category: 'Unique UI Experience',
    name: 'Windows 11 Portfolio',
    description: 'A completely unique, fully interactive web-based operating system portfolio mimicking Windows 11. Features draggable windows, a functional taskbar, start menu, and smooth OS-level animations built entirely with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://shamith-portfolio.netlify.app/',
    codeUrl: 'https://github.com/cheerlashamith/windows11-portfolio',
    badge: '✨ Unique Concept',
    color: '#0078D4',
    image: windowsImg,
  },
  {
    id: 'stockease',
    number: '04',
    category: 'Web App',
    name: 'StockEase',
    description: 'Smart inventory management system with real-time Supabase database, automated low-stock alerts, and a visual analytics dashboard. Streamlines stock tracking and reduces wastage for SMEs.',
    tech: ['JavaScript', 'Supabase', 'HTML5', 'CSS3'],
    liveUrl: 'https://shamithcheerla.github.io/stockease',
    codeUrl: 'https://github.com/cheerlashamith/stockease',
    badge: null,
    color: '#2ecc71',
    image: stockeaseImg,
  },
  {
    id: 'mindmitra',
    number: '05',
    category: 'AI Companion',
    name: 'MindMitra',
    description: 'Intelligent, empathetic AI-powered virtual companion offering emotional support and daily guidance with human-like responsiveness. Built for Google Gen AI Exchange Hackathon.',
    tech: ['React.js', 'SQL', 'Gemini API', 'FastAPI'],
    liveUrl: 'https://eycovf4cjc3k.devv.app/',
    badge: null,
    color: '#f72585',
    image: mindmitraImg,
  },
  {
    id: 'codearena',
    number: '06',
    category: 'EdTech Platform',
    name: 'CodeArena',
    description: 'Interactive competitive programming platform with gamified coding challenges, adaptive difficulty levels, real-time leaderboards, and achievement unlocks. Makes DSA practice addictive.',
    tech: ['React.js', 'FastAPI', 'SQL', 'HTML/CSS'],
    liveUrl: 'https://shamithcheerla.github.io/codearena',
    codeUrl: 'https://github.com/shamithcheerla/codearena',
    badge: null,
    color: '#f39c12',
    image: codearenaImg,
  },
];
