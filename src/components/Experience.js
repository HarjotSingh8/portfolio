import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 font-weight-bold">Work Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={exp.id} className="mb-5">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <h5 className="text-primary font-weight-bold">{exp.position}</h5>
                      <h6 className="text-muted">{exp.company}</h6>
                      <p className="text-muted mb-0">
                        <i className="fas fa-calendar-alt"></i> {exp.startDate} - {exp.endDate}
                      </p>
                      <p className="text-muted">
                        <i className="fas fa-map-marker-alt"></i> {exp.location}
                      </p>
                    </div>
                    <div className="col-md-9">
                      <p className="mb-3">{exp.description}</p>
                      
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-3">
                          <h6 className="font-weight-bold">Key Achievements:</h6>
                          <ul className="list-unstyled">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="mb-1">
                                <i className="fas fa-check-circle text-success mr-2"></i>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <h6 className="font-weight-bold">Technologies Used:</h6>
                          <div className="d-flex flex-wrap">
                            {exp.technologies.map((tech, idx) => (
                              <span key={idx} className="badge badge-secondary mr-2 mb-2">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
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

export default Experience;