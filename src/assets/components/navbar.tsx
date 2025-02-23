import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../styles/Navbar.css"; // Importing the CSS file
import logo from "../images/companylogo.jpg";

const Navbar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("home");

  // Handle menu item click
  const handleMenuClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <header className="header">
      <div className="header__layout">
        {/* ✅ Logo Section (Includes Image Logo + Text Logo) */}
        <div className="header__logo-container">
          <img alt="FusionCut Logo" className="logo" src={logo} />
          <span className="company-name">FusionCut Technologies</span>
        </div>

        {/* ✅ Navigation Menu */}
        <ul className="header__menu">
          <li>
            <Link
              className={`header__menu-link ${
                selectedItem === "home" ? "header__menu-link--active" : ""
              }`}
              to="/"
              onClick={() => handleMenuClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`header__menu-link ${
                selectedItem === "aboutus"
                  ? "header__menu-link--active"
                  : ""
              }`}
              to="/about-us"
              onClick={() => handleMenuClick("aboutus")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`header__menu-link ${
                selectedItem === "fabrication"
                  ? "header__menu-link--active"
                  : ""
              }`}
              to="/fabrication"
              onClick={() => handleMenuClick("fabrication")}
            >
              Fabrication
            </Link>
          </li>
          <li>
            <Link
              className={`header__menu-link ${
                selectedItem === "laserCutting"
                  ? "header__menu-link--active"
                  : ""
              }`}
              to="/laser-cutting"
              onClick={() => handleMenuClick("laserCutting")}
            >
              Laser Cutting
            </Link>
          </li>
          <li>
            <Link
              className={`header__menu-link ${
                selectedItem === "welding" ? "header__menu-link--active" : ""
              }`}
              to="/welding"
              onClick={() => handleMenuClick("welding")}
            >
              Welding
            </Link>
          </li>
          <li>
            <Link
              className={`header__menu-link ${
                selectedItem === "gallery" ? "header__menu-link--active" : ""
              }`}
              to="/gallery"
              onClick={() => handleMenuClick("gallery")}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={`header__menu-link ${
                selectedItem === "contactUs" ? "header__menu-link--active" : ""
              }`}
              to="/contact"
              onClick={() => handleMenuClick("contactUs")}
            >
              Contact Us
            </Link>
          </li>
          <li className="header__menu-item header__phone">
            <i className="fas fa-phone-alt"></i>
            <span> PHONE: 289.933.7005</span>
          </li>
          {/* ✅ Request Quote Button */}
          <li className="header__menu-item header__quote-btn-container">
            <button className="header__quote-btn">REQUEST A QUOTE</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
