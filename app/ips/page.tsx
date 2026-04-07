import { IPS_DATA } from '@/data/ips'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IP矩阵 · VALUCIA渼联',
  description: '探索VALUCIA旗下全球顶级IP矩阵，包括贝尔·泰迪熊、NASA等官方授权IP资源',
}

export default function IPsPage() {
  const mainIPs = IPS_DATA.filter(ip => !ip.isComingSoon)
  const bearIPs = mainIPs.filter(ip => ip.id.startsWith('bear'))
  const nasaIPs = mainIPs.filter(ip => ip.id.startsWith('nasa'))

  return (
    <>
      <style>{`
        .ip-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .ip-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(182,147,248,0.22) !important; }
        .ip-card-dark:hover { transform: translateY(-8px); }
      `}</style>

      {/* Hero Banner */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px', paddingLeft: '2rem', paddingRight: '2rem',
        background: 'linear-gradient(135deg, #B693F8 0%, #FF85A1 60%, #FFD166 100%)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', top: '-150px', right: '-100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '300px', height: '300px', bottom: '-100px', left: '-80px', background: 'rgba(255,255,255,0.07)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '100px', padding: '6px 18px', fontSize: '0.75rem', fontWeight: 600, color: 'white', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>IP MATRIX · 全球授权资源</div>
          <h1 style={{ fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: 'white', lineHeight: 1.05, marginBottom: '1.25rem' }}>全球顶级 IP 矩阵</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>我们持有和运营全球最具影响力的IP授权资源，每一个IP都是进入全球市场的通行证</p>
        </div>
      </section>

      {/* Bear Taidi Cluster */}
      <section style={{ padding: '5rem 2rem', background: '#FFF8F4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🐻</span>
              <div>
                <h2 style={{ fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif", fontSize: '1.75rem', fontWeight: 800, color: '#1A1128' }}>贝尔·泰迪熊 IP 系列</h2>
                <p style={{ color: '#6E6880', fontSize: '0.9rem' }}>Bear Taidi · Since 1902 · 百年情感IP</p>
              </div>
            </div>
            <div style={{ height: '3px', background: 'linear-gradient(90deg, #FFD166, #FF9A7B, #FF85A1)', borderRadius: '3px', maxWidth: '300px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {bearIPs.map(ip => (
              <div key={ip.id} className="ip-card" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.95)', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(182,147,248,0.1)', minHeight: '400px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div style={{ height: '180px', background: `linear-gradient(135deg, ${ip.colorFrom}, ${ip.colorTo})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', flexShrink: 0 }}>{ip.emoji}</div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: ip.accentColor, background: `${ip.accentColor}18`, padding: '4px 10px', borderRadius: '100px', display: 'inline-block', marginBottom: '0.875rem' }}>{ip.badge}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: '#1A1128', marginBottom: '4px' }}>{ip.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#B693F8', fontWeight: 500, marginBottom: '0.75rem' }}>{ip.nameEn}</p>
                  <p style={{ fontSize: '0.85rem', color: '#6E6880', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>{ip.tagline}</p>
                  {ip.categories.length > 0 && (
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {ip.categories.slice(0, 4).map(cat => (
                        <span key={cat} style={{ fontSize: '0.7rem', color: '#6E6880', background: 'rgba(110,104,128,0.08)', padding: '3px 10px', borderRadius: '100px' }}>{cat}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NASA Cluster */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(180deg, #0D0A1A 0%, #1A1128 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} style={{ position: 'absolute', width: i % 3 === 0 ? '3px' : '2px', height: i % 3 === 0 ? '3px' : '2px', background: 'white', borderRadius: '50%', left: `${(i * 17 + i * i * 0.3) % 100}%`, top: `${(i * 13 + i * i * 0.2) % 100}%`, opacity: 0.2 + (i % 4) * 0.12 }} />
          ))}
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '3px solid #5BB8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', background: 'rgba(91,184,245,0.1)', boxShadow: '0 0 20px rgba(91,184,245,0.3)' }}>🚀</div>
              <div>
                <h2 style={{ fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif", fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>NASA 官方授权 IP 系列</h2>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Official NASA License · 全球正版授权</p>
              </div>
            </div>
            <div style={{ height: '3px', background: 'linear-gradient(90deg, #5BB8F5, #B693F8)', borderRadius: '3px', maxWidth: '300px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {nasaIPs.map(ip => (
              <div key={ip.id} className="ip-card-dark" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: `1.5px solid ${ip.accentColor}30`, borderRadius: '28px', overflow: 'hidden', boxShadow: `0 8px 32px ${ip.accentColor}15`, transition: 'transform 0.3s ease, box-shadow 0.3s ease', minHeight: '400px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div style={{ height: '180px', background: `linear-gradient(135deg, ${ip.colorFrom}, ${ip.colorTo})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', flexShrink: 0 }}>{ip.emoji}</div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: ip.accentColor, background: `${ip.accentColor}20`, padding: '4px 10px', borderRadius: '100px', display: 'inline-block', marginBottom: '0.875rem' }}>{ip.badge}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'white', marginBottom: '4px' }}>{ip.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: ip.accentColor, fontWeight: 500, marginBottom: '0.75rem' }}>{ip.nameEn}</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>{ip.tagline}</p>
                  {ip.categories.length > 0 && (
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {ip.categories.slice(0, 4).map(cat => (
                        <span key={cat} style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '100px' }}>{cat}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, rgba(182,147,248,0.08) 0%, rgba(255,133,161,0.05) 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#1A1128', marginBottom: '0.75rem' }}>更多顶级IP，即将揭晓</h2>
          <p style={{ color: '#6E6880', fontSize: '1rem', marginBottom: '3rem' }}>More World-Class IPs · Coming Soon</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ width: '200px', height: '280px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1.5px solid rgba(182,147,248,0.25)', borderRadius: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', filter: 'blur(2px)', userSelect: 'none' }}>
                <div style={{ fontSize: '3rem', opacity: 0.4 }}>✨</div>
                <div style={{ fontWeight: 700, color: '#B693F8', opacity: 0.6, fontSize: '0.9rem' }}>???</div>
                <div style={{ background: 'rgba(182,147,248,0.2)', color: '#B693F8', opacity: 0.6, padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 600 }}>即将揭晓</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', maxWidth: '440px', margin: '0 auto' }}>
            <input type="email" placeholder="输入你的邮箱，抢先获知" style={{ flex: 1, padding: '13px 20px', borderRadius: '40px', border: '1.5px solid rgba(182,147,248,0.3)', background: 'white', fontSize: '0.875rem', color: '#1A1128', outline: 'none' }} />
            <button style={{ padding: '13px 24px', borderRadius: '40px', background: '#B693F8', color: 'white', border: 'none', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>订阅</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'white', textAlign: 'center' }}>
        <p style={{ color: '#6E6880', marginBottom: '1.5rem', fontSize: '1rem' }}>没有找到你想要的IP合作资源？</p>
        <Link href="/contact" style={{ textDecoration: 'none', background: '#FF85A1', color: 'white', padding: '14px 36px', borderRadius: '40px', fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 4px 20px rgba(255,133,161,0.35)', display: 'inline-block' }}>告诉我们你的需求 →</Link>
      </section>
    </>
  )
}
