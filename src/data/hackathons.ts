// src/data/hackathons.ts
import solutionLogo from '../assets/hackathons/solution.jpg';
import bharathLogo from '../assets/hackathons/bharath.jpg';
import amdLogo from '../assets/hackathons/amd.jpg';
import googleLogo from '../assets/hackathons/google.jpg';
import acmLogo from '../assets/hackathons/acm.jpg';

export const hackathons = [
  {
    date: 'Jun 2026',
    name: 'Google Solution Challenge',
    organizer: 'Google Developer Student Clubs',
    description: 'Built a solution for local community problems using Google technologies under the global GDSC challenge framework.',
    logo: solutionLogo,
    glowColor: '#4285F4', badge: null, certificate: null,
    projectUrl: 'https://agiis.netlify.app/',
  },
  {
    date: 'May 2026',
    name: 'AI For Bharat Hackathon',
    organizer: 'AWS × Hack2Skill',
    description: 'Built Gramin Sahayak — AI civic platform for rural India. Selected Top 100 out of 1 Lakh participants nationwide! $100 AWS credits awarded.',
    logo: bharathLogo,
    glowColor: '#FF9900',
    badge: '🏆 Top 100 / 1 Lakh',
    certificate: 'https://certificate.hack2skill.com/verify/2026H2S04AIFB-P03454',
    projectUrl: 'https://github.com/cheerlashamith/graminsahayak',
  },
  {
    date: 'Apr 2026',
    name: 'AMD Slingshot Hackathon',
    organizer: 'AMD',
    description: 'Built a cost-effective Smart Facility Digital Twin with real-time occupancy visualization and peak-hour forecasting using a lightweight IoT-free architecture.',
    logo: amdLogo,
    glowColor: '#ED1C24', badge: null, certificate: null,
    projectUrl: 'https://github.com/cheerlashamith/SmartSpace-AI-Space-Utilization-System',
  },
  {
    date: 'Nov 2025',
    name: 'Gen AI Exchange Hackathon',
    organizer: 'Google Cloud & Hack2skill',
    description: 'Built MindMitra — AI-powered virtual companion for emotional support and daily guidance with human-like responsiveness.',
    logo: googleLogo,
    glowColor: '#4285F4', badge: null,
    certificate: 'https://drive.google.com/file/d/1zKZ_5RADQ5VG6FZbags6E4MsT7tgP4PN/view',
    projectUrl: 'https://eycovf4cjc3k.devv.app/',
  },
  {
    date: 'Feb 2025',
    name: 'PRAYATNA 2.0 National Hackathon',
    organizer: 'SASI Institute of Technology & Engineering',
    description: 'Built a working prototype of StockEase under a strict time constraint with the team.',
    logo: acmLogo,
    glowColor: '#5227c7', badge: null,
    certificate: 'https://drive.google.com/file/d/1QPGMXciPK-iUjcasOpO7DzzuMG0lCy-D/view',
    projectUrl: 'https://shamithcheerla.github.io/stockease',
  },
];
