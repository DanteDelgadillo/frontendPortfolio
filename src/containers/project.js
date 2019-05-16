import React, { Component } from "react";
import TodoApp from "../images/todosite.png";
// import Grid from "react-css-grid";
import { Container, Row, Col } from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Grid width={128} gap={16}> */}

        <Container>
          <Row>
            <Col >
              <center>
                <div className="post">


                  <img className="dogImg " src={TodoApp} alt="pic" />

                  <a href="https://stickytodolist.netlify.com" target="_blank" rel="noopener noreferrer" >
                    <div className="animtion1">

                      <h2 className="font">To do App</h2>

                    </div>
                  </a>
                </div>
              </center>
            </Col>
          </Row>
        </Container>
      </React.Fragment >
    );
  }
}
export default Projects;
