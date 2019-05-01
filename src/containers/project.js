import React, { Component } from "react";
import wolf from "../images/wolf.png";
// import Grid from "react-css-grid";
import { Container, Row, Col } from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Grid width={128} gap={16}> */}

        <Container>
          <Row>
            <Col xs={5} md={{ span: 5, offset: 1 }}>
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
            </Col>
            <Col xs={5}>
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
            </Col>
            {/* </Grid> */}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default Projects;
