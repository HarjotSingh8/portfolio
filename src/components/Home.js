import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ personalInfo }) => {
  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <div className="row mx-0 bg-dark text-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="rounded-circle mb-3"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8">
              <h1 className="display-4 font-weight-bold mb-3">{personalInfo.name}</h1>
              <h3 className="text-muted mb-4">{personalInfo.title}</h3>
              <p className="lead mb-4">{personalInfo.summary}</p>
              
              <div className="mb-4">
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-2">
                      <i className="fas fa-envelope mr-2"></i>
                      <a href={`mailto:${personalInfo.email}`} className="text-light">
                        {personalInfo.email}
                      </a>
                    </p>
                    <p className="mb-2">
                      <i className="fas fa-phone mr-2"></i>
                      {personalInfo.phone}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-2">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {personalInfo.location}
                    </p>
                    <p className="mb-2">
                      <i className="fas fa-globe mr-2"></i>
                      <a href={personalInfo.website} className="text-light" target="_blank" rel="noopener noreferrer">
                        {personalInfo.website}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="d-flex flex-wrap">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-light mr-3 mb-2"
                >
                  <i className="fab fa-linkedin mr-2"></i>
                  LinkedIn
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-light mr-3 mb-2"
                >
                  <i className="fab fa-github mr-2"></i>
                  GitHub
                </a>
                <Link to="/projects" className="btn btn-primary mr-3 mb-2">
                  <i className="fas fa-folder-open mr-2"></i>
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Navigation */}
      <div className="row mx-0 bg-light py-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <Link to="/experience" className="btn btn-outline-primary btn-block py-3">
                <i className="fas fa-briefcase fa-2x mb-2 d-block"></i>
                Experience
              </Link>
            </div>
            <div className="col-md-3 mb-3">
              <Link to="/education" className="btn btn-outline-primary btn-block py-3">
                <i className="fas fa-graduation-cap fa-2x mb-2 d-block"></i>
                Education
              </Link>
            </div>
            <div className="col-md-3 mb-3">
              <Link to="/skills" className="btn btn-outline-primary btn-block py-3">
                <i className="fas fa-code fa-2x mb-2 d-block"></i>
                Skills
              </Link>
            </div>
            <div className="col-md-3 mb-3">
              <Link to="/awards" className="btn btn-outline-primary btn-block py-3">
                <i className="fas fa-trophy fa-2x mb-2 d-block"></i>
                Awards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
