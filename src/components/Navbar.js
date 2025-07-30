import React, { Component } from "react";
import { Link } from "react-router-dom";
import memoji from "./images/memoji.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src={memoji} 
              alt="Profile" 
              style={{ height: "30px", width: "30px" }} 
              className="rounded-circle mr-2"
            />
            <span className="font-weight-bold">Harjot Singh</span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home mr-1"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience">
                  <i className="fas fa-briefcase mr-1"></i>
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">
                  <i className="fas fa-graduation-cap mr-1"></i>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">
                  <i className="fas fa-code mr-1"></i>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  <i className="fas fa-folder-open mr-1"></i>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/awards">
                  <i className="fas fa-trophy mr-1"></i>
                  Awards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ml">
                  <i className="fas fa-brain mr-1"></i>
                  ML
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
