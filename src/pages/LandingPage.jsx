import { useState } from 'react'

function LandingPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="text-sm font-semibold tracking-tight text-gray-900">
            Guillermo de la Cruz
          </a>

          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm text-gray-600">
              <li>
                <a href="#work" className="transition hover:text-gray-900">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700 sm:block"
            >
              Book a call
            </a>

            <button
              type="button"
              aria-expanded={navOpen}
              aria-controls="mobile-nav"
              onClick={() => setNavOpen((open) => !open)}
              className="cursor-pointer rounded-md p-2 text-gray-600 transition focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 hover:bg-gray-100 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {navOpen && (
          <nav
            id="mobile-nav"
            aria-label="Global Mobile"
            className="border-t border-gray-100 bg-white md:hidden"
          >
            <ul className="space-y-1 px-4 py-4 text-sm">
              <li>
                <a
                  href="#work"
                  className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-4 pt-16 pb-20 sm:px-6 sm:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 py-1 pr-3 pl-2 text-xs font-medium text-gray-600">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for one new project in Q3
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            I help funded product teams ship decisions they can still defend a year later.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-pretty text-gray-600">
            Contract product designer working end-to-end — research, flows, UI, and the handoff
            that keeps engineering from guessing. Based in Lisbon, working with teams everywhere.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-700"
            >
              Start a project
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-gray-900"
            >
              See the work
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </section>

        <section id="work" className="scroll-mt-16 border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-lg">
              <p className="text-sm font-medium text-violet-600">Selected work</p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
                Three projects, three different kinds of hard problem.
              </h2>
            </div>

            <div className="mt-12 space-y-16">
              <article className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1160"
                  className="aspect-4/3 w-full rounded-lg object-cover"
                />

                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                    Fieldnote · Product design · 2025
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    Redesigning the editor that field engineers actually trust
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Cut average report time from 11 minutes to 4 by rebuilding the note editor
                    around offline-first sync, not adding features on top of it.
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition hover:text-violet-700"
                  >
                    View case study
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12">
                <div className="sm:order-last">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1160"
                    className="aspect-4/3 w-full rounded-lg object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                    Orbitly · 0→1 · 2024
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    Taking a team dashboard from spreadsheet to shippable
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Designed the first version of Orbitly's workspace, from onboarding through
                    billing, and stayed on through their seed round launch.
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition hover:text-violet-700"
                  >
                    View case study
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=1160"
                  className="aspect-4/3 w-full rounded-lg object-cover"
                />

                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                    Northwind Studio · Design system · 2023
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    A component library three teams could actually share
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Unified four inconsistent product surfaces into one Figma and code library,
                    reducing new-screen build time by roughly a third.
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition hover:text-violet-700"
                  >
                    View case study
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-12 sm:grid-cols-5 sm:items-start">
            <div className="sm:col-span-2">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
                className="aspect-square w-full rounded-lg object-cover"
              />
            </div>

            <div className="sm:col-span-3">
              <p className="text-sm font-medium text-violet-600">About</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
                Seven years in, still happiest in the messy middle of a project.
              </h2>

              <p className="mt-4 text-gray-600">
                I spent four years as an in-house designer at two Series A startups before going
                independent in 2021. Now I work with two or three teams a year, usually stepping
                in right after a fundraise or right before one, when product decisions carry the
                most weight.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
                <div>
                  <dt className="text-xs text-gray-500">Years independent</dt>
                  <dd className="mt-1 text-2xl font-semibold text-gray-900">4</dd>
                </div>

                <div>
                  <dt className="text-xs text-gray-500">Products shipped</dt>
                  <dd className="mt-1 text-2xl font-semibold text-gray-900">23</dd>
                </div>

                <div>
                  <dt className="text-xs text-gray-500">Repeat clients</dt>
                  <dd className="mt-1 text-2xl font-semibold text-gray-900">9</dd>
                </div>
              </dl>

              <ul className="mt-8 flex flex-wrap gap-2">
                <li className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Product strategy
                </li>
                <li className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Design systems
                </li>
                <li className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  User research
                </li>
                <li className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Figma &amp; code
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
            <figure className="text-center">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mx-auto size-8 text-violet-600"
              >
                <path
                  fillRule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <blockquote className="mt-4">
                <p className="text-xl font-medium text-pretty text-gray-900 sm:text-2xl">
                  Guillermo asked harder questions in the first week than our last three hires
                  combined. The dashboard we shipped is still the one we point new hires to as
                  &ldquo;how we build here.&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-6 flex items-center justify-center gap-3">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200"
                  className="size-10 rounded-full object-cover"
                />

                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">Priya Natarajan</p>
                  <p className="text-sm text-gray-500">Ops Lead, Orbitly</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-2xl bg-gray-900 px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Have a project taking shape?
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-400">
              I take on one new engagement at a time, usually starting four to six weeks out.
              Tell me what you're building and I'll reply within two days.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-100"
              >
                hello@guillermodelacruz.com
              </a>

              <a
                href="#"
                className="rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Book a 20-minute call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
          <p className="text-sm text-gray-500">&copy; 2026 Guillermo de la Cruz. Lisbon, Portugal.</p>

          <ul className="flex items-center gap-5">
            <li>
              <a href="#" className="text-sm text-gray-500 transition hover:text-gray-900">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 transition hover:text-gray-900">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 transition hover:text-gray-900">
                Read.cv
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default LandingPage