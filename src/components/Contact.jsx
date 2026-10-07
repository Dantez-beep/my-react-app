function Contact() {
  return (
    <div
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        padding: '96px 24px 120px',
        textAlign: 'center'
      }}
    >
      <h2
        className="text-4xl font-extrabold text-white sm:text-6xl"
        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
      >
        Let's Build Something
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
        Have a project in mind, or just want to connect? Reach me directly
        through either of these.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:danielonyino46@gmail.com"
          className="flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-.414.336-.75.75-.75h18c.414 0 .75.336.75.75v10.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V6.75Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
          </svg>
          danielonyino46@gmail.com
        </a>

        <a
          href="https://wa.me/254791744892"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.17L2 22l5.07-1.53a9.85 9.85 0 0 0 4.97 1.33h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.05h-.01a8.16 8.16 0 0 1-4.17-1.14l-.3-.18-3.1.93.94-3.02-.2-.31a8.07 8.07 0 0 1-1.26-4.42c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.67 8.13-8.23 8.13Zm4.47-6.1c-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.17.25-.63.8-.77.96-.14.17-.28.19-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.36-1.7-.14-.24-.02-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.17 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.1.16 1.51.09.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.17-.46-.28Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default Contact