import React from 'react'

import SEO from '../components/seo'

import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../fontawesome'
import '../scss/pages/index.scss'

import propProjects from '../props/propProjects'
import propAbout from '../props/propAbout'

class Home extends React.PureComponent {
  render () {
    return (
      <div id="homeContainer">
        <SEO title="Home" keywords={['gatsby', 'application', 'react', 'portfolio', 'ryanliu6']}/>
        <Header />
        <Intro />
        <h2 id="about" className="section">
          About Me
        </h2>
        <About about={propAbout}/>
        <h2 id="projects" className="section">
          Projects
        </h2>
        <Projects projects={propProjects}/>
        <div className="bottom">
          <h2 id="contact" className="section">
            Hit me up!
          </h2>
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home
