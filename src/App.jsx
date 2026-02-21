import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="container">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
