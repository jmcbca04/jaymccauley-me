import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <Hero />
      
      <section id="about" className="py-24">
        <About />
      </section>
      
      <section id="skills" className="py-24 bg-base-200">
        <Skills />
      </section>
      
      <section id="projects" className="py-24">
        <Projects />
      </section>
      
      <section id="contact" className="py-24 bg-base-200">
        <Contact />
      </section>
    </div>
  )
}
