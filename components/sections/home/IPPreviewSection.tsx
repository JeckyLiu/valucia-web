'use client'
import Link from 'next/link'
import { IPS_DATA } from '@/data/ips'

export default function IPPreviewSection() {
  const preview = IPS_DATA.filter(ip => !ip.isComingSoon).slice(0, 4)

  return (
    <section style={{ padding:'6rem 2rem', background:'#FFF8F4' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'3rem', flexWrap:'wrap', gap:'1rem' }}>
          <div>
            <div style={{ fontSize:'0.75rem', fontWeight:600, color:'#B693F8', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.75rem' }}>IP MATRIX</div>
            <h2 style={{ fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontSize:'clamp(2rem,4vw,3rem)', fontWeight:800, color:'#1A1128', lineHeight:1.1 }}>全球顶级IP矩阵</h2>
          </div>
          <Link href="/ips" style={{ textDecoration:'none', color:'#B693F8', fontWeight:600, fontSize:'0.9rem', display:'flex', alignItems:'center', gap:'6px', border:'1.5px solid rgba(182,147,248,0.35)', padding:'10px 20px', borderRadius:'100px' }}>查看全部 IP →</Link>
        </div>

        <div className="ip-preview-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'1.5rem' }}>
          {preview.map(ip => (
            <div key={ip.id} style={{ background:'rgba(255,255,255,0.7)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', border:'1.5px solid rgba(255,255,255,0.9)', borderRadius:'28px', overflow:'hidden', boxShadow:'0 8px 32px rgba(182,147,248,0.12)', transition:'transform 0.3s ease, box-shadow 0.3s ease', cursor:'pointer' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-8px)'; el.style.boxShadow = '0 20px 48px rgba(182,147,248,0.25)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 8px 32px rgba(182,147,248,0.12)' }}
            >
              <div style={{ height:'120px', background:`linear-gradient(135deg, ${ip.colorFrom}, ${ip.colorTo})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3.5rem' }}>{ip.emoji}</div>
              <div style={{ padding:'1.5rem' }}>
                <div style={{ fontSize:'0.7rem', fontWeight:600, color:ip.accentColor, background:`${ip.accentColor}18`, padding:'4px 10px', borderRadius:'100px', display:'inline-block', marginBottom:'0.75rem' }}>{ip.badge}</div>
                <h3 style={{ fontWeight:700, fontSize:'1.1rem', color:'#1A1128', marginBottom:'4px' }}>{ip.name}</h3>
                <p style={{ fontSize:'0.8rem', color:'#6E6880', lineHeight:1.5 }}>{ip.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ip-preview-grid { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
        }
        @media (max-width: 400px) {
          .ip-preview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
