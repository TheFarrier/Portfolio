import React from "react";
import "./style.css"

export function WideProjectCard(props) {
  return (
    <section className="col-md-12 xs-12">
      <div className="card project">
        <img src={props.image} className= "card-img-top image" alt="image" />
        <div className="card-img-overlay">
          <h4><a href={props.href}><p className="card-title menu">{props.title}</p></a></h4>
          <button type="button" className="btn btn-link menu"><a href={props.github}><i className="fab fa-github fa-3x"></i></a></button>
          <div className="description-container">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export function BigProjectCard(props) {
  return (
    <section className="col-md-6 xs-12">
      <div className="card project">
        <img src={props.image} className= "card-img-top image" alt="image" />
        <div className="card-img-overlay">
          <h4><a href={props.href}><p className="card-title menu">{props.title}</p></a></h4>
          <button type="button" className="btn btn-link menu"><a href={props.github}><i className="fab fa-github fa-3x"></i></a></button>
          <div className="description-container">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export function SmallProjectCard(props) {
  return (
    <section className="col-md-4 xs-12">
      <div className="card project">
            <img src={props.image} className= "card-img-top image" alt="image" />
            <div className="card-img-overlay">
              <h4><a href={props.href}><p className="card-title menu">{props.title}</p></a></h4>
              <button type="button" className="btn btn-link menu"><a href={props.github}><i className="fab fa-github fa-3x"></i></a></button>
              <div className="description-container">
                <p>{props.description}</p>
              </div>
              
            </div>
      </div>
    </section>
  );
};
