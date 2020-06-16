import React from "react";
import "./style.css"

export function SkillCard(props) {
  return (
    <section className="col-md-3 col-sm-6 xs-12 ">
      <div className="card skillcard">

          {props.children}

      </div>
    </section>
  );
};
