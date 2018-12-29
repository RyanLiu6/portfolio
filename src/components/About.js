import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends React.PureComponent {
  render () {
    return (
      <div className="aboutContainer">
        <ul className="fa-ul">
          <li>
            <span className="fa-li" >
              <FontAwesomeIcon icon={['fa', 'location-arrow']} color='thistle' size='lg' />
            </span>
            Vancouver, BC, Canada.
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={['fa', 'university']} color='thistle' size='lg' />
            </span>
            B.ASc Computer Engineering and Minor in Mathematics at the University of British Columbia
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={['fa', 'tools']} color='thistle' size='lg' />
            </span>
            ['C/C++', 'Java', 'Python', 'JavaScript', 'MongoDB', 'Git']
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={['fa', 'heart']} color='thistle' size='lg' />
            </span>
            ['Reading', 'Writing', 'Fitness', 'Cooking', 'Gunpla']
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={['fa', 'file']} color='thistle' size='lg' />
            </span>
            <a rel="noopener" href="/Ryan_Liu_Resume.pdf" target="_blank">My Resume</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default About

/*
<ul className="fa-ul">
  <li>
    <span className="fa-li">
      <FontAwesomeIcon icon={['fa', 'location-arrow']} color='thistle' size='lg' />
    </span>
  </li>
  <li>
    <span className="fa-li">
      <FontAwesomeIcon className="aboutDes" icon={['fa', 'university']} color='thistle' size='lg' />
    </span>
  </li>
  <li>
    <span className="fa-li">
      <FontAwesomeIcon className="aboutDes" icon={['fa', 'tools']} color='thistle' size='lg' />
    </span>
    ['C/C++', 'Java', 'Python', 'JavaScript', 'MongoDB', 'Git']
  </li>
  <li>
    <span className="fa-li">
      <FontAwesomeIcon className="aboutDes" icon={['fa', 'heart']} color='thistle' size='lg' />
    </span>
    ['Reading', 'Writing', 'Fitness', 'Cooking', 'Gunpla']
  </li>
  <li>
    <span className="fa-li">
      <FontAwesomeIcon className="aboutDes" icon={['fa', 'file']} color='thistle' size='lg' />
    </span>
    <a rel="noopener" href="/Ryan_Liu_Resume.pdf" target="_blank">My Resume</a>
  </li>
</ul>
*/
