import Navbar from '../Navbar'
import { TextAnimate } from '@/components/ui/text-animate'

function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900">
      <div className="animated-gradient absolute inset-0 h-full w-full" />
      <div className="grain-overlay absolute inset-0 h-full w-full" />

      <Navbar />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <TextAnimate
          as="h1"
          by="character"
          animation="blurInUp"
          className="w-full text-center text-6xl font-extrabold tracking-tight text-white sm:text-8xl"
        >
          Welcome
        </TextAnimate>
      </div>

      {/* Dark wave cutout at the bottom — gives the colorful area a
          curved edge instead of a straight cut. Fill matches VideoIntro's
          dark background so it reads as one continuous dark section below. */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '220px',
          zIndex: 12,
          pointerEvents: 'none',
          animation: 'waveFloat 7s ease-in-out infinite'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 220"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <animate
                attributeName="x1"
                values="0%;100%;0%"
                dur="10s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values="100%;200%;100%"
                dur="10s"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#2af598" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#8b2af5" />
            </linearGradient>
            <filter id="glowBlur" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="8" result="blur" />
            </filter>
          </defs>

          {/* Solid dark fill below the curve, matching VideoIntro's tone */}
          <path
            d="M0,60 C 420,180 620,220 960,200 C 1320,180 1520,80 1920,40 L1920,220 L0,220 Z"
            fill="#05040f"
          />

          {/* Soft blurred glow, traced along the same curve */}
          <path
            d="M0,60 C 420,180 620,220 960,200 C 1320,180 1520,80 1920,40"
            fill="none"
            stroke="url(#glowLine)"
            strokeWidth="14"
            filter="url(#glowBlur)"
            opacity="0.8"
          />

          {/* Crisp thin line on top, for a sharp neon core */}
          <path
            d="M0,60 C 420,180 620,220 960,200 C 1320,180 1520,80 1920,40"
            fill="none"
            stroke="url(#glowLine)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <style>{`
        .animated-gradient {
          background: linear-gradient(-45deg, #0e010e, #5227ff, #2af598, #5227ff);
          background-size: 400% 400%;
          animation: gradientMove 12s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E");
          opacity: 0.5;
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        @keyframes waveFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  )
}

export default Hero