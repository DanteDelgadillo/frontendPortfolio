import React, { Component } from "react";
import TodoApp from "../images/todosite.png";
import ImageManager from "../images/Untitled.png";
import coral from "../images/coral.png"
// import Grid from "react-css-grid";
// import { Container, Row, Col } from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          {/* start */}
          <div className="post">
            <img className="dogImg " src={coral} alt="pic" />
            <a href="https://deepblueaquariumburbank.netlify.com/" target="_blank" rel="noopener noreferrer" >
              <div className="animtion1">
                <h2 className="font">Deep Blue Aquarium ecommerce </h2>
              </div>
            </a>
          </div>
          {/* end */}
          {/* start */}
          <div className="post">
            <img className="dogImg " src={ImageManager} alt="pic" />
            <a href="https://imagemanagement.netlify.com" target="_blank" rel="noopener noreferrer" >
              <div className="animtion1">
                <h2 className="font">Image Management </h2>
              </div>
            </a>
          </div>
          {/* end */}
          {/* start */}
          <div className="post">
            <img className="dogImg " src={TodoApp} alt="pic" />
            <a href="https://stickytodolist.netlify.com" target="_blank" rel="noopener noreferrer" >
              <div className="animtion1">
                <h2 className="font">To do App</h2>
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
