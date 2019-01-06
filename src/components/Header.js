import React from 'react'
import Scrollchor from 'react-scrollchor'

class Header extends React.PureComponent {
  render () {
    return (
      <div className="headerContainer">
        <nav className="header" ref="header">
          <Scrollchor to="#about">About</Scrollchor>
          <Scrollchor to="#projects">Projects</Scrollchor>
          <Scrollchor to="#contact">Contact</Scrollchor>
        </nav>
      </div>
    )
  }
}

export default Header
