import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们 · VALUCIA渼联',
  description: '了解VALUCIA渼联——吉智国际控股集团旗下的全球AI原生IP商业化平台',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px', paddingLeft: '2rem', paddingRight: '2rem',
        background: 'linear-gradient(135deg, #FFD166 0%, #FF9A7B 50%, #FF85A1 100%)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', width: '400px', height: '400px', top: '-120px', left: '-80px',
          background: 'rgba(255,255,255,0.1)', borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800, color: 'white', lineHeight: 1.05, marginBottom: '1.25rem',
          }}>关于 VALUCIA</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
            我们不只是平台，我们是IP走向世界的数字伙伴
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '5rem 2rem', background: '#FFF8F4' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center',
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FF9A7B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                OUR STORY
              </div>
              <h2 style={{
                fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 800, color: '#1A1128', lineHeight: 1.15, marginBottom: '1.5rem',
              }}>为什么是 VALUCIA？</h2>
              <p style={{ color: '#6E6880', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                吉智国际控股集团有限公司洞见全球IP产业的结构性机会：顶级IP因缺乏高效、合规的数字化运营体系，大量商业价值无法释放。
              </p>
              <p style={{ color: '#6E6880', lineHeight: 1.8, fontSize: '0.95rem' }}>
                VALUCIA（渼联）应运而生——以AI为核心引擎，以国际顶级IP为资源基础，打破地域、效率、合规三大壁垒，构建全链路IP商业化闭环。
              </p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 8px 40px rgba(182,147,248,0.12)',
              border: '1px solid rgba(182,147,248,0.1)',
            }}>
              {[
                { label: '使命', text: '让全球顶级IP以AI的速度在全球市场高效绽放', color: '#B693F8' },
                { label: '愿景', text: '成为国际顶级IP进入全球市场的首选数字化运营伙伴', color: '#5ECFAB' },
                { label: '价值观', text: '开放、透明、共赢 — IP方、商家、平台三方共同成长', color: '#FF9A7B' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(182,147,248,0.1)' }}>
                  <div style={{
                    fontSize: '0.7rem', fontWeight: 700, color: item.color,
                    background: `${item.color}15`, padding: '3px 10px',
                    borderRadius: '100px', display: 'inline-block', marginBottom: '0.6rem',
                  }}>{item.label}</div>
                  <p style={{ fontSize: '0.9rem', color: '#1A1128', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
              <div style={{ marginBottom: 0 }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5BB8F5', background: 'rgba(91,184,245,0.12)', padding: '3px 10px', borderRadius: '100px', display: 'inline-block', marginBottom: '0.6rem' }}>上级集团</div>
                <p style={{ fontSize: '0.9rem', color: '#1A1128' }}>吉智国际控股集团有限公司</p>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { section:nth-child(2) > div > div { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Timeline placeholder */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
            fontWeight: 800, color: '#1A1128', marginBottom: '3rem', textAlign: 'center',
          }}>发展历程</h2>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
              position: 'absolute', left: '0', top: '0', bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, #B693F8, #FF85A1, #FFD166)',
              borderRadius: '2px',
            }} />
            {[
              { year: '2024', title: '平台创立', desc: '吉智国际控股集团发布VALUCIA战略，AI原生IP商业化平台正式立项' },
              { year: '2025', title: 'IP矩阵建立', desc: '签约贝尔·泰迪熊全球运营权，获得NASA全球官方正版授权，IP矩阵初步建立' },
              { year: '2025', title: '平台上线', desc: '八大核心AI系统研发完成，平台正式向IP权利方和全球商家开放' },
              { year: '2026+', title: '全球扩张', desc: '亚太、欧美、中东三大市场同步布局，更多顶级IP陆续加入矩阵', upcoming: true },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '2.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '-2.15rem',
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: item.upcoming ? 'rgba(182,147,248,0.3)' : '#B693F8',
                  border: '2px solid white',
                  boxShadow: item.upcoming ? 'none' : '0 0 0 3px rgba(182,147,248,0.2)',
                  top: '4px',
                }} />
                <div style={{
                  fontSize: '0.75rem', fontWeight: 700, color: '#B693F8',
                  marginBottom: '0.25rem', letterSpacing: '0.05em',
                }}>{item.year}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: item.upcoming ? '#6E6880' : '#1A1128', marginBottom: '0.4rem' }}>
                  {item.title} {item.upcoming && <span style={{ fontSize: '0.7rem', background: 'rgba(182,147,248,0.12)', color: '#B693F8', padding: '2px 8px', borderRadius: '100px', marginLeft: '6px' }}>规划中</span>}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6E6880', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, rgba(182,147,248,0.06), rgba(94,207,171,0.04))',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
            fontWeight: 800, color: '#1A1128', marginBottom: '1rem',
          }}>核心团队</h2>
          <p style={{ color: '#6E6880', marginBottom: '3rem' }}>来自全球头部IP企业、AI科技公司及TOP跨境电商平台的复合型团队</p>
          <div style={{
            padding: '3rem',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(182,147,248,0.15)',
            borderRadius: '28px',
            color: '#6E6880',
            fontSize: '0.95rem',
          }}>团队介绍即将更新，敬请期待 ✨</div>
        </div>
      </section>
    </>
  )
}
