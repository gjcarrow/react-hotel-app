import React, { Component } from 'react';
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
    this.state = {
      eyes: "Blue",
      isOpen: false
    }
  }

  handleNavbarToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header site_logo">
              <Link to="/">
                <img src={logo} alt="Site Logo" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleNavbarToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul className={ this.state.isOpen ? "nav-links show-nav" : "nav-links" }>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms/">Rooms</Link>
              </li>
              <li>
                <Link to="/rooms/double-basic">Single Room</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;