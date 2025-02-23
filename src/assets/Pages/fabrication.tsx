import React from "react";
import "../styles/fabrication.css"; // Import Fabrication-specific styles
import fabricationBanner from "../images/fabricaionPageBanner.jpg";
import fabricationSection1 from "../images/fabricationSection1.jpg";
import fabricationSection3 from "../images/fabricationSection3.jpg";
import sheetMetal1 from "../images/sheetMetal1.jpg";
import sheetMetal4 from "../images/sheetMetal4N.jpg";
import sheetMetal2 from "../images/sheetMetal2N.jpg";
import sheetMetal3 from "../images/metalSheet3.jpg";
import { FaFileInvoice, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedBanner from "../components/AnimatedBanner";
// Update with actual image path

const Fabrication: React.FC = () => {
  return (
    <div className="fabrication-page">
      {/* ✅ Fabrication Banner (Unchanged) */}
      <div className="fabrication-banner-container">
        <img
          src={fabricationBanner}
          alt="Fabrication Banner"
          className="fabrication-banner-image"
        />
        <div className="fabrication-banner-overlay">
          <div className="fabrication-yellow-line"></div>
          <h1 className="fabrication-banner-text">Fabrication</h1>
        </div>
      </div>

      {/* ✅ Fabrication Content Section (Matches Reference Image) */}
      <div className="fabrication-content">
        {/* ✅ Left Side - Fabrication Info */}
        <div className="fabrication-text">
          <div className="fabrication-title">
            <span className="fabrication-border"></span>
            <i>Fabrication</i>
          </div>
          <p className="fabrication-description">
            Metal fabrication is a core specialty of our company, serving the
            diverse needs of Toronto and the Greater Toronto Area (GTA). As a
            dedicated metal shop, we cater to the region's extensive demand for
            metal structures, both decorative and structural, across various
            sectors including buildings, offices, and other locations.
          </p>
          <p className="fabrication-description">
            Our skilled team specializes in fabricating high-quality products
            using a wide range of materials:
          </p>

          {/* ✅ Material List */}
          <ul className="fabrication-list">
            <li>
              <i className="fas fa-check fabrication-icon"></i> Aluminum
            </li>
            <li>
              <i className="fas fa-check fabrication-icon"></i> Brass
            </li>
            <li>
              <i className="fas fa-check fabrication-icon"></i> Copper
            </li>
            <li>
              <i className="fas fa-check fabrication-icon"></i> Steel
            </li>
            <li>
              <i className="fas fa-check fabrication-icon"></i> Stainless Steel
            </li>
            <li>
              <i className="fas fa-check fabrication-icon"></i> Carbon steel
            </li>
          </ul>

          <div className="fabrication-divider"></div>

          {/* ✅ Contact Information */}
          <div className="precision-actions">
            <div className="precision-action">
              <Link to="/contact" className="precision-action-link">
                <FaPhoneAlt className="precision-icon" />
                CALL US: <strong>289-933-7005</strong>
              </Link>
            </div>
            <div className="precision-action">
              <Link to="/contact" className="precision-action-link">
                <FaFileInvoice className="precision-icon" />
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>
            <div className="precision-action">
              <a
                href="https://www.google.com/maps/dir//21+Kenview+Blvd+%2329+Brampton,+ON+L6T+5G7/@43.73756,-79.64931,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x882b3b808ed14e9f:0xac94b3ffabf91a9a"
                className="precision-action-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="precision-icon" />
                <span>FIND US ON THE MAP</span>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Image (This remains unchanged) */}
        <div className="fabrication-image-container">
          <img
            src={fabricationSection1}
            alt="Metal Fabrication Machine"
            className="fabrication-image"
          />
        </div>
      </div>
      {/* ✅ Sheet Metal Fabrication Section (Integrated Below Fabrication Content) */}
      <div className="sheet-metal-container">
        {/* ✅ Left Side - Images Grid */}
        <div className="sheet-metal-images">
          <img
            src={sheetMetal1}
            alt="Sheet metal parts arranged in a grid"
            className="sheet-metal-img"
          />
          <img
            src={sheetMetal2}
            alt="Stacked sheet metal parts wrapped in plastic"
            className="sheet-metal-img"
          />
          <img
            src={sheetMetal3}
            alt="Cylindrical sheet metal parts"
            className="sheet-metal-img"
          />
          <img
            src={sheetMetal4}
            alt="Various sheet metal parts in different shapes"
            className="sheet-metal-img"
          />
        </div>

        {/* ✅ Right Side - Information Section */}
        {/* ✅ Right Side - Information Section */}
        <div className="sheet-metal-info">
          <h2 className="sheet-metal-title">
            <span className="fabrication-border-metal"></span> Sheet Metal
            Fabrication
          </h2>
          <p>
            Sheet metal fabrication is a cornerstone of modern industry, serving
            a diverse range of sectors with precision-engineered components and
            structures. At FUSIONCUT, we pride ourselves on our versatility and
            expertise in meeting the unique demands of various industries,
            including Manufacturing, Construction, Transportation,
            Telecommunications, Medical and Retail.
          </p>
          <p>Explore Our Capabilities</p>
          <p>
            We invite you to browse our Gallery to witness firsthand the breadth
            and quality of our sheet metal fabrication work. Each project
            represents our dedication to precision, durability, and client
            satisfaction.
          </p>
          <p>
            <a href="/metal-fabrication" className="fc-accent-2-steel">
              At FUSIONCUT Inc.,
            </a>{" "}
            , we don't just fabricate metal; we forge solutions that drive
            industries forward. Let us bring your vision to life with our
            cutting-edge technology and unparalleled expertise.
          </p>
          <a href="/gallery">
            {" "}
            <button className="sheet-metal-btn">View more &gt;</button>
          </a>
        </div>
      </div>

      {/* */}
      <div className="fabrication-content">
        {/* ✅ Left Side - Fabrication Info */}
        <div className="fabrication-text">
          {/* <p className="fabrication-description">
            Our team of skilled technicians, innovative designers, and
            experienced personnel brings a wealth of knowledge to every project,
            regardless of its complexity or scale. We've successfully executed
            countless metal fabrication projects, consistently delivering
            solutions that not only meet but exceed client expectations.
          </p>
          <p className="fabrication-description">
            <b>Tailored Solutions for Every Client</b>
          </p>

          <p className="fabrication-description">
            At FUSIONCUT, we recognize that each client comes with distinct
            requirements, production volumes, and deadlines. Our
            state-of-the-art facilities and advanced capabilities enable us to
            handle:
          </p> */}
          <p className="fabrication-description">
            <b>Our Commitment to Excellence</b>
          </p>
          <p className="fabrication-description">
            Our portfolio shows a wide array of structures, products, and sheet
            metal fabrication projects, demonstrating our ability to bring
            diverse visions to life. From sleek electronic enclosures to robust
            industrial equipment, our work speaks to our commitment to quality
            and innovation.
          </p>
          <p className="fabrication-description">
            Our state-of-the-art facility is equipped to handle projects of
            various sizes and complexities. We can work with sheet sizes up to
            120" x 60" in materials ranging from thin gauges to thicker plates.
          </p>
          <p className="fabrication-description">
            With over two decades of experience in metal fabrication, we pride
            ourselves on delivering projects on time and within budget. Our
            commitment to quality and customer satisfaction has made us a
            trusted partner for industries such as power generation, oil and
            gas, mining, transportation, construction, automotive, and many more
          </p>
          <p className="fabrication-description">
            Whether you need custom part, decorative designs, structural
            components, or specialized industrial parts, our team is ready to
            bring your vision to life with precision and expertise.
          </p>
          <div className="fabrication-divider"></div>

          {/* ✅ Contact Information */}
          <div className="precision-actions">
            <div className="precision-action">
              <Link to="/contact" className="precision-action-link">
                <FaPhoneAlt className="precision-icon" />
                CALL US: <strong>289-933-7005</strong>
              </Link>
            </div>
            <div className="precision-action">
              <Link to="/contact" className="precision-action-link">
                <FaFileInvoice className="precision-icon" />
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>
            <div className="precision-action">
              <a
                href="https://www.google.com/maps/dir//21+Kenview+Blvd+%2329+Brampton,+ON+L6T+5G7/@43.73756,-79.64931,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x882b3b808ed14e9f:0xac94b3ffabf91a9a"
                className="precision-action-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="precision-icon" />
                <span>FIND US ON THE MAP</span>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Image (This remains unchanged) */}
        <div className="fabrication-image-container">
          <img
            src={fabricationSection3}
            alt="Metal Fabrication Machine"
            className="fabrication-image"
          />
        </div>
      </div>
      <AnimatedBanner />
    </div>
  );
};

export default Fabrication;
