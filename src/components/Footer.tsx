// src/components/Footer.tsx
import { lenis } from '../main';

const NAV_LINKS = ['Home','About','Skills','Projects','Education','Hackathons','Certifications','Achievements','Contact'];
const NAV_IDS   = ['hero','about','skills','projects','timeline','hackathons','certifications','achievements','contact'];

const SOCIALS = [
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/cheerla-shamith-a420472a0', label: 'LinkedIn' },
  { icon: 'fab fa-github',      href: 'https://github.com/cheerlashamith',                     label: 'GitHub'   },
  { icon: 'fas fa-code',        href: 'https://www.codechef.com/users/sasihackerrr',            label: 'CodeChef' },
  { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/starshami888/',                label: 'Instagram'},
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) lenis?.scrollTo(el);
  };

  return (
    <footer
      style={{
        position: 'relative', background: '#fafafe',
        overflow: 'hidden', height: '100%',
        borderLeft: '1px solid rgba(82,39,199,0.06)',
      }}
    >
      <div
        style={{
          position: 'relative', zIndex: 10,
          padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,50px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', justifyContent: 'center', height: '100%',
        }}
      >
        {/* Name */}
        <h2 style={{
          fontFamily: "'Libre Baskerville', serif", fontWeight: 800,
          fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#1a1a2e',
          letterSpacing: '0.02em', marginBottom: 8,
        }}>Cheerla Shamith</h2>

        {/* Tagline */}
        <p style={{
          fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', fontWeight: 300, fontSize: 13,
          color: 'rgba(26,26,46,0.45)', marginBottom: 24,
        }}>"Building the future, one commit at a time."</p>

        {/* Social links */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          {SOCIALS.map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: '#fff', border: '1px solid rgba(82,39,199,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, color: '#5227c7', textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#5227c7'; el.style.color = '#fff';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 20px rgba(82,39,199,0.2)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#fff'; el.style.color = '#5227c7';
                el.style.transform = ''; el.style.boxShadow = '';
              }}
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>

        {/* CTA button */}
        <div style={{ marginBottom: 28 }}>
          <a href="https://www.linkedin.com/in/cheerla-shamith-a420472a0" target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13, color: '#fff',
              background: 'linear-gradient(135deg, #5227c7, #7c3aed)', padding: '10px 26px', borderRadius: 50,
              textDecoration: 'none', transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(82,39,199,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >Connect on LinkedIn →</a>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 20px', marginBottom: 24 }}>
          {NAV_LINKS.map((label, i) => (
            <button
              key={label}
              onClick={() => scrollTo(NAV_IDS[i])}
              style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 12,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                color: 'rgba(26,26,46,0.45)', background: 'none', border: 'none',
                cursor: 'pointer', transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#5227c7'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(26,26,46,0.45)'}
            >{label}</button>
          ))}
        </nav>

        {/* Divider */}
        <div style={{ width: '100%', maxWidth: 400, borderTop: '1px solid rgba(82,39,199,0.08)', marginBottom: 18 }} />

        {/* Copyright */}
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: 'rgba(26,26,46,0.35)' }}>
          © {new Date().getFullYear()} Cheerla Shamith. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
