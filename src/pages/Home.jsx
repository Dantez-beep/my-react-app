import Hero from '../components/ui/Hero'
import VideoIntro from '../components/VideoIntro'
import About from '../components/About'

function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Hero />
      <VideoIntro />
      <About />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default Home