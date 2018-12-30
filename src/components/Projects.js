import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Projects extends React.PureComponent {
  render () {
    return (
      <div className="projectsContainer">
        <ul>
          {this.props.projects.map(curr => (
            <li key={curr.title}>
              <Project details={curr} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class Project extends React.PureComponent {
  render () {
    return (
      <div className="singleProject">
        <div className="projectText">
          <h1 className="projectTitle">
            {this.props.details.title}
          </h1>
          <p className="projectDes">
            {this.props.details.description}
          </p>
          <div className="skills">
            {this.props.details.skills.map((curr, i) => (
              <Skill name={curr} key={i} />
            ))}
          </div>
          <a className="projectLink" rel="noopener" target="_blank" href={this.props.details.github}>
            <FontAwesomeIcon icon={['fab', 'github']} /> View on Github
          </a>
        </div>
        <div className="projectImg">
          <img src={this.props.details.image} />
        </div>
      </div>
    )
  }
}

class Skill extends React.PureComponent {
  render () {
    return (
      <p className="skillName">
        {this.props.name}
      </p>
    )
  }
}

export default Projects

//
