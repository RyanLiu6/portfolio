import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Projects extends React.PureComponent {
  render () {
    return (
      <div className="projectsContainer">
        <ul className="projectsUl">
          {this.props.projects.map(curr => (
            <li className="projectsLi" key={curr.title}>
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
    console.log(this.props.details)

    return (
      <div className="singleProject">
        <div className="projectContent">
          <h1>{this.props.details.title}</h1>
          <p>{this.props.details.description}</p>
          <ul className="skillsUl">
            {this.props.details.skills.map((curr, i) => (
              <li className="skillsLi" key={i}>
                <Skill name={curr} key={i} />
              </li>
            ))}
          </ul>
          <a rel='noopener' target='_blank' href={this.props.details.github}>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
      </div>
    )
  }
}

class Skill extends React.PureComponent {
  render () {
    return (
      <div className="singleSkill">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Projects
