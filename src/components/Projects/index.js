import React,{Component} from "react";
import "./style.css"
import { Card } from "../Card";
import { BigProjectCard, SmallProjectCard } from "../ProjectCard";


class Projects extends Component {
  render () {
    return (
    <Card title={"Projects"}>
      <BigProjectCard 
        href = {"https://gif-lash.herokuapp.com/"}
        image = {require('../../images/giflash.jpg')}
        title = {"Gif-Lash Multiplayer Game"}
        github = {"https://github.com/TheFarrier/Gif-Lash"}
      />
      <BigProjectCard 
        href = {"https://thefarrier.github.io/bored-project/"}
        image = {require('../../images/bored.jpg')}
        title = {"Neverbored"}
        github = {"https://github.com/TheFarrier/Never-Bored"}
      />
      <SmallProjectCard 
        href = {"https://thefarrier.github.io/Homework3/Develop/index.html"}
        image = {require('../../images/password.jpg')}
        title = {"Password Generator"}
        github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework3"}
      />
      <SmallProjectCard 
        href = {"https://thefarrier.github.io/Homework4/Develop/index.html"}
        image = {require('../../images/quiz.gif')}
        title = {"Quiz App"}
        github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework4"}
      />
      <SmallProjectCard 
        href = {"https://thefarrier.github.io/Homework6/Develop/index.html"}
        image = {require('../../images/weather.jpg')}
        title = {"Weather App"}
        github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework6"}
      />
    </Card>
  );
}
  
};

export default Projects