import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '平台能力 · VALUCIA渼联',
  description: 'VALUCIA八大AI核心系统，全链路赋能IP商业化',
}

const capabilities = [
  { icon: '🤖', name: 'AI IP创作引擎', nameEn: 'AI IP Creation Engine', desc: '利用大语言模型与多模态AI，智能生成IP内容、故事线、视觉资产，让创作效率提升10倍', color: '#B693F8' },
  { icon: '🎬', name: '全球多模态内容工厂', nameEn: 'Global Content Factory', desc: '覆盖图文、视频、3D等多种内容形态，支持多语言本土化生产，快速触达全球市场', color: '#5ECFAB' },
  { icon: '🎨', name: '智能衍生品设计工具', nameEn: 'Smart Derivative Design', desc: 'AI辅助设计IP周边产品，从概念到样稿一键生成，大幅压缩产品开发周期与成本', color: '#FF9A7B' },
  { icon: '🏪', name: '全球智能授权商城', nameEn: 'Smart Licensing Mall', desc: '全球统一授权交易平台，标准化授权合同、智能定价、在线签约，让IP授权像购物一样简单', color: '#5BB8F5' },
  { icon: '🛡️', name: 'AI版权风控系统', nameEn: 'AI Copyright Risk Control', desc: '全网实时监控IP使用情况，自动识别侵权行为，多语言法律处理，版权保护覆盖全球', color: '#FFD166' },
  { icon: '📊', name: '数据分润体系', nameEn: 'Data Revenue Sharing', desc: '全链路数据采集与分析，透明化收益归因，IP方、商家、平台三方实时查看数据报表', color: '#FF85A1' },
  { icon: '🌐', name: '跨境营销中台', nameEn: 'Cross-border Marketing Hub', desc: '整合全球主流电商与社媒平台，AI驱动内容投放与用户触达，协助IP产品实现跨境爆单', color: '#B693F8' },
  { icon: '💎', name: '数字资产管理系统', nameEn: 'Digital Asset Management', desc: 'IP数字资产统一管理、版本控制、授权追踪，构建IP全生命周期的数字底座', color: '#5ECFAB' },
]

const markets = [
  { icon: '🌏', name: '亚太地区', desc: '中国、日本、东南亚、澳洲' },
  { icon: '🌍', name: '欧美地区', desc: '美国、英国、欧盟主要国家' },
  { icon: '🌙', name: '中东地区', desc: '阿联酋、沙特、卡塔尔' },
]

export default function CapabilitiesPage() {
  return (
    <>
      <style>{`
        .cap-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .cap-card:hover { transform: translateY(-8px); }
        .market-card { transition: transform 0.3s ease; }
        .market-card:hover { transform: translateY(-4px); }
      `}</style>

      <section style={{
        paddingTop: '140px', paddingBottom: '80px', paddingLeft: '2rem', paddingRight: '2rem',
        background: 'linear-gradient(135deg, #5BB8F5 0%, #5ECFAB 100%)',
        textAlign: 'center', overflow: 'hidden', position: 'relative',
      }}>
        <div style={{ position: 'absolute', width: '400px', height: '400px', top: '-120px', right: '-80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '100px', padding: '6px 18px', fontSize: '0.75rem', fontWeight: 600, color: 'white', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>PLATFORM CAPABILITIES</div>
          <h1 style={{ fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: 'white', lineHeight: 1.05, marginBottom: '1.25rem' }}>AI驱动，八大引擎</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>全链路赋能IP商业化，从创作到销售，从内容到版权，AI无处不在</p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: '#FFF8F4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {capabilities.map((cap, i) => (
            <div key={cap.name} className="cap-card" style={{
              background: 'white', borderRadius: '28px', padding: '2rem',
              border: `1px solid ${cap.color}22`, borderTop: `3px solid ${cap.color}`,
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${cap.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{cap.icon}</div>
                <div style={{ background: `${cap.color}18`, color: cap.color, fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: '100px', alignSelf: 'flex-start' }}>0{i + 1}</div>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1A1128', marginBottom: '4px' }}>{cap.name}</h3>
              <p style={{ fontSize: '0.75rem', color: cap.color, fontWeight: 500, marginBottom: '0.875rem' }}>{cap.nameEn}</p>
              <p style={{ fontSize: '0.85rem', color: '#6E6880', lineHeight: 1.7 }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#1A1128', marginBottom: '1rem' }}>价值飞轮</h2>
          <p style={{ color: '#6E6880', marginBottom: '3rem' }}>五大环节相互驱动，形成持续增值的生态闭环</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
            {[
              { label: 'IP资源', icon: '🌟', color: '#B693F8' },
              { label: '→', icon: '', color: '' },
              { label: 'AI技术', icon: '⚡', color: '#5ECFAB' },
              { label: '→', icon: '', color: '' },
              { label: '商家爆单', icon: '🛍️', color: '#FF9A7B' },
              { label: '→', icon: '', color: '' },
              { label: '收益分成', icon: '📈', color: '#5BB8F5' },
              { label: '→', icon: '', color: '' },
              { label: 'IP增值', icon: '💎', color: '#FFD166' },
            ].map((item, i) => item.icon ? (
              <div key={i} style={{ textAlign: 'center', padding: '0 0.5rem' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: `${item.color}18`, border: `2px solid ${item.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 0.75rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1A1128' }}>{item.label}</div>
              </div>
            ) : (
              <div key={i} style={{ fontSize: '1.5rem', color: '#B693F8', padding: '0 0.25rem', paddingBottom: '1.5rem' }}>→</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, rgba(182,147,248,0.08), rgba(91,184,245,0.06))' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#1A1128', marginBottom: '1rem' }}>全球市场覆盖</h2>
          <p style={{ color: '#6E6880', marginBottom: '3rem' }}>亚太 · 欧美 · 中东，三大核心市场同步运营</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {markets.map(m => (
              <div key={m.name} className="market-card" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.9)', borderRadius: '24px', padding: '2.5rem 2rem', textAlign: 'center', boxShadow: '0 4px 24px rgba(182,147,248,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{m.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#1A1128', marginBottom: '0.5rem' }}>{m.name}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6E6880' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
