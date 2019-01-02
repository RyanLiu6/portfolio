import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SEO from '../components/seo'

class Gunpla extends React.PureComponent {
  render () {
    return (
      <div>
        <SEO title="Gunpla" />
        Currently nothing here, do come back another time
        <FontAwesomeIcon icon={['far', 'hand-peace']} color='thistle' size='lg' />
      </div>
    )
  }
}

export default Gunpla
