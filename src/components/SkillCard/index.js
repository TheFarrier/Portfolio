import React from "react";
import "./style.css"

export function SkillCard(props) {
  return (
    <section className="col-md-3 xs-6">
      <div className="card" style={{margin: "10px 0px;", boxShadow: "3px 3px #adddc0;"}}>
        <div className="card-body">
          {props.children}
        </div>
      </div>
    </section>
  );
};
