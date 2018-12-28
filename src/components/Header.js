import React from 'react'
import Scrollchor from 'react-scrollchor'

class Header extends React.PureComponent {
  componentDidMount () {
    this.refs.header.addEventListener('click', e => {
      if (e.target.innerText === 'About') {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
      } else if (e.target.innerText === 'Projects') {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
      } else if (e.target.innerText === 'Contact') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  render () {
    return (
      <div className ="headeContainer">
        <nav className ="header" ref ="header">
          <Scrollchor to="#about">About</Scrollchor>
          <Scrollchor to="#projects">Projects</Scrollchor>
          <Scrollchor to="#contact">Contact</Scrollchor>
        </nav>
      </div>
    )
  }
}

export default Header
