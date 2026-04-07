import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '商业合作 · VALUCIA渼联',
  description: '与VALUCIA渼联合作，IP权利方与全球商家的最佳桥梁',
}

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px', paddingLeft: '2rem', paddingRight: '2rem',
        background: '#FFF8F4', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(182,147,248,0.12)',
            border: '1px solid rgba(182,147,248,0.3)', borderRadius: '100px',
            padding: '6px 18px', fontSize: '0.75rem', fontWeight: 600,
            color: '#B693F8', letterSpacing: '0.1em', marginBottom: '1.5rem',
          }}>BUSINESS COOPERATION</div>
          <h1 style={{
            fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800, color: '#1A1128', lineHeight: 1.1, marginBottom: '1.25rem',
          }}>合作，从这里开始</h1>
          <p style={{ fontSize: '1.1rem', color: '#6E6880', lineHeight: 1.75 }}>
            无论你是拥有顶级IP的权利方，还是寻求授权资源的全球商家，VALUCIA都是你最值得信赖的合作伙伴
          </p>
        </div>
      </section>

      {/* Two-path split */}
      <section style={{ padding: '0 2rem 5rem', background: '#FFF8F4' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}>
          {/* IP Rights Holder */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(182,147,248,0.15), rgba(182,147,248,0.05))',
            border: '1.5px solid rgba(182,147,248,0.25)',
            borderRadius: '32px',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', width: '200px', height: '200px',
              top: '-60px', right: '-60px',
              background: 'rgba(182,147,248,0.1)', borderRadius: '50%',
              pointerEvents: 'none',
            }} />
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏢</div>
            <h2 style={{
              fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
              fontSize: '1.75rem', fontWeight: 800, color: '#1A1128', marginBottom: '0.5rem',
            }}>我是 IP 权利方</h2>
            <p style={{ color: '#B693F8', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem' }}>
              International IP Rights Holder
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { icon: '🌍', text: 'IP全球化商业运营，打入亚太/欧美/中东市场' },
                { icon: '⚡', text: 'AI化运营体系，效率提升10倍以上' },
                { icon: '📊', text: '透明数据分成，实时掌握每一笔收益' },
                { icon: '🛡️', text: '全球版权保护，AI实时监控侵权行为' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.9rem', color: '#1A1128', lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#6E6880' }}>合作流程</h4>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {['提交IP资质', '→', '平台评估', '→', '签署协议', '→', '上线运营'].map((s, i) => (
                  <span key={i} style={{
                    fontSize: '0.8rem',
                    color: s === '→' ? '#B693F8' : '#1A1128',
                    fontWeight: s === '→' ? 400 : 500,
                    background: s !== '→' ? 'rgba(182,147,248,0.1)' : 'none',
                    padding: s !== '→' ? '4px 12px' : '0',
                    borderRadius: '100px',
                  }}>{s}</span>
                ))}
              </div>
            </div>
            <Link href="/contact?type=ip-holder" style={{
              display: 'inline-block', marginTop: '2rem',
              textDecoration: 'none', background: '#B693F8', color: 'white',
              padding: '14px 32px', borderRadius: '40px',
              fontWeight: 700, fontSize: '0.9rem',
              boxShadow: '0 4px 20px rgba(182,147,248,0.4)',
            }}>了解IP入驻方案 →</Link>
          </div>

          {/* Merchant */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(94,207,171,0.15), rgba(94,207,171,0.05))',
            border: '1.5px solid rgba(94,207,171,0.25)',
            borderRadius: '32px',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', width: '200px', height: '200px',
              top: '-60px', right: '-60px',
              background: 'rgba(94,207,171,0.1)', borderRadius: '50%',
              pointerEvents: 'none',
            }} />
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛍️</div>
            <h2 style={{
              fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
              fontSize: '1.75rem', fontWeight: 800, color: '#1A1128', marginBottom: '0.5rem',
            }}>我是 全球商家</h2>
            <p style={{ color: '#5ECFAB', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem' }}>
              Global Merchant / Retailer
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { icon: '🎯', text: '精选顶级IP授权资源，覆盖全品类产品' },
                { icon: '💰', text: '合理授权价格，降低采购成本与合规风险' },
                { icon: '🤖', text: 'AI营销支持，帮你快速打爆市场' },
                { icon: '✅', text: '全程合规保障，正版授权无后顾之忧' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.9rem', color: '#1A1128', lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#6E6880' }}>合作流程</h4>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {['浏览IP资源', '→', '申请授权', '→', '签署合同', '→', '上架销售'].map((s, i) => (
                  <span key={i} style={{
                    fontSize: '0.8rem',
                    color: s === '→' ? '#5ECFAB' : '#1A1128',
                    fontWeight: s === '→' ? 400 : 500,
                    background: s !== '→' ? 'rgba(94,207,171,0.1)' : 'none',
                    padding: s !== '→' ? '4px 12px' : '0',
                    borderRadius: '100px',
                  }}>{s}</span>
                ))}
              </div>
            </div>
            <Link href="/contact?type=merchant" style={{
              display: 'inline-block', marginTop: '2rem',
              textDecoration: 'none', background: '#5ECFAB', color: 'white',
              padding: '14px 32px', borderRadius: '40px',
              fontWeight: 700, fontSize: '0.9rem',
              boxShadow: '0 4px 20px rgba(94,207,171,0.4)',
            }}>了解商户合作方案 →</Link>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { section:nth-child(2) > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Why VALUCIA */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800, color: '#1A1128', marginBottom: '3rem',
          }}>为什么选择 VALUCIA？</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '🏆', title: '顶级IP资源', desc: '持有NASA、贝尔·泰迪熊等全球官方正版授权', color: '#FFD166' },
              { icon: '🤖', title: 'AI原生平台', desc: '八大AI系统，全流程智能化运营', color: '#B693F8' },
              { icon: '🌍', title: '全球市场', desc: '亚太、欧美、中东三大市场同步触达', color: '#5ECFAB' },
              { icon: '🛡️', title: '合规保障', desc: '全球版权合规体系，一切都有保障', color: '#5BB8F5' },
            ].map(item => (
              <div key={item.title} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '20px',
                  background: `${item.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', margin: '0 auto 1.25rem',
                }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#1A1128', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6E6880', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
