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
  render() {
    return (
      <React.Fragment>
        <form className="">
          <fieldset>
            <Container className="contactme-banner1">
              <Row className="show-grid">
                <Col>
                  <section>
                    <label>Name:</label>
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
                    <label>email:</label>
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
                    <label>Subject:</label>
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
                    <label>Message:</label>
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
                    className="button"
                    onClick={this.onClick}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
            <Container className="contactme-banner2">
              <h2>
                <img src={Gmail} alt="gmail" />
                ddantedelgadillo@gmail.com
              </h2>
              <h2>
                <img src={FacebookIcon} alt="fBook" onClick={this.onClick} />
                Facebook
              </h2>
              <h2>
                <img src={Github} alt="gitHub" onClick={this.onClick2} />
                GitHub
              </h2>
              <h2>
                <img src={Linkedin} alt="Linkedin" onClick={this.onClick3} />
                Linkedin
              </h2>
            </Container>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactMe;
