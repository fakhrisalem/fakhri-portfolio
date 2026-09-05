import { useState } from 'react'
import { Navigation } from '@/components/common/Navigation'
import { FloatingParticles } from '@/components/common/FloatingParticles'
import { BackToTop } from '@/components/common/BackToTop'
import { Footer } from '@/components/common/Footer'
import { WelcomeScreen } from '@/components/common/WelcomeScreen'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Leadership } from '@/components/sections/Leadership'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'
import { Dreams } from '@/components/sections/Dreams'

function App() {
  const [entered, setEntered] = useState(false)

  return (
    <main className="relative w-full bg-black overflow-hidden">
      {/* Welcome / Splash Screen */}
      <WelcomeScreen show={!entered} onEnter={() => setEntered(true)} />

      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Certifications />
        <Contact />
        <Dreams />
        <Footer />
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  )
}

export default App

