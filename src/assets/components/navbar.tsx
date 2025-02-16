import React, { useState } from "react";
import "../styles/Navbar.css"; // Importing the CSS file

const Navbar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("home");

  // Handle menu item click
  const handleMenuClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <header className="header">
      <div className="header-layout">
        <div className="logo-container">
          <img
            alt="FUSIONCUTTECH"
            className="logo"
            src=""
          />
        </div>
        <nav className="nav-menu">
          <ul className="menu-list">
            <li>
              <a
                className={`menu-item ${selectedItem === "home" ? "selected" : ""}`}
                href="#"
                onClick={() => handleMenuClick("home")}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className={`menu-item ${selectedItem === "companyProfile" ? "selected" : ""}`}
                href="#"
                onClick={() => handleMenuClick("companyProfile")}
              >
                COMPANY PROFILE
              </a>
            </li>
            <li>
              <a
                className={`menu-item ${selectedItem === "metalFabrication" ? "selected" : ""}`}
                href="#"
                onClick={() => handleMenuClick("metalFabrication")}
              >
                METAL FABRICATION
              </a>
            </li>
            <li>
              <a
                className={`menu-item ${selectedItem === "laserCutting" ? "selected" : ""}`}
                href="#"
                onClick={() => handleMenuClick("laserCutting")}
              >
                LASER CUTTING
              </a>
            </li>
            <li>
              <a
                className={`menu-item ${selectedItem === "laserWelding" ? "selected" : ""}`}
                href="#"
                onClick={() => handleMenuClick("laserWelding")}
              >
                LASER WELDING
              </a>
            </li>
            <li>
              <a
                className={`menu-item ${selectedItem === "gallery" ? "selected" : ""}`}
                href="#"
                onClick={() => handleMenuClick("gallery")}
              >
                GALLERY
              </a>
            </li>
            <li>
              <a
                className={`menu-item ${selectedItem === "contactUs" ? "selected" : ""}`}
                href="#"
                onClick={() => handleMenuClick("contactUs")}
              >
                CONTACT US
              </a>
            </li>
            <li>
              <div className="contact-info">
                <i className="fas fa-phone-alt"></i>
                <span>PHONE: 905.671.1677</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
