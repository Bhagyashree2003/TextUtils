import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active"  to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
              {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group me-2" role="group" aria-label="First group">
    <button type="button" className="btn btn-primary">Blue</button>
    
  </div>
  <div className="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-danger">Red</button>
  </div>
  <div className="btn-group " role="group"  aria-label="Third group">
    <button type="button" className="btn btn-success">green</button>
  </div>
</div> */}
          <div className={ `form-check form-switch text-${props.mode==='light'?'dark':'light'} ` }>
            <input
              className="form-check-input " 
              onClick={props.togglemode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
             Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Set the title" };
