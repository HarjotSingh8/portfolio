import React from 'react';

const Skills = ({ skills }) => {
  const skillCategories = [
    { key: 'programming', title: 'Programming Languages', icon: 'fas fa-code', color: 'primary' },
    { key: 'frontend', title: 'Frontend Development', icon: 'fas fa-paint-brush', color: 'info' },
    { key: 'backend', title: 'Backend Development', icon: 'fas fa-server', color: 'success' },
    { key: 'database', title: 'Database Technologies', icon: 'fas fa-database', color: 'warning' },
    { key: 'tools', title: 'Tools & Technologies', icon: 'fas fa-tools', color: 'secondary' },
    { key: 'machineLearning', title: 'Machine Learning', icon: 'fas fa-brain', color: 'danger' }
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h2 className="text-center mb-5 font-weight-bold">Skills & Technologies</h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            skills[category.key] && skills[category.key].length > 0 && (
              <div key={category.key} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className={`text-${category.color} mr-3`}>
                        <i className={`${category.icon} fa-2x`}></i>
                      </div>
                      <h5 className="card-title mb-0 font-weight-bold">{category.title}</h5>
                    </div>
                    
                    <div className="d-flex flex-wrap">
                      {skills[category.key].map((skill, idx) => (
                        <span 
                          key={idx} 
                          className={`badge badge-${category.color} mr-2 mb-2 p-2`}
                          style={{ fontSize: '0.9rem' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;