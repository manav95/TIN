import { Component } from "react";
import { Link } from "react-scroll";
import logo from "../logo.jpg";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="calendar"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="message"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                A Message from Gaia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="joinUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}