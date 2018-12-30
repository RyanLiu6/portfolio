import React from 'react'
import Typist from 'react-typist'
import Scrollchor from 'react-scrollchor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'react-typist/dist/Typist.css'

const LOAD = 'Loading Critical Systems ...'

class Intro extends React.PureComponent {
  render () {
    return (
      <div className="introContainer">
        <div id="intro">
          <Typist className="introFace" avgTypingSpeed={80}>
            Loading Critical Systems .
            <Typist.Delay ms={500} />
            .
            <Typist.Delay ms={500} />
            .
            <Typist.Backspace count={LOAD.length} delay={500} />
            hello
          </Typist>
          <div className="blurb">
            My name is Ryan Liu, and I&#39;m currently a student at the University of British Columbia.
            <br />
            <br />
            I&#39;m passionate about Software and Firmware development and would like to learn more
            from internships and {' '}
            <Scrollchor to="#projects">personal projects. </Scrollchor>
            <br />
            <br />
            Insert spiel for books and gunpla.
          </div>
        </div>
      </div>
    )
  }
}

export default Intro

// <FontAwesomeIcon icon={['fa', 'hand-peace']} color='thistle' size='lg' />
