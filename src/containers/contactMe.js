import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import FacebookIcon from "../images/icons8-facebook-96.png";
import Github from "../images/icons8-github-96.png";
import Linkedin from "../images/icons8-linkedin-96.png";
import Gmail from "../images/icons8-gmail-96.png";

class ContactMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      const formData = {
        ...prevState.formData,
        [name]: value
      };
      return { formData };
    }, this.validateForm);
  };

  async onClick(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state.formData;

    await axios
      .post(" http://localhost:3001/api/form", {
        name,
        email,
        message,
        subject
      })
      .then(console.log(name))
      .catch(err => console.error(err));
  }

  onClick1(e) {
    e.preventDefault();

    window.location = "https://www.facebook.com/dante.delgadillo";
  }

  onClick2(e) {
    e.preventDefault();

    window.location = "https://github.com/DanteDelgadillo";
  }

  onClick3(e) {
    e.preventDefault();

    window.location = "https://www.linkedin.com/in/dante-delgadillo-70016a165/";
  }
  render() {
    return (
      <React.Fragment>
        <form className="">
          <fieldset>
            <Container className="contactme-banner1">
              <Row className="show-grid">
                <Col>
                  <section>
                    <label className="font">Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.formData.name}
                      onChange={this.onChange}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col>
                  <section>
                    <label className="font">email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.formData.email}
                      onChange={this.onChange}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col>
                  <section>
                    <label className="font">Subject:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                      id="subject"
                      value={this.state.formData.subject}
                      onChange={this.onChange}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col>
                  <section>
                    <label className="font">Message:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="message"
                      id="mesmessages"
                      value={this.state.formData.message}
                      onChange={this.onChange}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col className="button">
                  <Button
                    variant="outline-secondary "
                    className="button font"
                    onClick={this.onClick}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
            <Container className="contactme-banner2">
              <Row>
                <h4 className="font fontsizechange2">
                  <img src={Gmail} alt="gmail" />
                  ddantedelgadillo@gmail.com
                </h4>
              </Row>
              <Row>
                <a
                  href="https://www.facebook.com/dante.delgadillo"
                  className="font"
                >
                  <img src={FacebookIcon} alt="fBook" />
                  Facebook
                </a>
              </Row>
              <Row>
                <a href="https://github.com/DanteDelgadillo" className="font">
                  <img src={Github} alt="gitHub" />
                  GitHub
                </a>
              </Row>
              <Row>
                <a
                  href="https://www.linkedin.com/in/dante-delgadillo-70016a165/"
                  className="font"
                >
                  <img src={Linkedin} alt="Linkedin" />
                  Linkedin
                </a>
              </Row>
            </Container>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactMe;
