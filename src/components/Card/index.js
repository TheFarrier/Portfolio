import React from "react";
import "./style.css"

export function AboutCard(props) {
  return (
    <div className={props.type}  className="row justify-content-center no-gutters" >
      <div className="col-sm-12">
        <div className="card about">
          <div className="card-body">
            <h1 className="heading">{props.title}</h1>
            <div className="row no-gutters">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Card(props) {
  return (
    <div className={props.type}  className="row justify-content-center no-gutters" >
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <h1 className="heading">{props.title}</h1>
            <div className="row no-gutters">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
