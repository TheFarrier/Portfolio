import React from "react";
import "./style.css"

export function Collapse() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio-start">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://docs.google.com/document/d/1XuX-_r5w-MqJv6IE4cVZ1VSU8jgMt0WAyGN6RGIJM8I/edit?usp=sharing">Resume</a>
        </li>
      </ul>
    </div>
  );
};
