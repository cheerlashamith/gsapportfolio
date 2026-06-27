// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenis } from '../main';
import { 
  IoHomeOutline, IoPersonOutline, IoCodeSlashOutline, 
  IoAppsOutline, IoMapOutline, IoRocketOutline, 
  IoRibbonOutline, IoMailOutline, IoEyeOutline, IoEyeOffOutline
} from 'react-icons/io5';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { id: 'hero',           label: 'Home',         icon: <IoHomeOutline />,        gradientFrom: '#a955ff', gradientTo: '#ea51ff' },
  { id: 'about',          label: 'About',        icon: <IoPersonOutline />,      gradientFrom: '#56CCF2', gradientTo: '#2F80ED' },
  { id: 'skills',         label: 'Skills',       icon: <IoCodeSlashOutline />,   gradientFrom: '#FF9966', gradientTo: '#FF5E62' },
  { id: 'projects',       label: 'Projects',     icon: <IoAppsOutline />,        gradientFrom: '#80FF72', gradientTo: '#7EE8FA' },
  { id: 'experience',     label: 'Journey',      icon: <IoMapOutline />,         gradientFrom: '#ffa9c6', gradientTo: '#f434e2' },
  { id: 'hackathons',     label: 'Hackathons',   icon: <IoRocketOutline />,      gradientFrom: '#f6d365', gradientTo: '#fda085' },
  { id: 'certifications', label: 'Certs',        icon: <IoRibbonOutline />,      gradientFrom: '#4facfe', gradientTo: '#00f2fe' },
  { id: 'contact',        label: 'Contact',      icon: <IoMailOutline />,        gradientFrom: '#11998e', gradientTo: '#38ef7d' },
];

