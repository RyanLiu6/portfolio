import React from 'react'
import Scrollchor from 'react-scrollchor'
import StickyHeader from 'react-sticky-header'
import 'react-sticky-header/styles.css'

class Header extends React.PureComponent {
  render () {
    return (
      <StickyHeader
        header={
          <div className ="headerContainer">
            <nav className ="header" ref ="header">
              <Scrollchor to="#about">About</Scrollchor>
              <Scrollchor to="#projects">Projects</Scrollchor>
              <Scrollchor to="#contact">Contact</Scrollchor>
            </nav>
          </div>
        }
      >
      </StickyHeader>
    )
  }
}

export default Header
