// src/types/index.ts — Single source of truth for all types

/** Shared section props */
export interface SectionProps {
  id?: string;
  className?: string;
}

/** Preloader */
export interface PreloaderProps {
  onComplete: () => void;
  duration?: number; // ms, default 2400
}

/** Navbar */
export interface NavbarProps {
  preloaderDone: boolean;
}

/** Project (already in data/projects.ts — replicated here for reference) */
export interface ProjectImages {
  card: string;
  col1Top: string;
  col1Bottom: string;
  col2: string;
}

export interface Project {
  id: string;
  number: string;           // "01"–"06"
  category: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl: string | null;
  codeUrl: string | null;
  badge: string | null;
  color: string;            // hex, used for glow / accent
  images: ProjectImages;
}

/** Timeline item */
export interface TimelineItem {
  date: string;
  role: string;
  institution: string;
  description: string;
  type: 'education' | 'experience';
  link: string | null;
}

/** Hackathon */
export interface Hackathon {
  date: string;
  name: string;
  organizer: string;
  description: string;
  logo: string;
  glowColor: string;        // hex
  badge: string | null;
  certificate: string | null;
}

/** Certification */
export interface Certification {
  name: string;
  issuer: string;
  logo: string;
  link: string;
}

/** Achievement */
export interface Achievement {
  icon: string;             // Font Awesome class e.g. "fas fa-star"
  title: string;
  description: string;
  link: string | null;
}

/** Skill */
export interface Skill {
  name: string;
  icon: string;
  color?: string;
}

/** Skill category */
export interface SkillCategory {
  name: string;
  images: [string, string]; // always exactly 2
  skills: Skill[];
}

/** Circular Gallery props */
export interface CircularGalleryProps {
  activeIndex: number;
  onSelect: (index: number) => void;
  radius?: number;          // default 280
  autoRotateSpeed?: number; // degrees per frame, default 0.015
}

/** Story indicator */
export interface StoryIndicatorProps {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}

/** Particle config */
export interface ParticleConfig {
  count: number;
  mobileCount: number;
  repelRadius: number;
  repelForce: number;
  connectionDist: number;
  colors: string[];
}

/** Contact form */
export interface ContactFormState {
  name: string;
  email: string;
  message: string;
  status: 'idle' | 'sent' | 'error';
}

/** Social link */
export interface SocialLink {
  icon: string;
  href: string;
  label: string;
  bg?: string;
}

/** GSAP animation config */
export interface AnimConfig {
  duration: number;
  ease: string;
  delay?: number;
  stagger?: number;
}
