'use client'
import { useState } from 'react'
import type { Metadata } from 'next'

// Remove metadata from client component - move to separate file
// export const metadata: Metadata = { ... }

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', contact: '', type: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px', paddingLeft: '2rem', paddingRight: '2rem',
        background: '#FFF8F4',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FF85A1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              CONTACT US
            </div>
            <h1 style={{
              fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, color: '#1A1128', lineHeight: 1.1, marginBottom: '1rem',
            }}>准备好了吗？</h1>
            <p style={{
              fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif",
              fontSize: '1.1rem', color: '#B693F8', fontWeight: 700, marginBottom: '1rem',
            }}>Let&apos;s build something iconic together.</p>
            <p style={{ color: '#6E6880', lineHeight: 1.75, marginBottom: '3rem', fontSize: '0.95rem' }}>
              无论你是希望IP走向全球的权利方，还是寻求优质授权的商家，亦或是有着更大合作构想的伙伴，我们都期待与你对话。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(182,147,248,0.1)',
                border: '1px solid rgba(182,147,248,0.1)',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(182,147,248,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', flexShrink: 0,
                }}>💬</div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#6E6880', marginBottom: '2px' }}>微信</div>
                  <div style={{ fontWeight: 600, color: '#1A1128', fontSize: '0.95rem' }}>CP782349</div>
                </div>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(182,147,248,0.1)',
                border: '1px solid rgba(182,147,248,0.1)',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(255,133,161,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', flexShrink: 0,
                }}>📧</div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#6E6880', marginBottom: '2px' }}>邮箱</div>
                  <div style={{ fontWeight: 600, color: '#1A1128', fontSize: '0.95rem' }}>362363483@qq.com</div>
                </div>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(182,147,248,0.1)',
                border: '1px solid rgba(182,147,248,0.1)',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(94,207,171,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', flexShrink: 0,
                }}>🌍</div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#6E6880', marginBottom: '2px' }}>服务市场</div>
                  <div style={{ fontWeight: 600, color: '#1A1128', fontSize: '0.95rem' }}>亚太 · 欧美 · 中东</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'white',
            borderRadius: '32px',
            padding: '2.5rem',
            boxShadow: '0 8px 48px rgba(182,147,248,0.12)',
            border: '1.5px solid rgba(182,147,248,0.1)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🎉</div>
                <h3 style={{ fontFamily: "'AlibabaPuHuiTi', 'PingFang SC', sans-serif", fontWeight: 800, color: '#1A1128', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  发送成功！
                </h3>
                <p style={{ color: '#6E6880', lineHeight: 1.7 }}>
                  我们已收到你的消息，将在1-2个工作日内与你联系。期待与你建立合作！
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1A1128', marginBottom: '0.5rem' }}>发送消息</h3>

                {[
                  { label: '你的称呼', key: 'name', placeholder: '请输入你的姓名', type: 'text' },
                  { label: '联系方式', key: 'contact', placeholder: '手机号或邮箱地址', type: 'text' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A1128', marginBottom: '6px' }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                      required
                      style={{
                        width: '100%', padding: '12px 16px',
                        border: '1.5px solid rgba(182,147,248,0.25)',
                        borderRadius: '16px', fontSize: '0.9rem',
                        color: '#1A1128', background: '#FFF8F4',
                        outline: 'none', boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = '#B693F8' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(182,147,248,0.25)' }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A1128', marginBottom: '6px' }}>我是</label>
                  <select
                    value={form.type}
                    onChange={e => setForm(prev => ({ ...prev, type: e.target.value }))}
                    required
                    style={{
                      width: '100%', padding: '12px 16px',
                      border: '1.5px solid rgba(182,147,248,0.25)',
                      borderRadius: '16px', fontSize: '0.9rem',
                      color: '#1A1128', background: '#FFF8F4',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  >
                    <option value="">请选择你的身份</option>
                    <option value="ip-holder">IP权利方</option>
                    <option value="merchant">全球商家 / 商户</option>
                    <option value="media">媒体 / 记者</option>
                    <option value="investor">投资方</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A1128', marginBottom: '6px' }}>一句话描述你的需求</label>
                  <textarea
                    placeholder="简单介绍你的合作想法..."
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={4}
                    style={{
                      width: '100%', padding: '12px 16px',
                      border: '1.5px solid rgba(182,147,248,0.25)',
                      borderRadius: '16px', fontSize: '0.9rem',
                      color: '#1A1128', background: '#FFF8F4',
                      outline: 'none', boxSizing: 'border-box',
                      resize: 'none', lineHeight: 1.6,
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#B693F8' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(182,147,248,0.25)' }}
                  />
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '15px',
                  background: 'linear-gradient(135deg, #B693F8, #FF85A1)',
                  color: 'white', border: 'none', borderRadius: '40px',
                  fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                  boxShadow: '0 4px 24px rgba(182,147,248,0.4)',
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >发送消息 →</button>
              </form>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { section > div { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>
    </>
  )
}
