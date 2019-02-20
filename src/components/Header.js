import React, { Component } from 'react';
//import '../../src/App.css';
import { NavLink } from 'react-router-dom';
import '../../src/css/visioncdl.css';
//import Button from './Button';


class Header extends Component {
  render() {
    return (
<div className="containerMain"> 
       {/* <div className="Header"> */}
{/* <div className="containerMain"> */}
        <header >
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p className="App-logo">
            WebDevPlus
          </p> */}
          <nav className="App-header">
            <NavLink className="App-link" activeClassName='is-active' exact={true} to='/'>Home</NavLink>
            <NavLink className="App-link" activeClassName='is-active' to='/testimonials'>Testimonials</NavLink>
            {/* <NavLink className="App-link" activeClassName='is-active' to='/edit'>Edit</NavLink> */}
            <NavLink className="App-link" activeClassName='is-active' to='/appointments'>Appointments</NavLink>  
            {/* <NavLink className="App-link" activeClassName='is-active' to='/create'>Testimonials</NavLink>
            <NavLink className="App-link" activeClassName='is-active' to='/help'>Schedule Appointment</NavLink> */}
          </nav>
          
        </header>
      </div>
    );
  }
}

export default Header;
