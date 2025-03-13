import React from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ Import useLocation
import "../styles/Navbar.css";
import logo from "../images/companylogo.jpg";

const Navbar: React.FC = () => {
  const location = useLocation(); // ✅ Get current URL path

  return (
    <>
      <header className="header">
        <div className="header__layout">
          {/* ✅ Logo Section */}
          <div className="header__logo-container">
            <img alt="FusionCut Logo" className="logo" src={logo} />
            <span className="company-name">FusionCut Technologies</span>
          </div>

          {/* ✅ Navigation Menu */}
          <ul className="header__menu">
            <li>
              <Link
                className={`header__menu-link ${
                  location.pathname === "/" ? "header__menu-link--active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`header__menu-link ${
                  location.pathname === "/about-us"
                    ? "header__menu-link--active"
                    : ""
                }`}
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`header__menu-link ${
                  location.pathname === "/fabrication"
                    ? "header__menu-link--active"
                    : ""
                }`}
                to="/fabrication"
              >
                Fabrication
              </Link>
            </li>
            <li>
              <Link
                className={`header__menu-link ${
                  location.pathname === "/laser-cutting"
                    ? "header__menu-link--active"
                    : ""
                }`}
                to="/laser-cutting"
              >
                Laser Cutting
              </Link>
            </li>
            <li>
              <Link
                className={`header__menu-link ${
                  location.pathname === "/welding"
                    ? "header__menu-link--active"
                    : ""
                }`}
                to="/welding"
              >
                Welding
              </Link>
            </li>
            <li>
              <Link
                className={`header__menu-link ${
                  location.pathname === "/gallery"
                    ? "header__menu-link--active"
                    : ""
                }`}
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className={`header__menu-link ${
                  location.pathname === "/contact"
                    ? "header__menu-link--active"
                    : ""
                }`}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li className="header__menu-item header__phone">
              <i className="fas fa-phone-alt"></i>
              <span> PHONE: 289.933.7005</span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
