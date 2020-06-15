import React from "react";
import "./style.css"

export function BigProjectCard(props) {
  return (
    <section className="col-md-6 xs-12">
      <div className="card rounded-15 m-1 project" style={{margin: "10px 0px;", boxShadow: "3px 3px #adddc0;"}}>
        <img src={props.image} className= "card-img-top image" alt="image" />
        <div className="card-img-overlay">
          <h4><a href={props.href}><p className="card-title menu">{props.title}</p></a></h4>
          <button type="button" className="btn btn-link menu"><a href={props.github}><i class="fab fa-github fa-3x"></i></a></button>
        </div>
      </div>
    </section>
  );
};

export function SmallProjectCard(props) {
  return (
    <section className="col-md-4 xs-12">
      <div className="card rounded-15 m-1 project" style={{margin: "10px 0px;", boxShadow: "3px 3px #adddc0;"}}>
            <img src={props.image} className= "card-img-top image" alt="image" />
            <div class="card-img-overlay">
              <h4><a href={props.href}><p class="card-title menu">{props.title}</p></a></h4>
              <button type="button" class="btn btn-link menu"><a href={props.github}><i class="fab fa-github fa-3x"></i></a></button>
            </div>
      </div>
    </section>
  );
};
