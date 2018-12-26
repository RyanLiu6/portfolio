import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends React.PureComponent {
  render () {
    return (
      <div className="contact">
        <span>
          <a
            rel='noopener'
            target='_blank'
            href='https://github.com/ryanliu6'
          >
            Github
          </a>
        </span>
        <span>
          <a
            rel='noopener'
            target='_blank'
            href='mailto:dio.ryanliu@gmail.com'
          >
            Email
          </a>
        </span>
        <span>
          <a
            rel='noopener'
            target='_blank'
            href='https://linkedin.com/in/ryanliu6'
          >
            <FontAwesomeIcon icon="github-sq" />
          </a>
        </span>
      </div>
    )
  }
}

export default Contact
