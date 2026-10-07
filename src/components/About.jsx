import Projects from './Projects'
import Contact from './Contact'

function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-gray-900">
      <div
        className="about-gradient"
        style={{ position: 'absolute', inset: 0, height: '100%', width: '100%' }}
      />
      <div
        className="about-grain"
        style={{ position: 'absolute', inset: 0, height: '100%', width: '100%' }}
      />

      {/* Dark wave cap at the top — same technique as Hero's wave, mirrored
          to sit here instead, so it can't overlap any content below */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '220px',
          zIndex: 12,
          pointerEvents: 'none',
          animation: 'waveFloatAbout 7s ease-in-out infinite'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 220"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <linearGradient id="glowLineAbout" x1="0%" y1="0%" x2="100%" y2="0%">
              <animate attributeName="x1" values="0%;100%;0%" dur="10s" repeatCount="indefinite" />
              <animate attributeName="x2" values="100%;200%;100%" dur="10s" repeatCount="indefinite" />
              <stop offset="0%" stopColor="#2af598" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#8b2af5" />
            </linearGradient>
            <filter id="glowBlurAbout" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
            </filter>
          </defs>

          {/* Solid dark fill above the curve, capping the top of About */}
          <path
            d="M0,160 C 420,40 620,0 960,20 C 1320,40 1520,140 1920,180 L1920,0 L0,0 Z"
            fill="#05040f"
          />

          {/* Soft blurred glow traced along the curve */}
          <path
            d="M0,160 C 420,40 620,0 960,20 C 1320,40 1520,140 1920,180"
            fill="none"
            stroke="url(#glowLineAbout)"
            strokeWidth="14"
            filter="url(#glowBlurAbout)"
            opacity="0.8"
          />

          {/* Crisp neon core line */}
          <path
            d="M0,160 C 420,40 620,0 960,20 C 1320,40 1520,140 1920,180"
            fill="none"
            stroke="url(#glowLineAbout)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '280px 24px 0',
          textAlign: 'center'
        }}
      >
        <h2
          className="text-4xl font-extrabold text-white sm:text-6xl"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        >
          About Me
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-white/90">
          I'm an IT and Systems professional with hands-on experience in
          networking, cybersecurity, and infrastructure and Web development and Management.
        </p>

        <div className="mt-10 w-full max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
            IT, Systems &amp; Security
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'Windows & Linux Administration',
              'Networking (TCP/IP, DNS, DHCP)',
              'Kali Linux & Vulnerability Assessment',
              'Virtualization (VMware/VirtualBox)',
              'Cloud Fundamentals (AWS/Azure)'
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="mt-8 mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
            Web Development
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['HTML', 'CSS', 'JavaScript', 'React ', 'Git'].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Projects />
        <Contact />
      </div>

      <style>{`
        .about-gradient {
          background: linear-gradient(-45deg, #0e010e, #5227ff, #2af598, #5227ff);
          background-size: 400% 400%;
          animation: gradientMoveAbout 12s ease infinite;
        }
        @keyframes gradientMoveAbout {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .about-grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E");
          opacity: 0.5;
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        @keyframes waveFloatAbout {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  )
}

export default About