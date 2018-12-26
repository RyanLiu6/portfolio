import React from 'react'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import Scrollchor from 'react-scrollchor'

class Intro extends React.PureComponent {
  render () {
    return (
      <div className="intro-container">
        <div className="intro">
          <Typist>
            Ryan Liu
          </Typist>
          I am a student at the University of British Columbia.<br />Check out my {' '}
          <Scrollchor to="#projects">side projects</Scrollchor> below.
        </div>
      </div>
    )
  }
}

export default Intro
