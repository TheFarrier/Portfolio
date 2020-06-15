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
          <ul>
            <li><i className="fab fa-html5"></i> Html</li>
            <li><i className="fab fa-css3-alt"></i> CSS</li>
            <li><i className="fab fa-js"></i> Javascript</li>
            <li>SQL</li>
            <li><i className="fab fa-git-alt"></i> GIT</li>
          </ul>
      </SkillCard>
      <SkillCard>
        <h5><p className="card-title">Dev Tools</p></h5>
          <ul>
            <li>Heroku</li>
            <li>Sequalize</li>
            <li>Mongoose</li>
            <li>Github</li>
            <li>NPM</li>
          </ul>
      </SkillCard>
      <SkillCard>
          <h5><p className="card-title">Databases</p></h5>
          <ul>
            <li>MySQL</li>
            <li>Mongodb</li>
            <li>Client-Side Storage</li>
          </ul>
      </SkillCard>
      <SkillCard>
        <h5><p className="card-title">Libraries</p></h5>
          <ul>
            <li>JQuery</li>
            <li>React</li>
            <li>Handlebars</li>
          </ul>
      </SkillCard>
    </Card>
  );
}
  
};

export default Skills