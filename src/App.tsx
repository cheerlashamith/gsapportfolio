// src/App.tsx
import React, { useState } from 'react';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import { ErrorBoundary } from './components/ErrorBoundary';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import TimelineSection from './sections/TimelineSection';
import HackathonsSection from './sections/HackathonsSection';
import CertificationsSection from './sections/CertificationsSection';
import AchievementsSection from './sections/AchievementsSection';
import ContactSection from './sections/ContactSection';

// Section divider
const SectionDivider = () => <div className="section-divider" />;

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Always scroll to top on refresh
  React.useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#hero"
        style={{
          position: 'absolute', top: -100, left: 20, zIndex: 100000,
          background: 'var(--primary)', color: '#fff',
          padding: '12px 24px', borderRadius: 8,
          fontFamily: 'Poppins, sans-serif', fontWeight: 600,
          textDecoration: 'none', transition: 'top 0.3s',
        }}
        onFocus={e => (e.currentTarget.style.top = '20px')}
        onBlur={e => (e.currentTarget.style.top = '-100px')}
      >Skip to main content</a>

      {/* Global UI */}
      <Cursor />
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <Navbar preloaderDone={preloaderDone} />
      <ScrollProgressBar />

      {/* Main content */}
      <main id="main-content" tabIndex={-1}>
        <ErrorBoundary>
          <HeroSection preloaderDone={preloaderDone} />
        </ErrorBoundary>

        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary>
          <SkillsSection />
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary>
          <ProjectsSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <TimelineSection />
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary>
          <HackathonsSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <CertificationsSection />
        </ErrorBoundary>

        <SectionDivider />

        <ErrorBoundary>
          <AchievementsSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <ContactSection />
        </ErrorBoundary>

        {/* Minimal Footer below Contact Section */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 20px 120px 20px', // 120px bottom padding ensures it clears the fixed dock menu
          background: '#fff',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: '15px',
          letterSpacing: '0.02em',
          color: '#1a1a2e',
          borderTop: '1px solid rgba(82,39,199,0.05)'
        }}>
          © {new Date().getFullYear()} Cheerla Shamith. All rights reserved.
        </footer>
      </main>
    </>
  );
}
