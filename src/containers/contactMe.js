import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import FacebookIcon from "../images/icons8-facebook-96.png";
import Github from "../images/icons8-github-96.png";
import Linkedin from "../images/icons8-linkedin-96.png";
import Gmail from "../images/icons8-gmail-96.png";
import Swal from "sweetalert2";

class ContactMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameError: "",
      emailError: "",
      subjectError: "",
      messageError: "",
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

  validate = () => {
    let nameError = "";
    let emailError = "";
    let subjectError = "";
    let messageError = "";

    if (!this.state.formData.name) {
      nameError = "Field is Empty";
    }

    if (!this.state.formData.subject) {
      subjectError = "Field is Empty";
    }

    if (!this.state.formData.message) {
      messageError = "Field is Empty";
    }

    if (!this.state.formData.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (emailError || nameError || messageError || subjectError) {
      this.setState({ emailError, nameError, messageError, subjectError });
      return false;
    }
    return true;
  };

  async onClick(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const { name, email, subject, message } = this.state.formData;

      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/form`, {
          name,
          email,
          message,
          subject
        })

        .then(
          Swal.fire("Message sent!", "", "success"),
          this.setState(state => ({
            ...state,
            formData: {
              ...state.formData,
              name: "",
              email: "",
              message: "",
              subject: ""
            }
          }))
        )
        .then(
          this.setState(state => ({
            ...state,
            nameError: "",
            emailError: "",
            messageError: "",
            subjectError: ""
          }))
        )
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <React.Fragment>
        <form>
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
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.nameError}
                    </div>
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
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.emailError}
                    </div>
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
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.subjectError}
                    </div>
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
                    <div style={{ fontSize: 12, color: "red" }}>
                      {this.state.messageError}
                    </div>
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
