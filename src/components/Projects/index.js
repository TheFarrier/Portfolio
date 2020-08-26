import React,{Component} from "react";
import "./style.css"
import { Card } from "../Card";
import { WideProjectCard, BigProjectCard, SmallProjectCard } from "../ProjectCard";


class Projects extends Component {
  render () {
    return (
      <div id="portfolio-start">
        <Card title={"Projects"}>

          <WideProjectCard 
            href = {"https://vendorhall.herokuapp.com/"}
            image = {require('../../images/vhallwide.jpg')}
            title = {"Vendorhall E-Commerce Site"}
            github = {"https://github.com/TheFarrier/VendorHall"}
            description = {"An e-commerce site, similar to Etsy. Made using the MERN stack, leveraging Auth0 and Stripe APIs"}
            technologies ={"Technologies used: MERN, Axios, Bootstrap, Auth0, Stripe"}
          />
          <BigProjectCard 
            href = {"https://gif-lash.herokuapp.com/"}
            image = {require('../../images/giflash.jpg')}
            title = {"Gif-Lash Multiplayer Game"}
            github = {"https://github.com/TheFarrier/Gif-Lash"}
            description ={"A multiplayer humor game inspired by party games like Quiplash. Players search for gifs and try to come up with the funniest response for the prompt"}
            technologies ={"Technologies used: Express, Socket.io, MySQL, Passport"}
          />
          <BigProjectCard 
            href = {"https://thefarrier.github.io/bored-project/"}
            image = {require('../../images/bored.jpg')}
            title = {"Neverbored"}
            github = {"https://github.com/TheFarrier/Never-Bored"}
            description = {"A web app to find activities to do in your area."}
            technologies ={"Technologies used: Materialize, Ajax, Google Maps API"}
          />
          <SmallProjectCard 
            href = {"https://tranquil-oasis-71844.herokuapp.com/?id=5ecf13ddfbda0800175ba213"}
            image = {require('../../images/workout.jpg')}
            title = {"Workout Tracker"}
            github = {"https://github.com/TheFarrier/Workout-Tracker"}
            description = {"Bootcamp Homework: Workout tracker that stores previous workout with MongoDB and Express"}
            technologies ={""}
          />
          <SmallProjectCard 
            href = {"https://thefarrier.github.io/Homework5/Develop/index.html"}
            image = {require('../../images/Scheduler.jpg')}
            title = {"Daily Scheduler"}
            github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework5"}
            description = {"Bootcamp Homework: A 1-day schedule saved in local storage that resets daily. Uses moment.js and jQuery."}
            technologies ={""}
          />
          <SmallProjectCard 
            href = {"https://note-taker-8754.herokuapp.com/"}
            image = {require('../../images/notetaker.jpg')}
            title = {"Note Taker"}
            github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework11"}
            description = {"Bootcamp Homework: A note taker using jQuery and Express, that uses a json file as a database"}
            technologies ={""}
          />
          <SmallProjectCard 
            href = {"https://thefarrier.github.io/Homework3/Develop/index.html"}
            image = {require('../../images/password.jpg')}
            title = {"Password Generator"}
            github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework3"}
            description = {"Bootcamp Homework: A password genertor using javascript to generate a string of characters"}
            technologies ={""}
          />
          <SmallProjectCard 
            href = {"https://thefarrier.github.io/Homework4/Develop/index.html"}
            image = {require('../../images/quiz.gif')}
            title = {"Quiz App"}
            github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework4"}
            description = {"Bootcamp Homework: A quiz that uses javascript timers and stores scores in local storage"}
            technologies ={""}
          />
          <SmallProjectCard 
            href = {"https://thefarrier.github.io/Homework6/Develop/index.html"}
            image = {require('../../images/weather.jpg')}
            title = {"Weather App"}
            github = {"https://github.com/TheFarrier/TheFarrier.github.io/tree/master/Homework6"}
            description = {"Bootcamp Homework: A weather app that returns a 1-week forecasst from the OpenWeather API"}
            technologies ={""}
          />
        </Card>
      </div>
    
  );
}
  
};

export default Projects