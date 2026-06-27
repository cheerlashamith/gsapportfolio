// src/sections/AboutSection.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useCounter } from '../hooks/useCounter';
import aboutImg from '../assets/about.jpg';
import heroImg from '../assets/hero.jpg';

const STATS = [
  { value: 9, suffix: '.32', label: 'CGPA', icon: 'fas fa-graduation-cap' },
  { value: 5, suffix: '+',   label: 'Projects',   icon: 'fas fa-code'        },
  { value: 3, suffix: '+',   label: 'Internships', icon: 'fas fa-briefcase'   },
  { value: 7, suffix: '+',   label: 'Certifications', icon: 'fas fa-certificate' },
];

function StatCard({ stat, index }: { stat: typeof STATS[0], index: number }) {
  const { count, ref } = useCounter(stat.value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className="stat-card"
      style={{
        background: '#fff', borderRadius: 14, padding: '22px 18px',
        boxShadow: '0 6px 24px rgba(0,0,0,0.07)', textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-7px)'; el.style.boxShadow = '0 14px 32px rgba(67,97,238,0.18)'; }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 6px 24px rgba(0,0,0,0.07)'; }}
    >
      <i className={stat.icon} style={{ fontSize: 22, color: '#5227c7', marginBottom: 10, display: 'block' }} />
      <div ref={ref as any} style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 800, fontSize: '2rem', color: '#5227c7' }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: '#666', marginTop: 4 }}>{stat.label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={sectionRef} style={{ background: '#fff', padding: 'clamp(80px,10vw,130px) 0', position: 'relative', overflowX: 'hidden' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="heading-container" style={{ textAlign: 'center', marginBottom: 80 }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: '#5227c7', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>WHO I AM</p>
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#1a1a2e' }}>About Me</h2>
            <div className="heading-underline" style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Column */}
          <motion.div style={{ y: imgY }}>
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{ perspective: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', position: 'relative', height: '100%', minHeight: 450 }}
            >
              <div style={{ position: 'relative', maxWidth: 400, width: '100%', marginTop: 20 }}>
                {/* Clean Backing Stack 1 */}
                <img src={aboutImg} alt="" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                  borderRadius: 24, transform: 'rotate(-4deg)', opacity: 0.3, filter: 'grayscale(100%)', zIndex: 0
                }} />
                
                {/* Clean Backing Stack 2 */}
                <div style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(45deg, #5227c7, #ff6d34)', borderRadius: 24,
                  transform: 'rotate(4deg) translate(8px, 8px)', opacity: 0.5, zIndex: 0,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }} />
                
                {/* Main Image */}
                <img
                  src={aboutImg}
                  alt="Cheerla Shamith"
                  loading="lazy" decoding="async"
                  style={{ 
                    borderRadius: 24, width: '100%', objectFit: 'cover', aspectRatio: '3/4', 
                    position: 'relative', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                    border: '8px solid #fff' 
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div style={{ paddingTop: 'clamp(20px, 4vw, 60px)', y: textY }}>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.7 }}
                style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', color: '#5227c7', marginBottom: 20 }}
              >
                Enthusiastic Full-Stack Developer & AI Engineer
              </motion.h3>
              {[
                "I'm a passionate Computer Science student with expertise in building modern web applications. My journey in tech has equipped me with strong problem-solving skills and a deep understanding of full-stack development.",
                "Currently pursuing my B.Tech in Computer Science at SASI Institute of Technology & Engineering (JNTUK) with a CGPA of 9.32, I'm constantly exploring new technologies and expanding my skillset.",
                "My areas of interest include Full-Stack Development, Generative AI, building intelligent AI Agents, Agentic Workflows, and Ethical Hacking.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 16, color: '#444', lineHeight: 1.82, marginBottom: 16 }}
                >
                  {para}
                </motion.p>
              ))}

              <div className="stat-grid grid grid-cols-2 sm:grid-cols-4 gap-4 mt-9">
                {STATS.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
