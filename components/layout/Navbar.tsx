'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '首页' },
  { href: '/ips', label: 'IP矩阵' },
  { href: '/capabilities', label: '平台能力' },
  { href: '/business', label: '商业合作' },
  { href: '/about', label: '关于我们' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,248,244,0.85)' : 'rgba(255,248,244,0.4)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(10px)',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(182,147,248,0.15)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{
          fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
          fontWeight: 800,
          fontSize: '1.5rem',
          background: 'linear-gradient(135deg, #B693F8, #FF85A1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>VALUCIA</span>
        <span style={{ fontSize: '0.75rem', color: '#6E6880', fontWeight: 500 }}>渼联</span>
      </Link>

      {/* Desktop nav */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: pathname === l.href ? '#B693F8' : '#1A1128',
            position: 'relative',
            paddingBottom: '2px',
            transition: 'color 0.2s',
          }}>
            {l.label}
            {pathname === l.href && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, #B693F8, #FF85A1)',
                borderRadius: '2px',
              }} />
            )}
          </Link>
        ))}
        <Link href="/contact" style={{
          textDecoration: 'none',
          background: '#FF85A1',
          color: 'white',
          padding: '10px 24px',
          borderRadius: '40px',
          fontSize: '0.875rem',
          fontWeight: 600,
          boxShadow: '0 4px 20px rgba(255,133,161,0.35)',
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = 'linear-gradient(135deg,#FF85A1,#B693F8)' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = '#FF85A1' }}
        >立即合作 →</Link>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
      }} className="show-mobile" aria-label="菜单">☰</button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '68px',
          left: 0,
          right: 0,
          background: 'rgba(255,248,244,0.97)',
          backdropFilter: 'blur(20px)',
          padding: '1.5rem 2rem',
          borderBottom: '1px solid rgba(182,147,248,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: 'none', color: '#1A1128', fontWeight: 500, fontSize: '1rem' }}
            >{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            textDecoration: 'none',
            background: '#FF85A1',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '40px',
            textAlign: 'center',
            fontWeight: 600,
          }}>立即合作 →</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
