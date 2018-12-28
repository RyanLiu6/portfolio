import React from 'react'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import Scrollchor from 'react-scrollchor'

class Intro extends React.PureComponent {
  render () {
    return (
      <div className="introContainer">
        <div className="intro">
          <Typist className="introFace">
            <Typist.Delay ms={500} />
            <p>Hi, I&#39;m Ryan.</p>
            <Typist.Delay ms={1000} />
            <span id="greetings">Nice to meet you!</span>
          </Typist>
          <p>I am a student at the University of British Columbia.</p>
          My {' '}
          <Scrollchor to="#projects">side projects</Scrollchor> are listed below.
        </div>
      </div>
    )
  }
}

export default Intro
