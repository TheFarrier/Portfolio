import React from "react";
import { Collapse } from "../Collapse"
import "./style.css"

function Navibar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#24b65c"}}>
      <a className="navbar-brand" href="#">Nathaniel Farrey</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Collapse />
      <div className="justify-content-end">
        <a href="https://www.linkedin.com/in/nathaniel-farrey-61b4a786/" className="h4 mr-3 text-light"><i className="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/TheFarrier" className="h4 mr-3 text-light"><i className="fab fa-github"></i> GitHub</a>
      </div>
    </nav>
  );
};

export default Navibar;