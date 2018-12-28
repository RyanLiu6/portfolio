import React from 'react'

import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../fontawesome'

import '../scss/index.scss'

export default class Home extends React.PureComponent {
  render () {
    return (
      <div className="homeContainer">
        <Header />
        <Intro />
        <h2 id="aboutHeader" className="section">
          About Me
        </h2>
        <About />
        <h2 id="projectsHeader" className="section">
          Projects
        </h2>
        <Projects />
        <div className="background" />
        <h2 id="contactHeader" className="section">
          Hit me up!
        </h2>
        <Contact />
        <Footer />
      </div>
    )
  }
}
