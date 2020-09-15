import React from "react";
import "./style.css"
import { AboutCard } from "../Card"

function ProjectPage() {
  return (
    <AboutCard>
      <div className="col-sm-3 xs-12">
        <img src={require('../../images/profile-image.jpg')} className = "img-fluid" alt="" />
      </div>
      <div className="col-sm-9 xs-12">
        <div className="card-body text-center align-middle pt-5 mt-5">
          <h1>Nathaniel Farrey</h1>
          <p className="card-text">This is the product page</p>
        </div>
      </div>
    </AboutCard>
  );
};

export default ProjectPage;