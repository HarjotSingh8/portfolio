import React, { Component } from "react";
import memoji from "./images/memoji.png";
class Navbar extends Component {
  render() {
    return (
      <div className="row mx-0 px-3 bg-dark text-light">
        <div className="btn btn-group btn-dark font-weight-bold">
          <img style={{ height: "20px" }} src={memoji} />
          Harjot Singh
        </div>
        <div className="btn btn-dark font-weight-light">Projects</div>
        <div className="btn btn-dark font-weight-light">Machine Learning</div>
        <div className="btn btn-dark ml-auto">Contact</div>
      </div>
    );
  }
}

export default Navbar;
