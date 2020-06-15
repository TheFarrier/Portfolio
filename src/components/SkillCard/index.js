import React from "react";
import "./style.css"

export function SkillCard(props) {
  return (
    <section className="col-md-3 xs-6 ">
      <div className="card skillcard">
        <div className="card-body">
          {props.children}
        </div>
      </div>
    </section>
  );
};
