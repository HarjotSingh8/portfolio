import React, { Component } from "react";
import { Link } from "react-router-dom";
class Projects extends Component {
  render() {
    return (
      <div className="row mx-0 px-3 py-1 text-dark">
        {this.props.projects.map((project, index) => (
          <div className="col-6 my-2">
            <div className="card p-0">
              <div className="card-body row mx-0 col-12 p-0">
                <div className="col-3 p-0">
                  <img src={project.img} alt="Card image cap" />
                </div>
                <div className="col-9 px-0">
                  <Link className="card-title col-12 btn btn-dark">
                    {project.name}
                  </Link>
                  <div className="text-dark col-12">Yolo</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
