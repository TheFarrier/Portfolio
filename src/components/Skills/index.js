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
          <img className="skill-image" src={require('../../images/languages.jpg')}></img>
      </SkillCard>
      <SkillCard>
        <h5><p className="card-title">Dev Tools</p></h5>
        <img className="skill-image" src={require('../../images/tools.jpg')}></img>
      </SkillCard>
      <SkillCard>
          <h5><p className="card-title">Databases</p></h5>
          <img className="skill-image" src={require('../../images/Databases.jpg')}></img>
      </SkillCard>
      <SkillCard>
        <h5><p className="card-title">Libraries</p></h5>
        <img className="skill-image" src={require('../../images/libraries.jpg')}></img>
      </SkillCard>
    </Card>
  );
}
  
};

export default Skills