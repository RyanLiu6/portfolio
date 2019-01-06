import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SEO from '../components/seo'

class Writing extends React.PureComponent {
  render () {
    return (
      <div>
        <SEO title="Writing" />
        <div className="writingContainer">
          Currently nothing here, do come back another time
          <FontAwesomeIcon icon={['far', 'hand-peace']} color='thistle' size='lg' />
        </div>
      </div>
    )
  }
}

export default Writing
