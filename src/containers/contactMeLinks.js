import React, { Component } from "react";
import FacebookIcon from "../images/icons8-facebook-96.png";
import Github from "../images/icons8-github-96.png";
import Linkedin from "../images/icons8-linkedin-96.png";
import Gmail from "../images/icons8-gmail-96.png";

class ContactMeLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onClick = this.onClick.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
  }

  onClick(e) {
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
        <div className="contactme-banner2">
          <h1>
            <img src={Gmail} alt="gmail" />
            ddantedelgadillo@gmail.com
          </h1>
          <h1>
            <img src={FacebookIcon} alt="fBook" onClick={this.onClick} />
            Facebook
          </h1>
          <h1>
            <img src={Github} alt="gitHub" onClick={this.onClick2} />
            GitHub
          </h1>
          <h1>
            <img src={Linkedin} alt="Linkedin" onClick={this.onClick3} />
            Linkedin
          </h1>
        </div>
      </React.Fragment>
    );
  }
}
export default ContactMeLinks;
