import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../src/css/visioncdl.css";

class Header extends Component {
  render() {
    return (
      <div className="containerMain">
        <header>
          <nav className="App-header fixed-top">
            <NavLink
              className="App-link"
              style={{ color: "#cccccc" }}
              activeClassName="is-active"
              exact={true}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="App-link"
              style={{ color: "#cccccc" }}
              activeClassName="is-active"
              to="/testimonials"
            >
              Testimonials
            </NavLink>
            <NavLink
              className="App-link"
              style={{ color: "#cccccc" }}
              activeClassName="is-active"
              to="/therapy"
            >
              Therapy
            </NavLink>
            <NavLink
              className="App-link"
              style={{ color: "#cccccc" }}
              activeClassName="is-active"
              to="/appointments"
            >
              Appointments
            </NavLink>
            {/* <NavLink className="App-link" activeClassName='is-active' to='/create'>Testimonials</NavLink>
            <NavLink className="App-link" activeClassName='is-active' to='/help'>Schedule Appointment</NavLink> */}
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
