'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const intensity = [22, 28, 20, 24, 22, 26][i] ?? 24
        const rx = ((e.clientY - cy) / intensity).toFixed(2)
        const ry = (-(e.clientX - cx) / intensity).toFixed(2)
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`
      })
    }
    const reset = () => {
      cardsRef.current.forEach(r => { if (r) r.style.transform = '' })
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', reset)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', reset)
    }
  }, [])

  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: '#FFF8F4',
      paddingTop: '68px',
    }}>
      {/* Blobs */}
      <div style={{ position:'absolute', width:'640px', height:'640px', top:'-120px', left:'-180px', background:'radial-gradient(circle, rgba(182,147,248,0.32) 0%, rgba(255,133,161,0.18) 60%, transparent 80%)', borderRadius:'60% 40% 30% 70% / 60% 30% 70% 40%', animation:'morph 18s ease-in-out infinite', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:'520px', height:'520px', bottom:'-80px', right:'-120px', background:'radial-gradient(circle, rgba(255,209,102,0.38) 0%, rgba(255,154,123,0.22) 60%, transparent 80%)', borderRadius:'40% 60% 70% 30% / 40% 50% 60% 50%', animation:'morph 22s ease-in-out infinite reverse', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:'320px', height:'320px', top:'35%', left:'40%', background:'radial-gradient(circle, rgba(91,184,245,0.15) 0%, transparent 70%)', borderRadius:'50%', animation:'float-slow 10s ease-in-out infinite', pointerEvents:'none' }} />

      <div className="hero-grid" style={{ maxWidth:'1200px', margin:'0 auto', padding:'4rem 2rem', width:'100%', display:'grid', gridTemplateColumns:'36% 64%', gap:'2rem', alignItems:'center', position:'relative', zIndex:1 }}>
        {/* Left copy */}
        <div className="hero-copy">
          <div className="hero-badge" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(182,147,248,0.12)', border:'1px solid rgba(182,147,248,0.3)', borderRadius:'100px', padding:'6px 16px', marginBottom:'2rem' }}>
            <span style={{ fontSize:'0.75rem', fontWeight:600, color:'#B693F8', letterSpacing:'0.05em' }}>AI-NATIVE · IP COMMERCIALIZATION</span>
          </div>
          <h1 style={{ fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontSize:'clamp(2.6rem,5.5vw,5.2rem)', fontWeight:800, lineHeight:1.05, marginBottom:'1.5rem', letterSpacing:'-0.02em' }}>
            <span style={{ background:'linear-gradient(135deg,#B693F8,#FF85A1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', display:'block' }}>让顶级IP</span>
            <span style={{ background:'linear-gradient(135deg,#FF85A1,#FFD166)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', display:'block' }}>以AI的速度</span>
            <span style={{ color:'#1A1128', display:'block' }}>在全球绽放</span>
          </h1>
          <p style={{ fontSize:'1.05rem', color:'#6E6880', lineHeight:1.75, marginBottom:'2.5rem', maxWidth:'460px' }}>
            全球领先的AI原生IP商业化与数字化生态平台，持有 NASA、贝尔·泰迪熊等顶级国际IP全球官方授权
          </p>
          <div className="hero-ctas" style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
            <Link href="/capabilities" style={{ textDecoration:'none', background:'#FF85A1', color:'white', padding:'14px 32px', borderRadius:'40px', fontWeight:600, fontSize:'0.95rem', boxShadow:'0 4px 24px rgba(255,133,161,0.4)', display:'inline-block' }}>探索平台 →</Link>
            <Link href="/ips" style={{ textDecoration:'none', background:'transparent', color:'#B693F8', padding:'14px 32px', borderRadius:'40px', fontWeight:600, fontSize:'0.95rem', border:'2px solid rgba(182,147,248,0.4)', display:'inline-block' }}>查看IP矩阵</Link>
          </div>
        </div>

        {/* Right: 6 cards in 2 rows, right-over-left stacking */}
        <div className="hero-cards" style={{ position:'relative', height:'640px' }}>

          {/* Card 1 — Bear Taidi: row-1 leftmost, z:2 */}
          <div ref={el => { cardsRef.current[0] = el }} className="hero-card" style={{
            position:'absolute', top:'18px', left:'0px', width:'290px',
            padding:'1.75rem', background:'rgba(255,255,255,0.88)',
            backdropFilter:'blur(24px)', WebkitBackdropFilter:'blur(24px)',
            border:'1.5px solid rgba(255,255,255,0.95)', borderRadius:'28px',
            boxShadow:'0 20px 56px rgba(255,154,123,0.28)',
            animation:'float 5s ease-in-out infinite', transition:'transform 0.12s ease', zIndex:2,
          }}>
            <div style={{ width:'68px', height:'68px', borderRadius:'20px', background:'linear-gradient(135deg,#FFD166,#FF9A7B)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.2rem', marginBottom:'1rem' }}>🐻</div>
            <div style={{ fontWeight:800, fontSize:'1.15rem', color:'#1A1128', marginBottom:'3px' }}>贝尔·泰迪熊</div>
            <div style={{ fontSize:'0.82rem', color:'#6E6880', marginBottom:'0.875rem' }}>Bear Taidi · Since 1902</div>
            <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', marginBottom:'0.875rem' }}>
              {['治愈','潮萌','暖系'].map(t => <span key={t} style={{ fontSize:'0.72rem', color:'#FF9A7B', background:'rgba(255,154,123,0.12)', padding:'3px 10px', borderRadius:'100px', fontWeight:600 }}>{t}</span>)}
            </div>
            <div style={{ paddingTop:'0.75rem', borderTop:'1px solid rgba(255,154,123,0.12)', fontSize:'0.78rem', color:'#FF9A7B', fontWeight:600 }}>旗舰IP · 百年传承</div>
          </div>

          {/* Card 2 — NASA: row-1 center, covers Card 1, z:4 */}
          <div ref={el => { cardsRef.current[1] = el }} className="hero-card" style={{
            position:'absolute', top:'0px', left:'195px', width:'310px',
            padding:'1.75rem', background:'linear-gradient(145deg,rgba(13,10,26,0.95),rgba(42,27,78,0.92))',
            backdropFilter:'blur(24px)', WebkitBackdropFilter:'blur(24px)',
            border:'1.5px solid rgba(91,184,245,0.35)', borderRadius:'28px',
            boxShadow:'0 20px 56px rgba(91,184,245,0.22)',
            animation:'float-alt 6s ease-in-out infinite', transition:'transform 0.12s ease', zIndex:4,
          }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1rem' }}>
              <div style={{ width:'68px', height:'68px', borderRadius:'20px', background:'linear-gradient(135deg,#0D0A1A,#2A1B4E)', border:'1px solid rgba(91,184,245,0.4)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.2rem' }}>🚀</div>
              <div style={{ background:'rgba(91,184,245,0.15)', border:'1px solid rgba(91,184,245,0.3)', borderRadius:'100px', padding:'4px 12px', fontSize:'0.72rem', color:'#5BB8F5', fontWeight:600 }}>Official License</div>
            </div>
            <div style={{ fontWeight:800, fontSize:'1.35rem', color:'white', marginBottom:'3px' }}>NASA</div>
            <div style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.5)', marginBottom:'0.875rem' }}>全球官方正版授权</div>
            <div style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
              {['服饰','箱包','家居','运动'].map(t => <span key={t} style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.45)', background:'rgba(255,255,255,0.07)', padding:'3px 10px', borderRadius:'100px' }}>{t}</span>)}
            </div>
          </div>

          {/* Card 3 — TadaCoffee: row-1 rightmost, covers NASA, z:6 */}
          <div ref={el => { cardsRef.current[2] = el }} className="hero-card" style={{
            position:'absolute', top:'25px', left:'412px', width:'275px',
            padding:'1.75rem', background:'rgba(255,255,255,0.82)',
            backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)',
            border:'1.5px solid rgba(255,255,255,0.92)', borderRadius:'28px',
            boxShadow:'0 18px 52px rgba(200,149,108,0.26)',
            animation:'float-slow 7.5s ease-in-out infinite', transition:'transform 0.12s ease', zIndex:6,
          }}>
            <div style={{ width:'64px', height:'64px', borderRadius:'18px', background:'linear-gradient(135deg,#C8956C,#FFD166)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', marginBottom:'0.875rem' }}>☕</div>
            <div style={{ fontWeight:800, fontSize:'1.1rem', color:'#1A1128', marginBottom:'3px' }}>泰迪咖啡</div>
            <div style={{ fontSize:'0.8rem', color:'#6E6880', marginBottom:'0.75rem' }}>TadaCoffee · 咖啡子品牌</div>
            <div style={{ fontSize:'0.76rem', color:'#C8956C', fontWeight:600, background:'rgba(200,149,108,0.12)', padding:'4px 13px', borderRadius:'100px', display:'inline-block' }}>每杯都有熊抱的温度</div>
          </div>

          {/* Card 4 — 泰迪婴童: row-2 leftmost, z:1 */}
          <div ref={el => { cardsRef.current[3] = el }} className="hero-card" style={{
            position:'absolute', top:'318px', left:'28px', width:'282px',
            padding:'1.75rem', background:'rgba(255,255,255,0.80)',
            backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)',
            border:'1.5px solid rgba(255,133,161,0.2)', borderRadius:'28px',
            boxShadow:'0 18px 52px rgba(255,133,161,0.2)',
            animation:'float 8.5s ease-in-out infinite 1s', transition:'transform 0.12s ease', zIndex:1,
          }}>
            <div style={{ width:'64px', height:'64px', borderRadius:'18px', background:'linear-gradient(135deg,#FFD4E8,#FF85A1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', marginBottom:'0.875rem' }}>🍼</div>
            <div style={{ fontWeight:800, fontSize:'1.1rem', color:'#1A1128', marginBottom:'3px' }}>泰迪婴童</div>
            <div style={{ fontSize:'0.8rem', color:'#6E6880', marginBottom:'0.75rem' }}>Bear Taidi Baby · 婴童专线</div>
            <div style={{ fontSize:'0.76rem', color:'#FF85A1', fontWeight:600, background:'rgba(255,133,161,0.1)', padding:'4px 13px', borderRadius:'100px', display:'inline-block' }}>温柔守护，从出生开始</div>
          </div>

          {/* Card 5 — 泰迪潮品: row-2 center, covers Card 4, z:3 */}
          <div ref={el => { cardsRef.current[4] = el }} className="hero-card" style={{
            position:'absolute', top:'305px', left:'218px', width:'292px',
            padding:'1.75rem', background:'rgba(255,255,255,0.76)',
            backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)',
            border:'1.5px solid rgba(94,207,171,0.25)', borderRadius:'28px',
            boxShadow:'0 18px 52px rgba(94,207,171,0.2)',
            animation:'float-alt 9s ease-in-out infinite 0.5s', transition:'transform 0.12s ease', zIndex:3,
          }}>
            <div style={{ width:'64px', height:'64px', borderRadius:'18px', background:'linear-gradient(135deg,#5ECFAB,#B693F8)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', marginBottom:'0.875rem' }}>👕</div>
            <div style={{ fontWeight:800, fontSize:'1.1rem', color:'#1A1128', marginBottom:'3px' }}>泰迪潮品</div>
            <div style={{ fontSize:'0.8rem', color:'#6E6880', marginBottom:'0.75rem' }}>Bear Taidi Fashion · 潮流线</div>
            <div style={{ fontSize:'0.76rem', color:'#5ECFAB', fontWeight:600, background:'rgba(94,207,171,0.1)', padding:'4px 13px', borderRadius:'100px', display:'inline-block' }}>把可爱穿出去</div>
          </div>

          {/* Card 6 — Coming Soon: row-2 rightmost, covers Card 5, z:5, blurred */}
          <div ref={el => { cardsRef.current[5] = el }} className="hero-card" style={{
            position:'absolute', top:'325px', left:'418px', width:'272px',
            padding:'1.75rem', background:'rgba(255,255,255,0.46)',
            backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)',
            border:'1.5px solid rgba(182,147,248,0.3)', borderRadius:'28px',
            boxShadow:'0 14px 44px rgba(182,147,248,0.18)',
            animation:'float-slow 10s ease-in-out infinite reverse', transition:'transform 0.12s ease', zIndex:5,
            filter:'blur(2px)',
          }}>
            <div style={{ width:'64px', height:'64px', borderRadius:'18px', background:'linear-gradient(135deg,#B693F8,#FF85A1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', marginBottom:'0.875rem' }}>✨</div>
            <div style={{ fontWeight:800, fontSize:'1.1rem', color:'#1A1128', marginBottom:'3px' }}>??? IP</div>
            <div style={{ fontSize:'0.8rem', color:'#6E6880', marginBottom:'0.75rem' }}>更多顶级IP即将揭晓</div>
            <div style={{ fontSize:'0.76rem', color:'#B693F8', fontWeight:600, background:'rgba(182,147,248,0.1)', padding:'4px 13px', borderRadius:'100px', display:'inline-block' }}>Coming Soon</div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'6px', animation:'bounce-arrow 2s ease-in-out infinite' }}>
        <span style={{ fontSize:'0.7rem', color:'#6E6880', letterSpacing:'0.1em' }}>SCROLL</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4L10 16M10 16L5 11M10 16L15 11" stroke="#B693F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section { padding-top: 68px; align-items: flex-start; }
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 2.5rem 1.25rem 1.5rem !important;
            gap: 2rem !important;
          }
          .hero-copy { text-align: center; }
          .hero-badge { display: inline-flex !important; }
          .hero-copy p { max-width: 100% !important; margin-left: auto; margin-right: auto; }
          .hero-ctas { justify-content: center !important; }
          .hero-cards {
            position: relative !important;
            height: auto !important;
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            overflow-y: visible !important;
            gap: 12px !important;
            padding: 8px 4px 20px !important;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .hero-cards::-webkit-scrollbar { display: none; }
          .hero-card {
            position: static !important;
            top: auto !important; left: auto !important;
            right: auto !important; bottom: auto !important;
            width: 230px !important;
            min-width: 230px !important;
            flex-shrink: 0 !important;
            filter: none !important;
            scroll-snap-align: start;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
