import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/photos/btnLearnMoreAll.jpg";

var sectionStyle = {
  width: "100%",
  height: "225px",

  backgroundImage: `url(${Background})`
};

class Section extends React.Component {
  render() {
    return (
      <section className="therapy">
        <Link
          className="App-link"
          activeClassName="is-active"
          style={{ color: "#ffffff" }}
          to="/therapy"
        >
          <div className="titlePhoto">Vision Therapy Options</div>
        </Link>
        <br />
        <br />
      </section>
    );
  }
}

export default Section;
