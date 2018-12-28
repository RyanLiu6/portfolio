import React from 'react'

class Footer extends React.PureComponent {
  render () {
    return (
      <div className ="footerContainer">
        Copyright © Ryan Liu {new Date().getFullYear()}
      </div>
    )
  }
}

export default Footer
