import React from 'react'
import { Link } from 'gatsby'
import Typist from 'react-typist'
import Scrollchor from 'react-scrollchor'

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
            <Typist.Backspace count={LOAD.length} delay={1000} />
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
            On the side, I&#39;m an
            <Link to="/writing/"> amateur author </Link>
            and a
            <Link to="/gunpla/"> Gunpla </Link>
            enthusiast.
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
