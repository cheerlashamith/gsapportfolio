// src/sections/AchievementsSection.tsx
import { achievements } from '../data/achievements';
import { motion } from 'framer-motion';

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{ background: '#fff', padding: 'clamp(40px,5vw,80px) 0', position: 'relative', overflow: 'hidden' }}>

      <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="heading-container" style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: '#ff6d34', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>RECOGNITION</p>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.5rem)' }}>Achievements</h2>
          <div className="heading-underline" style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.4, delay: (i % 4) * 0.06 } }}
              viewport={{ once: true, amount: 0.1 }}
              style={{ position: 'relative' }}
            >
              <div className="group relative w-full h-full rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 bg-white" style={{
                padding: '2px', // space for border
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
              }}>
                {/* Rotating Glowing Gradient Border (Only visible on hover) */}
                <div className="absolute inset-[-100%] z-0 animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: 'conic-gradient(from 0deg, transparent 70%, #5227c7 85%, #ff6d34 100%)' }} />
                
                {/* Inner Content Container */}
                <div
                  className="relative z-10 bg-white w-full h-full rounded-[14px] p-6 flex flex-col"
                  style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.01)' }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'rgba(82,39,199,0.06)', border: '1px solid rgba(82,39,199,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20, transition: 'transform 0.3s ease'
                  }}>
                    <i className={a.icon} style={{ fontSize: '1.6rem', color: '#5227c7' }} />
                  </div>
                  
                  <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, fontSize: 17, color: '#1a1a2e', marginBottom: 10, lineHeight: 1.3 }}>{a.title}</h3>
                  <p className="[&>strong]:text-[#5227c7] [&>strong]:font-semibold" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14, color: 'rgba(26,26,46,0.6)', lineHeight: 1.7, flex: 1 }} dangerouslySetInnerHTML={{ __html: a.description }} />
                  
                  {a.link && (
                    <a 
                      href={a.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center mt-auto w-full gap-2 font-['Space_Grotesk',sans-serif] font-semibold text-[13px] text-white bg-[#5227c7] group-hover:bg-[#ff6d34] py-[12px] px-[24px] rounded-full no-underline transition-all duration-300 shadow-[0_4px_14px_rgba(82,39,199,0.3)] group-hover:shadow-[0_6px_20px_rgba(255,109,52,0.4)] group-hover:-translate-y-[2px]"
                    >
                      { (a as any).linkText || 'View Certificate' }
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
