import React from "react";
import "../styles/cutting.css"; // Import Cutting-specific styles
import cuttingBanner from "../images/cuttingpgBanner.jpeg"; // Keep this unchanged
import cuttingSection1 from "../images/cuttingpgSection1v2.jpg";
import cuttingSection3 from "../images/cuttingSection3.jpg";
import cuttingSection24 from "../images/cuttingSection24.jpg";
import cuttingSection21 from "../images/cuttingSection21.jpg";
import cuttingSection22 from "../images/cuttingSection22.jpg";
import cuttingSection23 from "../images/cuttingSection23.jpg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedBanner from "../components/AnimatedBanner";
// Update with actual image path

const Cutting: React.FC = () => {
  return (
    <div className="cutting-page">
      {/* ✅ Cutting Banner (Unchanged) */}
      <div className="cutting-banner-container">
        <img
          src={cuttingBanner}
          alt="Cutting Banner"
          className="cutting-banner-image"
        />
        <div className="cutting-banner-overlay">
          <div className="cutting-yellow-line"></div>
          <h1 className="cutting-banner-text">Cutting</h1>
        </div>
      </div>

      {/* ✅ Cutting Content Section (Matches Reference Image) */}
      <div className="cutting-content">
        {/* ✅ Left Side - Cutting Info */}
        <div className="cutting-text">
          <div className="cutting-title">
            <span className="cutting-border"></span>
            <i>Precision Laser Cutting for Diverse Industries</i>
          </div>
          <p className="cutting-description">
            <b>At FUSIONCUT</b>, we harness the power of advanced laser cutting
            technology to serve a wide spectrum of industries with unparalleled
            precision and efficiency. Our state-of-the-art Mitsubishi laser
            cutting machine positions us at the forefront of metalworking in
            Toronto's dynamic industrial landscape.
          </p>
          <p className="cutting-description">Industries We Serve:</p>

          {/* ✅ Material List */}
          <ul className="cutting-list">
            <li>
              <i className="fas fa-check cutting-icon"></i> Construction:
              Precision-cut metal components for building structures and systems
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> Manufacturing:
              High-volume production of metal parts for various products
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> Medical Equipment:
              Intricate components for surgical instruments and orthopedic
              devices
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> Entertainment:
              Custom-designed metal structures for sets, installations, and
              exhibits
            </li>
          </ul>
          <p className="cutting-description">
            Our laser cutting capabilities extend to various metals, including
            mild steel up to 1" thick, stainless steel up to ¾" thick, and
            aluminum up to ½" thick6. This versatility, combined with our
            decades of experience, allows us to meet the diverse needs of
            Toronto's fast-paced industrial environment with speed and
            precision.
          </p>
          <p className="cutting-description">
            At FUSIONCUT, we're not just cutting metal,we're shaping the future
            of manufacturing with sustainable, efficient, and precise laser
            cutting solutions.
          </p>

          <div className="cutting-divider"></div>

          {/* ✅ Contact Information */}
        </div>

        {/* ✅ Right Side - Image (This remains unchanged) */}
        <div className="cutting-image-container">
          <img
            src={cuttingSection1}
            alt="Metal Cutting Machine"
            className="cutting-image"
          />
        </div>
      </div>
      {/* ✅ Sheet Metal Cutting Section (Integrated Below Cutting Content) */}
      <div className="sheet-metal-container-cutting">
        {/* ✅ Left Side - Images Grid */}
        <div className="sheet-metal-images-cutting">
          <img
            src={cuttingSection21}
            alt="Sheet metal parts arranged in a grid"
            className="sheet-metal-img-cutting"
          />
          <img
            src={cuttingSection22}
            alt="Stacked sheet metal parts wrapped in plastic"
            className="sheet-metal-img-cutting"
          />
          <img
            src={cuttingSection23}
            alt="Cylindrical sheet metal parts"
            className="sheet-metal-img-cutting"
          />
          <img
            src={cuttingSection24}
            alt="Various sheet metal parts in different shapes"
            className="sheet-metal-img-cutting"
          />
        </div>

        {/* ✅ Right Side - Information Section */}
        <div className="sheet-metal-info-cutting">
          <h2 className="sheet-metal-title-cutting">
            <span className="cutting-border-metal"></span> Laser Cutting with
            Decades of Experience
          </h2>
          <p>
            For years, FUSIONCUT has cultivated a strong reputation for
            delivering accurate and precise laser cutting services throughout
            Toronto and Ontario. Our commitment to excellence has enabled us to
            tackle numerous complex projects, refining our skills and
            solidifying our position as a leader in the industry.
          </p>
          <b>
            <p>Precision and Quality</p>
          </b>
          <p>
            Our metal laser cutting capabilities allow us to create intricate
            shapes and high-quality products that meet the stringent demands of
            diverse industries. We understand the importance of precision in
            metal fabrication, and we continuously invest in advanced technology
            to ensure unparalleled accuracy.
          </p>
          <b>
            <p>Browse Our Work</p>
          </b>
          <p>
            To witness firsthand the quality and precision of our metal laser
            cutting services, we invite you to explore our Gallery. There,
            you'll find examples of past projects that showcase our expertise
            and commitment to customer satisfaction. At FUSIONCUT, we're not
            just cutting metal; we're shaping the future of manufacturing with
            reliable, accurate, and efficient laser cutting solutions.
          </p>
          <a href="/gallery">
            <button className="sheet-metal-btn-cutting">View more &gt;</button>
          </a>
        </div>
      </div>

      {/* Additional Cutting Content Section */}
      <div className="cutting-content">
        {/* ✅ Left Side - Cutting Info */}
        <div className="cutting-text">
          <p className="cutting-description">
            With decades of experience, FUSIONCUT stands at the forefront of the
            laser cutting industry. Our commitment to innovation has driven us
            to invest in state-of-the-art technology, ensuring top-tier services
            and unparalleled results for our clients.
          </p>

          <p className="cutting-description">
            Our Metal Laser Cutting Services Deliver:
          </p>

          <ul className="cutting-list">
            <li>
              <i className="fas fa-check cutting-icon"></i> Accurate Precision:
              Intricate designs executed with meticulous accuracy
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> Extensive Production
              Runs: Efficiently handle projects of any scale
            </li>
            <li>
              <i className="fas fa-check cutting-icon"></i> On-Time Project
              Execution : Streamlined processes for on-time delivery
            </li>
          </ul>
          <b>
            <p className="cutting-description">Automation for Excellence</p>
          </b>
          <p className="cutting-description">
            Our process is meticulously automated to guarantee optimal
            efficiency and precision. From initial design to final product, we
            leverage cutting-edge technology to ensure flawless execution.
          </p>
          <b>
            <p className="cutting-description">Partner with FUSIONCUT</p>
          </b>
          <p className="cutting-description">
            Ready to experience the FUSIONCUT difference? Contact us today to
            discuss your project and discover how our expertise and advanced
            laser cutting capabilities can bring your vision to life. We're not
            just cutting metal; we're shaping the future of manufacturing. Below
          </p>
          <div className="cutting-divider"></div>

          {/* ✅ Contact Information */}
          <div className="precision-actions-cutting">
            <div className="precision-action-cutting">
              <Link to="/contact" className="precision-action-link-cutting">
                <FaPhoneAlt className="precision-icon-cutting" />
                CALL US: <strong>289-933-7005</strong>
              </Link>
            </div>
            <div className="precision-action-cutting">
              <a
                href="https://www.google.com/maps/dir//21+Kenview+Blvd+%2329+Brampton,+ON+L6T+5G7/@43.73756,-79.64931,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x882b3b808ed14e9f:0xac94b3ffabf91a9a"
                className="precision-action-link-cutting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="precision-icon-cutting" />
                <span>FIND US ON THE MAP</span>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Image (This remains unchanged) */}
        <div className="cutting-image-container">
          <img
            src={cuttingSection3}
            alt="Metal Cutting Machine"
            className="cutting-image"
          />
        </div>
      </div>
      <AnimatedBanner />
    </div>
  );
};

export default Cutting;
