import React from "react";
import "./style.css"
import { AboutCard } from "../Card"

function About() {
  return (
    <AboutCard>
      <div className="col-sm-3 xs-12">
        <img src={require('../../images/profile-image.jpg')} className = "img-fluid" alt="" />
      </div>
      <div className="col-sm-9 xs-12">
        <div className="card-body text-center align-middle pt-5 mt-5">
          <h1>Nathaniel Farrey</h1>
          <p className="card-text">Nathaniel Farrey is a web developer, musical hobbyist, and dog lover. He recieved a Certificate in Full Stack Web Development from The UTSA School of Data Science, where he studied the fundamentals of web development and the MERN stack.  </p>
        </div>
      </div>
    </AboutCard>
  );
};

export default About;