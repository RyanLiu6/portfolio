import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SEO from '../components/seo'

class Writing extends React.PureComponent {
  render () {
    return (
      <div>
        <SEO title="Writing" />
        Currently nothing here, do come back another time
        <FontAwesomeIcon icon={['fa', 'hand-peace']} color='thistle' size='lg' />
      </div>
    )
  }
}

export default Writing
