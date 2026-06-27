// src/sections/ContactSection.tsx
import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heroImg from '../assets/hero.jpg';

const CHARS = '!<>-_\\/[]{}—=+*^?#_';
function ScrambleHeading({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [hasScrambled, setHasScrambled] = useState(false);

  useEffect(() => {
    if (isInView && !hasScrambled) {
      setHasScrambled(true);
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(text.split('').map((letter, index) => {
          if (index < iteration || letter === ' ' || letter === "'") {
            return text[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join(''));
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
      return () => clearInterval(interval);
    } else if (!isInView) {
      setHasScrambled(false);
      setDisplayText(text);
    }
  }, [isInView, hasScrambled, text]);

  return (
    <div className="heading-container mb-4">
      <h2 ref={ref} onMouseEnter={() => setHasScrambled(false)} style={{
        fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900,
        fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#1a1a2e',
        marginBottom: 8, lineHeight: 1.1, cursor: 'crosshair'
      }}>
        {displayText}
      </h2>
      <div className="heading-underline" style={{ height: 4, width: 60, background: 'var(--gradient)', borderRadius: 2 }} />
    </div>
  );
}

export default function ContactSection() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');
  const [status,  setStatus]  = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors,  setErrors]  = useState<Record<string, string>>({});

  const validate = useCallback(() => {
    const errs: Record<string, string> = {};
    if (!name.trim())             errs.name    = 'Name is required';
    if (name.trim().length < 2)   errs.name    = 'At least 2 characters';
    if (!message.trim())          errs.message = 'Message is required';
    if (message.trim().length < 10) errs.message = 'At least 10 characters';
    if (!email.trim())            errs.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Invalid email format';
    return errs;
  }, [name, message, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xblkkbqk', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });
      
      if (response.ok) {
        setStatus('sent');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const fieldBase: React.CSSProperties = {
    width: '100%', padding: '14px 18px', borderRadius: 12, fontSize: 15,
    fontFamily: 'Poppins, sans-serif', fontWeight: 400,
    background: '#faf8ff',
    border: '1.5px solid rgba(82,39,199,0.1)',
    color: '#1a1a2e', outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  };
  const focusStyle = { borderColor: '#5227c7', boxShadow: '0 0 0 3px rgba(82,39,199,0.08)' };
  const blurStyle  = { borderColor: 'rgba(82,39,199,0.1)', boxShadow: 'none' };

  return (
    <section
      id="contact"
      style={{
        background: '#fff',
        padding: 'clamp(60px,8vw,100px) clamp(20px,6vw,60px)',
        position: 'relative', overflow: 'hidden', height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center'
      }}
    >
      <span className="section-watermark" style={{ color: 'rgba(0,0,0,0.02)' }}>LET'S CONNECT</span>
      <div className="container mx-auto px-6 max-w-[1200px]" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-[320px] aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(82,39,199,0.15)] mb-10 group">
              <div className="absolute inset-0 bg-[#5227c7]/10 z-10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
              <img
                src={heroImg}
                alt="Contact Me"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            {/* Contact info under image */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', marginBottom: 32 }}>
              {[
                { icon: 'fas fa-phone', text: '+91 6305284229', href: 'tel:+916305284229' },
                { icon: 'fas fa-envelope', text: 'chshamith888@gmail.com', href: 'mailto:chshamith888@gmail.com' },
                { icon: 'fas fa-map-marker-alt', text: 'Pentapadu, AP', href: null },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(82,39,199,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5227c7' }}>
                    <i className={item.icon} style={{ fontSize: 16 }} />
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 15, color: '#1a1a2e', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#5227c7'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#1a1a2e'}
                    >{item.text}</a>
                  ) : (
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 15, color: '#1a1a2e' }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>


          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_50px_rgba(82,39,199,0.06)] border border-[rgba(82,39,199,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5227c7] to-[#ff6d34] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <ScrambleHeading text="Let's Talk" />

              <p style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 15,
                color: 'rgba(26,26,46,0.6)', marginBottom: 36, lineHeight: 1.6
              }}>Have a project in mind or want to collaborate? Send me a message and I'll get back to you shortly.</p>

              <form onSubmit={handleSubmit} noValidate className="relative z-10">
                <div style={{ marginBottom: 20 }}>
                  <input
                    type="text" placeholder="Your name *" value={name}
                    onChange={e => { setName(e.target.value); setErrors(er => ({ ...er, name: '' })); }}
                    style={{ ...fieldBase, ...(errors.name ? { borderColor: '#ef4444' } : {}) }}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: 12, display: 'block', marginTop: 6 }}>{errors.name}</span>}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <input
                    type="email" placeholder="Your email *" value={email}
                    onChange={e => { setEmail(e.target.value); setErrors(er => ({ ...er, email: '' })); }}
                    style={{ ...fieldBase, ...(errors.email ? { borderColor: '#ef4444' } : {}) }}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: 12, display: 'block', marginTop: 6 }}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: 32 }}>
                  <textarea
                    placeholder="Your message *" value={message} rows={5}
                    onChange={e => { setMessage(e.target.value); setErrors(er => ({ ...er, message: '' })); }}
                    style={{ ...fieldBase, resize: 'vertical', minHeight: 140, ...(errors.message ? { borderColor: '#ef4444' } : {}) }}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}
                  />
                  {errors.message && <span style={{ color: '#ef4444', fontSize: 12, display: 'block', marginTop: 6 }}>{errors.message}</span>}
                </div>

                <button
                  type="submit" disabled={status === 'sending'}
                  style={{
                    width: '100%', padding: '16px', borderRadius: 14, border: 'none',
                    background: status === 'sending' ? 'rgba(82,39,199,0.5)' : '#5227c7',
                    color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 600,
                    fontSize: 16, letterSpacing: '0.04em',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    boxShadow: '0 4px 14px rgba(82,39,199,0.3)'
                  }}
                  onMouseEnter={e => { 
                    if (status !== 'sending') { 
                      e.currentTarget.style.background = '#ff6d34';
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; 
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,109,52,0.4)'; 
                    } 
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.background = status === 'sending' ? 'rgba(82,39,199,0.5)' : '#5227c7';
                    e.currentTarget.style.transform = ''; 
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(82,39,199,0.3)'; 
                  }}
                >
                  {status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Sent!' : (
                    <><i className="fas fa-paper-plane" /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {status === 'sent' && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-[24px] p-8 max-w-md w-full shadow-2xl relative flex flex-col items-center text-center border border-green-100"
          >
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
              🎉
            </div>
            <h3 className="font-['Libre_Baskerville'] font-bold text-2xl text-[#1a1a2e] mb-3">Message Sent!</h3>
            <p className="font-['Poppins'] text-[#555] text-[15px] leading-relaxed mb-8">
              Woohoo! Your message safely parachuted into my inbox. I'll get back to you faster than a compiler error! 😊
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="w-full py-4 rounded-xl bg-[#5227c7] hover:bg-[#ff6d34] text-white font-['Poppins'] font-semibold transition-colors duration-300 shadow-md"
            >
              Awesome, Close this
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
