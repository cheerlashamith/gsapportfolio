// src/sections/HeroSection.tsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import resumePdf from '../CHEERLA_SHAMITH_Resume.pdf';
import heroImg from '../assets/hero.jpg';

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

const TAGLINES = [
  { text: "Full Stack Developer", color: "#a955ff" },
  { text: "AI Enthusiast", color: "#2F80ED" },
  { text: "Java Developer", color: "#FF5E62" },
  { text: "Problem Solver", color: "#80FF72" },
  { text: "Python Developer", color: "#f434e2" },
  { text: "Tech Innovator", color: "#f6d365" },
  { text: "Software Architect", color: "#00f2fe" },
];

const CyclingTypewriterText: React.FC<{ items: {text: string, color: string}[]; className?: string; style?: React.CSSProperties }> = ({ items, className, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  useEffect(() => {
    if (!started) return;
    
    const currentItem = items[currentIndex];
    const fullText = currentItem.text;
    
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText === fullText) {
      // Pause at the end before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      // Move to next item
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else {
      // Typing or Deleting
      const timeout = isDeleting ? 30 : 60;
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + (isDeleting ? -1 : 1)));
      }, timeout);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex, items, started]);

  return (
    <p ref={ref} className={className} style={{ ...style, color: items[currentIndex].color, transition: 'color 0.5s ease' }}>
      {displayedText}
      <span className="animate-pulse text-neutral-500" style={{ opacity: started ? 1 : 0 }}>|</span>
    </p>
  );
};

export default function HeroSection({ preloaderDone }: { preloaderDone: boolean }) {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      style={{ backgroundColor: "#ffffff", color: "#1a1a2e" }}
    >
      {preloaderDone && (
        <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative z-10 max-w-6xl">
          
          {/* Left Column: Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">


            <div className="aurora-text" style={{ marginTop: '30px' }}>
              <div>
                <BlurText
                  text="CHEERLA"
                  delay={100}
                  animateBy="letters"
                  direction="top"
                  className="font-bold text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] xl:text-[88px] leading-[0.9] tracking-tighter uppercase whitespace-nowrap"
                  style={{ color: "#5227c7", fontFamily: "'Neuton', serif" }}
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <BlurText
                  text="SHAMITH"
                  delay={100}
                  animateBy="letters"
                  direction="top"
                  className="font-bold text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] xl:text-[88px] leading-[0.9] tracking-tighter uppercase whitespace-nowrap"
                  style={{ color: "#ff6d34", fontFamily: "'Neuton', serif" }}
                />
              </div>
            </div>

            <div className="mt-8 h-[36px] sm:h-[40px] md:h-[48px] flex items-center">
              <CyclingTypewriterText
                items={TAGLINES}
                className="text-[22px] sm:text-[26px] md:text-[32px] font-bold tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              />
            </div>
            
            <p className="mt-6 text-neutral-500 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
              Passionate about building intelligent and scalable software, I combine full-stack engineering with artificial intelligence to create impactful digital solutions. From modern web applications to AI-driven systems, I thrive on solving complex challenges through innovation and continuous learning.
            </p>

            {/* Stylish CGPA Badge */}
            <div className="mt-6 flex items-center justify-center lg:justify-start">
              <div 
                className="group relative px-5 py-2.5 rounded-2xl bg-white border border-[rgba(82,39,199,0.1)] flex items-center gap-3 cursor-default transition-all duration-300 hover:border-[#5227c7] hover:shadow-[0_8px_25px_rgba(82,39,199,0.15)] hover:-translate-y-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <div className="w-8 h-8 rounded-full bg-[rgba(82,39,199,0.08)] text-[#5227c7] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] group-hover:bg-[#5227c7] group-hover:text-white">
                  <i className="fas fa-graduation-cap text-sm"></i>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-neutral-400 font-bold tracking-wider uppercase leading-none mb-1">Academic Excellence</span>
                  <span className="text-[#1a1a2e] font-bold text-sm leading-none transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5227c7] group-hover:to-[#ff6d34]">
                    9.32 CGPA
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons & Socials */}
            <div className="w-full pt-8 flex flex-col gap-6 items-center lg:items-start" style={{ maxWidth: 450 }}>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'inherit' }}>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 rounded-full bg-[#5227c7] text-white font-semibold text-sm hover:bg-[#7c3aed] transition-all shadow-md hover:shadow-[0_10px_25px_rgba(82,39,199,0.3)] hover:-translate-y-1 duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  View Projects
                </button>
                <a href={resumePdf} download="CHEERLA_SHAMITH_Resume.pdf"
                  className="px-6 py-3 rounded-full bg-[#ff6d34] text-white font-semibold text-sm hover:bg-[#ff8a5c] transition-all shadow-md hover:shadow-[0_10px_25px_rgba(255,109,52,0.3)] hover:-translate-y-1 duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Download Resume
                </a>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'inherit' }}>
                {[
                  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/cheerla-shamith-a420472a0', label: 'LinkedIn',  hoverColor: '#0077b5' },
                  { icon: 'fab fa-github',      href: 'https://github.com/cheerlashamith',                     label: 'GitHub',    hoverColor: '#181717' },
                  { icon: 'fas fa-code',        href: 'https://www.codechef.com/users/sasihackerrr',            label: 'CodeChef',  hoverColor: '#5B4638' },
                  { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/starshami888/',                label: 'Instagram', hoverColor: '#E1306C' },
                ].map(s => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="group"
                    style={{
                      width: 44, height: 44, borderRadius: '50px',
                      background: '#fff', border: '1px solid rgba(82,39,199,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#5227c7', textDecoration: 'none',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      position: 'relative', overflow: 'hidden'
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.width = '120px';
                      el.style.background = s.hoverColor; 
                      el.style.color = '#fff';
                      el.style.borderColor = s.hoverColor;
                      el.style.transform = 'translateY(-4px)';
                      el.style.boxShadow = `0 10px 25px ${s.hoverColor}60`;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.width = '44px';
                      el.style.background = '#fff'; 
                      el.style.color = '#5227c7';
                      el.style.borderColor = 'rgba(82,39,199,0.1)';
                      el.style.transform = ''; 
                      el.style.boxShadow = '';
                    }}
                  >
                    <span style={{ 
                      position: 'absolute', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }} className="transition-all duration-300 group-hover:-translate-y-[20px] group-hover:scale-50 opacity-100 group-hover:opacity-0">
                      <i className={s.icon} style={{ fontSize: 18 }} />
                    </span>

                    <span style={{ 
                      position: 'absolute', 
                      fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 12, 
                      letterSpacing: '0.04em', textTransform: 'uppercase'
                    }} className="transition-all duration-300 delay-75 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none relative z-10">
            <style>
              {`
                @keyframes morph {
                  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                }
              `}
            </style>
            <div 
              className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] overflow-hidden shadow-[0_20px_50px_rgba(82,39,199,0.2)] transition-all duration-700 hover:scale-105 hover:shadow-[0_30px_60px_rgba(255,109,52,0.3)] border-[6px] border-white/80 group"
              style={{
                animation: 'morph 8s ease-in-out infinite',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5227c7]/20 to-[#ff6d34]/20 z-10 pointer-events-none mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              <img
                src={heroImg}
                alt="Cheerla Shamith"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>

        </div>
      )}

      {/* Scroll Indicator */}
      <button
        type="button"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        aria-label="Scroll down"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 text-neutral-400 animate-bounce" />
      </button>
    </section>
  );
}
