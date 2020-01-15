import React, { Component } from "react";
import TodoApp from "../images/todosite.png";
import ImageManager from "../images/Untitled.png";
import coral from "../images/coral.png"
import WeatherApp from "../images/weatherApp.png";
// import Grid from "react-css-grid";
// import { Container, Row, Col } from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          {/* start */}
          <div className="post">
            <img className="dogImg " src={WeatherApp} alt="pic" />
            <a href="https://weathertempchecker.netlify.com/" target="_blank" rel="noopener noreferrer" >
              <div className="animtion1">
                <ul>
                  <li className="font">WeatherApp</li>
                  <li className="projectP">
                    Weather application is build with frontend react,express,sweetalert2. So we are able to get Weather info because we senta get request to "https://openweathermap.org/api" and with the response we setdata to manipulate DOM.
                  </li>
                </ul>
              </div>
            </a>
          </div>
          {/* end */}
          {/* start */}
          <div className="post">
            <img className="dogImg " src={coral} alt="pic" />
            <a href="https://deepblueaquariumburbank.netlify.com/" target="_blank" rel="noopener noreferrer" >
              <div className="animtion1">
                <ul>
                  <li className="font">Deep Blue Aquarium ecommerce</li>
                  <li className="projectP">Deep Blue Aquarium is a ecommerce site has a dashboard for admin for product Management.
                  application has features as a normal ecommerce. For authentication we used redux and jtwtokens. For product management we used cloudinary and mongodb for backend. Frontend was build with react, express , bootstrap, sweetalert2, react-redux, and jwt-decode.
                  Backend was build using  bcryptjs, body-parser, cookie-parser,multer,and cors.

                  </li>
                </ul>
              </div>
            </a>
          </div>
          {/* end */}
          {/* start */}
          <div className="post">
            <img className="dogImg " src={ImageManager} alt="pic" />
            <a href="https://imagemanagement.netlify.com" target="_blank" rel="noopener noreferrer" >
              <div className="animtion1">
                <ul>
                  <li className="font">Image Management</li>
                  <li className="projectP">Image Management is an application to save images and able to display data with, api call to same image Management system.
                  React , and axios for the frontend. node, express, clodinary and mongodb for the backend.
                  </li>
                </ul>
              </div>
            </a>
          </div>
          {/* end */}
          {/* start */}
          <div className="post">
            <img className="dogImg " src={TodoApp} alt="pic" />
            <a href="https://stickytodolist.netlify.com" target="_blank" rel="noopener noreferrer" >
              <div className="animtion1">
                <ul>
                  <li className="font">To do App</li>
                  <li className="projectP">Technology used to build website are React.js axios, and css for the frontend. Node ,express and mongodb for the backend. Todo app has Crud features
                  Another feature app has is completed task, you can cross out task that u completed will also be saved with api.
                  </li>

                </ul>
              </div>
            </a>
          </div>
          {/* end */}
        </div>
      </React.Fragment >
    );
  }
}
export default Projects;