export default function Navbar({ preloaderDone }: { preloaderDone: boolean }) {
  const topNavRef = useRef<HTMLElement>(null);
  const dockRef = useRef<HTMLElement>(null);
  const mobileBtnRef = useRef<HTMLButtonElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDockHidden, setIsDockHidden] = useState(false);

  useEffect(() => {
    if (!preloaderDone) return;
    
    // Animate Top Navbar in on load
    gsap.from(topNavRef.current, { y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 });

    // GSAP ScrollTrigger for the Dock Menu
    const ctx = gsap.context(() => {
      gsap.to(dockRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '#about', // Triggers when the About section enters the viewport
          start: 'top 80%',  // When the top of #about hits 80% down the viewport
          end: '+=99999',    // Ensure it stays visible for the rest of the page
          toggleActions: 'play none none reverse' // Play on enter, reverse on leave back up
        }
      });
    });

    return () => ctx.revert();
  }, [preloaderDone]);

  const scrollTo = (id: string) => {
    setIsSidebarOpen(false); // Close sidebar if open
    
    // Explicitly unblock scroll immediately so Lenis can work
    document.body.style.overflow = '';
    if (lenis) lenis.start();

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        if (lenis) lenis.scrollTo(el);
        else el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* 1. TOP NAVBAR (Default) */}
      <nav 
        ref={topNavRef} 
        className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-6 bg-transparent"
      >
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#7c3aed] flex items-center justify-center text-white font-black text-[22px] shadow-[0_4px_15px_rgba(124,58,237,0.3)] group-hover:scale-105 transition-transform" style={{ fontFamily: 'Poppins, sans-serif' }}>
            CS
          </div>
          <span className="font-bold text-2xl text-[#1a1a2e] hidden sm:block tracking-widest" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            SHAMITH
          </span>
        </div>

        <ul className="hidden lg:flex gap-2 lg:gap-4 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/60" style={{ fontFamily: "'Libre Baskerville', serif" }}>
          {NAV_LINKS.map(link => (
            <li 
              key={`top-${link.id}`} 
              style={{ '--gradient-from': link.gradientFrom, '--gradient-to': link.gradientTo } as React.CSSProperties}
              className="relative text-[#1a1a2e]/70 hover:text-white cursor-pointer font-semibold text-[13px] uppercase tracking-wider transition-colors px-3 py-1.5 rounded-full overflow-hidden group whitespace-nowrap" 
              onClick={() => scrollTo(link.id)}
            >
              <span className="absolute inset-0 bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 rounded-full"></span>
              <span className="relative z-10 transition-colors duration-300">{link.label}</span>
            </li>
          ))}
        </ul>

        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} 
          className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full bg-[#1a1a2e] text-white font-semibold text-sm hover:bg-[#5227c7] transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300 whitespace-nowrap"
          style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
          Let's Talk
        </a>

        {/* Top Navbar Mobile Hamburger (Before scroll) */}
        <button
          className="sm:hidden w-12 h-12 bg-white/50 backdrop-blur-md rounded-full shadow-sm border border-white/60 flex flex-col items-center justify-center gap-1.5 z-[1001]"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className={`block w-5 h-[2px] bg-[#1a1a2e] transition-all duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#1a1a2e] transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#1a1a2e] transition-all duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </nav>

      {/* 2. BOTTOM DOCK MENU (Appears on scroll for Desktop/Tablet) */}
      <nav
        ref={dockRef}
        style={{
          position: 'fixed', 
          bottom: 24, 
          left: '50%', 
          transform: 'translate(-50%, 150px)', // Initially hidden below screen
          opacity: 0,
          zIndex: 1000,
        }}
        className="hidden sm:flex"
      >
        <ul className="flex gap-2 sm:gap-4 bg-white/70 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-white/60">
          {!isDockHidden && NAV_LINKS.map(({ id, label, icon, gradientFrom, gradientTo }) => (
            <li
              key={`dock-${id}`}
              onClick={() => scrollTo(id)}
              style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
              className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-white shadow-sm rounded-full flex items-center justify-center transition-all duration-400 hover:w-[100px] sm:hover:w-[130px] hover:shadow-none group cursor-pointer"
            >
              {/* Gradient background on hover */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-400 group-hover:opacity-100"></span>
              
              {/* Blur glow */}
              <span className="absolute top-[8px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[12px] opacity-0 -z-10 transition-all duration-400 group-hover:opacity-40"></span>

              {/* Icon */}
              <span className="absolute transition-all duration-300 group-hover:-translate-y-[20px] group-hover:scale-50 opacity-100 group-hover:opacity-0 delay-0">
                <span className="text-[22px] text-gray-500">{icon}</span>
              </span>

              {/* Title */}
              <span className="absolute text-white uppercase tracking-wider text-[11px] font-bold transition-all duration-300 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 delay-100" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                {label}
              </span>
            </li>
          ))}

          {/* Eye Hide/Show Button */}
          <li
            onClick={() => setIsDockHidden(!isDockHidden)}
            style={{ '--gradient-from': '#5227c7', '--gradient-to': '#ff6d34' } as React.CSSProperties}
            className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-white shadow-sm rounded-full flex items-center justify-center transition-all duration-400 hover:w-[100px] sm:hover:w-[130px] hover:shadow-none group cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-400 group-hover:opacity-100"></span>
            <span className="absolute top-[8px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[12px] opacity-0 -z-10 transition-all duration-400 group-hover:opacity-40"></span>
            <span className="absolute transition-all duration-300 group-hover:-translate-y-[20px] group-hover:scale-50 opacity-100 group-hover:opacity-0 delay-0">
              <span className="text-[22px] text-gray-500">{isDockHidden ? <IoEyeOutline /> : <IoEyeOffOutline />}</span>
            </span>
            <span className="absolute text-white uppercase tracking-wider text-[11px] font-bold transition-all duration-300 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 delay-100" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              {isDockHidden ? 'SHOW' : 'HIDE'}
            </span>
          </li>
        </ul>
      </nav>

      {/* 3. MOBILE PERMANENT HAMBURGER BUTTON (Top Right) */}
      <button
        ref={mobileBtnRef}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 right-6 z-[1001] sm:hidden w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center gap-1.5 shadow-md border border-white/60 transition-transform duration-300 active:scale-95"
      >
        <span className={`block w-5 h-[2px] bg-[#1a1a2e] transition-all duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
        <span className={`block w-5 h-[2px] bg-[#1a1a2e] transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[2px] bg-[#1a1a2e] transition-all duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
      </button>

      {/* 4. MOBILE SIDEBAR */}
      <div 
        className={`fixed inset-y-0 right-0 w-[280px] bg-white/95 backdrop-blur-xl shadow-2xl z-[1000] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] sm:hidden flex flex-col ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-6 py-24 pb-12 gap-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-black text-xl text-[#1a1a2e] tracking-tight" style={{ fontFamily: "'Libre Baskerville', serif" }}>Navigation</span>
          </div>

          {NAV_LINKS.map(({ id, label, icon, gradientFrom, gradientTo }, i) => (
            <div
              key={`sidebar-${id}`}
              onClick={() => scrollTo(id)}
              style={{ 
                '--gradient-from': gradientFrom, '--gradient-to': gradientTo,
                transitionDelay: isSidebarOpen ? `${i * 50 + 200}ms` : '0ms',
                opacity: isSidebarOpen ? 1 : 0,
                transform: isSidebarOpen ? 'translateX(0)' : 'translateX(20px)'
              } as React.CSSProperties}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 cursor-pointer group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-opacity duration-300 group-hover:opacity-10 z-0"></span>
              <div 
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white relative z-10 shadow-md"
                style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
              >
                <span className="text-[22px]">{icon}</span>
              </div>
              <span className="font-bold text-[#1a1a2e] text-[15px] uppercase tracking-widest relative z-10 group-hover:text-[#5227c7] transition-colors" style={{ fontFamily: "'Libre Baskerville', serif" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* 5. SIDEBAR OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-[#1a1a2e]/40 backdrop-blur-sm z-[999] sm:hidden transition-opacity duration-500"
          style={{ opacity: isSidebarOpen ? 1 : 0 }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
