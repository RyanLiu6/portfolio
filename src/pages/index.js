import React from 'react'

import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../fontawesome'
import '../scss/index.scss'

import myProjects from '../props/myProjects'

export default class Home extends React.PureComponent {
  render () {
    return (
      <div id="homeContainer">
        <Header />
        <Intro />
        <h2 id="about" className="section">
          About Me
        </h2>
        <About />
        <h2 id="projects" className="section">
          Projects
        </h2>
        <Projects projects={myProjects}/>
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
