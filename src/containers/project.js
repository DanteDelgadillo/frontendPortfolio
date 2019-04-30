import React, { Component } from "react";
import wolf from "../images/wolf.png";
import Grid from "react-css-grid";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="wrapper">
          <div className="cell">
            <center>
              <img className="dogImg" src={wolf} alt="pic" />
              <h2>project1</h2>
              <p>
                <span>
                  <em>project type</em>
                </span>
              </p>
            </center>
          </div>
          <div className="cell">
            <img className="dogImg" src={wolf} alt="pic" />
            <h2>project1</h2>
            <p>
              <span>
                <em>project type</em>
              </span>
            </p>
          </div>
        </div> */}
        <Grid width={128} gap={16}>
          <div className="cell">
            <center>
              <img className="dogImg" src={wolf} alt="pic" />
              <h2>project1</h2>
              <p>
                <span>
                  <em>project type</em>
                </span>
              </p>
            </center>
          </div>
          <div className="cell">
            <center>
              <img className="dogImg" src={wolf} alt="pic" />
              <h2>project2</h2>
              <p>
                <span>
                  <em>project type</em>
                </span>
              </p>
            </center>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Projects;
