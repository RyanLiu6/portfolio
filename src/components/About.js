import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends React.PureComponent {
  render () {
    return (
      <div className="aboutContainer">
        {/*<div className="close">
          <FontAwesomeIcon icon={['fa', 'times']} color='red' size='lg' />
        </div>
        */}
        <ul className="fa-ul">
          <li>
            <span className="fa-li" >
              <FontAwesomeIcon icon={['fa', 'location-arrow']} color='thistle' size='lg' />
            </span>
            <span className="aboutItem">
              Vancouver, BC, Canada.
            </span>
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={['fa', 'university']} color='thistle' size='lg' />
            </span>
            <span className="aboutItem">
              B.ASc Computer Engineering and Minor in Mathematics at The University of British Columbia
            </span>
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={['fa', 'tools']} color='thistle' size='lg' />
            </span>
            <span className="aboutItem">
              C/C++, Java, Python, JavaScript, MongoDB, Git
            </span>
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={['fa', 'heart']} color='thistle' size='lg' />
            </span>
            <span className="aboutItem">
              Reading, Writing, Fitness, Cooking, Gunpla
            </span>
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={['fa', 'file']} color='thistle' size='lg' />
            </span>
            <span className="aboutItem">
              <a rel="noopener" href="/Ryan_Liu_Resume.pdf" target="_blank">My Resume</a>
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default About
