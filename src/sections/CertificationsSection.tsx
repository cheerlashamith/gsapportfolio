// src/sections/CertificationsSection.tsx
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';

export default function CertificationsSection() {
  return (
    <section id="certifications" style={{ background: '#ffffff', padding: 'clamp(60px,8vw,100px) 0', position: 'relative' }}>
      <div className="container mx-auto px-6 max-w-[1200px]" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 50 }}
        >
          <div className="heading-container">
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#1a1a2e' }}>Certifications</h2>
            <div className="heading-underline" style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 3) * 0.1 } }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="group relative w-full h-full rounded-[20px] overflow-hidden transition-transform duration-500 hover:-translate-y-2 bg-white" style={{
                padding: '2px', // space for border
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
              }}>
                {/* Rotating Glowing Gradient Border (Only visible on hover) */}
                <div className="absolute inset-[-100%] z-0 animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: 'conic-gradient(from 0deg, transparent 70%, #5227c7 85%, #ff6d34 100%)' }} />
                
                {/* Inner Content Container */}
                <div
                  className="relative z-10 bg-white w-full h-full rounded-[18px] p-[40px_24px] flex flex-col items-center text-center"
                  style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.01)' }}
                >
                <div style={{
                  marginBottom: 24,
                }}>
                  <img src={cert.logo} alt={cert.issuer} loading="lazy" decoding="async"
                    style={{ width: 120, height: 120, objectFit: 'contain' }} />
                </div>
                
                <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, fontSize: 20, color: '#1a1a2e', marginBottom: 8, flex: 1 }}>{cert.name}</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 15, color: '#666', marginBottom: 24 }}>{cert.issuer}</p>
                
                {cert.link !== '#' && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center mt-[14px] w-full gap-2 font-['Space_Grotesk',sans-serif] font-semibold text-[13px] text-white bg-[#5227c7] group-hover:bg-[#ff6d34] py-[12px] px-[24px] rounded-full no-underline transition-all duration-300 shadow-[0_4px_14px_rgba(82,39,199,0.3)] group-hover:shadow-[0_6px_20px_rgba(255,109,52,0.4)] group-hover:-translate-y-[2px]"
                  >
                    View Certificate 
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
