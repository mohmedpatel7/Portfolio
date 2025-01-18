import React from "react";
import { Link } from "react-router-dom";
import "./style/style.css"; // Custom styles

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-transparent p-2">
      <div className="container-fluid">
        {/* Navbar Links */}
        <div className="d-flex justify-content-md-end justify-content-center w-100">
          <Link to="/" className="nav-link navbar-link mx-2">
            About
          </Link>
          <Link to="/projects" className="nav-link navbar-link mx-2">
            Projects
          </Link>
          <Link to="/contact" className="nav-link navbar-link mx-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
