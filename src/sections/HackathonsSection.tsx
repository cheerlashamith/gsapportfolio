import { hackathons } from '../data/hackathons';

export default function HackathonsSection() {
  const duplicatedHackathons = [...hackathons, ...hackathons];

  const renderCard = (h: typeof hackathons[0], i: number, isDuplicate = false) => (
    <div
      key={`${h.name}-${i}-${isDuplicate ? 'dup' : 'orig'}`}
      className="group relative w-full sm:w-[320px] h-[380px] flex-shrink-0 rounded-2xl overflow-hidden cursor-default bg-white border border-black/5 mx-auto"
      style={{
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.boxShadow = `0 20px 40px ${h.glowColor}25`;
        el.style.borderColor = `${h.glowColor}50`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        el.style.borderColor = 'rgba(0,0,0,0.06)';
      }}
    >
      {/* Date Badge */}
      <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full bg-[#5227c7] text-white font-['Space_Grotesk'] font-bold text-sm shadow-[0_4px_15px_rgba(82,39,199,0.4)] transition-colors duration-300 group-hover:bg-[#ff6d34] group-hover:shadow-[0_4px_15px_rgba(255,109,52,0.4)]">
        {h.date}
      </div>

      {/* Default State: Big Logo Centered */}
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-0 group-hover:scale-90 bg-white">
        <img 
          src={h.logo} 
          alt={h.name} 
          className="w-full h-full object-contain p-8 drop-shadow-sm transition-transform duration-700 group-hover:-translate-y-4" 
          draggable="false" 
          style={{ filter: h.name === 'Google Solution Challenge' ? 'brightness(1.08) contrast(1.2)' : 'none' }}
        />
      </div>

      {/* Hover State: Background & Details */}
      <div className="absolute inset-0 bg-white p-6 flex flex-col opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-y-0">
        
        {/* Header: Small logo + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, marginTop: 30 }}>
          <div style={{
            width: 50, height: 50, borderRadius: 12, background: '#f8f9fa',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6,
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <img src={h.logo} alt={h.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: h.name === 'Google Solution Challenge' ? 'brightness(1.08) contrast(1.2)' : 'none' }} draggable="false" />
          </div>
          <div>
            <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 800, fontSize: 16, color: '#1a1a2e', marginBottom: 4, lineHeight: 1.2 }}>{h.name}</h3>
            <span style={{ fontSize: 11, color: '#ff6d34', fontFamily: 'Space Grotesk, sans-serif', background: 'rgba(255,109,52,0.1)', padding: '2px 8px', borderRadius: 10, fontWeight: 600 }}>{h.date}</span>
          </div>
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          <span style={{ fontSize: 11, color: '#5227c7', fontFamily: 'Space Grotesk, sans-serif', background: 'rgba(82,39,199,0.1)', padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(82,39,199,0.2)', fontWeight: 600 }}>
            {h.organizer}
          </span>
          {h.badge && (
            <span style={{ fontSize: 11, color: '#ff6d34', fontFamily: 'Space Grotesk, sans-serif', background: 'rgba(255,109,52,0.1)', padding: '4px 10px', borderRadius: 20, border: '1px solid rgba(255,109,52,0.2)', fontWeight: 600 }}>
              {h.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13.5, color: '#555', lineHeight: 1.6, flex: 1, marginBottom: 20 }}>
          {h.description}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 10, marginTop: 'auto', flexWrap: 'wrap' }}>
          {h.projectUrl && (
            <a
              href={h.projectUrl}
              target="_blank" rel="noopener noreferrer"
              draggable="false"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13,
                color: '#fff', background: '#5227c7', padding: '10px 20px', borderRadius: '6px',
                textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: '0 4px 14px rgba(82,39,199,0.3)'
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.background = '#401ba3'; 
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; 
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(82,39,199,0.5)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.background = '#5227c7'; 
                e.currentTarget.style.transform = ''; 
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(82,39,199,0.3)';
              }}
            >
              View Project
            </a>
          )}

          {h.certificate && (
            <a
              href={h.certificate}
              target="_blank" rel="noopener noreferrer"
              draggable="false"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13,
                color: '#fff', background: '#ff6d34', padding: '10px 20px', borderRadius: '6px',
                textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: '0 4px 14px rgba(255,109,52,0.3)'
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.background = '#e65c20'; 
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; 
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,109,52,0.5)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.background = '#ff6d34'; 
                e.currentTarget.style.transform = ''; 
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255,109,52,0.3)';
              }}
            >
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="hackathons" style={{ background: '#ffffff', padding: 'clamp(80px,10vw,130px) 0', position: 'relative', overflow: 'hidden' }}>
      <span className="section-watermark" style={{ color: 'rgba(0,0,0,0.03)' }}>HACK</span>
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        <div className="heading-container" style={{ textAlign: 'center', marginBottom: 80 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 12, color: '#ff6d34', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 }}>WAR STORIES</p>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.5rem)' }}>Hackathons</h2>
          <div className="heading-underline" style={{ height: 4, width: 70, background: 'var(--gradient)', margin: '14px auto 0', borderRadius: 2 }} />
        </div>
      </div>

      {/* Desktop: Infinite Scroll Container */}
      <div className="relative z-10 w-full hidden lg:flex items-center justify-center py-8">
        <div className="hackathon-mask w-full max-w-full overflow-hidden">
          <div className="hackathon-scroll gap-6">
            {duplicatedHackathons.map((h, i) => renderCard(h, i, true))}
          </div>
        </div>
      </div>

      {/* Mobile: Grid Container */}
      <div className="relative z-10 w-full lg:hidden py-8 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {hackathons.map((h, i) => renderCard(h, i, false))}
        </div>
      </div>
    </section>
  );
}
