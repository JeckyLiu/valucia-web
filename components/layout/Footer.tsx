'use client'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: '关于我们' },
  { href: '/ips', label: 'IP矩阵' },
  { href: '/capabilities', label: '平台能力' },
  { href: '/business', label: '商业合作' },
  { href: '/contact', label: '联系我们' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1A1128', color: 'white', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
              fontWeight: 800,
              fontSize: '1.75rem',
              background: 'linear-gradient(135deg, #B693F8, #FF85A1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem',
            }}>VALUCIA</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '1rem' }}>渼联 · 吉智国际控股集团</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '240px' }}>
              全球领先的AI原生IP商业化与数字化生态平台
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginBottom: '1.25rem', fontSize: '0.9rem' }}>快捷导航</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} style={{
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = '#B693F8' }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* IPs */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginBottom: '1.25rem', fontSize: '0.9rem' }}>旗下IP</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['贝尔·泰迪熊', 'TadaCoffee', 'NASA 官方授权', 'NASA Space Edition', '更多 Coming Soon'].map(ip => (
                <span key={ip} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>{ip}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginBottom: '1.25rem', fontSize: '0.9rem' }}>联系我们</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                <span>💬</span><span>微信：CP782349</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                <span>📧</span><span>362363483@qq.com</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            © 2025 VALUCIA · 吉智国际控股集团有限公司. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['隐私政策', '服务条款'].map(t => (
              <span key={t} style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', cursor: 'pointer' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
