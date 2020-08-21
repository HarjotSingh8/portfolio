import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar";
import Home from "./Home";
import MachineLearning from "./MachineLearning";
import Projects from "./Projects";
import GenericProject from "./GenericProject";
import projects from "./projects.json";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar projects={projects} />
        <Switch>
          {projects.map((project, index) => (
            <Route path={project.path}>
              <GenericProject project={project} />
            </Route>
          ))}
          <Route path="/projects">
            <Projects projects={projects} />
          </Route>
          <Route path="/ml">
            <MachineLearning />
          </Route>
          <Route defaultpath="/home">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
