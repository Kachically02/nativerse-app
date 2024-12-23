import React from 'react'
import "./Navigation.css"
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";

function Navigation() {
  return (
    <div>
            <nav className="navbar navbar-expand-md navbar-light  navbar-container">
              <div className="container-xxl">
                <h3>
                  <img src={Logo} alt="" className="nav-icon" />
                </h3>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main-nav"
                  aria-controls="main-nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end align-center"
                  id="main-nav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-items">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-items">
                      <Link to="/meals" className="nav-link">
                        Learn
                      </Link>
                    </li>
                    <li className="nav-items">
                      <Link to="/about" className="nav-link">
                        Chat
                      </Link>
                    </li>
                    <li className="nav-items">
                      <Link to="/login" className="nav-link">
                        <button>Login</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
  )
}

export default Navigation