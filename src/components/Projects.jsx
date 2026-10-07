const projects = [
  {
    title: 'Linux Systems Administration Lab',
    description:
      'Designed and maintained personal Linux environments to strengthen practical systems administration skills — command-line administration, user and file permission management, SSH configuration, and shell scripting.',
    tags: ['Linux', 'SSH', 'Shell Scripting', 'Package Management']
  },
  {
    title: 'Cybersecurity & Penetration Testing Lab',
    description:
      'Built isolated cybersecurity labs using VMware and VirtualBox to safely explore information security concepts — vulnerability assessment, network reconnaissance, packet analysis, and secure system configuration.',
    tags: ['Kali Linux', 'VMware', 'VirtualBox', 'Network Security']
  },
  {
    title: 'Remote Browser & Secure Access Project',
    description:
      'Independently researched and deployed secure browser streaming technologies — installing BrowserBox, deploying KasmVNC remote desktop environments, configuring SSL certificates, and implementing Cloudflare Tunnel for secure remote connectivity.',
    tags: ['BrowserBox', 'KasmVNC', "Let's Encrypt", 'Cloudflare Tunnel']
  },
  {
    title: 'AI & Local LLM Integration',
    description:
      'Explored practical applications of AI by deploying and configuring local large language models — integrating NVIDIA Gemma models, configuring Open WebUI, and experimenting with API integration and prompt engineering.',
    tags: ['Local LLMs', 'Open WebUI', 'API Integration', 'Prompt Engineering']
  },
  {
    title: 'This Portfolio Site',
    description:
      'Built this very site as a hands-on way of learning React — combining animated components, custom SVG transitions, and Tailwind CSS into a single, cohesive design.',
    tags: ['React', 'Tailwind CSS', 'JavaScript']
  }
]

function Projects() {
  return (
    <div id="projects" style={{ position: 'relative', width: '100%', padding: '96px 0 40px' }}>
      <h2
        className="text-center text-4xl font-extrabold text-white sm:text-6xl"
        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
      >
        Projects
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-center text-white/80">
        Hands-on technical work — from systems and security labs to this
        site itself.
      </p>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-12 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-white/15 bg-black/20 p-6 backdrop-blur transition hover:border-white/30 hover:bg-black/30"
          >
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects