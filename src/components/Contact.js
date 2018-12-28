import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends React.PureComponent {
  render () {
    return (
      <div className="contactContainer">
        <a rel='noopener' target='_blank' href='https://github.com/ryanliu6'>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a rel='noopener' target='_blank' href='mailto:dio.ryanliu@gmail.com'>
          <FontAwesomeIcon icon={['fa', 'envelope']} />
        </a>
        <a rel='noopener' target='_blank' href='https://linkedin.com/in/ryanliu6'>
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </div>
    )
  }
}

export default Contact
