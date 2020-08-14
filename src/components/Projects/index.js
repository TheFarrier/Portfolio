import React,{Component} from "react";
import "./style.css"
import { Card } from "../Card";
import { WideProjectCard, BigProjectCard, SmallProjectCard } from "../ProjectCard";


class Projects extends Component {
  render () {
    return (
      <a id="portfolio-start">
        <Card title={"Projects"}>

          <WideProjectCard 
            href = {"https://vendorhall.herokuapp.com/"}
            image = {require('../../images/vhallwide.jpg')}
            title = {"Vendorhall E-Commerce Site"}
            github = {"https://github.com/TheFarrier/VendorHall"}
            description = {"An e-commerce site, similar to Etsy. Made using the MERN stack, leveraging Auth0 and Stripe APIs"}
          />
          <BigProjectCard 
            href = {"https://gif-lash.herokuapp.com/"}
            image = {require('../../images/giflash.jpg')}
            title = {"Gif-Lash Multiplayer Game"}
            github = {"https://github.com/TheFarrier/Gif-Lash"}
            description ={"A multiplayer humor game inspired by party games like Cards Against Humanity, and Quiplash. Players search for gifs that best fit the given prompt, and try to come up with the funniest response"}
          />
          <BigProjectCard 
            href = {"https://thefarrier.github.io/bored-project/"}
            image = {require('../../images/bored.jpg')}
            title = {"Neverbored"}
            github = {"https://github.com/TheFarrier/Never-Bored"}
            description = {"A web app to find activities to do in your area."}
          />
          <SmallProjectCard 
            href = {"https://tranquil-oasis-71844.herokuapp.com/?id=5ecf13ddfbda0800175ba213"}
            image = {require('../../images/workout.jpg')}
            title = {"Workout Tracker"}
            github = {"https://github.com/TheFarrier/Workout-Tracker"}
          />
          <SmallProjectCard 
            href = {"https://thefarrier.github.io/Homework5/Develop/index.html"}
            image = {require('../../images/Scheduler.jpg')}
            title = {"Daily Scheduler"}
            github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework5"}
          />
          <SmallProjectCard 
            href = {"https://note-taker-8754.herokuapp.com/"}
            image = {require('../../images/notetaker.jpg')}
            title = {"Note Taker"}
            github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework11"}
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
      </a>
    
  );
}
  
};

export default Projects