import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/photos/btnLearnMoreAll.jpg";

class ImgEval extends React.Component {
  render() {
    return (
      <section className="eval">
        <Link
          className="App-link"
          activeClassName="is-active"
          style={{ color: "#ffffff" }}
          to="/evaluations"
        >
          <div className="titlePhoto">Functional Vision Evaluations</div>
        </Link>
      </section>
    );
  }
}

export default ImgEval;
