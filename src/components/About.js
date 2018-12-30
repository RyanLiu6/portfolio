import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends React.PureComponent {
  render () {
    return (
      <div className="aboutContainer">
        <ul className="fa-ul">
          {this.props.about.map(curr => (
            <li key={curr.key}>
              <span className="fa-li" >
                <FontAwesomeIcon icon={[curr.iconStyle, curr.iconName]} color='thistle' size='lg' />
              </span>
              <span className="aboutItem"
                dangerouslySetInnerHTML={{ __html: curr.value }}>
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default About
