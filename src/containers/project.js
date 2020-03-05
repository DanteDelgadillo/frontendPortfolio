import React, { Component } from "react";
import TodoApp from "../images/todosite.png";
import ImageManager from "../images/Untitled.png";
import coral from "../images/coral.png"
import WeatherApp from "../images/weatherApp.png";
import SuperT from "../images/superTorta.png";
// import Grid from "react-css-grid";
// import { Container, Row, Col } from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="project-container">
          {/* start */}
          <div class="card shadow" >
            <img src={SuperT} class="card-img-top project-img" alt="..." />
            <div class="card-body text-center">
              <h3 class="card-title">Super Tortas</h3>
              <p class="card-text">  This is a restaurant website. Technologies used React, Bootstrap and css.</p>
              <a href="https://test-supertortas.netlify.com/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" >Project Site</a>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div class="card shadow" >
            <img src={WeatherApp} class="card-img-top project-img" alt="..." />
            <div class="card-body text-center">
              <h3 class="card-title">Weather App</h3>
              <p class="card-text">Weather application is build with frontend react, axios, and sweetalert2. So we are able to get Weather data because we sent a get request , and with the response we are able to get the Data for the weather for searched loaction  .</p>
              <a href="https://weathertempchecker.netlify.com/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" >Project Site</a>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div class="card shadow" >
            <img src={coral} class="card-img-top project-img" alt="..." />
            <div class="card-body text-center">
              <h3 class="card-title">Deep Blue Aquarium ecommerce</h3>
              <p class="card-text">Deep Blue Aquarium is an ecommerce site. It has a dashboard for admin for product management.
                  application has features as a normal ecommerce. For authentication we used redux and jtwtokens. For product management we used cloudinary and mongodb for backend. Frontend was build with react, express , bootstrap, sweetalert2, react-redux, and jwt-decode.
                  Backend was build using  bcryptjs, body-parser, cookie-parser,multer,and cors.</p>
              <a href="https://deepblueaquariumburbank.netlify.com/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" >Project Site</a>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div class="card shadow" >
            <img src={ImageManager} class="card-img-top project-img" alt="..." />
            <div class="card-body text-center">
              <h3 class="card-title">Image Management</h3>
              <p class="card-text">Image Management is an application to save images and able to display data with, api call to same image Management system.
                  React , and axios for the Frontend. For the Backend node, express, clodinary and mongodb .</p>
              <a href="https://imagemanagement.netlify.com/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" >Project Site</a>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div class="card shadow" >
            <img src={TodoApp} class="card-img-top project-img" alt="..." />
            <div class="card-body text-center">
              <h3 class="card-title">To do App</h3>
              <p class="card-text">Technology used to build website are React.js axios, and css for the frontend. Node ,express and mongodb for the backend. Todo app has Crud features
                  Another feature app has is completed task, you can cross out task that u completed will also be saved with api.</p>
              <a href="https://stickytodolist.netlify.com" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" >Project Site</a>
            </div>
          </div>
          {/* end */}
        </div>
      </React.Fragment >
    );
  }
}
export default Projects;
