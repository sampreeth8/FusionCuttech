import React from "react";
import "../styles/Footer.css"; // Import CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Main Footer Section */}
      <div className="footer-container">
        {/* ✅ Column 1 - Company Info */}
        <div className="footer-column">
          <h3>Company</h3>
          <div className="footer-underline"></div>
          <p>
            FusionCut Technologies is a trusted name in metal fabrication,
            providing top-quality services to clients in various industries.
          </p>
        </div>

        {/* ✅ Column 2 - Sitemap (Now Split into Two Rows - 6/6 Layout) */}
        <div className="footer-column">
          <h3>SiteMap</h3>
          <div className="footer-underline"></div>
          <div className="sitemap-grid">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Company Profile</a>
              </li>
              <li>
                <a href="#">Metal Fabrication</a>
              </li>
              <li>
                <a href="#">Laser Cutting</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Request a Quote</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ Column 3 - Contact Info */}
        <div className="footer-column">
          <h3>Contact</h3>
          <div className="footer-underline"></div>
          <p>📍 21 Kenview Blvd Unit #29, Brampton, ON L6T 5G7</p>
          <p>📧 info@fusioncuttech.com</p>
          <p>📞 Tel: 289.933.7005</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2020 FusionCut Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
