import TextPressure from './ui/TextPressure'

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 flex w-full items-center justify-between px-6 pt-6 sm:px-12">
      {/* Logo / name — left side */}
      <div style={{ height: '48px', width: '320px' }}>
        <TextPressure
          text="Daniel Onyino Portfolio"
          flex={true}
          width={true}
          weight={true}
          italic={false}
          alpha={false}
          textColor="#ffffff"
          minFontSize={64}
        />
      </div>

      {/* Nav links — right side */}
      <ul className="flex items-center gap-8 text-sm font-medium text-white">
        <li>
          <a href="#home" className="transition hover:text-white/70">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="transition hover:text-white/70">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="transition hover:text-white/70">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="transition hover:text-white/70">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar