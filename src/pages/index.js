import React from "react";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="home">
        <h2 id="projects" className="section">
          Projects
        </h2>
        <div className="background" />
        <h2 id="contact" className="section">
          Hit me up!
        </h2>
      </div>
    );
  }
}
