import React, { useState } from "react";
import "../styles/Navbar.css"; // Importing the CSS file
import logo from "../images/companylogo.jpg";
// Import the new text logo image

const Navbar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("home");

  // Handle menu item click
  const handleMenuClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <header className="header">
      <div className="header__layout">
        {/* ✅ Logo Section (Now Includes Image Logo + Text Logo) */}
        <a href="/" className="header__logo">
          <img alt="FUSIONCUTTECH" className="logo" src={logo} />
        </a>

        {/* ✅ Navigation Menu */}
        <ul className="header__menu">
          <li>
            <a
              className={`header__menu-link ${
                selectedItem === "home" ? "header__menu-link--active" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`header__menu-link ${
                selectedItem === "companyProfile"
                  ? "header__menu-link--active"
                  : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("companyProfile")}
            >
              Company Profile
            </a>
          </li>
          <li>
            <a
              className={`header__menu-link ${
                selectedItem === "metalFabrication"
                  ? "header__menu-link--active"
                  : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("metalFabrication")}
            >
              Metal Fabrication
            </a>
          </li>
          <li>
            <a
              className={`header__menu-link ${
                selectedItem === "laserCutting"
                  ? "header__menu-link--active"
                  : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("laserCutting")}
            >
              Laser Cutting
            </a>
          </li>
          <li>
            <a
              className={`header__menu-link ${
                selectedItem === "welding" ? "header__menu-link--active" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("welding")}
            >
              Welding
            </a>
          </li>
          <li>
            <a
              className={`header__menu-link ${
                selectedItem === "gallery" ? "header__menu-link--active" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("gallery")}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className={`header__menu-link ${
                selectedItem === "contactUs" ? "header__menu-link--active" : ""
              }`}
              href="#"
              onClick={() => handleMenuClick("contactUs")}
            >
              Contact Us
            </a>
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
