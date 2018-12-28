import React from 'react'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const LOAD = 'Loading Systems ...'

class Intro extends React.PureComponent {
  render () {
    return (
      <div className="introContainer">
        <div id="intro">
          <Typist className="introFace">
            <Typist.Delay ms={500} />
            Loading Systems
            <Typist.Delay ms={1000} />
             ...
            <Typist.Backspace count={LOAD.length} delay={1000} />
            hello ryanliu6
          </Typist>
          <div className="blurb">
            My name is Ryan Liu, and I&#39;m currently a student at the University of British Columbia.
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
