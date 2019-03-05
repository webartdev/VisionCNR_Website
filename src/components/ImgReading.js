import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/photos/btnLearnMoreAll.jpg";

class ImgReading extends React.Component {
  render() {
    return (
      <section className="reading">
        <Link
          className="App-link"
          activeClassName="is-active"
          style={{ color: "#ffffff" }}
          to="/evaluations"
        >
          <div className="titlePhoto">Vision-in-Reading Evaluations</div>
        </Link>
      </section>
    );
  }
}

export default ImgReading;
