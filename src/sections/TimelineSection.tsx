// src/sections/TimelineSection.tsx
import { useRef } from 'react';
import { timeline } from '../data/timeline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="timeline" style={{ background: '#ffffff', padding: 'clamp(80px,10vw,130px) 0', position: 'relative', overflow: 'hidden' }}>
      <span className="section-watermark" style={{ color: 'rgba(0,0,0,0.02)' }}>MY JOURNEY</span>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <div className="heading-container">
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: '#ff6d34', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>PATH</p>
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#1a1a2e' }}>My Journey</h2>
            <div className="heading-underline" style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
          </div>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }} className="timeline-container">
          
          {/* Background Line */}
          <div className="timeline-line-base" style={{
            position: 'absolute', top: 0, bottom: 0, left: '50%',
            width: 2, background: 'rgba(0,0,0,0.06)',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }} />

          {/* Glowing Fill Line */}
          <motion.div className="timeline-line-glow" style={{
            position: 'absolute', top: 0, bottom: 0, left: '50%',
            width: 2, background: 'linear-gradient(180deg, #5227c7, #ff6d34)',
            transform: 'translateX(-50%)',
            transformOrigin: 'top',
            scaleY: scaleY,
            boxShadow: '0 0 12px rgba(255,109,52,0.4)',
            zIndex: 1,
          }} />

          {timeline.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 60,
                  flexDirection: isEven ? 'row' : 'row-reverse',
                }}
                className="timeline-item flex-col md:flex-row relative"
              >
                {/* Timeline node */}
                <div className="timeline-node" style={{
                  position: 'absolute', left: '50%',
                  transform: 'translate(-50%, 0)',
                  width: 20, height: 20, borderRadius: '50%',
                  background: '#ffffff', border: '4px solid #ff6d34',
                  boxShadow: '0 0 15px rgba(255,109,52,0.4)',
                  zIndex: 2,
                }} />

                {/* Content Card */}
                <div className="timeline-card-wrapper w-full md:w-[45%]" style={{ 
                  display: 'flex', 
                  justifyContent: isEven ? 'flex-end' : 'flex-start',
                }}>
                  <div className="group relative w-full rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 bg-white" style={{
                    padding: '2px', // space for border
                    boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                  }}>
                    {/* Rotating Glowing Gradient Border (Only visible on hover) */}
                    <div className="absolute inset-[-100%] z-0 animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{ background: 'conic-gradient(from 0deg, transparent 70%, #5227c7 85%, #ff6d34 100%)' }} />
                    
                    {/* Inner Content Container */}
                    <div className="relative z-10 bg-white w-full h-full rounded-[14px] p-6 sm:p-8" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.01)' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                        <span style={{
                          display: 'inline-block',
                          fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, textTransform: 'uppercase',
                          color: '#ffffff', background: '#5227c7',
                          padding: '5px 14px', borderRadius: 20, fontWeight: 700, letterSpacing: '0.05em'
                        }}>
                          {item.type}
                        </span>
                        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, color: '#ff6d34', fontWeight: 600 }}>
                          {item.date}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 800, fontSize: '1.4rem', color: '#1a1a2e', marginBottom: 6 }}>
                        {item.role}
                      </h3>
                      <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#5227c7', marginBottom: 16 }}>
                        {item.institution}
                      </h4>
                      
                      <p className="group-hover:text-[#1a1a2e] group-hover:font-medium transition-colors duration-300 [&>strong]:text-[#5227c7] [&>strong]:font-semibold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14.5, color: '#555', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item.description }} />

                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 20,
                          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13,
                          color: '#fff', background: '#ff6d34', padding: '8px 16px', borderRadius: '6px',
                          textDecoration: 'none', transition: 'background 0.3s, transform 0.2s',
                          boxShadow: '0 4px 14px rgba(255,109,52,0.3)'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#e65c20'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#ff6d34'; e.currentTarget.style.transform = ''; }}
                        >
                          Verify Credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-full md:w-[45%] hidden md:block"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
