import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar";
import Home from "./Home";
import MachineLearning from "./MachineLearning";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Awards from "./Awards";
import GenericProject from "./GenericProject";
import portfolioData from "../data/portfolio-data.json";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar projects={portfolioData.projects} />
        <Switch>
          {portfolioData.projects.map((project, index) => (
            <Route key={project.id} path={project.path}>
              <GenericProject project={project} />
            </Route>
          ))}
          <Route path="/experience">
            <Experience experience={portfolioData.experience} />
          </Route>
          <Route path="/education">
            <Education education={portfolioData.education} />
          </Route>
          <Route path="/skills">
            <Skills skills={portfolioData.skills} />
          </Route>
          <Route path="/awards">
            <Awards awards={portfolioData.awards} />
          </Route>
          <Route path="/projects">
            <Projects projects={portfolioData.projects} />
          </Route>
          <Route path="/ml">
            <MachineLearning />
          </Route>
          <Route path="/">
            <Home personalInfo={portfolioData.personal} />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
