import React from 'react'

import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Contact from '../components/Contact'

import '../scss/index.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

export default class Home extends React.PureComponent {
  render () {
    return (
      <div className="home-container">
        <Navbar />
        <Intro />
        <h2 id="projects" className="section">
          Projects
        </h2>
        <div className="background" />
        <h2 id="contact" className="section">
          Hit me up!
        </h2>
        <Contact />
      </div>
    )
  }
}
