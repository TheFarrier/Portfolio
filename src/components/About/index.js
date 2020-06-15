import React from "react";
import "./style.css"
import { Card } from "../Card"

function About() {
  return (
    <Card>
      <div class="col-sm-3 xs-12">
        <img src={require('../../images/profile-image.jpg')} className = "img-fluid" alt="" />
      </div>
      <div class="col-sm-9 xs-12">
        <div class="card-body text-center align-middle pt-5 mt-5">
          <h1>Nathaniel Farrey</h1>
          <p class="card-text">Nathaniel Farrey is a web developer, musician, and dog lover. He is experienced with HTML5, CSS, and Javascript and is learning full stack development using the MERN stack at The UTSA School of Data Science. </p>
          
        </div>
      </div>
    </Card>
  );
};

export default About;