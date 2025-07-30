import React, { Component } from "react";

class GenericProject extends Component {
  state = { project: null };
  
  componentDidMount() {
    this.setState({ project: this.props.project });
  }
  
  render() {
    const { project } = this.state;
    
    if (!project) {
      return <div className="container py-5">Loading...</div>;
    }
    
    return (
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="text-center mb-5">
                <h1 className="display-4 font-weight-bold mb-3">{project.name}</h1>
                <p className="lead">{project.description}</p>
              </div>
              
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <h5>Project Status</h5>
                      <span className={`badge ${project.status === 'Completed' ? 'badge-success' : 'badge-warning'} p-2`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="col-md-6">
                      <h5>Timeline</h5>
                      <p>{project.startDate} - {project.endDate}</p>
                    </div>
                  </div>
                  
                  {project.technologies && (
                    <div className="mb-4">
                      <h5>Technologies Used</h5>
                      <div className="d-flex flex-wrap">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="badge badge-secondary mr-2 mb-2 p-2">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.features && (
                    <div className="mb-4">
                      <h5>Key Features</h5>
                      <ul>
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <div className="btn-group" role="group">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark"
                        >
                          <i className="fab fa-github mr-2"></i>
                          View Code
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenericProject;
