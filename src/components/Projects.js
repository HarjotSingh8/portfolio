import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h2 className="text-center mb-5 font-weight-bold">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <img src={project.img} className="card-img-top" alt={project.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-weight-bold">{project.name}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  
                  <div className="mb-3">
                    <h6 className="font-weight-bold">Technologies:</h6>
                    <div className="d-flex flex-wrap">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="badge badge-secondary mr-1 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.features && project.features.length > 0 && (
                    <div className="mb-3">
                      <h6 className="font-weight-bold">Key Features:</h6>
                      <ul className="list-unstyled">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="mb-1">
                            <i className="fas fa-check text-success mr-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mb-3">
                    <small className="text-muted">
                      <i className="fas fa-calendar-alt mr-1"></i>
                      {project.startDate} - {project.endDate}
                    </small>
                    <br />
                    <span className={`badge ${project.status === 'Completed' ? 'badge-success' : 'badge-warning'} mt-1`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="btn-group w-100" role="group">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline-dark"
                        >
                          <i className="fab fa-github mr-1"></i>
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <i className="fas fa-external-link-alt mr-1"></i>
                          Demo
                        </a>
                      )}
                      {project.path && (
                        <Link 
                          to={project.path}
                          className="btn btn-outline-primary"
                        >
                          <i className="fas fa-info-circle mr-1"></i>
                          Details
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
