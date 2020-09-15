import React from "react";
import "./style.css"

export function WideProjectCard(props) {
  return (
    <section className="col-md-12 xs-12">
      <div className="card project-card">
        <div className="project">
          <img src={props.image} className= "card-img-top image" alt={props.title} />
        </div>
        <div className="card-body">
          <h5>
            <a href={props.href}>{props.title}</a>
            <button type="button" className="btn btn-link">
              <a href={props.github}>
                <i className="fab fa-github fa-2x"></i>
              </a>
            </button>
          </h5>
          <p>{props.description}</p>
          <p className="technologies">{props.technologies}</p>
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
        </div>
        <div className="card-body">
            <h5>
              <a href={props.href}>{props.title}</a>
              <button type="button" className="btn btn-link">
                <a href={props.github}>
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </button>
            </h5>
          <p>{props.description}</p>
          <p className="technologies">{props.technologies}</p>
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
        </div>
        <div className="card-body">
          <h5>
            <a href={props.href}>{props.title}</a>
            <button type="button" className="btn btn-link">
              <a href={props.github}>
                <i className="fab fa-github fa-2x"></i>
              </a>
            </button>
          </h5>
          <p>{props.description}</p>
          <p className="technologies">{props.technologies}</p>
        </div>
      </div>
    </section>
  );
};
