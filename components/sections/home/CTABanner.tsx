import Link from 'next/link'

export default function CTABanner() {
  return (
    <section style={{ padding:'6rem 2rem', background:'linear-gradient(135deg, #B693F8 0%, #FF85A1 50%, #FFD166 100%)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', width:'400px', height:'400px', top:'-100px', right:'-100px', background:'rgba(255,255,255,0.1)', borderRadius:'50%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:'250px', height:'250px', bottom:'-80px', left:'-60px', background:'rgba(255,255,255,0.08)', borderRadius:'50%', pointerEvents:'none' }} />

      <div style={{ maxWidth:'700px', margin:'0 auto', textAlign:'center', position:'relative', zIndex:1 }}>
        <h2 style={{ fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:800, color:'white', lineHeight:1.1, marginBottom:'1.25rem' }}>准备好了吗？</h2>
        <p style={{ fontSize:'clamp(0.95rem,2.5vw,1.125rem)', color:'rgba(255,255,255,0.85)', marginBottom:'0.75rem', fontFamily:"'AlibabaPuHuiTi','PingFang SC',sans-serif", fontWeight:700 }}>Let&apos;s build something iconic together.</p>
        <p style={{ fontSize:'clamp(0.875rem,2vw,1rem)', color:'rgba(255,255,255,0.7)', marginBottom:'2.5rem' }}>
          无论你是IP权利方、全球商家，还是正在寻找下一个爆款授权
        </p>
        <Link href="/contact" style={{ textDecoration:'none', background:'white', color:'#B693F8', padding:'16px 40px', borderRadius:'40px', fontWeight:700, fontSize:'1rem', boxShadow:'0 8px 32px rgba(0,0,0,0.15)', display:'inline-block' }}>立即联系我们 →</Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
