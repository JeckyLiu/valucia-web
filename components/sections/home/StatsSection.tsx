'use client'
import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix, label, color, desc }: { target: number; suffix: string; label: string; color: string; desc: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1500
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setCount(Math.floor(ease * target))
          if (p < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return (
    <div ref={ref}>
      <div style={{ fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontSize:'clamp(3.5rem,7vw,5.5rem)', fontWeight:800, color, lineHeight:1, letterSpacing:'-0.03em' }}>
        {count}<span style={{ fontSize:'0.55em' }}>{suffix}</span>
      </div>
      <div style={{ fontWeight:700, fontSize:'1rem', color:'#1A1128', marginTop:'0.375rem' }}>{label}</div>
      <div style={{ fontSize:'0.8rem', color:'#6E6880', marginTop:'4px', lineHeight:1.5 }}>{desc}</div>
    </div>
  )
}

const features = [
  { icon:'🌍', title:'全球三大核心市场', desc:'亚太 · 欧美 · 中东同步运营', color:'#5ECFAB' },
  { icon:'⚡', title:'AI全链路赋能', desc:'从创作到销售，8大智能系统覆盖', color:'#B693F8' },
  { icon:'🛡️', title:'合规版权保障', desc:'全球实时监控，侵权零容忍', color:'#5BB8F5' },
  { icon:'📊', title:'透明数据分成', desc:'每一笔收益，实时可查', color:'#FF85A1' },
]

export default function StatsSection() {
  return (
    <section style={{ background:'linear-gradient(160deg, #F0EAFF 0%, #FFF0F5 50%, #E8F8F3 100%)', padding:'6rem 2rem', position:'relative', overflow:'hidden' }}>
      {/* Decorative blobs */}
      <div style={{ position:'absolute', width:'500px', height:'500px', top:'-150px', right:'-100px', background:'radial-gradient(circle, rgba(182,147,248,0.25) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:'400px', height:'400px', bottom:'-120px', left:'-80px', background:'radial-gradient(circle, rgba(94,207,171,0.2) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* Section label */}
        <div style={{ textAlign:'center', marginBottom:'4rem' }}>
          <div style={{ display:'inline-block', background:'rgba(182,147,248,0.15)', border:'1px solid rgba(182,147,248,0.3)', borderRadius:'100px', padding:'6px 18px', fontSize:'0.75rem', fontWeight:600, color:'#B693F8', letterSpacing:'0.1em', marginBottom:'1.5rem' }}>
            WHY VALUCIA
          </div>
          <h2 style={{ fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontSize:'clamp(1.75rem,4vw,2.75rem)', fontWeight:800, color:'#1A1128', lineHeight:1.15 }}>
            重新定义IP的<span style={{ background:'linear-gradient(135deg,#B693F8,#FF85A1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>商业边界</span>
          </h2>
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0', marginBottom:'4rem', background:'rgba(255,255,255,0.7)', borderRadius:'28px', border:'1px solid rgba(182,147,248,0.18)', overflow:'hidden' }}>
          {[
            { target:8, suffix:'+', label:'核心AI系统', desc:'覆盖IP商业化全链路', color:'#B693F8' },
            { target:3, suffix:'大', label:'全球核心市场', desc:'亚太 · 欧美 · 中东', color:'#5ECFAB' },
            { target:99, suffix:'+', label:'顶级IP授权', desc:'持续扩充中', color:'#FF85A1' },
          ].map((s, i) => (
            <div key={i} style={{ padding:'2.5rem 2rem', borderRight: i < 2 ? '1px solid rgba(182,147,248,0.15)' : 'none', textAlign:'center' }}>
              <Counter {...s} />
            </div>
          ))}
        </div>

        {/* Two-column: features + flow diagram */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', alignItems:'stretch' }}>
          {/* Left: feature cards 2x2 */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {features.map(f => (
              <div key={f.title} style={{ background:'rgba(255,255,255,0.6)', border:`1px solid ${f.color}25`, borderRadius:'20px', padding:'1.5rem', transition:'background 0.3s, box-shadow 0.3s', boxShadow:'0 2px 12px rgba(182,147,248,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${f.color}12`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${f.color}20` }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(182,147,248,0.06)' }}
              >
                <div style={{ fontSize:'1.75rem', marginBottom:'0.875rem' }}>{f.icon}</div>
                <div style={{ fontWeight:700, fontSize:'0.9rem', color:'#1A1128', marginBottom:'0.375rem', lineHeight:1.3 }}>{f.title}</div>
                <div style={{ fontSize:'0.78rem', color:'#6E6880', lineHeight:1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>

          {/* Right: tri-party flow */}
          <div style={{ background:'rgba(255,255,255,0.65)', border:'1px solid rgba(182,147,248,0.2)', borderRadius:'24px', padding:'2.5rem', display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'1.5rem', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)' }}>
            <div style={{ fontSize:'0.75rem', color:'#B693F8', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase' }}>平台生态模型</div>

            {/* IP holder */}
            <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
              <div style={{ width:'48px', height:'48px', borderRadius:'14px', background:'rgba(182,147,248,0.15)', border:'1px solid rgba(182,147,248,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.25rem', flexShrink:0 }}>🏢</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, color:'#1A1128', fontSize:'0.9rem' }}>IP权利方</div>
                <div style={{ fontSize:'0.75rem', color:'#6E6880', marginTop:'2px' }}>提供IP资源 · 共享全球收益</div>
              </div>
              <div style={{ width:'32px', height:'2px', background:'linear-gradient(90deg,#B693F8,#FF85A1)', borderRadius:'2px', flexShrink:0 }} />
            </div>

            {/* Center - VALUCIA */}
            <div style={{ background:'linear-gradient(135deg,rgba(182,147,248,0.18),rgba(255,133,161,0.12))', border:'1px solid rgba(182,147,248,0.25)', borderRadius:'20px', padding:'1.25rem 1.5rem', textAlign:'center', position:'relative' }}>
              <div style={{ position:'absolute', top:'-1px', left:'50%', transform:'translateX(-50%)', width:'60px', height:'2px', background:'linear-gradient(90deg,#B693F8,#FF85A1)', borderRadius:'2px' }} />
              <div style={{ fontWeight:800, fontSize:'1.1rem', background:'linear-gradient(135deg,#B693F8,#FF85A1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif" }}>VALUCIA 平台</div>
              <div style={{ fontSize:'0.78rem', color:'#6E6880', marginTop:'6px', lineHeight:1.5 }}>AI引擎 · 智能授权 · 版权保护 · 数据分润</div>
            </div>

            {/* Merchant */}
            <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
              <div style={{ width:'32px', height:'2px', background:'linear-gradient(90deg,#5ECFAB,#5BB8F5)', borderRadius:'2px', flexShrink:0 }} />
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, color:'#1A1128', fontSize:'0.9rem' }}>全球商家</div>
                <div style={{ fontSize:'0.75rem', color:'#6E6880', marginTop:'2px' }}>获取授权 · AI营销 · 合规销售</div>
              </div>
              <div style={{ width:'48px', height:'48px', borderRadius:'14px', background:'rgba(94,207,171,0.15)', border:'1px solid rgba(94,207,171,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.25rem', flexShrink:0 }}>🛍️</div>
            </div>

            {/* Bottom quote */}
            <div style={{ borderTop:'1px solid rgba(182,147,248,0.15)', paddingTop:'1.25rem' }}>
              <p style={{ fontSize:'0.8rem', color:'#6E6880', lineHeight:1.6, fontStyle:'italic' }}>
                &ldquo;我们不只是平台，我们是IP走向世界的数字伙伴&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){section>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
