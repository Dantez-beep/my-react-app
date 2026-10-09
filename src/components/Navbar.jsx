import { useEffect, useState } from 'react'
import TextPressure from './ui/TextPressure'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

function Navbar() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 767px)').matches
      : false
  )
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handleChange = (e) => {
      setIsMobile(e.matches)
      if (!e.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '20px 24px 0' : '24px 48px 0',
        boxSizing: 'border-box'
      }}
    >
      {/* Logo / name — smaller on mobile so it can never push the menu off-screen */}
      <div
        style={{
          height: isMobile ? '32px' : '48px',
          width: isMobile ? '200px' : '320px',
          flexShrink: 0
        }}
      >
        <TextPressure
          key={isMobile ? 'mobile' : 'desktop'}
          text="Daniel Onyino Portfolio"
          flex={true}
          width={true}
          weight={true}
          italic={false}
          alpha={false}
          textColor="#ffffff"
          minFontSize={isMobile ? 20 : 64}
        />
      </div>

      {/* Desktop: links in a row */}
      {!isMobile && (
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            fontSize: '14px',
            fontWeight: 500,
            color: '#ffffff'
          }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white/70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile: hamburger button + dropdown */}
      {isMobile && (
        <>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            style={{
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.35)',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ width: '22px', height: '22px' }}
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          {menuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '16px',
                right: '16px',
                marginTop: '10px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(5,4,15,0.92)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '14px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: '14px 16px',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#ffffff',
                    borderRadius: '10px',
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </nav>
  )
}

export default Navbar