import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import ContactLinks from '../components/ContactLinks'
import Footer from '../components/Footer'

import projects from '../content/projects'
import statements from '../content/about-me'

export default class Home extends React.PureComponent {
  render () {
    return (
      <div className="home">
        <Navbar />
        <Hero />
        <About statements={statements} />
        <h2 id="projects" className="section">
          Projects
        </h2>
        <Projects projects={projects} />
        <div className="background" />
        <h2 id="contact" className="section">
          Hit me up!
        </h2>
        <ContactLinks />
        <Footer />
      </div>
    )
  }
}
