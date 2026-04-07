'use client'
import Link from 'next/link'

const capabilities = [
  { num:'01', icon:'🤖', name:'AI IP创作引擎', desc:'大模型驱动，智能内容生成', color:'#B693F8', accent:'rgba(182,147,248,0.15)' },
  { num:'02', icon:'🎬', name:'全球内容工厂', desc:'多模态规模化内容生产', color:'#5ECFAB', accent:'rgba(94,207,171,0.15)' },
  { num:'03', icon:'🎨', name:'智能衍生品设计', desc:'AI辅助，从创意到样稿', color:'#FF9A7B', accent:'rgba(255,154,123,0.15)' },
  { num:'04', icon:'🏪', name:'智能授权商城', desc:'全球统一，在线签约', color:'#5BB8F5', accent:'rgba(91,184,245,0.15)' },
  { num:'05', icon:'🛡️', name:'AI版权风控', desc:'全网监控，自动识别侵权', color:'#FFD166', accent:'rgba(255,209,102,0.15)' },
  { num:'06', icon:'📊', name:'数据分润体系', desc:'三方透明，实时报表', color:'#FF85A1', accent:'rgba(255,133,161,0.15)' },
  { num:'07', icon:'🌐', name:'跨境营销中台', desc:'整合全球电商与社媒', color:'#B693F8', accent:'rgba(182,147,248,0.15)' },
  { num:'08', icon:'💎', name:'数字资产管理', desc:'全生命周期数字底座', color:'#5ECFAB', accent:'rgba(94,207,171,0.15)' },
]

function CapRow({ cap, isLast }: { cap: typeof capabilities[0], isLast: boolean }) {
  return (
    <div className="cap-row" style={{
      display:'flex', alignItems:'center', gap:'1.25rem',
      padding:'1.25rem 1.5rem',
      borderBottom: !isLast ? '1px solid rgba(182,147,248,0.1)' : 'none',
      background:'white',
      transition:'background 0.25s',
      cursor:'default',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = cap.accent }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white' }}
    >
      <div style={{ fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontSize:'1.75rem', fontWeight:800, color: cap.color, opacity:0.35, lineHeight:1, minWidth:'48px', flexShrink:0 }}>{cap.num}</div>
      <div style={{ width:'40px', height:'40px', borderRadius:'12px', background: cap.accent, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', flexShrink:0 }}>{cap.icon}</div>
      <div style={{ flex:1 }}>
        <div style={{ fontWeight:700, fontSize:'0.95rem', color:'#1A1128' }}>{cap.name}</div>
        <div style={{ fontSize:'0.78rem', color:'#6E6880', marginTop:'2px' }}>{cap.desc}</div>
      </div>
      <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:cap.color, flexShrink:0, opacity:0.6 }} />
    </div>
  )
}

export default function CapabilitiesPreview() {
  return (
    <section style={{ padding:'6rem 2rem', background:'#FFF8F4', overflow:'hidden' }}>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>

        {/* Header */}
        <div className="cap-header" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'3.5rem', flexWrap:'wrap', gap:'1.5rem' }}>
          <div>
            <div style={{ fontSize:'0.75rem', fontWeight:600, color:'#5ECFAB', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.75rem' }}>PLATFORM · CAPABILITIES</div>
            <h2 style={{ fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontSize:'clamp(2rem,4vw,3rem)', fontWeight:800, color:'#1A1128', lineHeight:1.1 }}>
              AI驱动，<span style={{ background:'linear-gradient(135deg,#5ECFAB,#5BB8F5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>八大引擎</span>
            </h2>
          </div>
          <div className="cap-deco-num" style={{ fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontSize:'clamp(5rem,12vw,9rem)', fontWeight:800, lineHeight:1, background:'linear-gradient(135deg,rgba(182,147,248,0.15),rgba(94,207,171,0.1))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', userSelect:'none', letterSpacing:'-0.04em' }}>
            08
          </div>
        </div>

        {/* Two columns: 01-04 left, 05-08 right */}
        <div className="cap-cols" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem' }}>
          <div style={{ display:'flex', flexDirection:'column', borderRadius:'20px', overflow:'hidden' }}>
            {capabilities.slice(0,4).map((cap, i) => (
              <CapRow key={cap.num} cap={cap} isLast={i === 3} />
            ))}
          </div>
          <div style={{ display:'flex', flexDirection:'column', borderRadius:'20px', overflow:'hidden' }}>
            {capabilities.slice(4).map((cap, i) => (
              <CapRow key={cap.num} cap={cap} isLast={i === 3} />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="cap-bottom" style={{ marginTop:'2.5rem', padding:'1.5rem 2rem', background:'linear-gradient(135deg,rgba(182,147,248,0.08),rgba(94,207,171,0.06))', borderRadius:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>
          <p style={{ color:'#6E6880', fontSize:'0.9rem' }}>
            八个系统深度协同，构建IP商业化的完整闭环
          </p>
          <Link href="/capabilities" style={{ textDecoration:'none', color:'#B693F8', fontWeight:600, fontSize:'0.875rem', border:'1.5px solid rgba(182,147,248,0.3)', padding:'10px 24px', borderRadius:'40px', whiteSpace:'nowrap' }}>
            查看完整能力介绍 →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cap-deco-num { display: none !important; }
          .cap-cols { grid-template-columns: 1fr !important; gap: 0 !important; }
          .cap-cols > div { border-radius: 0 !important; }
          .cap-cols > div:first-child { border-radius: 20px 20px 0 0 !important; }
          .cap-cols > div:last-child { border-radius: 0 0 20px 20px !important; }
          .cap-row { padding: 1rem 1.25rem !important; }
          .cap-bottom { flex-direction: column !important; text-align: center !important; }
          .cap-bottom a { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  )
}
