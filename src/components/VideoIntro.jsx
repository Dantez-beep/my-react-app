function VideoIntro() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover'
        }}
      >
        <source src="/videos/coding-bg.mp4" type="video/mp4" />
      </video>

      {/* Faded echo of Hero's gradient, tinting the whole section */}
      <div
        className="gradient-tint"
        style={{ position: 'absolute', inset: 0, height: '100%', width: '100%' }}
      />

      {/* Dark overlay for contrast over busy video footage */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
      />

      {/* Guarantees the very top pixels match Hero's wave fill exactly,
          regardless of what the video happens to show at that moment */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '140px',
          zIndex: 6,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, #05040f 0%, rgba(5,4,15,0) 100%)'
        }}
      />

      {/* Your photo — prominent, centered, glowing gradient ring */}
      <div
        className="relative z-10"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          padding: '0 24px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            width: '352px',
            height: '352px',
            borderRadius: '9999px',
            padding: '6px',
            background: 'linear-gradient(135deg, #2af598 0%, #2563eb 55%, #8b2af5 100%)',
            boxShadow:
              '0 0 50px rgba(37,99,235,0.55), 0 0 90px rgba(139,42,245,0.35), 0 0 30px rgba(42,245,152,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src="/images/daniel-photo.jpg"
            alt="Daniel Onyino"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '9999px',
              objectFit: 'cover',
              objectPosition: 'center 20%'
            }}
          />
        </div>

        <p
          className="max-w-2xl text-2xl italic font-extrabold text-white sm:text-4xl"
          style={{ marginTop: '16px', textShadow: '0 4px 20px rgba(0,0,0,0.7)' }}
        >
          "Code the vision. Build the impossible."
        </p>
      </div>

      <style>{`
        .gradient-tint {
          background: linear-gradient(-45deg, #0e010e, #5227ff, #2af598, #5227ff);
          background-size: 400% 400%;
          animation: gradientMoveTint 12s ease infinite;
          opacity: 0.22;
          mix-blend-mode: screen;
        }
        @keyframes gradientMoveTint {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}

export default VideoIntro