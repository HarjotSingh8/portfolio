import React, { Component } from "react";
import memoji from "./images/memoji.png";
class GenericProject extends Component {
  state = { project: null };
  projectName = () => {
    if (this.state.project != null) {
      return this.state.project.name;
    } else {
      return "Nothing";
    }
  };
  componentDidMount() {
    this.setState({ project: this.props.project });
  }
  render() {
    return <div className="row mx-0">{this.projectName}</div>;
  }
}

export default GenericProject;
