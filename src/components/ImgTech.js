import React from "react";
import { Link } from "react-router-dom";

import Background from "../images/photos/V-Technology.jpg";

class ImgTech extends React.Component {
  render() {
    return (
      <section className="tech">
        <Link
          className="App-link"
          activeClassName="is-active"
          style={{ color: "#ffffff" }}
          to="/therapy"
        >
          <div className="titlePhoto">Vision Technology</div>
        </Link>
      </section>
    );
  }
}

export default ImgTech;
