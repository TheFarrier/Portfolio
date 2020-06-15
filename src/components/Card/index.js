import React from "react";
import "./style.css"

export function Card(props) {
  return (
    <div class="row justify-content-center no-gutters">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h1 className="heading">{props.title}</h1>
            <div class="row no-gutters">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
