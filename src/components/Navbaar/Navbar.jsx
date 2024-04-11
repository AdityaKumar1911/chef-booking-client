import React from "react";
import { Link } from "react-router-dom";
import "../Navbaar/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Chef Cart</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page">
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <Link to="/features">Features</Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <Link to="/pricing">Pricing</Link>
                </button>
              </li>
            </ul>
            <span className="navbar-text">
              <Link to="/LoginForm">
                <button className="btn btn-outline-light me-2">Login</button>
              </Link>
              <Link to="/SignupForm">
                <button className="btn btn-light">Signup</button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
