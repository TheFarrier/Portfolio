import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import "./style.css"

export function Collapse() {
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://docs.google.com/document/d/1XuX-_r5w-MqJv6IE4cVZ1VSU8jgMt0WAyGN6RGIJM8I/edit?usp=sharing">Resume</a>
        </li>
      </ul>
    </div>
  );
};
