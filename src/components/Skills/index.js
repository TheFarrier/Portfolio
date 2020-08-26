import React,{Component} from "react";
import "./style.css"
import { Card } from "../Card";
import { SkillCard } from "../SkillCard";

class Skills extends Component {
  render () {
    return (
    <Card title={"Skills"}>
      <SkillCard>
        <h5><p className="card-title">Languages</p></h5>
        <img className="card-img skill-image" src={require('../../images/languages.jpg')} alt={"HTML5, CSS, JS"}></img>
      
      </SkillCard>
      <SkillCard>
        <h5><p className="card-title">Dev Tools</p></h5>
        <img className="card-img skill-image" src={require('../../images/tools.jpg')} alt={"Node.js, npm, git, github"}></img>
      </SkillCard>
      <SkillCard>
          <h5><p className="card-title">Databases</p></h5>
          <img className="card-img skill-image" src={require('../../images/Databases.jpg')} alt={"MySQL, Sequelize, MongoDB, Mongoose"}></img>
      </SkillCard>
      <SkillCard>
        <h5><p className="card-title">Libraries</p></h5>
        <img className="card-img skill-image" src={require('../../images/libraries.jpg')} alt={"jQuery, React"}></img>
      </SkillCard>
    </Card>
  );
}
  
};

export default Skills