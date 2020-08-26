import React from "react";
import "./style.css"

export function WideProjectCard(props) {
  return (
    <section className="col-md-12 xs-12">
      <div className="card project-card">
        <div className="project">
          <img src={props.image} className= "card-img-top image" alt={props.title} />
          <div className="card-img-overlay">
            <h4><a href={props.href} className="card-title menu">{props.title}</a></h4>
            <p><h5 className="card-title menu">{props.technologies}</h5></p>
            <button type="button" className="btn btn-link menu"><a href={props.github}><i className="fab fa-github fa-3x"></i></a></button>
          </div>
        </div>
        <div className="card-body">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export function BigProjectCard(props) {
  return (
    <section className="col-lg-6 xs-12">
      <div className="card project-card">
        <div className="project">
          <img src={props.image} className= "card-img-top image" alt={props.title} />
          <div className="card-img-overlay">
            <h4><a href={props.href} className="card-title menu">{props.title}</a></h4>
            <p><h5 className="card-title menu">{props.technologies}</h5></p>
            <button type="button" className="btn btn-link menu"><a href={props.github}><i className="fab fa-github fa-3x"></i></a></button>
          </div>
        </div>
        <div className="card-body">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
};

export function SmallProjectCard(props) {
  return (
    <section className="col-md-4 xs-6">
      <div className="card project-card">
        <div className="project">
          <img src={props.image} className= "card-img-top image" alt={props.title} />
          <div className="card-img-overlay">
            <h4><a href={props.href} className="card-title menu">{props.title}</a></h4>
            <button type="button" className="btn btn-link menu"><a href={props.github}><i className="fab fa-github fa-3x"></i></a></button>
          </div>
        </div>
        <div className="card-body">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
};
