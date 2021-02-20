import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Menu() {
  return (
    <div className="nav-bg">
      <nav className="navbar navbar-expand-lg navbar-light my-container px-0">
        <Link className="navbar-brand" to="#">
          GOTRAVEL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item active px-2">
              <Link className="nav-link small-text white-text" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link small-text white-text" to="#">
                Explore
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link small-text white-text" to="#">
                Travel
              </Link>
            </li>
            <li className="nav-item ps-2">
              <Link className="nav-link small-text white-text" to="#">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
