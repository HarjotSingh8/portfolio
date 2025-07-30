import React from 'react';

const Education = ({ education }) => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h2 className="text-center mb-5 font-weight-bold">Education</h2>
        <div className="row justify-content-center">
          {education.map((edu, index) => (
            <div key={edu.id} className="col-md-10 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="text-primary font-weight-bold">{edu.institution}</h5>
                      <h6 className="text-muted">{edu.degree}</h6>
                      <p className="text-muted mb-0">
                        <i className="fas fa-calendar-alt"></i> {edu.startDate} - {edu.endDate}
                      </p>
                      {edu.gpa && (
                        <p className="text-muted mb-0">
                          <i className="fas fa-graduation-cap"></i> GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                    <div className="col-md-8">
                      <p className="mb-3">{edu.description}</p>
                      
                      {edu.relevant_courses && edu.relevant_courses.length > 0 && (
                        <div className="mb-3">
                          <h6 className="font-weight-bold">Relevant Courses:</h6>
                          <div className="d-flex flex-wrap">
                            {edu.relevant_courses.map((course, idx) => (
                              <span key={idx} className="badge badge-outline-primary mr-2 mb-2">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {edu.certifications && edu.certifications.length > 0 && (
                        <div>
                          <h6 className="font-weight-bold">Certifications:</h6>
                          <ul className="list-unstyled">
                            {edu.certifications.map((cert, idx) => (
                              <li key={idx} className="mb-1">
                                <i className="fas fa-certificate text-warning mr-2"></i>
                                {cert}
                              </li>
                            ))}
                          </ul>
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

export default Education;